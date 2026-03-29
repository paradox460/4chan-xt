# Troubleshooting & FAQ

Common issues, solutions, and frequently asked questions about 4chan XT.

---

## Table of Contents

- [Installation Issues](#installation-issues)
- [General Issues](#general-issues)
- [Quick Reply & Posting Issues](#quick-reply--posting-issues)
- [Image & Media Issues](#image--media-issues)
- [Thread Updater Issues](#thread-updater-issues)
- [Filtering Issues](#filtering-issues)
- [Settings & Data Issues](#settings--data-issues)
- [Compatibility Issues](#compatibility-issues)
- [Performance Issues](#performance-issues)
- [Frequently Asked Questions](#frequently-asked-questions)

---

## Installation Issues

### 4chan XT doesn't seem to be running

1. **Check your userscript manager** — Make sure Violentmonkey or Tampermonkey is installed and enabled in your browser.
2. **Verify 4chan XT is enabled** — Open your userscript manager's dashboard and confirm 4chan XT is toggled on.
3. **Check the page URL** — 4chan XT only runs on supported sites (4chan, kissu.moe, lainchan.org, etc.). It does not run on the 4chan homepage (`www.4chan.org/`), the donate page, or the advertise page.
4. **Clear your browser cache** — Sometimes a stale cache can interfere with script loading. Do a hard refresh (Ctrl+Shift+R / ⌘+Shift+R).
5. **Check for JavaScript errors** — Open the browser console (F12 → Console) and look for errors related to 4chan XT.

### I see two sets of controls / features are duplicated

You likely have multiple 4chan scripts or extensions running at the same time. Only use **one** 4chan enhancement script at a time. Disable or uninstall any of the following if present:

- The original 4chan X (by ccd0, aeosynth, etc.)
- Other 4chan XT forks
- 4chan Plus
- Any other userscript that modifies 4chan

### The native 4chan extension is still showing

4chan XT disables the native extension automatically, but this may not work if:

- 4chan XT failed to load (see above)
- Another script re-enabled the native extension
- You have "Disable Native Extension" unchecked in 4chan XT settings

Go to **Settings → Main → Miscellaneous** and make sure **Disable Native Extension** is checked.

### Automatic updates aren't working

There are known issues with automatic updates for userscripts hosted on GitHub:

- [violentmonkey#1673](https://github.com/violentmonkey/violentmonkey/issues/1673)
- [TuxedoTako/4chan-xt#34](https://github.com/TuxedoTako/4chan-xt/issues/34)

**Workaround:** Manually download and install the latest release from the [GitHub Releases page](https://github.com/paradox460/4chan-xt/releases).

---

## General Issues

### The page looks broken or unstyled

1. **Disable conflicting extensions** — Ad blockers, custom CSS extensions (like Stylus/Stylish with 4chan themes), or other userscripts can interfere with 4chan XT's styling.
2. **Check Custom CSS** — If you have custom CSS in Settings → Advanced, try disabling it to see if it's the cause.
3. **Reset settings** — As a last resort, go to Settings and click **Reset** to restore all defaults.

### The header bar is missing

- The header might be set to auto-hide. Move your mouse to the top (or bottom) of the page to reveal it.
- Check if **Fixed Header** is enabled in Settings → Advanced → Header.
- Try pressing `Shift+H` to toggle header auto-hide.
- If the header is at the bottom, check **Bottom Header** in Settings → Advanced → Header.

### Keyboard shortcuts aren't working

1. Make sure **Keybinds** is enabled in Settings → Main → Miscellaneous.
2. Make sure your cursor is **not** focused in a text input or textarea. Most bare letter/number keybinds are suppressed when typing. Only keybinds that include Ctrl, Alt, Meta, or Esc work inside text fields.
3. Check for conflicts with browser extensions or OS shortcuts that may be intercepting the same key combination.
4. Verify the keybind is set correctly in Settings → Keybinds. You can reset all keybinds to defaults with the "Reset" button.

### Desktop notifications aren't appearing

1. Make sure **Desktop Notifications** is enabled in Settings → Main → Miscellaneous.
2. Your browser must have permission to show notifications for the 4chan domain. Check your browser's notification permissions in its settings.
3. Some browsers block notifications from non-HTTPS pages. Make sure you're browsing 4chan via HTTPS.
4. System-level "Do Not Disturb" or "Focus Mode" may suppress browser notifications.

### Board navigation is wrong or missing

The header board navigation is customizable. If it looks wrong:

1. Go to **Settings → Advanced → Custom Board Navigation**.
2. Verify the format is correct. The default is:

   ```
   [ toggle-all ]
   [current-index-text:"Index" current-catalog-text:"Catalog" current-expired-text:"Expired" current-archive-text:"Archive"]
   [external-text:"FAQ","https://github.com/TuxedoTako/4chan-xt/wiki/Frequently-Asked-Questions"]
   ```

3. Or simply reset your settings to restore the default navigation.

---

## Quick Reply & Posting Issues

### The Quick Reply won't open

- Press `Q` or `Shift+Q`. If nothing happens, check that **Quick Reply** is enabled in Settings → Main → Posting and Captchas.
- If the QR opens but is off-screen, try resetting its position by going to Settings → Advanced and clearing the `qr.position` value, or reset all settings.

### I can't solve the captcha

- If the captcha isn't loading, try enabling **Force Noscript Captcha** in Settings → Main → Posting and Captchas, which uses a simpler fallback captcha.
- If you're on LibreWolf and the captcha appears corrupted, enable **Avoid OffscreenCanvas** in Settings → Main → Posting and Captchas.
- Make sure JavaScript is not being blocked by your browser or any extensions.
- If you have a 4chan Pass, enable **Pass Link** in settings and log in with your pass to skip captchas.

### Post submission fails silently

- Check the browser console (F12 → Console) for error messages.
- Make sure you're not being blocked by a cooldown timer. The **Cooldown** feature shows the remaining wait time in the submit button.
- Verify your post doesn't violate 4chan's posting rules (too many characters, banned content, etc.).

### File upload isn't working

- Check that the file meets 4chan's requirements (file type, file size limits).
- 4chan XT can automatically convert unsupported image formats to PNG and re-encode oversized JPGs. If this isn't working, try converting the file manually before uploading.
- If **Show Upload Progress** is enabled, watch the submit button for upload percentage — if it stalls at 0%, there may be a network issue.

### The "Randomize Filename" feature changed my filename unexpectedly

When **Randomize Filename** is enabled (Settings → Main → Posting and Captchas), the filename is automatically replaced with a random timestamp. You can click the un-randomize button (↩) in the Quick Reply to restore the original filename for a specific post. This feature is automatically disabled on /f/.

### Cooldown timer seems wrong

4chan's cooldown periods depend on the board and whether you're posting a new thread or a reply. If the default cooldown seems inaccurate, you can set a custom cooldown duration in **Settings → Advanced → Custom Cooldown**.

---

## Image & Media Issues

### Images won't expand

- Make sure **Image Expansion** is enabled in Settings → Main → Images and Videos.
- Check if the image has been deleted from 4chan's servers. If **404 Redirect** is enabled, 4chan XT will try to load it from an archive.
- Browser extensions that block image loading or modify CSP (Content Security Policy) headers can interfere.

### Image hover preview is laggy or doesn't appear

- Make sure **Image Hover** is enabled.
- Large images (especially high-resolution PNGs and GIFs) may take time to load on the first hover. Enabling **Image Prefetching** can help by preloading images.
- If the preview appears but doesn't follow your mouse, check that **Follow Cursor** is enabled in Settings → Main → Miscellaneous.

### Videos have no sound

- Check that **Allow Sound** is enabled in Settings → Main → Images and Videos.
- Adjust the volume using the mouse wheel over the video thumbnail/filename, or set the **Default Volume** in Settings → Advanced.
- Some browsers require user interaction before allowing audio playback. Click on the video controls to unmute.

### Sound posts aren't playing audio

- Make sure **Enable sound posts** is enabled in Settings → Main → Images and Videos.
- The audio URL in the filename must be accessible. If the third-party host is down, the audio won't load.
- Check the browser console for CORS (Cross-Origin Resource Sharing) errors — some hosts may block cross-origin audio requests.

### Gallery won't open or is empty

- Make sure **Gallery** is enabled in Settings → Main → Images and Videos.
- The gallery only shows images/videos from the current thread. If the thread has no media, the gallery will be empty.
- Press `G` or click the gallery icon in the header to open it.

### Embeds aren't loading

- Make sure **Embedding** is enabled in Settings → Main → Linkification.
- Some embedding services don't work on HTTPS pages due to mixed content restrictions.
- The service may be down or the URL format may have changed. Check the browser console for errors.
- For Twitter/X embeds, try switching between the FxTwitter and TwitFrame embedders in Settings → Advanced.

---

## Thread Updater Issues

### Thread isn't auto-updating

- Make sure **Thread Updater** is enabled in Settings → Main → Monitoring.
- Check that **Auto Update** is turned on in the updater controls (in the header bar or floating).
- If the thread is dead (404'd), the updater will stop automatically.
- Verify you're viewing a thread, not the board index. The thread updater only works inside individual threads.

### "Update" shows an error

- **Connection error** — Check your internet connection. The updater will retry automatically.
- **404 / Thread not found** — The thread has been deleted or pruned from 4chan. If archive redirect is enabled, you may be redirected to an archived copy.
- **Rate limited** — If you're refreshing too aggressively, 4chan may temporarily rate-limit your requests. Increase the update interval in Settings → Advanced → Updater → Interval.

### Beep notification doesn't play

- Make sure **Beep** or **Beep Quoting You** is enabled in the updater options.
- Check that your browser allows audio playback. Some browsers require a user interaction before playing sounds.
- Check the **Beep Volume** in Settings → Advanced (0.0 = silent, 1.0 = full volume).
- If you've set a custom **Beep Source** URL, verify the URL is accessible and points to a valid audio file.

---

## Filtering Issues

### My filter isn't working

1. Make sure **Filter** is enabled in Settings → Main → Filtering.
2. Check your filter syntax — it must be a valid JavaScript regular expression between `/` delimiters:
   ```
   /pattern/flags;options
   ```
3. Make sure the filter is in the **correct filter type**. For example, a name filter must be entered under the "name" filter type, not "comment."
4. Lines beginning with `#` are comments and will be ignored.
5. Check the **boards** option — if you've restricted the filter to specific boards, it won't work on other boards.
6. Check the **op** and **file** options — these can restrict which posts the filter matches.
7. Test your regex at [regex101.com](https://regex101.com/) (select the JavaScript flavor) to make sure it matches what you expect.

### Filter is hiding too much / too little

- **Too much:** Your regex may be too broad. Use word boundaries (`\b`), anchors (`^`, `$`), or more specific patterns.
- **Too little:** You may need the `i` (case-insensitive) flag: `/pattern/i`. Also check that you're filtering the right field type.
- **MD5 and uniqueID filters** use exact string matching, not regex. The text between the `/` delimiters is matched literally.

### Filtered posts still show backlinks

By default, backlinks to filtered posts are hidden. If you want them to show (with strikethrough styling), enable **Filtered Backlinks** in Settings → Main → Filtering.

### I accidentally filtered something — how do I undo it?

1. Go to **Settings → Filter**.
2. Select the filter type from the dropdown.
3. Find the line that's causing the unwanted filtering and either delete it or comment it out by adding `#` at the beginning.
4. For MD5 quick filters, look in the **MD5** filter type for the hash that was added.

---

## Settings & Data Issues

### How do I back up my settings?

Go to Settings and click **Export**. This saves a JSON file with all your configurations. If **Ask to Export History** is enabled, you'll be asked whether to include your browsing history (watched threads, read positions, your posts, etc.).

### How do I restore my settings?

Go to Settings and click **Import**, then select a previously exported JSON file. The importer automatically upgrades settings from older versions of 4chan X / 4chan XT.

### Settings were lost after a browser update

Some browser updates can clear userscript storage. To protect against this:

1. **Export your settings regularly** as a backup.
2. Consider storing your exported settings file in a cloud-synced folder.

### How do I clear all 4chan XT data?

Go to Settings and click **Reset**. This will erase all settings, filter rules, watched threads, posting history, and browsing data. You will be asked to confirm.

> ⚠️ **Warning:** This action is irreversible. Export your settings first if you want a backup.

### Can I export settings without my browsing history?

Yes. Make sure **Ask to Export History** is enabled in Settings → Main → Miscellaneous. When you export, a dialog will ask whether to include history. Choose "No" to export only your configuration without any personal browsing data.

Alternatively, disable **Export History** to always exclude history from exports.

---

## Compatibility Issues

### 4chan XT conflicts with another extension

4chan XT is designed to be the sole 4chan enhancement running. Known conflicts include:

| Extension | Issue | Solution |
|-----------|-------|----------|
| **4chan X** (any version) | Duplicate features, broken UI | Uninstall 4chan X before using 4chan XT |
| **StyleChan** | Icon styling conflicts | 4chan XT reverted from `xt-icon` to `icon` CSS class to fix this, but some conflicts may remain |
| **uBlock Origin / AdBlock** | May hide settings buttons or notification elements | Add 4chan XT elements to your ad blocker's whitelist |
| **Dark Reader** | Can conflict with 4chan XT's theme detection | Try adding 4chan to Dark Reader's exclusion list and using 4chan's native dark themes (Tomorrow, Photon) instead |
| **NoScript / uMatrix** | Blocks required scripts or XHR requests | Whitelist 4chan domains and the domains listed in 4chan XT's `@connect` metadata |

### 4chan XT doesn't work on a Tinyboard/Vichan site

4chan XT has built-in support for several Tinyboard/Vichan-based imageboards (lainchan.org, kissu.moe, etc.), but not all. The site must be in the `@match` list in the userscript metadata. If your preferred imageboard isn't supported, you can:

1. Manually add a `@match` rule in your userscript manager for the site's URL.
2. Note that not all features will work on non-4chan sites, as some features depend on 4chan-specific APIs.

### Cloudflare challenge pages break 4chan XT

4chan XT is configured to not run on Cloudflare challenge pages and the 4chan homepage. If you're stuck on a Cloudflare page, that's a 4chan server issue, not a 4chan XT issue.

---

## Performance Issues

### Pages load slowly with 4chan XT

- **Disable thumbnail replacement** — Settings like "Replace GIF," "Replace JPG," "Replace PNG," and especially "Replace WEBM" download full-size media for every post, which significantly increases load times and bandwidth.
- **Disable Link Title in the catalog** — On boards with many embedded links (like /vt/), fetching titles for every link in the catalog view can be slow. Turn off **Link Title in the catalog** in Settings → Main → Linkification.
- **Enable Reply Pruning** — On very long threads (stickies, generals), enable **Reply Pruning** to hide old posts and reduce DOM size.
- **Reduce update frequency** — Increase the **Interval** in Settings → Advanced → Updater if the auto-updater is causing too many network requests.
- **Disable Image Prefetching** — While useful for browsing, image prefetching downloads every image in a thread in the background. Disable it on slow connections.

### High memory usage

Long threads with many expanded images and videos can consume significant memory. To reduce usage:

1. **Contract images** when you're done viewing them.
2. **Enable Reply Pruning** to hide old posts.
3. **Close the Gallery** when not in use.
4. **Avoid expanding all images** in very long threads.

### Scrolling is janky

- **Disable Scroll Markers** if you don't need scroll bar indicators.
- **Disable Quote Threading** if threaded view is causing layout recalculations.
- **Enable Reply Pruning** to reduce the number of DOM elements.

---

## Frequently Asked Questions

### What is 4chan XT? How is it different from 4chan X?

4chan XT is a continuation of the original 4chan X userscript, rewritten from CoffeeScript to TypeScript/JavaScript. It includes all original 4chan X features plus additional ones like archive post restoration, sound post support, scroll bar markers, automatic image conversion, and more. See the [Features](./Features.md) page for the full list.

### Is 4chan XT affiliated with 4chan?

No. 4chan XT is an independent, community-developed project with no affiliation to 4chan or its operators.

### Does 4chan XT work with a 4chan Pass?

Yes. If you have a 4chan Pass, you can enable **Pass Link** in Settings → Main → Posting and Captchas to add a login link. Once logged in, captchas will be skipped as usual.

### Does 4chan XT collect any data?

No. 4chan XT does not collect, transmit, or store any data on external servers. All settings and browsing data are stored locally in your browser via your userscript manager's storage.

Some features (like Link Title, Cover Preview, and Embedding) make requests to third-party services (YouTube, SoundCloud, etc.) to fetch content. These requests are made directly from your browser to those services. See the [Embedding documentation](./Embedding.md#privacy-considerations) for details.

### How do I report a bug?

1. Check the [existing issues](https://github.com/paradox460/4chan-xt/issues?q=is%3Aopen+sort%3Aupdated-desc) to see if your bug has already been reported.
2. If not, follow the [Contributing guide](https://github.com/paradox460/4chan-xt/blob/project-XT/CONTRIBUTING.md#reporting-bugs) for instructions on reporting bugs.
3. Include your browser name and version, userscript manager name and version, 4chan XT version, and steps to reproduce the issue.

### How do I install an older version?

Previous releases are available on the [GitHub Releases page](https://github.com/paradox460/4chan-xt/releases). Download the `.user.js` file from the desired version and install it. Your userscript manager may prompt you about downgrading.

### Can I use 4chan XT on mobile?

4chan XT is designed for desktop browsers. However, some mobile browsers support userscript managers:

- **Firefox for Android** supports Tampermonkey and Violentmonkey.
- **Kiwi Browser** (Android) supports Chrome extensions, including Tampermonkey.
- **Safari on iOS/iPadOS** supports Tampermonkey.

The experience may vary, as 4chan XT's UI is primarily designed for desktop screens and mouse/keyboard interaction.

### What does "(You)" mean next to a quote?

When **Mark Quotes of You** is enabled, 4chan XT adds "(You)" next to any quote link (e.g., `>>12345678 (You)`) that references one of your own posts. This makes it easy to spot when someone is replying to you. This relies on **Remember Your Posts** being enabled to track which posts are yours.

### What is the unread line?

The unread line is a horizontal rule that appears between the last post you've read and the first unread post. It helps you quickly find where you left off when returning to a thread. It's controlled by the **Unread Line** setting.

### What are "sauce" links?

"Sauce" is imageboard slang for "source." Sauce links appear next to image filenames and provide quick access to reverse image search engines (Google, Yandex, IQDB, etc.) to help you find the original source of an image. See the [Sauce documentation](./Sauce.md) for configuration details.

### How do I customize the look of 4chan XT?

You can write custom CSS in **Settings → Advanced → Custom CSS**. This lets you change colors, fonts, sizes, layouts, and more. Your CSS is injected into the page alongside 4chan XT's built-in styles.

4chan XT also supports all of 4chan's built-in themes (Yotsuba, Yotsuba B, Futaba, Burichan, Photon, Tomorrow) and detects them automatically.

### Where is my data stored?

All 4chan XT data is stored locally in your browser via your userscript manager's storage API (e.g., `GM_getValue`/`GM_setValue` for Greasemonkey-compatible managers). This includes:

- Settings and preferences
- Filter rules
- Watched threads
- Last-read post positions
- Your posting history
- Hidden threads and posts

This data persists across browser sessions, including in private browsing / incognito mode (by default). It is not synced across devices unless your userscript manager provides sync functionality.

---

*See also: [Installation →](./Installation.md) · [Getting Started →](./Getting-Started.md) · [Settings →](./Settings.md) · [Features →](./Features.md)*