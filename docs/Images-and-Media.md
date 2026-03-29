# Images & Media

4chan XT significantly enhances how images, videos, and other media are displayed and interacted with on 4chan and compatible imageboards. This guide covers all image and media features.

---

## Table of Contents

- [Image Expansion](#image-expansion)
- [Image Hover](#image-hover)
- [Gallery](#gallery)
- [Video Controls](#video-controls)
- [Sound Posts](#sound-posts)
- [Image Prefetching](#image-prefetching)
- [Thumbnail Replacement](#thumbnail-replacement)
- [Reverse Image Search (Sauce)](#reverse-image-search-sauce)
- [WebM Metadata](#webm-metadata)
- [Fappe Tyme & Werk Tyme](#fappe-tyme--werk-tyme)
- [File Info Formatting](#file-info-formatting)

---

## Image Expansion

**Setting:** Images and Videos → Image Expansion (on by default)

Click any image or video thumbnail to expand it inline within the post. Click again to contract it back to the thumbnail.

### How It Works

- Click a thumbnail to expand the full-size image or video in place.
- Click the expanded image again (or press `Shift+E` with the post selected) to contract it.
- Press `E` to expand **all** images in the thread at once. Press again to contract all.

### Expansion Options

These sub-options are available in the header menu when "Expand all images" is active, or in Settings → Main → Images and Videos:

| Option | Default | Description |
|--------|---------|-------------|
| **Fit width** | ✅ On | Scale expanded images to fit the page width so you don't have to scroll horizontally. |
| **Fit height** | ❌ Off | Scale expanded images to fit the browser viewport height. |
| **Scroll into view** | ✅ On | Automatically scroll down when expanding an image so the full image is visible. |
| **Expand spoilers** | ✅ On | Include spoilered images when using "Expand all images." |
| **Expand videos** | ✅ On | Include videos (WebM, MP4) when using "Expand all images." |
| **Expand from here** | ❌ Off | "Expand all images" only expands from your current scroll position to the end of the thread. |
| **Expand thread only** | ❌ Off | In the board index, "Expand all images" only affects the current thread. |
| **Advance on contract** | ❌ Off | When you contract an expanded image, automatically advance to the next post. |

### Keyboard Shortcuts

| Action | Default Key | Description |
|--------|-------------|-------------|
| Expand image | `Shift+E` | Expand or contract the selected post's image |
| Expand images | `E` | Expand or contract all images in the thread |

---

## Image Hover

**Setting:** Images and Videos → Image Hover (on by default)

Hover your mouse over any thumbnail to see the full-size image or video in a floating preview without clicking.

### Options

| Option | Default | Description |
|--------|---------|-------------|
| **Image Hover** | ✅ On | Enable hover previews in threads and the index. |
| **Image Hover in Catalog** | ✅ On | Enable hover previews in the 4chan XT catalog. |
| **Follow Cursor** | ✅ On | The hover preview follows your mouse cursor. Disable to keep it in a fixed position. |

### Tips

- The hover preview disappears as soon as you move your mouse away from the thumbnail.
- Videos will play in the hover preview (with sound, if **Allow Sound** is enabled).
- For very large images, the preview is scaled to fit your viewport.

---

## Gallery

**Setting:** Images and Videos → Gallery (on by default)

The Gallery provides a full-screen, lightbox-style image viewer for browsing all images and videos in a thread.

### Opening the Gallery

- Press `G` to open the gallery.
- Click the Gallery shortcut icon (🖼️) in the header bar.
- The gallery opens on the first image. If you have a post selected, it opens on that post's image.

### Navigation

| Action | Key | Description |
|--------|-----|-------------|
| Next image | `Right` | Go to the next image |
| Previous image | `Left` | Go to the previous image |
| Advance | `Enter` | Go to the next image, or play the current video if autoplay is off |
| Pause/Play | `P` | Pause or play the current video |
| Slideshow | `Ctrl+Right` | Toggle automatic slideshow mode |
| Rotate clockwise | `Shift+Right` | Rotate the image 90° clockwise |
| Rotate anticlockwise | `Shift+Left` | Rotate the image 90° anticlockwise |
| Download | `Shift+J` | Download the current image with its original filename |
| Close | `Esc` | Close the gallery |

### Gallery Options

Access these from the gallery's built-in settings menu:

| Option | Default | Description |
|--------|---------|-------------|
| **Hide Thumbnails** | ❌ Off | Hide the thumbnail strip at the bottom of the gallery. |
| **Fit Width** | ✅ On | Scale images to fit the gallery's width. |
| **Fit Height** | ✅ On | Scale images to fit the gallery's height. |
| **Stretch to Fit** | ❌ Off | Stretch small images to fill the gallery (may cause pixelation). |
| **Scroll to Post** | ✅ On | Scroll the page behind the gallery to the post of the currently viewed image. |
| **Slide Delay** | 6.0s | Time between images in slideshow mode. |

### Other Gallery Settings

| Setting | Default | Description |
|---------|---------|-------------|
| **Fullscreen Gallery** | ❌ Off | Open the gallery in full browser fullscreen mode (Settings → Main). |
| **PDF in Gallery** | ❌ Off | Include PDF files in the gallery viewer (Settings → Main). |

---

## Video Controls

4chan XT provides enhanced controls for WebM, MP4, and OGV videos.

### Playback Settings

| Setting | Default | Description |
|---------|---------|-------------|
| **Autoplay** | ✅ On | Videos begin playing immediately when expanded or hovered. |
| **Restart when Opened** | ❌ Off | Restart GIFs and videos from the beginning each time you hover over or expand them. |
| **Show Controls** | ✅ On | Display the browser's native video controls (play, pause, seek, volume) on expanded videos. |
| **Click Passthrough** | ❌ Off | Clicks on expanded videos trigger the browser's default behavior (e.g., play/pause) instead of contracting the video. When enabled, contract videos using the close button or by dragging to the left. |

### Sound Settings

| Setting | Default | Description |
|---------|---------|-------------|
| **Allow Sound** | ✅ On | Videos play with sound unmuted. Disable to mute all videos by default. |
| **Mouse Wheel Volume** | ✅ On | Scroll the mouse wheel over a thumbnail, filename, or gallery to adjust volume. |
| **Default Volume** | 1.0 | Default volume level for videos (0.0 = mute, 1.0 = full volume). Set in Settings → Advanced. |

### New Tab Video Settings

These settings affect videos opened in their own browser tab:

| Setting | Default | Description |
|---------|---------|-------------|
| **Loop in New Tab** | ✅ On | Loop videos that are opened in their own tabs. |
| **Volume in New Tab** | ✅ On | Apply 4chan XT's mute and volume settings to videos opened in their own tabs. |

---

## Sound Posts

**Setting:** Images and Videos → Enable sound posts (on by default)

Sound posts are a community convention where audio is attached to images via a special filename format. The audio file URL is embedded in the filename using `[sound=URL]` syntax.

### How It Works

1. A user uploads an image with a filename like `image [sound=https://example.com/audio.mp3].png`.
2. 4chan XT detects the `[sound=...]` tag in the filename.
3. When the image is expanded or hovered, the audio plays alongside the image.

### Notes

- Sound post detection is **case-insensitive**.
- The audio is fetched from **third-party URLs** specified in the filename. 4chan XT does not host the audio.
- If you don't want to load third-party audio, disable **Enable sound posts** in Settings.

---

## Image Prefetching

**Setting:** Images and Videos → Image Prefetching (on by default)

When enabled, a shortcut icon appears in the header bar (⬇️) that toggles image preloading. When activated, 4chan XT will download all full-size images in the thread in the background, so they load instantly when you expand or hover over them.

### When to Use

- Enable before browsing image-heavy threads for a smoother experience.
- Disable on metered connections to save bandwidth — preloading downloads every image regardless of whether you view it.

---

## Thumbnail Replacement

These settings replace the default thumbnails with the actual images or videos, giving you a preview without clicking:

| Setting | Default | Description |
|---------|---------|-------------|
| **Replace GIF** | ❌ Off | Replace GIF thumbnails with the actual animated GIF. |
| **Replace JPG** | ❌ Off | Replace JPG thumbnails with the full-resolution image. |
| **Replace PNG** | ❌ Off | Replace PNG thumbnails with the full-resolution image. |
| **Replace WEBM** | ❌ Off | Replace WebM/MP4/OGV thumbnails with the actual video. |
| **Reveal Spoiler Thumbnails** | ❌ Off | Replace spoiler placeholder thumbnails with the actual image. |

> ⚠️ **Performance warning:** Enabling thumbnail replacement (especially **Replace WEBM**) will significantly increase bandwidth usage and may degrade browser performance on image-heavy boards or threads.

---

## Reverse Image Search (Sauce)

**Setting:** Images and Videos → Sauce (on by default)

Adds reverse image search links next to each image's filename. These links open external services where you can search for the source of an image.

For a complete guide on configuring sauce links, see the [Sauce documentation](./Sauce.md).

### Quick Overview

- Sauce links appear next to the filename in each post with an image.
- Clicking a sauce link opens the configured reverse image search service in a new tab.
- Configure which services appear in **Settings → Sauce**.
- Default services include Google Images, Yandex, IQDB, and trace.moe.
- You can add custom sauce links using URL templates with tokens like `%IMG`, `%MD5`, `%URL`, etc.

---

## WebM Metadata

**Setting:** Images and Videos → WEBM Metadata (on by default)

Adds a link next to WebM filenames to fetch and display the video's embedded title metadata. Many WebM files contain a title field in their container metadata, and this feature makes it visible without downloading the file or using external tools.

---

## Fappe Tyme & Werk Tyme

These are toggle modes accessible from the header menu or via keyboard shortcuts. They let you quickly change how posts and images are displayed.

### Fappe Tyme

**Setting:** Images and Videos → Fappe Tyme (on by default)
**Shortcut:** `F`

When activated, hides all posts that **don't** have an image. This lets you browse only the image posts in a thread. Useful for image dump threads.

### Werk Tyme

**Setting:** Images and Videos → Werk Tyme (on by default)
**Shortcut:** `Shift+W`

When activated, hides **all images** in every post, showing only the text content. Useful when you want to read a thread without displaying any images (e.g., at work).

### How to Toggle

1. **Header menu:** Click the Fappe Tyme (👀) or Werk Tyme (💼) icons in the header shortcuts.
2. **Keyboard:** Press `F` for Fappe Tyme or `Shift+W` for Werk Tyme.
3. The mode persists until you toggle it off again.

---

## File Info Formatting

**Setting:** Miscellaneous → File Info Formatting (on by default)

Customize how the file information line (size, dimensions, filename) is displayed. Configure the format string in **Settings → Advanced → File Info Format**.

**Default format:** `%l %d (%p%s, %r%g)`

### Tokens

| Token | Description | Example Output |
|-------|-------------|----------------|
| `%t` | Server filename | `1234567890123.jpg` |
| `%T` | Server filename as a link to the file | (clickable link) |
| `%l` | Original filename (truncated if long) as a link | (clickable link) |
| `%L` | Original filename (full, never truncated) as a link | (clickable link) |
| `%n` | Original filename (truncated, hover to see full name) | `my_long_filen...` |
| `%N` | Original filename (always full, never truncated) | `my_long_filename.png` |
| `%d` | Download button | (download icon) |
| `%f` | Quick filter MD5 button | (✕ icon) |
| `%p` | `"Spoiler, "` if spoilered, empty otherwise | `Spoiler, ` |
| `%s` | Human-readable file size | `1.23 MB` |
| `%B` | File size in bytes | `1290000` |
| `%K` | File size in KB | `1260` |
| `%M` | File size in MB | `1.23` |
| `%r` | Image dimensions (or `"PDF"` for PDFs) | `1920x1080` |
| `%g` | File tag (e.g. `", Loop"` for animated files) | `, Loop` |
| `%%` | Literal `%` character | `%` |

### Example Formats

| Format String | Result |
|---------------|--------|
| `%l %d (%p%s, %r%g)` | `filename.jpg ⬇ (1.23 MB, 1920x1080)` (default) |
| `%N (%s, %r)` | `my_full_filename.png (456 KB, 800x600)` |
| `%t (%B bytes)` | `1234567890123.jpg (1290000 bytes)` |
| `%l %d %f (%s)` | `filename.jpg ⬇ ✕ (1.23 MB)` (with download and filter buttons) |

---

## Automatic Image Conversion

4chan XT includes automatic image conversion features for the Quick Reply:

- **Unsupported formats → PNG:** If you paste or attach an image in a format not supported by 4chan, 4chan XT can automatically convert it to PNG.
- **Oversized JPGs:** If a JPG file exceeds the board's file size limit, 4chan XT can automatically re-encode it at a lower quality to fit within the limit.

These conversions happen transparently in the Quick Reply before the file is uploaded.

---

## Tips & Best Practices

- **Bandwidth-conscious browsing:** Keep thumbnail replacement settings off and use Image Hover for on-demand previews. Only turn on Image Prefetching when you plan to browse a thread's images in full.
- **Gallery for image threads:** For threads with many images, the Gallery (`G`) is the most efficient way to browse them all sequentially.
- **Volume memory:** 4chan XT remembers your volume setting. Adjust it once with the mouse wheel and it persists across videos.
- **Keyboard-driven browsing:** Use `J`/`K` to navigate posts, `Shift+E` to expand the selected image, and `G` to open the gallery for a fully keyboard-driven image browsing experience.
- **Spoiler control:** If you want to see spoilered images without clicking, enable **Reveal Spoiler Thumbnails** and/or **Expand spoilers** in the image expansion options.
- **Quick filtering unwanted images:** Hold `Shift` and click a thumbnail (or press `5` with a post selected) to add its MD5 hash to the filter list, instantly hiding all posts with that same image.

---

*See also: [Sauce →](./Sauce.md) · [Gallery Keyboard Shortcuts →](./Keyboard-Shortcuts.md#image--gallery) · [Filtering →](./Filtering.md) · [Features →](./Features.md)*