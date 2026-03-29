# Keyboard Shortcuts

4chan XT includes a full set of configurable keyboard shortcuts. Enable them with the **Keybinds** option in Settings → Main → Miscellaneous.

You can customize all shortcuts in **Settings → Keybinds**. Click the "Reset" button to restore defaults.

---

## Keybind Format

Keybinds are written as modifier keys followed by a key name, joined with `+`:

```
[Meta+][Ctrl+][Alt+][Shift+]<key>
```

### Modifier Keys

| Modifier | Windows/Linux | macOS |
|----------|--------------|-------|
| `Meta` | Windows key | ⌘ Command |
| `Ctrl` | Ctrl | Ctrl |
| `Alt` | Alt | ⌥ Option |
| `Shift` | Shift | Shift |

### Key Names

| Key | Name |
|-----|------|
| Enter | `Enter` |
| Escape | `Esc` |
| Space | `Space` |
| Arrow keys | `Left`, `Up`, `Right`, `Down` |
| `,` | `Comma` |
| `.` | `Period` |
| `/` | `Slash` |
| `;` | `Semicolon` |
| `0`–`9` | `0`–`9` |
| `A`–`Z` | `a`–`z` (always lowercase) |

### Examples

- `Ctrl+s` — Ctrl and S
- `Shift+Enter` — Shift and Enter
- `Alt+Shift+Left` — Alt, Shift, and Left arrow

> **Note:** When typing in a text field, only keybinds that include `Ctrl`, `Alt`, `Meta`, or `Esc` will fire. Bare letter/number keys are suppressed so they don't interfere with your typing.

### Multiple Actions per Keybind

A single keybind can trigger multiple actions. Configure this in the Keybinds settings tab.

---

## Default Shortcuts

### Quick Reply & Settings

| Action | Default | Description |
|--------|---------|-------------|
| Open empty QR | `q` | Open Quick Reply without a post number |
| Open QR | `Shift+q` | Open Quick Reply with the selected post number |
| Submit QR | `Ctrl+Enter` | Submit your post |
| Open settings | `Alt+o` | Open the Settings panel |
| Close | `Esc` | Close dialogs or notifications |
| Toggle board list | `Ctrl+b` | Toggle the full board list |
| Toggle header | `Shift+h` | Toggle header auto-hide |

### Text Formatting (in Quick Reply)

| Action | Default | Description |
|--------|---------|-------------|
| Spoiler tags | `Ctrl+s` | Insert spoiler tags |
| Code tags | `Alt+c` | Insert code tags |
| Eqn tags | `Alt+e` | Insert eqn tags |
| Math tags | `Alt+m` | Insert math tags |
| SJIS tags | `Alt+a` | Insert SJIS tags |

### Quick Reply Options

| Action | Default | Description |
|--------|---------|-------------|
| Toggle sage | `Alt+s` | Toggle sage in the email/options field |
| Toggle Cooldown | `Alt+Comma` | Toggle custom cooldown timer |
| Post from URL | `Alt+l` | Post an image from a URL |
| Add new post | `Alt+n` | Add a new post to the QR dump list |

### Thread Actions

| Action | Default | Description |
|--------|---------|-------------|
| Watch | `w` | Watch/unwatch the current thread |
| Update | `r` | Update the thread / refresh the index |
| Update thread watcher | `Shift+r` | Manually refresh the thread watcher |
| Toggle thread watcher | `t` | Show/hide the thread watcher panel |
| Toggle threading | `Shift+t` | Toggle threaded (tree) view |
| Mark thread read | `Ctrl+0` | Mark thread as read from the index (requires "Unread Line in Index") |
| Hide | `x` | Hide the current thread |

### Image & Gallery

| Action | Default | Description |
|--------|---------|-------------|
| Expand image | `Shift+e` | Expand the selected image |
| Expand images | `e` | Expand all images in the thread |
| Open Gallery | `g` | Open the image gallery |
| Next Gallery Image | `Right` | Next image in gallery |
| Previous Gallery Image | `Left` | Previous image in gallery |
| Advance Gallery | `Enter` | Next image, or play video if autoplay is off |
| Pause | `p` | Pause/play video in gallery |
| Slideshow | `Ctrl+Right` | Toggle gallery slideshow mode |
| Rotate image clockwise | `Shift+Right` | Rotate image clockwise in gallery |
| Rotate image anticlockwise | `Shift+Left` | Rotate image anticlockwise in gallery |
| Download Gallery Image | `Shift+j` | Download the current gallery image |
| Fappe Tyme | `f` | Toggle Fappe Tyme (hide text-only posts) |
| Werk Tyme | `Shift+w` | Toggle Werk Tyme (hide all images) |

### Board & Index Navigation

| Action | Default | Description |
|--------|---------|-------------|
| Front page | `1` | Jump to the front page |
| Open front page | `Shift+1` | Open the front page in a new tab |
| Next page | `Ctrl+Right` | Jump to the next page |
| Previous page | `Ctrl+Left` | Jump to the previous page |
| Paged mode | `Alt+1` | Switch index to paged mode |
| Infinite scrolling mode | `Alt+2` | Switch index to infinite scrolling mode |
| All pages mode | `Alt+3` | Switch index to all-threads mode |
| Open catalog | `Shift+c` | Open the catalog for the current board |
| Search form | `Ctrl+Alt+s` | Focus the search field on the board index |
| Cycle sort type | `Alt+x` | Cycle through index sort types |

### Thread & Reply Navigation

| Action | Default | Description |
|--------|---------|-------------|
| Next thread | `Ctrl+Down` | Navigate to the next thread |
| Previous thread | `Ctrl+Up` | Navigate to the previous thread |
| Expand thread | `Ctrl+e` | Expand the current thread in the index |
| Open thread | `o` | Open thread in the current tab |
| Open thread tab | `Shift+o` | Open thread in a new tab |
| Next reply | `j` | Select the next reply |
| Previous reply | `k` | Select the previous reply |
| Deselect reply | `Shift+d` | Deselect the current reply |

### Filtering

| Action | Default | Description |
|--------|---------|-------------|
| Quick Filter MD5 | `5` | Add the selected image's MD5 to the filter list |
| Previous Post Quoting You | `Alt+Up` | Scroll to the previous post that quotes you |
| Next Post Quoting You | `Alt+Down` | Scroll to the next post that quotes you |

---

## Tips

- **Conflicting keybinds:** If a 4chan XT keybind conflicts with a browser or OS shortcut, you can change it in Settings → Keybinds.
- **Disabling keybinds entirely:** Uncheck "Keybinds" in Settings → Main → Miscellaneous.
- **Clearing a keybind:** Press Backspace in the keybind input field to clear it.