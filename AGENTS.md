# AGENTS.md

## Project Overview

4chan XT is a browser userscript/extension that adds features to anonymous imageboards (primarily 4chan). It is a TypeScript/JavaScript migration of the original CoffeeScript-based [4chan X](https://github.com/ccd0/4chan-x). The project builds to both a userscript (for Violentmonkey/Tampermonkey) and a Chromium extension (manifest v2 and v3).

## Build System

### Prerequisites

- **Bun** — JavaScript runtime and package manager (managed via [mise](https://mise.jdx.dev/), see `.mise.toml`)
- Install dependencies: `bun install`

### Build Commands

| Command | Description |
|---|---|
| `bun run build` | Build both userscript and crx (default) |
| `bun run build:userscript` | Build userscript only |
| `bun run build:crx` | Build Chrome extension only |
| `bun run build:min` | Build minified userscript |
| `bun run build:all` | Build all variants (minified userscript, userscript, crx) |
| `bun run version` | Update version.json with dev version (git commit SHA) |
| `bun run version:release` | Update version.json with release CalVer version (auto-increments sub-version) |
| `bun run version:release -- --release 2026.3.29.2` | Update version.json with a specific release version |

Build output goes to the `builds/` directory. The build entry point is `tools/rollup.js`, which uses Rollup with TypeScript, custom plugins for inlining files, and platform-specific code stripping.

### Build Flags

The build script (`tools/rollup.js`) accepts flags via `process.argv`:

- `-min` — Minified output
- `-platform=userscript` or `-platform=crx` — Build for one platform only, strips code for the other
- `-no-format` — Skip formatting passes (faster but larger output)
- `-test` — Include test code in the build (regions marked `// #region tests_enabled`)

## Project Structure

```
src/
├── main/Main.js        # Application entry point
├── Archive/            # Fetching deleted posts from external archives
├── classes/            # Core data classes (Post, Thread, Board, etc.)
├── config/             # User-facing configuration and settings definitions
├── css/                # Stylesheets (inlined at build time)
├── Filtering/          # Post filtering and hiding logic
├── General/            # Core UI (Header, Settings, Index, BoardConfig)
├── globals/            # Global state (globals.ts) and JSX runtime (jsx.ts)
├── Icons/              # SVG icon definitions
├── Images/             # Image viewing, gallery, hover features
├── Linkification/      # URL detection and embedding (YouTube, etc.)
├── Menu/               # Context menu system
├── meta/               # Build metadata, manifest generation, userscript headers
├── Miscellaneous/      # Miscellaneous features (keybinds, banners, etc.)
├── Monitoring/         # Thread watching, updating, notifications
├── PageContext/        # Page-context script injection
├── platform/           # Platform abstraction ($.ts for DOM/GM APIs, CrossOrigin)
├── Posting/            # Quick Reply and posting functionality
├── Quotelinks/         # Quote linking and backlink features
├── site/               # Site-specific adapters (4chan, tinyboard, etc.)
├── types/              # TypeScript type definitions
tools/
├── rollup.js           # Main build script
├── version.ts          # Version management (CalVer for releases, commit SHA for dev)
├── rollup-plugin-*.js  # Custom Rollup plugins
builds/                 # Build output (not committed)
```

## Language and Code Conventions

- **New files must be TypeScript** (`.ts` / `.tsx`). Many legacy files are still `.js` (migrated from CoffeeScript via decaffeinate).
- If converting a `.js` file to `.ts`, use a **separate commit** so file history is preserved across the rename.
- The project uses **JSX** with a custom runtime (`src/globals/jsx.ts`), not React. The JSX factory is `h` and the fragment factory is `hFragment` (configured in `tsconfig.json`).
- TypeScript target is **ES2020** (for optional chaining support). Module format is **ES2022**.
- `tsconfig.json` has `checkJs: true` and `noImplicitAny: false`. Many JS files have type errors that don't block the build — this is expected.
- HTML templates and CSS files are inlined into the bundle at build time via custom Rollup plugins.
- Binary files (images, audio, fonts) are included as base64 at build time.
- Font Awesome icons are imported via path aliases: `@fa/*` (regular) and `@fas/*` (solid).
- **Commit messages** follow [Conventional Commits](https://www.conventionalcommits.org/). Use a type prefix and optional scope, e.g. `feat(settings): Add search box`, `fix: Correct changelog link`, `chore: Update dependencies`. Common types: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `perf`, `test`.

## Testing

There is no standalone test runner. Tests are embedded in source files using region markers:

```
// #region tests_enabled
// test code here
// #endregion
```

These regions are stripped from production builds by `tools/rollup-plugin-remove-test-code.js` unless the `-test` flag is passed. The test infrastructure lives in `src/General/Test.js`. Files with test code include `src/main/Main.js`, `src/classes/Post.ts`, and `src/Linkification/Linkify.js`.

To include tests in a build: `bun run build -- -test`

## Changelog

`CHANGELOG.md` must be updated for every user-facing change. Add a new entry under the current version heading at the top of the file. Entries are grouped by category using `####` sub-headings:

- **New Features** — for new functionality. Use a bold feature name followed by an em dash and a description, e.g. `- **Feature Name** — Description of what it does.`
- **Bug Fixes** — for corrections to existing behavior. A short sentence is fine.
- **Documentation** — for docs-only changes.

If no version heading exists yet for unreleased work, add one with the heading of `### Unreleased`.

## Releases

Releases are published via [GitHub Releases](https://github.com/paradox460/4chan-xt/releases). The release workflow (`.github/workflows/release.yml`) triggers on tags matching `XT-v*`, builds all variants, and creates a **draft** GitHub release with the build artifacts attached.

Each release should have a detailed description organized into the following sections (using `###` headings):

- **New Features** — One sub-section per feature with a `####` heading, a paragraph describing the feature, and a link to the relevant commit in parentheses, e.g. `([abc1234](https://github.com/paradox460/4chan-xt/commit/abc1234))`.
- **Bug Fixes** — A bulleted list. Each item starts with a bold scope/area if applicable, followed by the description and a commit link.
- **Documentation** — A bulleted list of documentation changes with commit links.
- **Build & Maintenance** — A bulleted list of dependency bumps, CI changes, and other housekeeping with commit links.

End the release description with a **Full Changelog** comparison link:

```
**Full Changelog**: https://github.com/paradox460/4chan-xt/compare/XT-v<previous>...XT-v<current>
```

The CHANGELOG.md file must be updated so the `Unreleased` section at the top is updated upon a new release being built. It should be emptied, and the features that have been put into releases should be grouped under the appropriate heading.

## CI/CD

GitHub Actions workflows are in `.github/workflows/` and are **generated from Pkl templates** (`.github/pkl_workflows/`). Do not edit workflow YAML files directly.

- **build.yml** — Runs on every push. Builds all variants with dev versioning and uploads artifacts.
- **release.yml** — Runs on tags matching `XT-v*`. Builds release versions and creates a draft GitHub release.

To regenerate workflows after editing Pkl sources: `mise run gh-workflow` (from the repo root).

## Key Architectural Notes

- **Circular dependencies** are common in the codebase due to its CoffeeScript heritage. Rollup handles them, but be aware of initialization order issues. Some shared utilities were moved to `src/globals/globals.ts` to break cycles.
- **Platform-specific code** is conditionally included/excluded at build time via `tools/rollup-plugin-platform-specific.js`. Files with platform branches include `src/main/Main.js`, `src/platform/$.ts`, and `src/platform/CrossOrigin.ts`.
- The `src/platform/$.ts` module is the primary DOM and Greasemonkey API abstraction layer — it is not jQuery.
- **Versioning** uses CalVer (`YYYY.M.D.N`) for releases and `dev-<commit-sha>` for development builds, managed by `tools/version.ts` and stored in `version.json`. The sub-version `N` supports multiple releases in a single day. When auto-generating a release version (i.e. no custom version is provided), the script queries existing git tags matching today's date (`XT-vYYYY.M.D` and `XT-vYYYY.M.D.*`), finds the highest sub-version number, and increments it. The first release of a day is `YYYY.M.D.0`. Legacy tags without a sub-version (e.g. `XT-v2026.3.29`) are treated as sub-version `0`. Custom versions passed via `--release <version>` or `RELEASE_VERSION` bypass auto-detection and are used as-is (after stripping any `XT-v` prefix).

## Spell Checking

The project uses cspell (VS Code extension `streetsidesoftware.code-spell-checker`). Custom dictionary words and ignored terms are in `cspell.json`.
