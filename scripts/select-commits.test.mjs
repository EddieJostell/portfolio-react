import assert from 'node:assert/strict';
import test from 'node:test';
import {
  filterCommits,
  parseArguments,
  parseGitLogOutput,
  serializeFeaturedCommits,
  upsertFeaturedCommits,
  validateSelectionIndexes,
} from './select-commits.mjs';

const commits = [
  {
    sha: 'aaa1111',
    subject: 'feat(portfolio): Add commit curation',
    message: 'feat(portfolio): Add commit curation\n\nSearch React19 in the migration notes.',
    author: 'Ada Example',
    date: '2026-09-17T10:00:00+00:00',
  },
  {
    sha: 'bbb2222',
    subject: 'refactor: simplify Vite config',
    message: 'refactor: simplify Vite config',
    author: 'Ada Example',
    date: '2026-09-16T10:00:00+00:00',
  },
  {
    sha: 'ccc3333',
    subject: 'Upgraded to React19',
    message: 'Upgraded to React19',
    author: 'Ada Example',
    date: '2026-09-15T10:00:00+00:00',
  },
];

test('parses NUL-delimited Git log records', () => {
  const first = ['a'.repeat(40), 'subject', 'body\nwith text', 'author', '2026-01-01T00:00:00+00:00'];
  const second = ['b'.repeat(40), 'second subject', 'second body', 'author', '2025-01-01T00:00:00+00:00'];
  const output = [...first, ...second].join('\0');
  const parsed = parseGitLogOutput(output);

  assert.equal(parsed.length, 2);
  assert.equal(parsed[0].sha, 'a'.repeat(40));
  assert.equal(parsed[1].sha, 'b'.repeat(40));
  assert.equal(parsed[1].sha.startsWith('\n'), false);
  assert.deepEqual(parsed[1], {
    sha: 'b'.repeat(40),
    subject: 'second subject',
    message: 'second body',
    author: 'author',
    date: '2025-01-01T00:00:00+00:00',
  });
});

test('positional search matches subject and body case-insensitively', () => {
  assert.deepEqual(filterCommits(commits, { search: 'REACT19' }).map(({ sha }) => sha), ['aaa1111', 'ccc3333']);
});

test('type filter includes Conventional Commit types and excludes non-Conventional subjects', () => {
  assert.deepEqual(filterCommits(commits, { types: ['feat', 'refactor'] }).map(({ sha }) => sha), ['aaa1111', 'bbb2222']);
});

test('scope filter matches the exact scope case-insensitively', () => {
  assert.deepEqual(filterCommits(commits, { scope: 'PORTFOLIO' }).map(({ sha }) => sha), ['aaa1111']);
});

test('parses supported options and rejects malformed options', () => {
  assert.deepEqual(parseArguments(['Vite', '--type', 'feat,refactor', '--scope', 'portfolio', '--since', '2025-01-01', '--ref', 'origin/main']), {
    search: 'Vite',
    types: ['feat', 'refactor'],
    scope: 'portfolio',
    since: '2025-01-01',
    until: undefined,
    ref: 'origin/main',
    list: false,
    help: false,
  });
  assert.throws(() => parseArguments(['--unknown']), /Unknown option/);
  assert.throws(() => parseArguments(['--type', ',']), /non-empty type/);
  assert.throws(() => parseArguments(['--since', 'not-a-date']), /Invalid date/);
});

test('selection indexes are unique and invalid indexes fail before writing', () => {
  assert.deepEqual(validateSelectionIndexes('1, 1,2', 2), [0, 1]);
  assert.throws(() => validateSelectionIndexes('0', 2), /between 1 and 2/);
  assert.throws(() => validateSelectionIndexes('1,three', 2), /comma-separated indexes/);
});

test('SHA upsert preserves order, updates notes, and appends selected commits', () => {
  const existing = [{ sha: 'one', note: 'old' }, { sha: 'two', note: 'keep' }];
  const selected = [{ sha: 'two', note: 'updated' }, { sha: 'three', note: 'new' }];
  assert.deepEqual(upsertFeaturedCommits(existing, selected), [
    { sha: 'one', note: 'old' },
    { sha: 'two', note: 'updated' },
    { sha: 'three', note: 'new' },
  ]);
  assert.deepEqual(upsertFeaturedCommits(existing, [{ sha: 'two' }])[1], { sha: 'two', note: 'keep' });
});

test('serialization escapes apostrophes, quotes, backslashes, and newlines', () => {
  const serialized = serializeFeaturedCommits([{ sha: 'abc', note: "It's a \\\"test\\\"\\nline" }]);
  assert.equal(JSON.parse(serialized)[0].note, "It's a \\\"test\\\"\\nline");
});
