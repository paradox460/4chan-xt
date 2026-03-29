# Sauce (Reverse Image Search)

"Sauce" links appear next to image filenames in posts, providing quick access to reverse image search engines and other external tools. You can fully customize which sauce links appear.

---

## Configuring Sauce Links

Go to **Settings → Sauce** to edit your sauce links. Each line is a URL template. Lines beginning with `#` are disabled (treated as comments).

The default configuration includes:

- **Known filename format detection** — Automatically links Pixiv, DeviantArt, Imgur, Flickr, and Facebook images based on their filename patterns
- **Reverse image search** — Google Images, Yandex, TinEye, Bing Visual Search, Google Lens
- **Specialized search** — IQDB, trace.moe (anime scene finder), SauceNAO, 3D IQDB
- **Archive search** — Search for the same image across 4chan archives (Desuarchive, 4plebs, Fireden, etc.)
- **Other tools** — EXIF viewer, ImgOps, GIF exploder

---

## URL Template Syntax

Each sauce line follows this format:

```
URL_TEMPLATE[;option:value][;option:value]...
```

The URL template can contain special tokens that are replaced with information about the image.

---

## URL Tokens

| Token | Description |
|-------|-------------|
| `%URL` | Full URL of the image |
| `%TURL` | Thumbnail URL |
| `%IMG` | Image URL if the file is a gif/jpg/jpeg/png; falls back to thumbnail URL for other types |
| `%MD5` | Base64-encoded MD5 hash of the file |
| `%sMD5` | URL-safe Base64 MD5 (`+` → `-`, `/` → `_`, trailing `=` stripped) |
| `%hMD5` | Hex-encoded MD5 hash of the file |
| `%board` | Board name (e.g. `g`, `a`, `pol`) |
| `%name` | Original filename (without extension) |
| `%%` | Literal `%` character |
| `%semi` | Literal `;` character (since `;` is the option delimiter) |
| `%$1`, `%$2`, … | Capture groups from a `regexp` match on the filename |

---

## Options

Options are appended after the URL, separated by `;`. Each option uses `key:value` syntax.

| Option | Description | Example |
|--------|-------------|---------|
| `text:` | Display text for the sauce link (defaults to the domain name from the URL) | `text:Google` |
| `boards:` | Only show this link on specific boards (comma-separated) | `boards:a,g,v` |
| `types:` | Only show for specific file extensions (comma-separated) | `types:jpg,png,gif` |
| `regexp:` | Only show if the original filename matches this regex; enables `%$1` etc. capture group tokens | `regexp:/^(\d+)_p\d+/` |

---

## Examples

### Basic Reverse Image Search

```
https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%IMG&safe=off
```

This creates a "google.com" sauce link that performs a Google reverse image search using the image URL.

### Custom Display Text

```
https://lens.google.com/uploadbyurl?url=%IMG;text:Lens
```

Displays as "Lens" instead of the full domain name.

### Restrict to Specific File Types

```
http://www.gif-explode.com/%URL;types:gif
```

Only appears for GIF files.

### Restrict to Specific Boards

```
https://iqdb.org/?url=%IMG;boards:a,c,w,wg
```

Only appears on /a/, /c/, /w/, and /wg/.

### Match Filename Patterns with Regex

```
https://www.pixiv.net/member_illust.php?mode=medium&illust_id=%$1;regexp:/^(\d+)_p\d+/
```

Only appears when the filename matches the Pixiv format (e.g. `12345678_p0.jpg`). The `%$1` token is replaced with the first capture group (the illustration ID).

### DeviantArt Filename Detection

```
javascript:void(open("https://www.deviantart.com/"+%$1.replace(/_/g,"-")+"/art/"+parseInt(%$2,36)));regexp:/^\w+_by_(\w+)[_-]d([\da-z]{6})\b/
```

Detects DeviantArt filenames and constructs a direct link to the artwork. Uses JavaScript to transform the captured values.

### Archive MD5 Search

```
https://desuarchive.org/_/search/image/%sMD5/
```

Searches Desuarchive for all posts containing the same image (matched by MD5 hash).

### Using Literal Semicolons

```
https://example.com/search?q=test%semivalue=1;text:Example
```

The `%semi` token produces a literal `;` in the URL, preventing it from being interpreted as an option delimiter.

---

## Default Sauce Configuration

The default configuration includes the following (some disabled by default with `#`):

### Filename Pattern Detection
- **Pixiv** — Detects `{id}_p{page}` filenames
- **DeviantArt** — Detects `{title}_by_{artist}` filenames
- **Imgur** — Detects 7-character alphanumeric filenames
- **Flickr** — Detects `{id}_{hash}` filenames
- **Facebook** — Detects Facebook photo ID filenames

### Reverse Image Search
- ✅ **Google Images** — `searchbyimage`
- ✅ **Yandex Images** — `images/search`
- ❌ **TinEye** — (disabled by default)
- ❌ **Bing Visual Search** — (disabled by default)
- ❌ **Google Lens** — (disabled by default)

### Specialized Search
- ✅ **IQDB** — Anime/manga image search
- ✅ **trace.moe** — Anime scene finder
- ❌ **3D IQDB** — 3D/cosplay image search (disabled by default)
- ❌ **SauceNAO** — Multi-source reverse search (disabled by default)

### Archive Search
- ✅ **swfchan** — Flash file search (SWF files only)
- ❌ **Desuarchive** — (disabled by default)
- ❌ **4plebs** — (disabled by default)
- ❌ **Fireden** — (disabled by default)

### Other Tools
- ❌ **EXIF viewer** — (disabled by default)
- ❌ **ImgOps** — Image tools aggregator (disabled by default)
- ❌ **GIF Explode** — Frame-by-frame GIF viewer (disabled by default)

---

## Tips

- **Enable/disable individual links** by adding or removing `#` at the start of the line.
- **Reorder links** by rearranging the lines — they appear in the order listed.
- **Use `%IMG` instead of `%URL`** for reverse image search services, since `%IMG` falls back to the thumbnail for non-image files (like WebM), which most search engines can handle better.
- **Use `%sMD5`** for archive searches, as it produces a URL-safe base64 string.
- **Test your regex patterns** — if a `regexp` doesn't match the filename, the sauce link simply won't appear for that post.
- Sauce links configured with the `boards:` option only appear on the specified boards, useful for board-specific tools.