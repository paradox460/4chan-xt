---
name: prepare-release
description: Prepare a 4chan XT release locally — bump the version, finalize CHANGELOG.md, build and verify all variants, then create the release commit and XT-v tag. Stops before pushing. Use when the user asks to prepare, cut, or stage a release.
---

# Prepare a 4chan XT release

Prepare a release **locally, up to the tag**, then stop for the human to push. The push is what actually triggers publication: pushing an `XT-v*` tag to `origin` fires `.github/workflows/release.yml`, which re-runs `bun run version` + `bun run build:all` and creates a **draft** GitHub release. The local build in this skill is for verification only; CI produces the canonical artifacts.

Run every command from the repo root `/Users/jeffsandberg/Developer/4chan-x`.

## Workflow

### Step 1 — Confirm a clean, releasable state

```
jj status --no-pager
jj log --no-pager -r @ -T 'description.first_line()' --limit 1
```

The working copy should contain the feature work to release (or be empty on top of it). The release commit will be created on top of the current `@`. This is orientation, not a hard gate — but if `@` contains **unrelated** changes, they will be swept into the release commit at Step 6; commit or split them out first. If `@` is empty and nothing is queued to release, surface that to the user; do not fabricate content.

### Step 2 — Decide the version

Default (auto-increment):

```
bun run version:release
```

This scans existing `XT-v<today>.*` git tags via `tools/version.ts` and writes the next `YYYY.M.D.N` to `version.json`. The first release of a day is `.0`. If tag listing fails, it falls back to sub-version `0` — acceptable.

To force a specific version instead:

```
bun run version:release -- <version>   # e.g. 2026.3.29.2
```

The `version:release` npm script already passes `--release`, so append only the bare version after `--` — do NOT repeat `--release` (a second `--release` token makes the parser drop the custom version and silently auto-increment instead). The arg is used as-is after stripping any `XT-v` prefix. Equivalently: `VERSION_MODE=release RELEASE_VERSION=<version> bun ./tools/version.ts`.

Then read the resulting version from `version.json` (the `"version"` field, e.g. `2026.8.11.0`). **Capture this exact string as `<version>`; every later step reuses it.**

### Step 3 — Finalize `CHANGELOG.md`

The top of `CHANGELOG.md` (after the ~6-line preamble) holds the pending entries. Ensure the topmost section heading reads **exactly** `### <version> (<YYYY-MM-DD>)`:

- If the top heading is `### Unreleased`, rename it to `### <version> (<YYYY-MM-DD>)`.
- If it is already a version heading (e.g. `### 2026.8.11.0`), correct the version number to `<version>` and add the `(<date>)` suffix if missing.

Use today's date via `date +%Y-%m-%d`. If the version's calendar date (`YYYY.M.D` portion of `<version>`) differs from today (e.g. releasing a version dated yesterday), use the version's own date for consistency with the tag.

Entries beneath stay grouped under their `####` sub-headings (`New Features`, `Bug Fixes`, `Documentation`, `Build & Maintenance`). **Do NOT invent entries.** If the top section has no `####` groups, stop and tell the user the CHANGELOG has no release notes to finalize.

### Step 4 — Build all variants

```
bun run build:all
```

Runs the three builds (`-min -platform=userscript`, `-platform=userscript`, `-platform=crx`) sequentially into `builds/`. Expected artifacts: `builds/4chan-XT.user.js`, `builds/4chan-XT.min.user.js`, and the crx output under `builds/crx/`.

**Gate:** the command MUST exit 0. Pre-existing TypeScript type errors and Rollup circular-dependency warnings are printed and are EXPECTED — they do NOT fail the release. Only a non-zero exit or a thrown build error blocks.

### Step 5 — Verify the version is embedded in the bundle

Confirm the bump propagated into the built userscript. Search (with the `grep` tool, not shell grep) for the literal `<version>` string in `builds/4chan-XT.user.js`. It MUST appear in **both**:

- the userscript metadata header: `// @version      <version>`
- the inlined version object: `var version = { "version": "<version>", ... }` (rollup embeds `version.json`, `tools/rollup.js:46`)

**Gate:** if `<version>` is absent (e.g. the bundle still shows a `dev-<sha>` version), the build did not pick up the bump — stop and report; do NOT tag.

### Step 6 — Create the release commit

jj tracks the working copy automatically; stage nothing manually. Commit the release change:

```
JJ_EDITOR=true jj commit --no-pager --message "Release XT-v<version>"
```

This seals `CHANGELOG.md` + `version.json` (and any other working-copy changes) into a commit titled `Release XT-v<version>` and opens a fresh empty working copy on top. The release commit is now `@-`.

### Step 7 — Create a signed, annotated git tag on the release commit

jj 0.43 has no `jj git tag` subcommand; use git. The tag message MUST be the topmost release block in `CHANGELOG.md` — the exact `### <version> (<date>)` section finalized in Step 3, through everything above the next `### ` heading. Extract it and feed it via stdin (`-F -`), which handles multi-line Markdown without `-m` quoting problems:

```
awk '/^### /{c++} c==1{print} c==2{exit}' CHANGELOG.md \
  | git tag -a -s --cleanup=verbatim -F - "XT-v<version>" "$(jj log --no-pager --no-graph -r @- -T 'commit_id.short()')"
```

- The `awk` prints from the first `### ` line up to (not including) the second — the top block. Any trailing blank lines are harmless; do not add trimming logic.
- `-a` (annotated) + `-s` (signed) create a signed annotated tag object; `-F -` reads the message from stdin. Signing is already configured in this repo (`user.signingkey` set, `tag.gpgsign=true`), matching the existing `XT-v2026.6.1` tag — no signing setup needed.
- `--cleanup=verbatim` ensures the tag message is exactly as written in `CHANGELOG.md`, without any Git commit message formatting.
- The repo is git-colocated with jj (same HEAD), so the git tag lands on the commit jj just created.

Verify:

```
git cat-file -t "XT-v<version>"                                   # prints: tag
git tag --verify "XT-v<version>"                                  # confirms good signature
git for-each-ref refs/tags/XT-v<version> --format='%(contents)'   # shows the CHANGELOG block
git rev-list -n1 "XT-v<version>"                                  # points at the release commit
```

**Edge:** if signing fails (missing/locked GPG key), `git tag` errors and no tag is created — stop and report; do NOT fall back to an unsigned tag. Releases are expected to be signed.

### Step 8 — STOP. Report the push command; do NOT run it

Print the exact command the human runs to trigger the release, but do NOT execute it (no push without approval):

```
git push origin "XT-v<version>"
```

State plainly: pushing this tag to `origin` (paradox460/4chan-x) fires `.github/workflows/release.yml`, which builds all variants and creates a **draft** GitHub release. The human then edits the draft's description (per AGENTS.md §Releases format: `###` sections, `####` per-feature, commit links, Full Changelog link) and publishes it. The skill's job ends at "tag created, push command reported."

## Notes

- Always run build/version commands from the repo root `/Users/jeffsandberg/Developer/4chan-x`.
- The tag name (`XT-v<version>`) is what CI reads as `RELEASE_VERSION` — it, not local state, determines the published version. The `.N` sub-version is part of it (e.g. `XT-v2026.8.11.0`).
- Never edit `.github/workflows/*.yml` directly — they are generated from Pkl (`mise run gh-workflow` regenerates them from `.github/pkl_workflows/`).
- If the user wants to also push the release commit's branch/bookmark, that is a separate manual step outside this skill.
