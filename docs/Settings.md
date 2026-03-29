# Settings

4chan XT has a comprehensive settings panel that lets you configure every aspect of the script. Open it by clicking the **⚙** (gear) icon in the header bar, or press the **Alt+O** keyboard shortcut.

## Settings Panel Tabs

The settings dialog has five tabs:

| Tab | Purpose |
|-----|---------|
| **Main** | Toggle features on/off with checkboxes, grouped by category |
| **Filter** | Configure content filters using regex patterns |
| **Sauce** | Set up reverse image search and external links |
| **Advanced** | Power-user settings: custom formats, archives, CSS, and more |
| **Keybinds** | View and customize all keyboard shortcuts |

---

## Main Tab

The Main tab contains toggle switches for all of 4chan XT's features. A **search box** at the top of the tab lets you quickly find settings by typing part of a setting's name or description. As you type, settings that don't match are hidden in real time, and entire category groups are collapsed when none of their settings match. Clearing the search box restores the full list.

Settings are organized into these categories:

- **Miscellaneous** — General features like JSON Index, keybinds, time formatting, desktop notifications, etc.
- **Linkification** — Auto-linking URLs, embedding media, link titles
- **Filtering** — Anonymize, post/thread hiding, content filters
- **Images and Videos** — Image expansion, hover previews, gallery, sauce, WebM controls
- **Menu** — Post context menu options (report, delete, archive, download links)
- **Monitoring** — Thread updater, unread tracking, thread watcher, thread stats
- **Posting and Captchas** — Quick Reply, captcha settings, cooldown timers
- **Quote Links** — Backlinks, inline quotes, quote previews, (You) markers

Each setting has a description displayed next to its name. Some settings are sub-options (indented) that only appear when their parent setting is enabled. When using the search box, matching sub-options are revealed even if their parent is currently disabled, so you can always find what you're looking for.

At the bottom of the Main tab you will also find a summary of your currently hidden threads and posts, with a button to purge them.

---

## Filter Tab

The Filter tab provides a dropdown to select which field to filter on, and a large text area to write your filter rules. See the [Filters guide](./Filters.md) for the full syntax reference.

Available filter types:

| Type | What it matches |
|------|-----------------|
| `general` | Matches across subject, name, filename, and comment (configurable) |
| `postID` | Post number |
| `name` | Poster's name |
| `uniqueID` | Poster's unique ID |
| `tripcode` | Tripcode |
| `capcode` | Capcode (Mod, Admin, etc.) |
| `pass` | Since4Pass year |
| `email` | Email field |
| `subject` | Thread subject |
| `comment` | Post comment text |
| `flag` | Poster's flag |
| `filename` | Attached file's name |
| `dimensions` | Image dimensions (e.g. `1920x1080`) |
| `filesize` | File size |
| `MD5` | File's MD5 hash |

---

## Sauce Tab

The Sauce tab contains a text area with one link template per line. These templates generate the "sauce" (reverse image search) links that appear next to image filenames. Lines beginning with `#` are treated as comments / disabled entries.

See the [Sauce guide](./Sauce.md) for the full template syntax.

---

## Advanced Tab

The Advanced tab contains settings for power users:

### Custom Board Navigation

Customize the boards shown in the header navigation bar. The format uses bracket syntax:

```
[ toggle-all ]
[current-index-text:"Index" current-catalog-text:"Catalog"]
[external-text:"FAQ","https://example.com"]
```

- `a` — Link to board /a/
- `a-hierarchical` — Shows /a/ with sub-boards
- `toggle-all` — Toggle to show all boards
- `current-index-text:"Label"` — Link to current board's index with custom label
- `current-catalog-text:"Label"` — Link to current board's catalog with custom label
- `current-expired-text:"Label"` — Link to current board's expired threads
- `current-archive-text:"Label"` — Link to current board's archive
- `external-text:"Label","URL"` — External link
- `separator` or `|` — Visual separator

### Time Format

