# 4chan XT Documentation

4chan XT is a userscript and browser extension that adds a wide range of features to 4chan and compatible imageboards. It was originally forked from [4chan X](https://github.com/ccd0/4chan-x) and rewritten in TypeScript/JavaScript.

## Table of Contents

- **[Installation](Installation.md)** — How to install 4chan XT as a userscript or browser extension
- **[Getting Started](Getting-Started.md)** — First steps after installation, navigating the UI, and basic concepts
- **[Settings](Settings.md)** — Complete guide to the settings panel, importing/exporting, and resetting
- **[Features](Features.md)** — Overview of all features organized by category
- **[Keyboard Shortcuts](Keyboard-Shortcuts.md)** — Full list of keybinds and how to customize them
- **[Filtering](Filtering.md)** — How to write filters to hide or highlight posts
- **[Image & Media Features](Images-and-Media.md)** — Image expansion, hover, gallery, video controls, and sound posts
- **[Sauce (Reverse Image Search)](Sauce.md)** — How to configure custom reverse image search and external links
- **[Monitoring & Thread Watching](Monitoring.md)** — Thread updater, unread tracking, thread watcher, and notifications
- **[Quick Reply & Posting](Posting.md)** — Quick Reply, captcha, dumping, and posting options
- **[Linkification & Embedding](Embedding.md)** — Auto-linking URLs and embedding supported media services
- **[Archives](Archives.md)** — Archive integration, redirects, and restoring deleted posts
- **[Customization](Customization.md)** — Custom CSS, time formatting, file info formatting, and board navigation
- **[Troubleshooting & FAQ](Troubleshooting.md)** — Common issues and frequently asked questions

## Supported Sites

4chan XT runs on the following imageboards:

| Site | URL |
|------|-----|
| **4chan** | `boards.4chan.org`, `sys.4chan.org` |
| **Kissu** | `kissu.moe`, `original.kissu.moe` |
| **Lainchan** | `lainchan.org` |
| **Smugloli** | `smuglo.li`, `smugloli.net` |
| **Sushigirl** | `sushigirl.us` |
| **TVch** | `tvch.moe` |
| **Sportschan** | `sportschan.org` |
| **Erischan** | `erischan.org` |
| **Merorin** | `merorin.com` |
| **Fufufu** | `fufufu.moe` |
| **Ponyville** | `ponyville.us` |
| **Ota-ch** | `ota-ch.com` |
| **Kakashinenpo** | `kakashinenpo.com` |

## Quick Links

- [GitHub Repository](https://github.com/paradox460/4chan-xt)
- [Releases / Downloads](https://github.com/paradox460/4chan-xt/releases)
- [Report a Bug](https://github.com/paradox460/4chan-xt/issues?q=is%3Aopen+sort%3Aupdated-desc)
- [Changelog](https://github.com/paradox460/4chan-xt/blob/project-XT/CHANGELOG.md)

## Important Notes

- **4chan XT disables the native 4chan extension.** If you uninstall 4chan XT, you'll need to re-enable the native extension via 4chan's `[Settings]` link.
- **Private browsing:** By default, 4chan XT remembers your last read post and your own posts, even in incognito/private browsing mode. You can disable this via the `Remember Last Read Post` and `Remember Your Posts` settings.
- **Privacy:** The "Link Title" feature sends requests to YouTube and other sites to fetch titles. See the [embedding documentation](embedding.md) for details on what data is sent.