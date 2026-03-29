# Getting Started with 4chan XT

4chan XT is a userscript that adds a wide range of features to 4chan and other compatible imageboards. It is a continuation of the original 4chan X, rewritten in TypeScript/JavaScript.

---

## Table of Contents

- [What is 4chan XT?](#what-is-4chan-xt)
- [Installation](#installation)
  - [Userscript (Recommended)](#userscript-recommended)
  - [Chrome Extension](#chrome-extension)
  - [Building from Source](#building-from-source)
- [First Run](#first-run)
- [Supported Sites](#supported-sites)
- [Navigating the Interface](#navigating-the-interface)
  - [The Header Bar](#the-header-bar)
  - [Shortcut Icons](#shortcut-icons)
  - [Opening Settings](#opening-settings)
- [Quick Tour of Features](#quick-tour-of-features)
- [Migrating from 4chan X](#migrating-from-4chan-x)
- [Uninstalling](#uninstalling)
- [Getting Help](#getting-help)

---

## What is 4chan XT?

4chan XT enhances your imageboard browsing experience with features like:

- **Quick Reply** — An all-in-one form for posting, with image dumping support
- **Thread Updater** — Automatically fetches new posts in real time
- **Thread Watcher** — Bookmark and monitor threads across boards
- **Image Gallery** — Browse all images in a thread in a lightbox-style viewer
- **Inline Quoting** — Expand quoted posts inline or on hover
- **Content Filtering** — Hide posts by name, tripcode, subject, comment, ID, MD5, and more
- **Keyboard Shortcuts** — Navigate threads, expand images, and post without touching the mouse
- **Media Embedding** — Inline YouTube, Vocaroo, SoundCloud, Twitter/X, and 20+ other services
- **Archive Integration** — Seamlessly redirects dead threads and images to third-party archives, and can restore deleted posts
- **Reverse Image Search** — Configurable "sauce" links for Google, Yandex, IQDB, SauceNAO, and others
- **Customizable UI** — Custom CSS, board navigation, time formatting, and more

For a complete list, see the [Features documentation](./Features.md).

---

## Installation

### Userscript (Recommended)

You need a userscript manager browser extension:

| Manager | Chrome | Firefox | Edge | Safari |
|---|---|---|---|---|
| **Violentmonkey** | [Install](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) | [Install](https://addons.mozilla.org/firefox/addon/violentmonkey/) | [Install](https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao) | — |
| **Tampermonkey** | [Install](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo) | [Install](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) | [Install](https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd) | [Install](https://apps.apple.com/app/tampermonkey/id6738342400) |

Once you have a userscript manager:

1. Go to the [4chan XT GitHub Releases](https://github.com/paradox460/4chan-xt/releases) page
2. Click on the `.user.js` file from the latest release
3. Your userscript manager will prompt you to install — click **Install** / **Confirm**
4. Navigate to [4chan](https://boards.4chan.org/) and the script will activate automatically

> **Note on updates:** Automatic updates are supported for the userscript version. However, there are known issues with updating userscripts hosted on GitHub through some managers. If auto-update doesn't work, you can manually install the latest release.

### Chrome Extension

A Manifest V3 Chrome extension build is available for Chromium-based browsers. Load it as an unpacked extension:

1. Build from source (see below) with `-platform=crx`
2. Go to `chrome://extensions/`
3. Enable **Developer mode**
4. Click **Load unpacked** and select the `builds/crx/` directory

> **Note:** Automatic updates are not supported for the Chrome extension.

### Building from Source

Requirements: [Bun](https://bun.sh/) runtime

```
git clone https://github.com/paradox460/4chan-xt.git
cd 4chan-xt
bun install
bun run build
```

Build options:

| Flag | Description |
|---|---|
| `-min` | Produce minified output |
| `-platform=userscript` | Build only the userscript version |
| `-platform=crx` | Build only the Chrome extension version |
| `-no-format` | Skip formatting passes (faster build, larger output) |
| `-test` | Include test code in the build |

The built userscript will be in `builds/`.

---

## First Run

When you first load a 4chan page with 4chan XT installed:

1. **The native extension is automatically disabled.** 4chan XT replaces it entirely. You'll see the 4chan XT header bar appear at the top of the page.

2. **Default settings are applied.** Most features are enabled out of the box with sensible defaults. You can customize everything in the settings panel.

3. **Board index is replaced.** The default JSON Index replaces the native board index, giving you search, sorting, infinite scrolling, and catalog mode.

4. **Your posts are tracked.** 4chan XT remembers which posts are yours (for "(You)" markers) and your last read position in threads. This data persists even in private browsing by default — see [Privacy](#privacy) if you want to change this.

---

## Supported Sites

4chan XT works on the following sites:

### Primary
- **4chan** — `boards.4chan.org`, `sys.4chan.org`

### Other Imageboards
- erischan.org
- fufufu.moe
- kakashinenpo.com
- kissu.moe (+ original.kissu.moe)
- lainchan.org
- merorin.com
- ota-ch.com
- ponyville.us
- smuglo.li (+ notso.smuglo.li, smugloli.net, smug.nepu.moe)
- sportschan.org
- sushigirl.us
- tvch.moe

---

## Navigating the Interface

### The Header Bar

4chan XT adds a customizable header bar to the top (or bottom) of the page. It contains:

- **Board navigation links** — Quick links to your favorite boards (customizable)
- **Shortcut icons** — Quick access to features like Thread Watcher, Gallery, Settings, etc.
- **Toggle links** — Switch between Index/Catalog views

You can customize the header in **Settings → Advanced → Custom Board Navigation**.

### Shortcut Icons

The header bar shows small icons for commonly used features:

| Icon | Feature | Description |
|---|---|---|
| 🔖 | Thread Watcher | Toggle the thread watcher panel |
| 🖼️ | Gallery | Open the image gallery |
| 🔄 | Updater | Thread auto-update controls |
| 📊 | Stats | Thread reply/image/page counts |
| ⬇️ | Image Prefetch | Toggle image preloading |
| 👀 | Fappe Tyme | Hide text-only posts |
| 💼 | Werk Tyme | Hide all images |
| 🔗 | Quote Threading | Toggle threaded conversation view |

### Opening Settings

There are three ways to open the settings panel:

1. Click the **⚙ (gear)** icon in the header bar
2. Use the keyboard shortcut **Alt+O**
3. The settings panel has five tabs: **Main**, **Filter**, **Sauce**, **Advanced**, and **Keybinds**

> **Tip:** The Main tab has a search box at the top that lets you filter settings by name or description — handy for finding a specific option without scrolling through every category.

---

## Quick Tour of Features

Here's a quick overview of the most popular features to get you started:

### Quick Reply
Press **Q** (with a post selected) or **Shift+Q** (empty) to open the Quick Reply box. Type your message, solve the captcha, and press **Ctrl+Enter** to submit. You can drag-and-drop images into it.

### Thread Watcher
Press **W** while viewing a thread to watch it. The watcher panel (toggle with **T**) shows all your watched threads with unread counts. It auto-updates periodically.

### Image Expansion
Click any thumbnail to expand it inline. Press **E** to expand all images in a thread. Press **Shift+E** to expand just the selected image.

### Gallery Mode
Press **G** to open the full-screen gallery. Use **Left/Right** arrows to navigate, **P** to pause videos.

### Filtering
Go to **Settings → Filter** to set up content filters. Filters use regex patterns and can match against names, tripcodes, comments, subjects, filenames, IDs, and MD5 hashes. See the [Filters documentation](./Filters.md) for the full syntax.

### Keyboard Shortcuts
Press **?** or go to **Settings → Keybinds** to see all available shortcuts. Navigation (J/K for next/previous reply), posting, image viewing, and thread management all have keybinds.

---

## Migrating from 4chan X

4chan XT uses a different userscript namespace than 4chan X. To migrate:

1. Open 4chan X settings and **Export** your settings to a JSON file
2. Install 4chan XT and uninstall 4chan X
3. Open 4chan XT settings and **Import** the exported JSON file

Your settings, watched threads, and browsing history will transfer over.

---

## Uninstalling

If you uninstall 4chan XT, you'll need to **re-enable the native 4chan extension**:

1. Click the **[Settings]** link in the top right corner of any 4chan page
2. Uncheck **"Disable the native extension"**
3. Click **"Save Settings"**

> If you don't see a "Save Settings" button, it may be hidden by your ad blocker.

---

## Privacy

By default, 4chan XT stores some browsing data locally:

- **Last read post position** in each thread
- **Your post history** (for "(You)" markers and scroll bar indicators)
- **Watched threads** and their states
- **Hidden threads/posts**

This data persists even in private browsing / incognito mode. To change this:

- Uncheck **Remember Last Read Post** in Settings to stop tracking read positions
- Uncheck **Remember Your Posts** in Settings to stop tracking your posts
- You can **Reset** all settings to clear all stored data

When exporting settings, you can choose whether to include history data or not (controlled by the **Ask to Export History** option).

The **Link Title** feature fetches page titles from YouTube and other services, which is subject to those services' privacy policies. You can disable it by unchecking **Link Title** in Settings.

---

## Getting Help

- [Changelog](https://github.com/paradox460/4chan-xt/blob/project-XT/CHANGELOG.md) — See what changed in each version
- [FAQ (this fork)](https://github.com/TuxedoTako/4chan-xt/wiki/Frequently-Asked-Questions) — Common questions about 4chan XT
- [FAQ (upstream)](https://github.com/ccd0/4chan-x/wiki/Frequently-Asked-Questions) — Most answers still apply
- [Report Bugs](https://github.com/paradox460/4chan-xt/issues?q=is%3Aopen+sort%3Aupdated-desc) — File an issue on GitHub
- [Contributing](https://github.com/paradox460/4chan-xt/blob/project-XT/CONTRIBUTING.md) — Help improve 4chan XT

---

*Next: [Features →](./Features.md)*