# Installation

## Requirements

4chan XT runs as either a **userscript** (recommended) or a **Chrome extension**. You need one of the following:

### Userscript Managers

A userscript manager is a browser extension that lets you install and run userscripts like 4chan XT.

| Manager | Chrome | Firefox | Edge | Safari |
|---------|--------|---------|------|--------|
| **Violentmonkey** (recommended) | [Install](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) | [Install](https://addons.mozilla.org/firefox/addon/violentmonkey/) | [Install](https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao) | — |
| **Tampermonkey** | [Install](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo) | [Install](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) | [Install](https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd) | [Install](https://apps.apple.com/app/tampermonkey/id6738342400) |

### Chrome Extension (Alternative)

4chan XT can also be loaded as an unpacked Chrome extension (Manifest v3). See [Building from Source](./Building-from-Source.md) for instructions.

---

## Installing the Userscript

1. **Install a userscript manager** from the table above.
2. **Download the latest release** from the [GitHub Releases page](https://github.com/paradox460/4chan-xt/releases).
3. Click the `.user.js` file — your userscript manager should prompt you to install it.
4. Click **Install** / **Confirm** in the dialog that appears.
5. Navigate to [4chan](https://boards.4chan.org/) — 4chan XT should be active.

### Automatic Updates

Automatic updates are supported for the userscript version. Your userscript manager will periodically check for new versions and update in the background.

> **Note:** There are known issues with updating userscripts hosted on GitHub. If automatic updates aren't working, you can always manually download and install the latest release. See [violentmonkey#1673](https://github.com/violentmonkey/violentmonkey/issues/1673) for details.

---

## Supported Sites

4chan XT works on 4chan and several other compatible imageboards:

### Primary
- [4chan](https://boards.4chan.org/) (`boards.4chan.org`, `sys.4chan.org`)

### Additional Imageboards
- [erischan.org](https://erischan.org)
- [fufufu.moe](https://fufufu.moe)
- [kakashinenpo.com](https://kakashinenpo.com)
- [kissu.moe](https://kissu.moe)
- [lainchan.org](https://lainchan.org)
- [merorin.com](https://merorin.com)
- [ota-ch.com](https://ota-ch.com)
- [ponyville.us](https://ponyville.us)
- [smuglo.li](https://smuglo.li)
- [sportschan.org](https://sportschan.org)
- [sushigirl.us](https://sushigirl.us)
- [tvch.moe](https://tvch.moe)

---

## First Run

When you first load a 4chan page with 4chan XT active:

1. **The native 4chan extension will be disabled automatically.** 4chan XT is not designed to run alongside it.
2. A **header bar** will appear at the top of the page with shortcuts and navigation.
3. You can access **Settings** by clicking the gear icon (⚙) in the header, or by pressing `Alt+O`.

See the [Getting Started](./Getting-Started.md) guide for an overview of features and how to configure them.

---

## Uninstalling

If you uninstall 4chan XT, the native 4chan extension will remain disabled. To re-enable it:

1. Click the **[Settings]** link in the top-right corner of any 4chan page.
2. Uncheck **"Disable the native extension"** in the panel that appears.
3. Click the **"Save Settings"** button.

> **Tip:** If you don't see a "Save Settings" button, it may be hidden by your ad blocker.

---

## Migrating from 4chan X

4chan XT uses a different userscript namespace than the original 4chan X. To migrate your settings:

1. In **4chan X**, go to Settings → export your settings to a JSON file.
2. **Uninstall** 4chan X.
3. **Install** 4chan XT (see above).
4. In **4chan XT**, go to Settings → import the JSON file you exported.

Your filters, watched threads, keybinds, and other preferences will be carried over.

---

## Privacy Notes

- **Private browsing:** By default, 4chan XT remembers your last read post and which posts were made by you, even in private browsing / incognito mode. To disable this, uncheck **"Remember Last Read Post"** and **"Remember Your Posts"** in the settings. You can clear all saved browsing history by resetting your settings.
- **Link titles:** The "Link Title" feature fetches titles from YouTube and other sites, which sends requests to those services. See the [Privacy](./Privacy.md) documentation for details and how to disable it.

---

## Troubleshooting

If something isn't working after installation:

1. Make sure you only have **one** 4chan userscript/extension active at a time.
2. Check that your userscript manager is enabled and 4chan XT is toggled on.
3. Try disabling other extensions that modify 4chan (e.g., ad blockers, other 4chan scripts).
4. Clear your browser cache and reload the page.
5. See the [Troubleshooting](./Troubleshooting.md) guide for more help.