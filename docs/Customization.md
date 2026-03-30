# Customization

4chan XT offers extensive customization options for its appearance and behavior. This guide covers Custom CSS, time formatting, file info formatting, board navigation, and other personalization options.

---

## Table of Contents

- [Custom CSS](#custom-css)
- [Time Formatting](#time-formatting)
- [Relative Time](#relative-time)
- [File Info Formatting](#file-info-formatting)
- [Backlink Formatting](#backlink-formatting)
- [Custom Board Navigation](#custom-board-navigation)
- [Header Options](#header-options)
- [Index Options](#index-options)
- [Custom Board Titles](#custom-board-titles)
- [Favicon Style](#favicon-style)
- [QR Personas](#qr-personas)
- [Color User IDs](#color-user-ids)
- [External Catalog](#external-catalog)
- [Aria2c Download Integration](#aria2c-download-integration)

---

## Custom CSS

4chan XT lets you write your own CSS to customize the look and feel of every page. Configure it in **Settings → Advanced → Custom CSS**.

### Enabling Custom CSS

1. Open **Settings → Advanced**.
2. Scroll down to the **Custom CSS** section.
3. Check the **Apply** toggle to enable custom CSS.
4. Write your CSS rules in the text area.
5. Close settings — your CSS is applied immediately.

You can toggle custom CSS on and off without losing your rules by unchecking/checking the **Apply** toggle.

### Useful CSS Selectors

Here are some commonly targeted elements:

| Selector | What It Targets |
|----------|-----------------|
| `.post` | Individual posts |
| `.op` | Original post (OP) in a thread |
| `.reply` | Reply posts |
| `.post.highlight` | A post that is highlighted (e.g., via quote preview) |
| `.nameBlock` | Name / tripcode / capcode block |
| `.posteruid` | Poster unique ID span |
| `.postNum` | Post number links |
| `.file` | File information area |
| `.fileText` | File name and info text |
| `.fileThumb` | Thumbnail container |
| `#header-bar` | The 4chan XT header bar |
| `#shortcuts` | Header shortcut icons container |
| `#qr` | The Quick Reply dialog |
| `.dialog` | Any 4chan XT dialog/panel |
| `#thread-watcher` | The thread watcher panel |
| `.thread-stats` | Thread statistics element |
| `#embedding` | Floating embed container |
| `.filter-highlight` | Posts highlighted by a filter rule |
| `.qr-preview` | Quick Reply file preview |
| `.unread-line` | The unread posts separator line |
| `.catalog-thread` | Thread cards in catalog mode |

### CSS Custom Properties

4chan XT defines CSS custom properties (variables) prefixed with `--xt-` that control the colors and appearance of nearly every UI element. Each built-in theme (Yotsuba, Yotsuba B, Futaba, Burichan, Photon, Tomorrow, Spooky) sets these variables to match its palette. You can override any of them in your Custom CSS to tweak individual colors without rewriting entire rule sets.

To override a variable, set it on `:root`:

```css
:root {
  --xt-background: #1a1a2e;
  --xt-border: #333;
}
```

#### General

These variables are used across dialogs, panels, and general UI chrome.

| Variable | Default | Description |
|----------|---------|-------------|
| `--xt-background` | *(theme-dependent)* | Background color for dialogs, settings panel, catalog hover cards, scrollbar thumbs, and other UI surfaces. |
| `--xt-border` | *(theme-dependent)* | Border color for dialogs, settings panel, catalog entries, inline quote expansions, and other bordered elements. |
| `--xt-border-field-focus` | *(theme-dependent)* | Border color applied to input fields when focused. |
| `--xt-notification-size` | `9pt` | Font size for the header bar (when not fixed) and notification banners. |

#### Header

| Variable | Default | Description |
|----------|---------|-------------|
| `--xt-header-dialog-bg` | *(theme-dependent)* | Background color of the fixed header bar. |
| `--xt-header-dialog-fg` | *(theme-dependent)* | Text color of the header bar and notification banners. |
| `--xt-header-link` | `unset` | Color of board links and shortcut icons in the header. Also used as the fallback text color for the context menu. |

#### Quick Reply

| Variable | Default | Description |
|----------|---------|-------------|
| `--xt-qr-preview-bg` | `rgba(0, 0, 0, .15)` | Background color of the file preview thumbnail in the Quick Reply. |
| `--xt-qr-link-border` | *(theme-dependent)* | Border color of the floating Quick Reply button. |
| `--xt-qr-bg` | *(theme-dependent)* | Background gradient/color of the floating Quick Reply button. |
| `--xt-link-hover-bg` | Falls back to `--xt-background` | Background of the Quick Reply button on hover. |

#### Menu

| Variable | Default | Description |
|----------|---------|-------------|
| `--xt-menu-fg` | Falls back to `--xt-header-link` | Text color of the dropdown context menu. |
| `--xt-entry-size` | `10pt` | Font size for menu entries. |
| `--xt-entry-focus-bg` | *(theme-dependent)* | Background color of a menu entry when hovered/focused. |

#### Quoting & Highlighting

These control the appearance of posts that quote you, your own posts, filter-highlighted posts, and quote previews.

| Variable | Default | Description |
|----------|---------|-------------|
| `--xt-border-highlight` | `rgba(221, 0, 0, .8)` | Left-border color for posts quoting you (solid) and your own posts (dashed). Also the fallback color for scroll markers. |
| `--xt-qphl` | `rgba(216, 94, 49, .8)` | Outline color for the highlighted post when hovering a quote link (quote-preview highlight). |
| `--xt-filter-highlight` | `rgba(221, 0, 0, .5)` | Left inset shadow color on posts matched by a filter `highlight` rule. |
| `--xt-highlight-shadow` | `rgba(255, 0, 0, .5)` | Box shadow color for filter-highlighted threads in the catalog. |
| `--xt-highlight-side-arrow` | `rgba(221, 0, 0, .8)` | Color of the `>>` side arrows next to highlighted or (You)-quoted posts. |
| `--xt-inline` | `rgba(255, 255, 255, .14)` | Background color of inline-expanded quote blocks. |
| `--xt-dead-link` | *(theme-dependent)* | Color of dead (404'd) quote links and backlinks. Also used for tweet embed stats text. |

#### Monitoring & Unread

| Variable | Default | Description |
|----------|---------|-------------|
| `--xt-unread` | *(theme-dependent)* | Background color for the "mark read" button strip on unread posts. |
| `--xt-unread-line` | `rgb(255, 0, 0)` | Color of the horizontal line separating read from unread posts, and the corresponding scroll bar marker. Dark themes (Tomorrow, Spooky) override this to a lighter gray. |
| `--xt-watcher` | `#000` | Color of the thread-watcher star icon. |
| `--xt-watcher-quoting-you` | `#F00` | Text color in the thread watcher when a thread has unread replies quoting you. |
| `--xt-watched-border` | `rgba(255, 0, 0, .75)` | Border color around watched-thread thumbnails in the catalog. |

#### Scroll Markers

| Variable | Default | Description |
|----------|---------|-------------|
| `--xt-scroll-marker-you` | Falls back to `--xt-border-highlight` | Color of the scroll bar markers indicating your posts and replies to you. |

#### FxTwitter Embeds

| Variable | Default | Description |
|----------|---------|-------------|
| `--xt-fxt-bg` | Falls back to `--xt-background` | Background color for embedded tweet cards. |
| `--xt-fxt-fg` | `#000` | Text color for embedded tweet cards. Dark themes override this. |
| `--xt-fxt-border` | Falls back to `--xt-border` | Border and separator color for embedded tweet cards, profile images, and reply threads. |

### CSS Class Entry Points

Beyond CSS variables, you can target specific 4chan XT elements directly. The classes below are the main entry points for styling — they are stable, deliberately applied by the script, and safe to use in Custom CSS rules.

#### Page & Board Context

Classes on the `<html>` element that let you scope rules by context:

| Class | When Applied |
|-------|-------------|
| `.ws` | Work-safe (blue) boards |
| `.nsw` | Not-safe-for-work (red) boards |
| `.fixed` | Fixed header is enabled |
| `.top-header` | Header is at the top of the page |
| `.bottom-header` | Header is at the bottom of the page |
| `.autohide` | Header auto-hide is active |
| `.werkTyme` | "Work Mode" is enabled (hides thumbnails, simplifies layout) |
| `.catalog-hover-expand` | Catalog hover-expand is enabled |
| `.yotsuba`, `.yotsuba-b`, `.futaba`, `.burichan`, `.photon`, `.tomorrow`, `.spooky` | The currently active 4chan theme |

#### Posts

| Selector | Description |
|----------|-------------|
| `.post` | Any post (OP or reply) |
| `.op` | The original post (thread opener) |
| `.reply` | A reply post |
| `.post.highlight` | A post highlighted by hovering a quote link |
| `.yourPost` | A post you made (requires "Highlight Own Posts") |
| `.quotesYou` | A post that quotes you (requires "Highlight Posts Quoting You") |
| `.filter-highlight` | A post matched by a filter `highlight` rule. Custom class names from `highlight:classname` filter rules are also added here. |
| `.post-hidden` | A hidden post (collapsed by filter or manual hide) |

#### Thread Monitoring

| Selector | Description |
|----------|-------------|
| `.unread-line` | The `<hr>` element separating read from unread posts. |
| `.unread-mark-read` | The "mark as read" overlay strip on unread posts. |

#### Header & Navigation

| Selector | Description |
|----------|-------------|
| `#header-bar` | The 4chan XT header bar container. |
| `#board-list` | The board navigation links inside the header. |
| `#shortcuts` | Container for the shortcut icons (settings, watcher, gallery, etc.) in the header. |
| `#scroll-marker` | The small marker on the header that indicates scroll position. |

#### Quick Reply

| Selector | Description |
|----------|-------------|
| `#qr` | The Quick Reply dialog. |
| `.qr-link` | The floating "Quick Reply" button that opens the QR dialog. |
| `.qr-preview` | The image preview thumbnail inside the Quick Reply. |
| `#dump-list` | The file queue list when dumping multiple images. |

#### Dialogs & Panels

| Selector | Description |
|----------|-------------|
| `.dialog` | Any 4chan XT dialog or panel (settings, thread watcher, etc.). All dialogs share `--xt-background` and `--xt-border`. |
| `#fourchanx-settings` | The settings panel specifically. |
| `#thread-watcher` | The thread watcher panel. |
| `#menu` | The dropdown context menu. |
| `.entry` | An individual item inside a dropdown menu. |
| `.focused.entry` | The currently hovered/focused menu item. |
| `#notifications` | The notification banner area. |

#### Images & Gallery

| Selector | Description |
|----------|-------------|
| `.file` | The file info area (filename, size, dimensions). |
| `.fileText` | The text portion of the file info line. |
| `.fileThumb` | The thumbnail container. |
| `#ihover` | The image hover preview overlay. |
| `#embedding` | The floating media embed container (YouTube, etc.). |

#### Catalog

| Selector | Description |
|----------|-------------|
| `.catalog-thread` | A thread card in catalog view. |
| `.catalog-thumb` | The thumbnail image inside a catalog thread card. |
| `.catalog-thread.watched` | A watched thread in the catalog. |
| `.catalog-thread.filter-highlight` | A filter-highlighted thread in the catalog. |

#### Scroll Markers

| Selector | Description |
|----------|-------------|
| `.scroll-marker-container` | The container holding all scroll bar markers (uses `display: contents`). |
| `.post-scroll-marker` | A scroll bar marker for one of your posts or a reply to you. |
| `.you-scroll-marker` | Modifier on `.post-scroll-marker` for your own posts (displayed at reduced opacity). |
| `.reply-scroll-marker` | Modifier on `.post-scroll-marker` for posts that quote you. |
| `.unread-scroll-marker` | The scroll bar marker showing the position of the unread line. |

#### Inline Quotes & Backlinks

| Selector | Description |
|----------|-------------|
| `.inline` | An inline-expanded quote block. |
| `.backlink` | A backlink (a link from a later post pointing back to this one). |
| `.backlink.deadlink` | A backlink to a post that no longer exists. |
| `.qphl` | The quote-preview highlight outline on a post being previewed. |

### Theming Tips

- **Theme-specific overrides.** Scope your Custom CSS to a specific 4chan theme if you only want it to apply there:

  ```css
  :root.tomorrow {
    --xt-unread-line: #81A2BE;
  }
  ```

- **Dark theme detection.** The Tomorrow and Spooky themes set `color-scheme: dark` on `:root`, so you can use this as a hook:

  ```css
  :root[style*="color-scheme: dark"] {
    --xt-background: #1c1c1c;
  }
  ```

  Or target both dark themes at once:

  ```css
  :root.tomorrow, :root.spooky {
    --xt-inline: rgba(255, 255, 255, 0.05);
  }
  ```

- **Oneechan compatibility.** 4chan XT detects when the Oneechan extension is active and adds a `.oneechan` class to `:root`. Some highlight rules are scoped with `:root:not(.oneechan)` to avoid conflicts. If you use Oneechan, keep this in mind when writing highlight-related overrides.

- **Variable fallback chains.** Some variables fall back to other variables (e.g., `--xt-link-hover-bg` falls back to `--xt-background`; `--xt-menu-fg` falls back to `--xt-header-link`). Changing a "parent" variable will cascade to its dependents unless they are explicitly set.

### Example: Custom Styles

#### Wider thumbnails

```css
.fileThumb img {
  max-width: 200px !important;
  max-height: 200px !important;
}
```

#### Highlight your own posts

```css
.yourPost {
  border-left: 4px solid #5c90d2 !important;
}
```

#### Customize the header bar

```css
#header-bar {
  background-color: #1a1a2e !important;
  font-size: 13px !important;
}
```

#### Change the unread line color

```css
.unread-line {
  border-color: #ff4444 !important;
}
```

#### Style filter-highlighted posts

```css
.filter-highlight {
  border-left: 3px solid #ff6600 !important;
  background-color: rgba(255, 102, 0, 0.05) !important;
}

.my-custom-class {
  border-left: 3px solid #00cc00 !important;
  background-color: rgba(0, 204, 0, 0.05) !important;
}
```

Use custom filter highlight classes with the `highlight:classname` option in your [filter rules](./Filtering.md).

#### Make the thread watcher wider

```css
#thread-watcher {
  max-width: 400px !important;
}
```

#### Hide the board banner image

```css
.boardBanner img {
  display: none !important;
}
```

### Tips

- Use `!important` to override default styles if your rules aren't taking effect.
- Use your browser's DevTools (F12) to inspect elements and discover the correct selectors.
- The **Custom CSS** setting is global and persists across all boards and pages.
- 4chan has multiple built-in themes (Yotsuba, Yotsuba B, Futaba, Burichan, Photon, Tomorrow). Your custom CSS applies on top of whichever theme the user has selected, so consider testing with multiple themes.
- Board-specific CSS classes `ws` (work-safe) and `nsw` (not-safe-for-work) are added to the document, allowing you to write board-type-specific rules:

```css
/* Only apply to NSFW boards */
.nsw .post {
  border-left: 2px solid red;
}
```

---

## Time Formatting

**Setting:** Miscellaneous → **Time Formatting** (on by default)

Customize how post timestamps are displayed using `strftime`-style format tokens. Configure the format string in **Settings → Advanced → Time Format**.

**Default format:** `%m/%d/%y(%a)%H:%M:%S`

**Default output:** `01/15/25(Wed)14:30:45`

### Time Format Tokens

| Token | Description | Example |
|-------|-------------|---------|
| `%a` | Abbreviated weekday name (locale-aware) | `Mon` |
| `%A` | Full weekday name (locale-aware) | `Monday` |
| `%b` | Abbreviated month name (locale-aware) | `Jan` |
| `%B` | Full month name (locale-aware) | `January` |
| `%d` | Day of month, zero-padded | `03` |
| `%e` | Day of month, no padding | `3` |
| `%H` | Hour (24-hour), zero-padded | `14` |
| `%I` | Hour (12-hour), zero-padded | `02` |
| `%k` | Hour (24-hour), no padding | `9` |
| `%l` | Hour (12-hour), no padding | `2` |
| `%m` | Month number, zero-padded | `01` |
| `%n` | Month number, no padding | `1` |
| `%M` | Minutes, zero-padded | `05` |
| `%p` | AM/PM (locale-aware, preserves locale case) | `PM` |
| `%P` | am/pm (always lowercase) | `pm` |
| `%S` | Seconds, zero-padded | `09` |
| `%y` | Two-digit year | `25` |
| `%Y` | Four-digit year | `2025` |
| `%%` | Literal `%` character | `%` |

### Example Formats

| Format String | Output |
|---------------|--------|
| `%m/%d/%y(%a)%H:%M:%S` | `01/15/25(Wed)14:30:45` (default) |
| `%Y-%m-%d %H:%M:%S` | `2025-01-15 14:30:45` (ISO-like) |
| `%d %B %Y, %l:%M %p` | `15 January 2025, 2:30 PM` |
| `%a %b %e, %Y %k:%M` | `Wed Jan 15, 2025 14:30` |
| `%I:%M %p` | `02:30 PM` (time only) |
| `%d/%m/%y %H:%M` | `15/01/25 14:30` (European style) |

### Time Locale

**Setting:** Settings → Advanced → **Time Locale**

Set a locale code to control how locale-dependent tokens (`%a`, `%A`, `%b`, `%B`, `%p`) are rendered. This uses the browser's `Intl.DateTimeFormat` API.

| Value | Result |
|-------|--------|
| *(blank)* | Uses your browser's default locale |
| `en-US` | English (United States) — e.g., `Mon`, `January`, `PM` |
| `en-GB` | English (United Kingdom) |
| `ja-JP` | Japanese — e.g., `月`, `1月` |
| `de-DE` | German — e.g., `Mo`, `Januar` |
| `fr-FR` | French — e.g., `lun.`, `janvier` |

---

## Relative Time

**Setting:** Settings → Advanced → **Relative Time**

Controls whether and how relative timestamps (e.g., "5 minutes ago") are shown alongside or instead of absolute timestamps.

| Option | Behavior |
|--------|----------|
| `Hover` (default) | Display the formatted absolute time. Relative time appears on hover. |
| `Show` | Display relative time directly (e.g., "5 minutes ago"). Absolute time appears on hover. |
| `No` | Only show the absolute formatted time. No relative time at all. |

---

## File Info Formatting

**Setting:** Miscellaneous → **File Info Formatting** (on by default)

Customize how the file information line is displayed under each image. Configure the format string in **Settings → Advanced → File Info Format**.

**Default format:** `%l %d (%p%s, %r%g)`

**Default output:** `filename.jpg ⬇ (1.23 MB, 1920x1080)`

### File Info Tokens

| Token | Description | Example Output |
|-------|-------------|----------------|
| `%t` | Server filename (the timestamp-based name) | `1234567890123.jpg` |
| `%T` | Server filename as a clickable link | *(clickable link)* |
| `%l` | Original filename (truncated if long) as a link | *(clickable link)* |
| `%L` | Original filename (full, never truncated) as a link | *(clickable link)* |
| `%n` | Original filename (truncated, hover shows full name) | `my_long_filen...` |
| `%N` | Original filename (always full, never truncated) | `my_long_filename.png` |
| `%d` | Download button (icon) | *(download icon)* |
| `%f` | Quick filter MD5 button (✕ icon) | *(filter icon)* |
| `%p` | `"Spoiler, "` if the file is spoilered, otherwise empty | `Spoiler, ` |
| `%s` | Human-readable file size (as displayed by 4chan) | `1.23 MB` |
| `%B` | File size in bytes (rounded) | `1290000` |
| `%K` | File size in KB (rounded) | `1260` |
| `%M` | File size in MB (rounded to 2 decimals) | `1.23` |
| `%r` | Image dimensions, or `"PDF"` for PDFs | `1920x1080` |
| `%g` | File tag (e.g., `", Loop"` for animated files), empty if none | `, Loop` |
| `%%` | Literal `%` character | `%` |

### Example Formats

| Format String | Result |
|---------------|--------|
| `%l %d (%p%s, %r%g)` | `filename.jpg ⬇ (1.23 MB, 1920x1080)` (default) |
| `%N (%s, %r)` | `my_full_filename.png (456 KB, 800x600)` |
| `%l %d %f (%s)` | `filename.jpg ⬇ ✕ (1.23 MB)` (includes filter button) |
| `%t [%B bytes] %r` | `1234567890123.jpg [1290000 bytes] 1920x1080` |
| `%L %d` | `full_filename.png ⬇` (minimal, with download) |

---

## Backlink Formatting

**Setting:** Settings → Advanced → **Backlink Format**

Customize how backlinks (links to posts that quote the current post) are displayed.

**Default format:** `>>%id`

### Tokens

| Token | Description |
|-------|-------------|
| `%id` | The post number of the quoting post |

### Examples

| Format | Output |
|--------|--------|
| `>>%id` | `>>12345678` (default) |
| `[%id]` | `[12345678]` |
| `#%id` | `#12345678` |

---

## Custom Board Navigation

**Setting:** Settings → Advanced → **Custom Board Navigation**

Customize the board links that appear in the header bar. This is enabled when **Custom Board Navigation** is checked in the Header settings.

### Default Configuration

```
[ toggle-all ]
[current-index-text:"Index"
current-catalog-text:"Catalog"
current-expired-text:"Expired"
current-archive-text:"Archive"]
[external-text:"FAQ","https://github.com/TuxedoTako/4chan-xt/wiki/Frequently-Asked-Questions"]
```

### Syntax

Board navigation entries are enclosed in square brackets. Each bracket group defines one or more navigation items.

#### Board Links

Simply list board names (without slashes) separated by spaces:

```
[a b c g v vg mu]
```

This creates links to `/a/`, `/b/`, `/c/`, `/g/`, `/v/`, `/vg/`, and `/mu/`.

#### Special Keywords

| Keyword | Description |
|---------|-------------|
| `toggle-all` | A toggle link that shows/hides the full board list |
| `current-index-text:"Label"` | Link to the current board's index with a custom label |
| `current-catalog-text:"Label"` | Link to the current board's catalog with a custom label |
| `current-expired-text:"Label"` | Link to the current board's expired threads |
| `current-archive-text:"Label"` | Link to the current board's archive |
| `external-text:"Label","URL"` | An external link with custom text and URL |
| `separator` or `\|` | A visual separator between links |

#### Examples

Minimal navigation with just a few boards:

```
[a g v mu]
[current-index-text:"Index" current-catalog-text:"Catalog"]
```

Full board list with toggle and external links:

```
[ toggle-all ]
[a b c d e f g gif h hr k m o p r s t u v vg vm vmg vp vr w wg wsg wsr]
[current-index-text:"Index" current-catalog-text:"Catalog"]
[external-text:"FAQ","https://example.com/faq"]
```

---

## Header Options

The header bar is the persistent navigation bar at the top (or bottom) of every page. Configure these in **Settings → Main** (under the Header category that appears in Settings → Advanced):

| Option | Default | Description |
|--------|---------|-------------|
| **Fixed Header** | ✅ On | Keep the header fixed at the top of the viewport as you scroll. |
| **Header auto-hide** | ❌ Off | Automatically hide the header when you're not interacting with it. |
| **Header auto-hide on scroll** | ❌ Off | Hide the header when scrolling down, show it when scrolling up. |
| **Bottom Header** | ❌ Off | Move the header to the bottom of the page instead of the top. |
| **Centered links** | ❌ Off | Center the board navigation links in the header. |
| **Header catalog links** | ❌ Off | Make header board links go to catalogs instead of indexes. |
| **Bottom Board List** | ✅ On | Show the native 4chan board list at the bottom of the page. |
| **Shortcut Icons** | ✅ On | Show feature shortcut icons in the header bar. |
| **Custom Board Navigation** | ✅ On | Use custom board navigation instead of the default board list. |

### Keyboard Shortcuts

| Action | Default Key | Description |
|--------|-------------|-------------|
| Toggle board list | `Ctrl+B` | Toggle the full board list visibility |
| Toggle header | `Shift+H` | Toggle the header auto-hide option |

---

## Index Options

The JSON Index replaces the default board index with an enhanced version. Configure these in **Settings → Advanced → Index**:

| Option | Default | Description |
|--------|---------|-------------|
| **Index Mode** | `paged` | Current view mode: `paged`, `infinite`, or `all pages` |
| **Index Size** | `small` | Size of thread previews in the index |
| **Show Replies** | ✅ On | Show reply previews in the index. Also affects catalog hover expand. |
| **Catalog Hover Expand** | ❌ Off | Expand thread details and comments when hovering over catalog entries. |
| **Catalog Hover Toggle** | ✅ On | Toggle "Catalog Hover Expand" on and off by clicking in the catalog. |
| **Pin Watched Threads** | ❌ Off | Move watched threads to the top of the index. |
| **Anchor Hidden Threads** | ✅ On | Move hidden threads to the bottom of the index. |
| **Refreshed Navigation** | ❌ Off | Refresh the index data when navigating between pages. |

### Index Mode Shortcuts

| Action | Default Key | Description |
|--------|-------------|-------------|
| Paged mode | `Alt+1` | Switch to paged browsing |
| Infinite scrolling mode | `Alt+2` | Switch to infinite scroll |
| All pages mode | `Alt+3` | Show all threads at once |
| Cycle sort type | `Alt+X` | Cycle through sort options |

---

## Custom Board Titles

**Setting:** Miscellaneous → **Custom Board Titles** (on by default)

Ctrl-click (or ⌘-click on macOS) a board's title or subtitle text to edit it. This lets you set a custom title for any board.

| Option | Default | Description |
|--------|---------|-------------|
| **Custom Board Titles** | ✅ On | Allow editing board titles by Ctrl/⌘-clicking them. |
| **Persistent Custom Board Titles** | ❌ Off | Keep custom titles even when the board's real title is updated by 4chan. |

---

## Favicon Style

**Setting:** Settings → Advanced → **Favicon**

Choose which icon set is used for the browser tab's favicon when indicating unread posts, dead threads, and (You) replies.

| Style | Description |
|-------|-------------|
| `ferongr` (default) | Ferongr's icon set |
| `xat-` | xat-'s icon set |
| `Mayhem` | Mayhem's icon set |
| `Original` | The original 4chan X icons |
| `dead` | Dead-thread-focused icons |

Each style has multiple variants:
- **SFW** (blue-tinted) — for work-safe boards
- **NSFW** (red-tinted) — for not-safe-for-work boards
- **Dead** — for 404'd threads
- **(You)** — when someone replies to your post

---

## QR Personas

**Setting:** Settings → Advanced → **QR Personas**

Configure default posting identities (name, email/options, subject) that are automatically applied when posting on specific boards.

### Format

```
#name:"Name";options:"email_or_options";boards:board1,board2;always
```

### Fields

| Field | Description |
|-------|-------------|
| `name:"Value"` | Default name field |
| `options:"Value"` | Default email/options field (e.g., `"sage"`) |
| `boards:` | Comma-separated list of boards this persona applies to |
| `always` | Always apply this persona (not just as a default) |

### Examples

Always sage on /jp/:

```
#options:"sage";boards:jp;always
```

Set a name on /b/:

```
#name:"Anonymous";boards:b
```

---

## Color User IDs

**Setting:** Miscellaneous → **Color User IDs** (on by default)

On boards that display unique poster IDs, 4chan XT assigns a distinct background color to each ID, making it easier to follow conversations and identify individual posters at a glance.

**Related:** **Count Posts by ID** (on by default) — Hover over a user ID to see how many posts that person has made in the thread.

---

## External Catalog

**Setting:** Miscellaneous → **External Catalog** (off by default)

When enabled, catalog links point to an external catalog service instead of the built-in 4chan XT catalog. Configure the external catalog URLs in **Settings → Advanced → External Catalog URLs**.

The default external catalog URL template is:

```
//catalog.neet.tv/%board/;boards:4chan.org:3,a,adv,an,asp,biz,...
```

### Format

Each line specifies a URL template and the boards it applies to:

```
URL_TEMPLATE;boards:site:board1,board2,...
```

The `%board` token in the URL is replaced with the current board name.

---

## Aria2c Download Integration

4chan XT can integrate with [aria2](https://aria2.github.io/), an external download manager, for downloading files.

### Settings

Configure in **Settings → Advanced**:

| Setting | Default | Description |
|---------|---------|-------------|
| **Aria2c Enabled** | ❌ Off | Enable downloading via aria2's JSON-RPC interface. |
| **Aria2c URL** | `http://localhost:6800/jsonrpc` | The aria2 JSON-RPC endpoint URL. |
| **Aria2c Secret** | *(blank)* | The secret token for aria2c authentication (if configured). |

### How to Use

1. Install and run [aria2](https://aria2.github.io/) with the `--enable-rpc` flag.
2. Enable **Aria2c Enabled** in 4chan XT settings.
3. Set the **Aria2c URL** if it differs from the default.
4. If you've configured a secret token in aria2, enter it in **Aria2c Secret**.
5. Downloads from 4chan XT (e.g., via the Download Link menu option or gallery downloads) will be sent to aria2 instead of using the browser's built-in downloader.

---

## Tips for Customization

- **Start small:** Make one change at a time in Custom CSS so you can identify what each rule does.
- **Use DevTools:** Right-click any element → Inspect to find the CSS selectors you need.
- **Back up your settings:** Before making major changes, export your settings from the settings panel so you can revert if needed.
- **Test across themes:** 4chan has multiple themes (Yotsuba, Yotsuba B, Futaba, Burichan, Photon, Tomorrow). Your custom CSS should ideally work with all of them, or use theme-specific selectors if needed.
- **Share your config:** If you've created a nice set of customizations, you can export your settings and share the JSON file with others.

---

*See also: [Settings →](./Settings.md) · [Filtering →](./Filtering.md) · [Features →](./Features.md) · [Keyboard Shortcuts →](./Keyboard-Shortcuts.md)*
