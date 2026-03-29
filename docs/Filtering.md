# Filtering

4chan XT's filtering system lets you hide or highlight posts based on their content. Filters use regular expressions and can match against names, tripcodes, comments, subjects, filenames, poster IDs, MD5 hashes, and more.

---

## Table of Contents

- [Quick Start](#quick-start)
- [Where to Configure Filters](#where-to-configure-filters)
- [Filter Syntax](#filter-syntax)
- [Filter Types](#filter-types)
- [Options Reference](#options-reference)
- [Examples](#examples)
- [Quick Filtering](#quick-filtering)
- [Recursive Hiding](#recursive-hiding)
- [Tips & Notes](#tips--notes)

---

## Quick Start

1. Open **Settings → Filter**
2. Select a filter type from the dropdown (e.g., `comment`)
3. Add a line with a regex pattern, for example:
   ```
   /reddit/i
   ```
4. Close settings — matching posts will be hidden immediately on page refresh.

To **highlight** instead of hide, add the `highlight` option:

```
/reddit/i;highlight
```

---

## Where to Configure Filters

Filters are configured in **Settings → Filter**. Select the filter type from the dropdown menu at the top, then enter your filter rules in the text area below — one rule per line.

Lines beginning with `#` are treated as comments and are ignored.

The **Filter** setting must be enabled in **Settings → Main → Filtering** for any filters to take effect.

---

## Filter Syntax

Each filter rule follows this format:

```
/pattern/flags;option1:value1;option2:value2
```

### Components

| Part | Required | Description |
|------|----------|-------------|
| `/pattern/` | Yes | A JavaScript regular expression |
| `flags` | No | Regex flags: `i` (case-insensitive), `m` (multiline), `g` (global) |
| `;options` | No | Semicolon-separated list of options that control the filter's behavior |

### Special Cases

- **MD5 and uniqueID filters** use exact string matching instead of regular expressions for performance. The value between the `/` delimiters is matched literally.
- **General filters** match across multiple fields simultaneously (subject, name, filename, comment by default).

---

## Filter Types

Select the type from the dropdown in the Filter settings tab.

| Type | What It Matches | Match Method |
|------|-----------------|-------------|
| `general` | Multiple fields at once (default: subject, name, filename, comment) | Regex |
| `postID` | The post number (e.g., `12345678`) | Regex |
| `name` | The poster's name field | Regex |
| `uniqueID` | The poster's unique ID (on boards that show IDs) | Exact string |
| `tripcode` | The poster's tripcode (e.g., `!AbCdEfGhIj`) | Regex |
| `capcode` | Capcode text (e.g., `Mod`, `Admin`, `Manager`) | Regex |
| `pass` | The Since4Pass year (e.g., `2016`) | Regex |
| `email` | The email/options field | Regex |
| `subject` | The thread subject line | Regex |
| `comment` | The post's comment text (HTML stripped) | Regex |
| `flag` | The poster's flag (country name or custom flag) | Regex |
| `filename` | The original filename of any attached file | Regex |
| `dimensions` | Image dimensions as `WIDTHxHEIGHT` (e.g., `1920x1080`) | Regex |
| `filesize` | File size as a string (e.g., `8.8 MB`) | Regex |
| `MD5` | The file's base64-encoded MD5 hash | Exact string |

---

## Options Reference

Options are appended after the regex, separated by semicolons. All options are optional.

### Visibility Options

| Option | Values | Default | Description |
|--------|--------|---------|-------------|
| `hide` | (flag) | Yes (if no `highlight` or `notify`) | Hide the matching post. This is the default behavior. |
| `stub:` | `yes`, `no` | Follows global "Stubs" setting | Whether to show a stub for the hidden post. |
| `highlight:` | `classname` | `filter-highlight` | Highlight the post instead of hiding it. Optionally specify a CSS class name. |
| `top:` | `yes`, `no` | `yes` | When highlighting an OP, pin its thread to the top of the board index. |

### Scope Options

| Option | Values | Description |
|--------|--------|-------------|
| `boards:` | Board list | Only apply this filter on the listed boards. Comma-separated (e.g., `boards:a,v,g`). |
| `exclude:` | Board list | Exclude these boards from an otherwise global filter. |
| `op:` | `no`, `only` | `no` = skip OPs (filter replies only). `only` = filter OPs only (skip replies). |
| `file:` | `no`, `only` | `no` = skip posts with files. `only` = filter only posts that have files. |
| `type:` | Field list | For `general` filters only: which fields to match against. Comma-separated (e.g., `type:subject,comment`). Default: `subject,name,filename,comment`. |

### Behavior Options

| Option | Description |
|--------|-------------|
| `notify` | Show a desktop notification when a matching post is found, instead of hiding it. |
| `reason:` | Set a custom reason string shown in the stub (e.g., `reason:spam`). |
| `poster` | Hide all posts from the same poster ID in the thread (when the matching post has a unique ID). |
| `replies` | Also hide all replies that quote the matching post. |

### Combining Options

You can combine `highlight` and `hide` on the same filter. When `highlight` is set, the post is highlighted by default and **not** hidden. If you also want to hide it, explicitly add `hide`:

```
/pattern/;highlight:important;hide
```

You can also combine `highlight` with `notify` and other options freely:

```
/pattern/;highlight:special;notify;boards:g;op:only;top:yes
```

---

## Examples

### Hiding Posts

Hide all posts mentioning "reddit" (case-insensitive):
```
/reddit/i
```

Hide all namefags (anyone not posting as Anonymous):
```
# In the "name" filter type:
/^(?!Anonymous$)/
```

Hide a specific tripcode:
```
# In the "tripcode" filter type:
/^!AbCdEfGhIj$/
```

Hide all posts from a specific unique ID:
```
# In the "uniqueID" filter type:
/Txhvk1Tl/
```

Hide general threads on /v/:
```
# In the "subject" filter type:
/general/i;boards:v;op:only
```

Hide posts with 20 or more quote links:
```
# In the "comment" filter type:
/(?:>>\d(?:(?!>>\d)[^])*){20}/
```

Hide Stallman copypasta on /g/:
```
# In the "comment" filter type:
/what you're refer+ing to as linux/i;boards:g
```

### Hiding with Options

Hide on /v/ and /vg/ only, with no stub:
```
/pattern/i;boards:v,vg;stub:no
```

Hide everywhere except /b/:
```
/pattern/;exclude:b
```

Hide only OPs (for thread filtering):
```
/pattern/;op:only
```

Hide only replies (not OPs):
```
/pattern/;op:no
```

Hide only posts with images:
```
/pattern/;file:only
```

Hide a post and all replies to it:
```
/pattern/;replies
```

Hide all posts from a matching poster ID:
```
/pattern/;poster
```

Set a custom reason shown in the stub:
```
/pattern/;reason:off-topic spam
```

### Highlighting Posts

Highlight posts matching a pattern (with the default `filter-highlight` class):
```
/interesting topic/i;highlight
```

Highlight with a custom CSS class:
```
/important/;highlight:my-highlight
```

Highlight and pin the thread to the top of the index:
```
/general/i;highlight;op:only;top:yes
```

Highlight but don't pin to top:
```
/pattern/;highlight;top:no
```

### Highlighting Special Users

Highlight mods:
```
# In the "capcode" filter type:
/Mod$/;highlight:mod;op:yes
```

Highlight admins:
```
# In the "capcode" filter type:
/Admin$/;highlight:admin;op:yes
```

### Highlighting with Custom CSS

After setting up a `highlight:classname` filter, you can style the class in **Settings → Advanced → Custom CSS**:

```css
.filter-highlight {
  border-left: 3px solid #ff6600 !important;
  background: rgba(255, 102, 0, 0.05) !important;
}

.my-highlight {
  border-left: 3px solid #00ff00 !important;
}
```

### Notifications

Get a desktop notification when someone mentions you by name:
```
# In the "comment" filter type:
/yourname/i;notify
```

### File Filters

Highlight potential wallpapers:
```
# In the "dimensions" filter type:
/1920x1080/;op:yes;highlight;top:no;boards:w,wg
```

Filter a specific image by MD5:
```
# In the "MD5" filter type:
/8dj3KObSCXaE1cOv1jOxOQ==/
```

### General Filters

The `general` filter type matches across multiple fields. By default it matches subject, name, filename, and comment, but you can customize this:

```
# Match only in subject and comment:
/pattern/;type:subject,comment

# Match only in filename:
/pattern/;type:filename
```

---

## Quick Filtering

In addition to writing filter rules manually, 4chan XT offers quick filtering shortcuts:

### MD5 Quick Filter

- **In threads:** Hold **Shift** and click a thumbnail to add its MD5 to the filter list (if **MD5 Quick Filter in Threads** is enabled).
- **In the catalog:** Hold **Shift** and click a thumbnail to quick-filter that image's MD5 (if **MD5 Quick Filter in the Catalog** is enabled).
- **Keyboard shortcut:** Press `5` (default) with a post selected to add the image's MD5 to the filter.
- A notification will appear confirming the MD5 was added (if **MD5 Quick Filter Notifications** is enabled).

### Post Hiding Buttons

- **Thread Hiding Buttons** — Small `[–]` buttons next to each thread in the index to hide the entire thread.
- **Reply Hiding Buttons** — Small `[–]` buttons on each reply to hide that specific post.

These buttons provide a quick way to hide individual posts/threads without writing a filter rule. Hidden posts show a stub (if **Stubs** is enabled) that you can click to unhide.

### Menu Links

Right-click menu items (when **Menu** is enabled) include:
- **Thread Hiding Link** — Hide the thread from the context menu
- **Reply Hiding Link** — Hide the reply from the context menu

---

## Recursive Hiding

When **Recursive Hiding** is enabled in Settings → Main → Filtering, hiding a post will also automatically hide all replies to that post, and all replies to those replies, and so on.

This is useful for filtering entire conversations that stem from a single unwanted post.

The `replies` option on a filter achieves the same effect for that specific filter rule.

---

## Tips & Notes

- **Regex syntax:** Filters use JavaScript regular expression syntax. Test your patterns at [regex101.com](https://regex101.com/) (select the JavaScript flavor).
- **Performance:** MD5 and uniqueID filters use exact string matching for performance. All other types use regex.
- **Comments are stripped:** When matching against `comment`, HTML tags are stripped — you're matching against the plain text content of the post.
- **Case sensitivity:** Add the `i` flag after the closing `/` for case-insensitive matching: `/pattern/i`.
- **Escaping special characters:** Remember to escape regex special characters with `\`. For example, to match a literal period: `/example\.com/`.
- **Semicolons in patterns:** Since `;` is the option delimiter, if you need a literal semicolon in your pattern, it must be inside the `/regex/` part — semicolons in the options portion are always treated as delimiters.
- **Board format:** Board names in `boards:` and `exclude:` are just the board letters without slashes (e.g., `boards:a,v,g`, not `boards:/a/,/v/,/g/`).
- **Filter order:** Filters are processed in the order they appear. The first matching filter determines the post's fate. If a post matches both a hide filter and a highlight filter, the first one wins.
- **Filtered Backlinks:** By default, backlinks to filtered posts are hidden entirely. Enable **Filtered Backlinks** in Settings to show them with a strikethrough instead.
- **Filter Reason:** When **Filter Reason** is enabled, the stub of a hidden post will show why it was hidden. If disabled, hover over the stub to see the reason.
- **Native Catalog:** Enable **Filter in Native Catalog** to apply your filters in the native 4chan catalog view as well.

---

*See also: [Features →](./Features.md) · [Settings →](./Settings.md)*