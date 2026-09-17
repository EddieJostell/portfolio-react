import { execFile } from 'node:child_process';
import { readFile, rename, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createInterface } from 'node:readline/promises';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.resolve(scriptDirectory, '../src/data/featuredCommits.json');

const helpText = `Usage: npm run select-commits -- [search] [options]

Search commit history and curate the public selected commits list.

Options:
  --type <types>    Comma-separated Conventional Commit types
  --scope <scope>   Exact Conventional Commit scope, case-insensitive
  --since <date>    Pass a date filter to git log
  --until <date>    Pass a date filter to git log
  --ref <ref>       Git ref to search (default: origin/HEAD branch)
  --list            Print matches without prompting or writing
  --help            Show this help
`;

const runGit = (args) =>
  new Promise((resolve, reject) => {
    execFile('git', args, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(stderr.trim() || error.message));
        return;
      }
      resolve(stdout);
    });
  });

export function parseArguments(argv) {
  const options = {
    search: undefined,
    types: undefined,
    scope: undefined,
    since: undefined,
    until: undefined,
    ref: undefined,
    list: false,
    help: false,
  };
  const positional = [];
  const valueOptions = new Set(['--type', '--scope', '--since', '--until', '--ref']);

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--help' || argument === '-h') {
      options.help = true;
    } else if (argument === '--list') {
      options.list = true;
    } else if (valueOptions.has(argument)) {
      const value = argv[index + 1];
      if (!value || value.startsWith('--')) {
        throw new Error(`${argument} requires a value`);
      }
      options[argument.slice(2)] = value;
      index += 1;
    } else if (argument.startsWith('--')) {
      throw new Error(`Unknown option: ${argument}`);
    } else {
      positional.push(argument);
    }
  }

  if (positional.length > 1) {
    throw new Error('Only one positional search phrase is supported');
  }
  options.search = positional[0];

  if (options.type !== undefined) {
    const types = options.type.split(',').map((type) => type.trim().toLowerCase());
    if (types.some((type) => !type)) {
      throw new Error('--type must contain at least one non-empty type');
    }
    options.types = [...new Set(types)];
    delete options.type;
  }

  for (const option of ['since', 'until']) {
    if (options[option] !== undefined && Number.isNaN(Date.parse(options[option]))) {
      throw new Error(`Invalid date for --${option}: ${options[option]}`);
    }
  }

  return options;
}

export function parseGitLogOutput(output) {
  const fields = output.split('\0');
  if (fields.at(-1) === '' || fields.at(-1) === '\n') fields.pop();
  if (fields.length % 5 !== 0) {
    throw new Error('Git log output could not be parsed as NUL-delimited records');
  }

  const commits = [];
  for (let index = 0; index < fields.length; index += 5) {
    commits.push({
      sha: fields[index],
      subject: fields[index + 1],
      message: fields[index + 2],
      author: fields[index + 3],
      date: fields[index + 4],
    });
  }
  return commits;
}

function conventionalCommit(subject) {
  const match = subject.match(/^([A-Za-z0-9-]+)(?:\(([^()\r\n]+)\))?(!)?:\s+(.+)$/);
  if (!match) return undefined;
  return { type: match[1].toLowerCase(), scope: match[2]?.toLowerCase() };
}

export function filterCommits(commits, options) {
  const search = options.search?.toLowerCase();
  return commits.filter((commit) => {
    if (search && !commit.message.toLowerCase().includes(search)) return false;
    const conventional = conventionalCommit(commit.subject);
    if (options.types && (!conventional || !options.types.includes(conventional.type))) return false;
    if (options.scope && (!conventional || conventional.scope !== options.scope.toLowerCase())) return false;
    return true;
  });
}

export function validateSelectionIndexes(input, matchCount) {
  const values = input.split(',').map((value) => value.trim());
  if (!values.length || values.some((value) => !/^\d+$/.test(value))) {
    throw new Error('Selection must be comma-separated indexes');
  }
  const indexes = values.map((value) => Number(value) - 1);
  if (indexes.some((index) => index < 0 || index >= matchCount)) {
    throw new Error(`Selection indexes must be between 1 and ${matchCount}`);
  }
  return [...new Set(indexes)];
}

