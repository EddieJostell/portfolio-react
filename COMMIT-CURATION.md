# Commit Curation

The portfolio's Selected Commits section is maintained from local Git history. The selector uses Node and Git already installed for the repository; it does not add dependencies or contact a remote.

## Prerequisites

- Node.js 22 or a compatible current Node release
- Git
- A checkout of this repository
- Optional: run `git fetch origin` when local remote-tracking history needs refreshing

## Discover commits

Use `--list` for non-mutating discovery:

```text
npm run select-commits -- React19 --list
```

The complete commit message is searched case-insensitively, including the subject and body. Search covers commits reachable from the selected ref and does not search code diffs. The script never fetches automatically. Squashed feature branches appear as their squash commit; pre-squash commits absent from the selected ref cannot be recovered.

Additional examples:

```text
npm run select-commits -- Vite --type feat,refactor
npm run select-commits -- --type fix --scope portfolio --since 2025-01-01
npm run select-commits -- --ref origin/main --until 2026-01-01
npm run select-commits
```

Without arguments, the script interactively asks for the search phrase, type, scope, dates, and ref. The default ref is detected from `origin/HEAD`, with the current branch as fallback. `--type` filters Conventional Commit types, and `--scope` matches an exact Conventional Commit scope case-insensitively. `--since` and `--until` are passed directly to Git.

## Select and publish

Without `--list`, matching commits are numbered for selection. Enter unique comma-separated indexes, then provide an optional public note for each selected commit. The complete proposed curated list is shown before writing, and only an exact `y` confirmation writes it.

The generated source of truth is `src/data/featuredCommits.json`. Selection is a non-destructive SHA upsert: existing entries retain their order, selected existing entries update in place, empty notes preserve an existing note, and new entries append in selection order. The file is written through a sibling temporary file and rename.

To recover from an unwanted confirmed change, review the diff and use Git to restore or edit the JSON, for example:

```text
git diff -- src/data/featuredCommits.json
git restore src/data/featuredCommits.json
```
