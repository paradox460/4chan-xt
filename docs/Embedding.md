# Linkification & Embedding

4chan XT can automatically convert URLs in posts into clickable links, fetch their titles, show thumbnail previews, and embed supported media services directly inline.

---

## Table of Contents

- [Linkification](#linkification)
- [Link Titles](#link-titles)
- [Cover Previews](#cover-previews)
- [Embedding Overview](#embedding-overview)
- [Embedding Options](#embedding-options)
- [Supported Embed Providers](#supported-embed-providers)
- [Twitter / X Embedding](#twitter--x-embedding)
- [Sound Posts](#sound-posts)
- [Privacy Considerations](#privacy-considerations)

---

## Linkification

When **Linkify** is enabled (Settings → Main → Linkification), 4chan XT scans post text for URLs and converts them into clickable `<a>` links. This works for any URL, not just supported embed providers.

**Setting:** `Linkify` — On by default.

---

## Link Titles

When **Link Title** is enabled, 4chan XT replaces the raw URL text with the actual page title for supported sites. For example, a YouTube link would show the video's title instead of `https://www.youtube.com/watch?v=...`.

| Setting | Default | Description |
|---------|---------|-------------|
| **Link Title** | ✅ On | Fetch and display page titles for supported links. |
| **Link Title in the catalog** | ❌ Off | Also fetch titles in the catalog view. Turning this off improves performance on boards with many embeds (e.g. /vt/). |

Title fetching sends requests to the respective service's API (YouTube, SoundCloud, etc.). See [Privacy Considerations](#privacy-considerations) below.

---

## Cover Previews

When **Cover Preview** is enabled, hovering over a supported link shows a thumbnail preview image. This is currently supported for:

- **YouTube** — Video thumbnail
- **Dailymotion** — Video thumbnail

**Setting:** `Cover Preview` — On by default.

---

## Embedding Overview

When **Embedding** is enabled, supported links in posts get a small toggle button (▶) next to them. Clicking the button embeds the media (video, audio, image, iframe) directly in the post.

If **Auto-embed** is also enabled, all supported links are embedded automatically without requiring a click.

If **Floating Embeds** is enabled, embedded content appears in a floating frame that stays in place as you scroll the page, rather than being inserted inline in the post.

---

## Embedding Options

| Setting | Default | Description |
|---------|---------|-------------|
| **Embedding** | ✅ On | Enable embedding of supported services. |
| **Auto-embed** | ❌ Off | Automatically embed all detected links without clicking. |
| **Floating Embeds** | ❌ Off | Show embeds in a floating frame that follows scrolling. |

---

## Supported Embed Providers

4chan XT supports embedding content from **25 different providers**. Each provider is matched by URL pattern.

### Direct Media Files

These match direct links to media files, regardless of the hosting domain.

| Provider | File Types | Embed Type |
|----------|-----------|------------|
| **Audio** | `.mp3`, `.m4a`, `.oga`, `.wav`, `.flac` | `<audio>` player |
| **Image** | `.gif`, `.png`, `.jpg`, `.jpeg`, `.bmp`, `.webp` | `<img>` element |
| **Video** | `.ogv`, `.ogg`, `.webm`, `.mp4` | `<video>` player |

### Video Platforms

| Provider | URL Patterns | Features |
|----------|-------------|----------|
| **YouTube** | `youtube.com/watch`, `youtu.be/`, YouTube Shorts, live URLs | Title fetching, thumbnail preview, timestamp support (`&t=`) |
| **Dailymotion** | `dailymotion.com/video/`, `dai.ly/` | Title fetching, thumbnail preview |
| **Vimeo** | `vimeo.com/` | Title fetching |
| **BitChute** | `bitchute.com/video/` | Iframe embed |
| **VidLii** | `vidlii.com/video/` | Iframe embed |
| **PeerTube** | Any PeerTube instance video URL | Iframe embed |
| **Streamable** | `streamable.com/` | Title fetching |
| **TwitchTV** | `twitch.tv/` streams, VODs, clips | Iframe embed |
| **Vine** | `vine.co/v/` | Iframe embed |
| **LiveLeak** | `liveleak.com/view` | Iframe embed |

### Audio & Voice

| Provider | URL Patterns | Features |
|----------|-------------|----------|
| **SoundCloud** | `soundcloud.com/`, `snd.sc/` | Title fetching, iframe embed |
| **Vocaroo** | `vocaroo.com/`, `voca.ro/` | Audio embed |
| **Clyp** | `clyp.it/` | Title fetching, audio embed |

### Social Media

| Provider | URL Patterns | Features |
|----------|-------------|----------|
| **Twitter / X** | `twitter.com`, `x.com`, `fxtwitter.com`, `vxtwitter.com`, `nitter.*`, `xcancel.com` | Configurable embedder (FxTwitter or TwitFrame). See [Twitter / X Embedding](#twitter--x-embedding). |

### Code & Text Sharing

| Provider | URL Patterns | Features |
|----------|-------------|----------|
| **GitHub Gist** | `gist.github.com/` | Rendered with syntax highlighting |
| **Pastebin** | `pastebin.com/` | Raw paste content |
| **InstallGentoo** | `paste.installgentoo.com/` | Paste content |

### Polls

| Provider | URL Patterns | Features |
|----------|-------------|----------|
| **StrawPoll** | `strawpoll.me/` | Iframe embed |

### Image / GIF Hosting

| Provider | URL Patterns | Features |
|----------|-------------|----------|
| **Gfycat** | `gfycat.com/` | Video embed |

### Aggregators & Specialty

| Provider | URL Patterns | Features |
|----------|-------------|----------|
| **Loopvid** | `loopvid.appspot.com/` | Multi-source video aggregator supporting 20+ hosts |
| **Openings.moe** | `openings.moe/` | Anime openings video |

---

## Twitter / X Embedding

Twitter/X embeds have special configuration options because they support two different embedding backends.

### Embedder Selection

In **Settings → Advanced**, you can choose the Twitter embedder:

| Embedder | Value | Description |
|----------|-------|-------------|
| **FxTwitter** | `fxt` (default) | Uses the FxTwitter API to render tweets. Supports reply loading and community notes. |
| **TwitFrame** | `tf` | Uses TwitFrame to embed tweets in an iframe. Simpler but fewer features. |

### FxTwitter Options

| Setting | Default | Description |
|---------|---------|-------------|
| **FxTwitter API URL** | `https://api.fxtwitter.com` | The API endpoint for fetching tweet data. |
| **FxTwitter Language** | *(blank)* | Language code for tweet translations (e.g. `en`, `ja`). Leave blank for no translation. |
| **FxTwitter Max Replies** | `5` | Maximum number of tweet replies to load and display. |

### Matched URL Patterns

The Twitter/X embedder matches all of the following URL formats:

- `twitter.com/{user}/status/{id}`
- `x.com/{user}/status/{id}`
- `fxtwitter.com/{user}/status/{id}`
- `vxtwitter.com/{user}/status/{id}`
- `nitter.{any_domain}/{user}/status/{id}`
- `xcancel.com/{user}/status/{id}`

---

## Sound Posts

4chan XT supports "sound posts" — images with audio encoded in the filename using the `[sound=URL]` format. This is a community convention where the audio URL is embedded in the filename itself.

**Setting:** `Enable sound posts` — On by default (Settings → Main → Images and Videos).

When enabled, 4chan XT detects filenames containing `[sound=...]` tags and loads the audio from the specified URL. The audio is fetched from third-party hosts.

> **Note:** Sound post detection is case-insensitive.

### Example

A file named `image[sound=https://files.catbox.moe/abc123.mp3].jpg` would play the audio from the Catbox URL alongside the image.

---

## Privacy Considerations

Several embedding and linkification features make network requests to third-party services:

| Feature | What is sent | To where |
|---------|-------------|----------|
| **Link Title** | The URL of the linked content | YouTube API, SoundCloud API, Vimeo oEmbed, Streamable API, Dailymotion API, Clyp API, GitHub API |
| **Cover Preview** | A request for the thumbnail image | YouTube image servers (`i.ytimg.com`), Dailymotion |
| **Embedding** | Varies — typically loads an iframe or fetches content from the service | The respective service's domain |
| **FxTwitter** | Tweet URL/ID | The configured FxTwitter API endpoint |
| **Sound Posts** | Audio file URL | Whatever host the sound file is on (commonly Catbox, etc.) |

### How to Disable

If you don't want any third-party requests from link processing:

1. **Disable Linkify** — Prevents URL detection entirely (but you lose clickable links)
2. **Disable Link Title** — Prevents title fetching (URLs remain as links but show the raw URL)
3. **Disable Embedding** — Prevents all media embedding
4. **Disable Cover Preview** — Prevents thumbnail fetching on hover
5. **Disable Enable sound posts** — Prevents audio loading from filenames

For the most privacy-conscious setup, disable **Link Title**, **Cover Preview**, **Embedding**, and **Enable sound posts** while keeping **Linkify** enabled. This gives you clickable links without any third-party requests.

---

*See also: [Features →](./Features.md) · [Settings →](./Settings.md) · [Sauce →](./Sauce.md)*