export function upsertFeaturedCommits(existing, selected) {
  const selectedBySha = new Map(selected.map((commit) => [commit.sha, commit]));
  const result = existing.map((entry) => {
    const selectedCommit = selectedBySha.get(entry.sha);
    if (!selectedCommit) return entry;
    selectedBySha.delete(entry.sha);
    return Object.hasOwn(selectedCommit, 'note')
      ? { sha: entry.sha, note: selectedCommit.note }
      : entry;
  });

  for (const commit of selected) {
    if (!selectedBySha.has(commit.sha)) continue;
    selectedBySha.delete(commit.sha);
    result.push(commit.note ? { sha: commit.sha, note: commit.note } : { sha: commit.sha });
  }
  return result;
}

export function serializeFeaturedCommits(entries) {
  return `${JSON.stringify(entries, null, 2)}\n`;
}

async function defaultRef() {
  try {
    const remoteHead = (await runGit(['symbolic-ref', 'refs/remotes/origin/HEAD'])).trim();
    return remoteHead.replace(/^refs\/remotes\/origin\//, 'origin/');
  } catch {
    return (await runGit(['branch', '--show-current'])).trim();
  }
}

async function resolveRef(ref) {
  try {
    await runGit(['rev-parse', '--verify', '--end-of-options', `${ref}^{commit}`]);
  } catch {
    throw new Error(`Git ref cannot be resolved: ${ref}`);
  }
}

async function findCommits(options) {
  const ref = options.ref ?? (await defaultRef());
  await resolveRef(ref);
  const args = ['log'];
  if (options.since) args.push(`--since=${options.since}`);
  if (options.until) args.push(`--until=${options.until}`);
  args.push('-z', '--format=%H%x00%s%x00%B%x00%an%x00%aI', ref);
  return filterCommits(parseGitLogOutput(await runGit(args)), options);
}

function printMatches(matches) {
  for (const [index, commit] of matches.entries()) {
    console.log(`${index + 1}. ${commit.sha.slice(0, 7)} ${commit.date} ${commit.subject}`);
  }
}

async function promptFilters() {
  const input = createInterface({ input: process.stdin, output: process.stdout });
  try {
    const search = await input.question('Search phrase (optional): ');
    const type = await input.question('Types, comma-separated (optional): ');
    const scope = await input.question('Scope (optional): ');
    const since = await input.question('Since date (optional): ');
    const until = await input.question('Until date (optional): ');
    const ref = await input.question('Ref (optional): ');
    return parseArguments([
      ...(search ? [search] : []),
      ...(type ? ['--type', type] : []),
      ...(scope ? ['--scope', scope] : []),
      ...(since ? ['--since', since] : []),
      ...(until ? ['--until', until] : []),
      ...(ref ? ['--ref', ref] : []),
    ]);
  } finally {
    input.close();
  }
}

async function runInteractive(options, matches) {
  printMatches(matches);
  if (!matches.length) return;

  const input = createInterface({ input: process.stdin, output: process.stdout });
  try {
    const selection = validateSelectionIndexes(
      await input.question('Select commit indexes (comma-separated): '),
      matches.length,
    );
    const selected = [];
    for (const index of selection) {
      const commit = matches[index];
      const note = await input.question(`Public note for ${commit.sha.slice(0, 7)} (optional): `);
      selected.push(note ? { sha: commit.sha, note } : { sha: commit.sha });
    }

    const existing = JSON.parse(await readFile(dataPath, 'utf8'));
    const proposed = upsertFeaturedCommits(existing, selected);
    console.log('\nProposed curated commits:');
    proposed.forEach((entry, index) => console.log(`${index + 1}. ${entry.sha} ${entry.note ?? ''}`.trimEnd()));
    const confirmation = await input.question('Write this list? [y/N] ');
    if (confirmation.trim().toLowerCase() !== 'y') {
      console.log('No changes written.');
      return;
    }

    const temporaryPath = `${dataPath}.${process.pid}.tmp`;
    try {
      await writeFile(temporaryPath, serializeFeaturedCommits(proposed), 'utf8');
      await rename(temporaryPath, dataPath);
    } catch (error) {
      await unlink(temporaryPath).catch(() => {});
      throw error;
    }
    console.log(`Updated ${dataPath}`);
  } finally {
    input.close();
  }
}

export async function main(argv = process.argv.slice(2)) {
  const hasArguments = argv.length > 0;
  let options = parseArguments(argv);
  if (options.help) {
    console.log(helpText);
    return;
  }
  if (!hasArguments) options = await promptFilters();
  const matches = await findCommits(options);
  if (options.list) {
    printMatches(matches);
    return;
  }
  await runInteractive(options, matches);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
  });
}
