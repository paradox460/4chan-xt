# Archives

4chan XT integrates with third-party archives that preserve threads and images after they are deleted or pruned from 4chan. This allows you to view dead threads, recover deleted posts, and search for old content.

---

## Table of Contents

- [Overview](#overview)
- [How Archive Redirects Work](#how-archive-redirects-work)
- [Configuring Archives](#configuring-archives)
- [Built-in Archives](#built-in-archives)
- [Archive Features](#archive-features)
- [Restoring Deleted Posts](#restoring-deleted-posts)
- [Archive Search](#archive-search)
- [Archive Reporting](#archive-reporting)
- [Security & Privacy](#security--privacy)
- [Updating the Archive List](#updating-the-archive-list)
- [Troubleshooting](#troubleshooting)

---

## Overview

When a thread on 4chan dies (reaches the bump limit and falls off the board, or is deleted by a moderator), third-party archive sites preserve a copy of the thread and its images. 4chan XT knows about these archives and can:

1. **Redirect** you to the archived version when you try to visit a dead thread or image.
2. **Resurrect dead quote links** by linking them to the archived post instead of showing a dead link.
3. **Restore deleted posts** by fetching them from the archive and inserting them back into a live thread.
4. **Search archives** for posts by username, image hash, or other criteria.
5. **Report posts** to archives that support it.

---

## How Archive Redirects Work

### Dead Threads

When you navigate to a thread that has 404'd (been deleted or pruned), and **404 Redirect** is enabled (Settings → Main → Miscellaneous), 4chan XT will automatically redirect you to the archived copy of the thread on the configured archive for that board.

### Dead Images

When an image has been deleted from 4chan's servers, 4chan XT can redirect the image URL to the archive's copy. This is configured per-board in the archive settings.

### Dead Quote Links

When **Resurrect Quotes** is enabled (Settings → Main → Quote Links), quote links pointing to deleted posts are converted into links to the archived version. These resurrected quotes support:

- **Inline expansion** — Click to expand the archived post inline, just like a normal quote.
- **Hover preview** — Hover to see a preview of the archived post.

---

## Configuring Archives

Archive settings are found in **Settings → Advanced** in the archive configuration section.

### Per-Board Archive Selection

For each board, you can select which archive is used for each function:

| Function | Description | Archive Requirement |
|----------|-------------|---------------------|
| **Thread** | Where to redirect when viewing a dead thread | Any supported archive |
| **Thread JSON** | Where to fetch thread data via JSON API | FoolFuuka archives only |
| **Post** | Where to look up individual posts | FoolFuuka archives only |
| **File** | Where to redirect for deleted images/files | Archives that store files for that board |

Use the **board selector** dropdown to choose a board, then select the desired archive from each function's dropdown menu.

### How Selection Works

- 4chan XT automatically selects the best archive for each board and function based on the available archive list.
- You can override the automatic selection by choosing a specific archive from the dropdown.
- If no archive supports a particular board or function, the dropdown will be empty.

### Archive Software Support

4chan XT recognizes the following archive software:

| Software | Thread Redirect | JSON API | Post Lookup | File Redirect |
|----------|:-:|:-:|:-:|:-:|
| **FoolFuuka** | ✅ | ✅ | ✅ | ✅ |
| **Fuuka** | ✅ | ❌ | ❌ | ✅ |

FoolFuuka archives have the most complete feature set, including JSON API access for fetching thread data and individual post lookups.

---

## Built-in Archives

4chan XT ships with a list of known archives. The following archives are included by default:

| Archive | Domain | Software | Boards | Files | Reports |
|---------|--------|----------|--------|:-----:|:-------:|
| **4plebs** | `archive.4plebs.org` | FoolFuuka | adv, f, hr, mlpol, mo, o, pol, s4s, sp, tg, trv, tv, x (13) | ✅ | ✅ |
| **warosu** | `warosu.org` | Fuuka | 3, biz, cgl, ck, diy, fa, ic, jp, lit, sci, vr, vt (12) | ✅ | ❌ |
| **Desuarchive** | `desuarchive.org` | FoolFuuka | 22 boards | ✅ (21) | ✅ |
| **fireden.net** | `boards.fireden.net` | FoolFuuka | cm, co, ic, sci, vip, y (6) | ✅ | ❌ |
| **arch.b4k.dev** | `arch.b4k.dev` | FoolFuuka | g, mlp, qb, v, vg, vm, vmg, vp, vrpg, vst (10) | ✅ (8) | ❌ |
| **Archived.Moe** | `archived.moe` | FoolFuuka | 90+ boards (largest coverage) | Partial (17) | ✅ |
| **TheBArchive** | `thebarchive.com` | FoolFuuka | b, bant (2) | ✅ | ✅ |
| **Archive Of Sins** | `archiveofsins.com` | FoolFuuka | h, hc, hm, i, lgbt, r, s, soc, t, u (10) | ✅ | ✅ |
| **palanq.win** | `archive.palanq.win` | FoolFuuka | 18 boards | ✅ (17) | ✅ |
| **Eientei** | `eientei.xyz` | Eientei | 3, i, sci, xs (4) | ✅ | ✅ |

> **Note:** Archive availability changes over time. Archives may go offline, add/remove boards, or change their software. Use the **Update** button in the archive settings to refresh the list from remote sources.

---

## Archive Features

### Resurrect Quotes

**Setting:** Settings → Main → Quote Links → **Resurrect Quotes** (on by default)

When enabled, dead quote links (links to posts that no longer exist on 4chan) are converted into links to the archive. These links behave like normal quote links:

- **Hover** to see a preview of the archived post.
- **Click** to expand the archived post inline.
- Dead quotes are visually distinguished (typically shown in a different style or with a cross-through that gets replaced with the archive link).

### Archive Link in Menu

**Setting:** Settings → Main → Menu → **Archive Link** (on by default)

Adds an "Archive" option to the post context menu (▶). Clicking it opens the post in the configured archive for that board.

### Archive Report

**Setting:** Settings → Main → Miscellaneous → **Archive Report** (on by default)

Adds a "Report to archive" option in the post menu for boards served by archives that support reporting (indicated by "✅" in the Reports column above). This sends a report directly to the archive's moderation system, separate from 4chan's own reporting.

---

## Restoring Deleted Posts

One of the unique features added in 4chan XT (not present in the original 4chan X) is the ability to **restore deleted posts** from an archive.

### How It Works

1. When viewing a live thread, 4chan XT can fetch the thread's data from a FoolFuuka archive.
2. Any posts that exist in the archive but are missing from the live thread (i.e., they were deleted) are inserted back into the thread view.
3. Restored posts are visually indicated so you can distinguish them from live posts.

### Requirements

- The board must have a FoolFuuka archive configured for the **Thread JSON** function.
- The archive must have indexed the post before it was deleted.

### Limitations

- Posts deleted before the archive could index them won't be recoverable.
- Some archives may have incomplete coverage or delayed indexing.
- Images that were deleted before the archive could save them may not be available.

---

## Archive Search

4chan XT can construct archive search URLs for various search criteria. When you use certain features (like searching for a poster's other posts or finding all posts with a particular image), 4chan XT redirects to the archive's search interface.

### Supported Search Fields

The following search fields are supported (depending on the archive's capabilities):

| Field | Description |
|-------|-------------|
| **Username** | Search by poster's name |
| **Capcode** | Search by capcode (Mod, Admin, etc.) |
| **Image hash** | Search by MD5 hash to find all posts with the same image |

Archive search is available through the post context menu and through sauce links (see [Sauce documentation](./Sauce.md) for how to configure archive MD5 search links).

---

## Archive Reporting

For archives that support it (marked with ✅ in the Reports column), you can report posts directly to the archive from the post context menu.

### How to Report

1. Make sure **Archive Report** is enabled in Settings → Main → Miscellaneous.
2. Click the **▶** menu button on a post.
3. Select the archive report option.
4. Fill in the report form and submit.

The report is sent to the archive's own moderation system, not to 4chan. This is useful for reporting content that violates the archive's policies.

---

## Security & Privacy

### HTTPS Enforcement

By default, 4chan XT enforces HTTPS for all archive connections. If an archive only supports HTTP:

- Redirects to HTTP archives are **blocked** when you're on an HTTPS page.
- A **confirmation dialog** is shown before redirecting to an insecure archive.

### Exempt Archives from Encryption

**Setting:** Settings → Main → Miscellaneous → **Exempt Archives from Encryption** (off by default)

When enabled, 4chan XT will:

- Allow loading content from HTTP-only archives without warning.
- Permit redirects to HTTP archives from HTTPS pages.

> ⚠️ **Security warning:** Enabling this setting allows unencrypted connections to archives, which could expose your browsing activity to network observers. Only enable this if you understand the risks and need access to HTTP-only archives.

### What Data is Shared

When 4chan XT interacts with archives:

- **Redirects:** Your browser navigates to the archive URL, which reveals the thread/post you're viewing.
- **JSON API requests:** Fetching thread data sends the board and thread number to the archive.
- **Reports:** Report content and your IP address are sent to the archive.

---

## Updating the Archive List

The built-in archive list may become outdated as archives come and go. 4chan XT can update the list from remote sources.

### Automatic Updates

If **Archive Auto Update** is enabled (on by default), 4chan XT periodically checks the remote archive list source for updates. By default, this check happens approximately every **2 days**.

### Manual Update

1. Go to **Settings → Advanced** and scroll to the archive configuration section.
2. Click the **Update** button.
3. 4chan XT will fetch the latest archive list from the configured source.

### Custom Archive List Source

The default archive list source is:

```
https://4chenz.github.io/archives.json/archives.json
```

You can change this in **Settings → Advanced → Archive Lists**. You can specify:

- **One URL per line** — Multiple sources are checked and merged.
- **Inline JSON** — Paste raw JSON archive data directly.

This is useful if you want to add a private or custom archive that isn't in the public list.

---

## Troubleshooting

### "No archive available for this board"

This means no archive in the current list covers the board you're viewing for the function you need (thread redirect, file redirect, etc.). Try:

1. Click **Update** in the archive settings to refresh the list.
2. Check if an archive for that board exists at all — some boards have no archive coverage.
3. Add a custom archive list source if you know of an archive that covers the board.

### Dead thread not redirecting

If a 404'd thread doesn't redirect to an archive:

1. Make sure **404 Redirect** is enabled in Settings → Main → Miscellaneous.
2. Check that an archive is configured for the board's **Thread** function in Settings → Advanced.
3. The archive may not have indexed that specific thread (especially if it was short-lived).

### Archive images not loading

If archived images fail to load:

1. Check that an archive is configured for the board's **File** function.
2. The archive may not store files for that board (some archives only store text, not images).
3. The image may have been deleted before the archive could save it.
4. If using HTTPS and the archive only supports HTTP, enable **Exempt Archives from Encryption** (with caution).

### Restored posts not appearing

If the "restore deleted posts" feature doesn't seem to work:

1. The board must have a FoolFuuka archive configured for **Thread JSON**.
2. The archive must have indexed the post before it was deleted.
3. Fuuka-based archives don't support JSON API access, so they can't be used for post restoration.

### Archive list not updating

If clicking **Update** doesn't change anything:

1. Check your internet connection.
2. The archive list source URL may be down — try again later.
3. Try clearing your browser cache and reloading.
4. Check the browser console for error messages.

---

*See also: [Features →](./Features.md) · [Sauce →](./Sauce.md) · [Settings →](./Settings.md) · [Troubleshooting →](./Troubleshooting.md)*