Customize how post timestamps are displayed using `strftime`-style tokens. See the [Formatting guide](./Formatting.md#time-format) for the full list of tokens.

**Default:** `%m/%d/%y(%a)%H:%M:%S`

### Relative Time

Controls how relative timestamps (e.g. "5 minutes ago") are shown:

| Option | Behavior |
|--------|----------|
| `Hover` | Show relative time on hover (absolute time is displayed) |
| `Show` | Show relative time directly, absolute on hover |
| `No` | Don't show relative times at all |

### File Info Format

Customize the file information line. See [Formatting guide](./Formatting.md#file-info-format) for tokens.

**Default:** `%l %d (%p%s, %r%g)`

### Backlink Format

Customize how backlinks appear. The token `%id` is replaced with the post number.

**Default:** `>>%id`

### Favicon Style

Choose the favicon style used for unread post indicators. Available styles:
- `ferongr`
- `xat-`
- `Mayhem`
- `Original`
- `dead`

### Custom CSS

Write your own CSS to further customize the appearance of 4chan. There is a toggle to enable/disable custom CSS without removing your rules.

### Archive Settings

Configure which archives are used for each board and function:
- **Thread** — Where to redirect when viewing a dead thread
- **Thread JSON** — Where to fetch thread data from (FoolFuuka archives only)
- **Post** — Where to look up individual posts (FoolFuuka archives only)
- **File** — Where to redirect for deleted images

You can select archives per-board from dropdown menus. Click **Update** to refresh the list of available archives from remote sources.

The archive list source URL can be customized. The default is:
```
https://4chenz.github.io/archives.json/archives.json
```

### Other Advanced Options

| Setting | Description |
|---------|-------------|
| **Time Locale** | Locale code for date/time formatting (e.g. `en-US`, `ja-JP`). Leave blank for browser default. |
| **Pasted Filename** | Default name for pasted images (default: `file`) |
| **Image Host** | 4chan image host domain (default: `i.4cdn.org`) |
| **Captcha Language** | Language code for the captcha widget |
| **JS Whitelist** | Whitelist for inline JavaScript on the page |
| **Default Volume** | Default volume level for videos (0.0–1.0, default: 1.0) |
| **Beep Source** | Custom URL for the notification beep sound |
| **Beep Volume** | Volume for the notification beep (0.0–1.0, default: 1.0) |

### Twitter/X Embed Settings

| Setting | Description |
|---------|-------------|
| **X Embedder** | Choose between `fxt` (FxTwitter) or `tf` (TwitFrame) |
| **FxTwitter API URL** | API endpoint for FxTwitter (default: `https://api.fxtwitter.com`) |
| **FxTwitter Language** | Language code for tweet translations |
| **FxTwitter Max Replies** | Maximum number of tweet replies to load (default: 5) |

### Aria2c Integration

| Setting | Description |
|---------|-------------|
| **Aria2c Enabled** | Enable downloading via Aria2c |
| **Aria2c URL** | JSON-RPC endpoint (default: `http://localhost:6800/jsonrpc`) |
| **Aria2c Secret** | Secret token for Aria2c authentication |

---

## Keybinds Tab

The Keybinds tab displays a table of all keyboard shortcuts with editable input fields. Click on a keybind field and press your desired key combination to change it.

There is a **Reset** button to restore all keybinds to their defaults.

See the [Keyboard Shortcuts reference](./Keyboard-Shortcuts.md) for the full list of default bindings.

---

## Import / Export / Reset

At the bottom of the settings panel are three buttons:

### Export

Saves all your settings to a JSON file. If the **Ask to Export History** option is enabled, you'll be prompted to choose whether to include browsing history data:

- Hidden threads and posts
- Watched threads
- Last-read post positions
- Your posting history
- Cooldown timers
- Index sort preferences

The exported file includes a version number and timestamp for compatibility.

### Import

Load settings from a previously exported JSON file. The importer automatically upgrades settings from older versions of 4chan X / 4chan XT.

> **Tip:** This is also how you migrate from the original 4chan X. Export your settings from 4chan X, then import them into 4chan XT.

### Reset

Resets all settings to their factory defaults. You will be asked to confirm before the reset is applied.

> ⚠️ **Warning:** This will erase all your customizations, filter rules, watched threads, and browsing history. Consider exporting your settings first.