---
name: update-dependencies
description: 'Check for newer versions of npm packages listed in package.json and update them. USE FOR: auditing outdated dependencies, bumping versions (patch/minor/major), refreshing peerDependencies/devDependencies, preparing a dependency-update PR. Handles semver ranges, highlights breaking major bumps, and runs the package manager to refresh the lockfile. DO NOT USE FOR: adding brand new packages, removing packages, or fixing security advisories (use `npm audit fix` directly).'
argument-hint: 'e.g. "check all", "update devDependencies only", "bump @fortawesome/react-fontawesome"'
---

# Update package.json Dependencies

## When to Use

- User asks to "check for new versions", "update packages", "bump dependencies", or "upgrade package.json".
- Preparing a routine dependency refresh PR.
- Verifying a specific package is on its latest allowed version.

## Scope Rules

- Only touch `package.json` files inside the workspace. Do **not** edit `node_modules` or lockfiles by hand.
- Respect existing version range prefixes (`^`, `~`, exact). Preserve the prefix unless the user requests a different strategy.
- Treat `peerDependencies` conservatively: never widen or bump without confirming with the user, because they affect consumers of this package.

## Procedure

### 1. Inventory

1. Read every `package.json` in the workspace (root + any nested ones).
2. Record the current ranges for `dependencies`, `devDependencies`, `peerDependencies`, `optionalDependencies`.

### 2. Query Latest Versions

Prefer the package manager already used by the repo (check for `package-lock.json`, `pnpm-lock.yaml`, or `yarn.lock`).

Run a read-only check:

- npm: `npm outdated --json` (non-zero exit is expected when updates exist — parse stdout anyway)
- pnpm: `pnpm outdated --format json`
- yarn: `yarn outdated --json`

If no lockfile exists or the command fails, fall back to querying the registry per package: `npm view <pkg> version` and `npm view <pkg> versions --json` for the full list.

### 3. Classify Each Update

For every outdated package, classify the jump from current resolved version to latest:

- **patch** (`1.2.3` → `1.2.4`): safe, auto-apply.
- **minor** (`1.2.3` → `1.3.0`): usually safe under `^`, auto-apply.
- **major** (`1.2.3` → `2.0.0`): breaking. List separately and require user confirmation before applying. Link to the package's changelog or release notes when reporting.

Call out packages whose current range already allows the latest (no `package.json` edit needed, only a lockfile refresh) vs. those that need the range rewritten.

### 4. Present a Plan

Before editing, show the user a concise table:

| Package    | Current | Latest | Type  | Action                  |
| ---------- | ------- | ------ | ----- | ----------------------- |
| eslint     | ^9.25.0 | 9.30.2 | minor | bump range to `^9.30.2` |
| typescript | ^4.9.5  | 5.6.3  | major | requires confirmation   |

Group by `dependencies` / `devDependencies` / `peerDependencies`. Flag coupled packages that must move together:

- `react` + `react-dom` (runtime pair — must bump together)
- `@types/react` + `@types/react-dom` (major-aligned with the `react` / `react-dom` runtime)
- `@emotion/react` + `@emotion/styled`
- `eslint-plugin-*` with `eslint`

Major bumps are **always** listed in a separate "requires confirmation" section, even on "update everything" requests. Include a link to the changelog or release notes when possible.

### 5. Apply Updates

1. **If the plan contains any major bumps**, ask the user explicitly: _"Vill du inkludera följande major-uppdateringar? [list]"_. Only apply the ones they confirm. Patch/minor bumps may be applied automatically when the user asked to "update all".
2. Edit `package.json` and bump the version strings. Preserve the range prefix.
3. For nested `package.json` files, apply the same version to the same package name to keep versions aligned.
4. Run the install command to refresh the lockfile:
   - `npm install`
   - `pnpm install`
   - `yarn install`
5. Do **not** pass `--force` or `--legacy-peer-deps` unless the user explicitly asks.

### 6. Verify

Run these in order, stopping on first failure and reporting to the user:

1. Type check: `tsc --noEmit` (or the repo's `build` script if it implies a type check).
2. Lint: `npm run lint` if defined.
3. Build: `npm run build:prod` (or equivalent) if defined.
4. Tests: `npm test` if defined.

If a check fails after an update, report which package bump likely caused it and offer to roll back that single package.

### 7. Summarize

Report back:

- Packages updated (with old → new version).
- Packages intentionally skipped and why (major bump declined, peer dep, etc.).
- Verification results.
- Suggested follow-ups (e.g. "Read the migration guide for any major bumps before merging").

## Edge Cases

- **`react` / `react-dom`**: bump together. They must be on the same major+minor to function correctly. If only one has a new version available, wait until both align — or flag the mismatch to the user.
- **`@types/react` / `@types/react-dom`**: keep the major aligned with the `react` / `react-dom` runtime. When the runtime bumps to a new major, bump the types to the same major in the same step.
- **`@types/*` packages (general)**: keep the major aligned with the runtime package (e.g. `@types/node` with the Node version in use).
- **Monorepo / workspaces**: if the repo declares `workspaces` in root `package.json`, run the install command at the root only.
- **Pinned exact versions** (no `^` or `~`): the user has pinned on purpose. Do not change the prefix — only bump the number, and flag it in the plan.
- **Deprecated packages**: `npm view <pkg> deprecated` — warn the user and suggest a successor instead of bumping.
- **Security-only updates**: defer to `npm audit fix`; this skill is not the right tool.
- **TypeScript major bump → adjust `tsconfig.json`**: after applying a `typescript` major bump, re-run `tsc --noEmit` and parse output for `TS5xxx` deprecation errors (e.g. `target=ES5`, `moduleResolution=node10`, `importsNotUsedAsValues`). For each deprecation:
  1. Read the affected `tsconfig.json` (and any `tsconfig.*.json` referenced via `extends`/`references`).
  2. Present the user with **three options** before editing config:
     - **(a) Silence** — add `"ignoreDeprecations": "<previous-major>"` to `compilerOptions` (e.g. `"6.0"` when bumping to TS 7). Minimal change, defers the migration.
     - **(b) Modernize** — replace the deprecated option with the recommended current value (e.g. `"target": "ES2020"` instead of `"ES5"`; `"moduleResolution": "bundler"` for Vite/esbuild projects, otherwise `"node16"` or `"nodenext"`).
     - **(c) Roll back** the TypeScript bump (revert `package.json` + reinstall) if neither (a) nor (b) is acceptable right now.
  3. Apply the user's choice. If (b), warn that target/module changes can affect emitted JS and may surface new type errors elsewhere — re-run the full verify chain afterwards.
  4. Other TS-major adjustments to watch for: removed flags (e.g. `suppressImplicitAnyIndexErrors`), stricter defaults (e.g. `useUnknownInCatchVariables`), new lib defaults. Report any `tsc` errors that look like API/syntax changes rather than user code issues — those are likely from the TS bump and should be reported back to the user.

## Anti-Patterns

- Editing the lockfile by hand.
- Using `npm-check-updates -u` blindly without classifying major bumps.
- Bumping a `peerDependency` without understanding who consumes the package.
- Skipping verification because "it's just a patch bump".
- Applying major bumps without explicit user confirmation.
