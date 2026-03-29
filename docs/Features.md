# Features Reference

A complete list of all features in 4chan XT, organized by category. Each feature can be toggled on or off in **Settings → Main** unless otherwise noted.

---

## Table of Contents

- [Miscellaneous](#miscellaneous)
- [Linkification](#linkification)
- [Filtering](#filtering)
- [Images and Videos](#images-and-videos)
- [Menu](#menu)
- [Monitoring](#monitoring)
- [Posting and Captchas](#posting-and-captchas)
- [Quote Links](#quote-links)

---

## Miscellaneous

| Feature | Default | Description |
|---------|---------|-------------|
| **JSON Index** | ✅ On | Replace the original board index with one supporting searching, sorting, infinite scrolling, and a catalog mode. |
| **Use 4chan XT Catalog** | ✅ On | Link to 4chan XT's catalog instead of the native 4chan one. |
| **Index Refresh Notifications** | ❌ Off | Show a notice at the top of the page when the index is refreshed. |
| **Follow Cursor** | ✅ On | Image Hover and Quote Preview move with the mouse cursor. |
| **Open Threads in New Tab** | ❌ Off | Make links to threads in the index / catalog open in a new tab. |
| **External Catalog** | ❌ Off | Link to an external catalog instead of the internal one. |
| **Catalog Links** | ❌ Off | Add toggle link in the header menu to turn navigation links into links to each board's catalog. |
| **Announcement Hiding** | ✅ On | Add a button to hide 4chan announcements. |
| **Desktop Notifications** | ✅ On | Enable desktop notifications across various 4chan XT features (requires browser permission). |
| **404 Redirect** | ✅ On | Redirect dead threads and images to the archives. |
| **Archive Report** | ✅ On | Enable reporting posts to supported archives. |
| **Exempt Archives from Encryption** | ❌ Off | Permit loading content from, and warningless redirects to, HTTP-only archives from HTTPS pages. |
| **Keybinds** | ✅ On | Bind actions to keyboard shortcuts. See the [Keyboard Shortcuts](./Keyboard-Shortcuts.md) reference. |
| **Time Formatting** | ✅ On | Localize and format timestamps. Configure the format in the Advanced tab. |
| **Comment Expansion** | ✅ On | Expand comments that are too long to display on the index. Not applicable with JSON Index. |
| **File Info Formatting** | ✅ On | Reformat the file information line. Configure the format in the Advanced tab. |
| **Thread Expansion** | ✅ On | Add buttons to expand threads in the index. |
| **Index Navigation** | ❌ Off | Add buttons to navigate between threads in the index. |
| **Reply Navigation** | ❌ Off | Add buttons to navigate to the top / bottom of a thread. |
| **Unique ID and Capcode Navigation** | ❌ Off | Add buttons to navigate to posts having the same unique ID or capcode. |
| **Custom Board Titles** | ✅ On | Allow editing of the board title and subtitle by Ctrl/⌘-clicking them. |
| **Persistent Custom Board Titles** | ❌ Off | Force custom board titles to persist even if the board titles are updated. |
| **Show Updated Notifications** | ✅ On | Show notifications when 4chan XT is successfully updated. |
| **Color User IDs** | ✅ On | Assign unique colors to user IDs on boards that use them. |
| **Count Posts by ID** | ✅ On | Display the number of posts in the thread when hovering over a user ID. |
| **Remove Spoilers** | ❌ Off | Remove all spoilers in text (reveals the spoiler text). |
| **Reveal Spoilers** | ❌ Off | Indicate spoilers visually if Remove Spoilers is enabled, or make spoiler text appear hovered otherwise. |
| **Normalize URL** | ✅ On | Rewrite the current page URL, removing slugs and excess slashes, and changing `/res/` to `/thread/`. |
| **Disable Autoplaying Sounds** | ❌ Off | Prevent sounds on the page from autoplaying. |
| **Disable Native Extension** | ✅ On | Disable the native 4chan extension. 4chan XT is not designed to work with it. |
| **Enable Native Flash Embedding** | ✅ On | Activate the native extension's Flash embedding if the native extension is disabled. |
| **Export History** | ✅ On | Include last read positions, your posts, etc. when exporting settings. |
| **Ask to Export History** | ✅ On | Ask if history should be exported when settings are exported. |
| **Scroll Markers** | ✅ On | Mark your posts and replies to them on the scroll bar. Relies on "Highlight Posts Quoting You" and "Highlight Own Posts". |

---

## Linkification

| Feature | Default | Description |
|---------|---------|-------------|
| **Linkify** | ✅ On | Convert text into clickable links where applicable. |
| **Link Title** | ✅ On | Replace the URL of a supported site with its actual page title. |
| **Link Title in the catalog** | ❌ Off | Also replace link URLs with titles in the catalog. Turn off to speed up performance for boards with many embeds (e.g. /vt/). |
| **Cover Preview** | ✅ On | Show a preview image of supported links on hover (e.g. YouTube thumbnails). |
| **Embedding** | ✅ On | Embed supported services inline in posts. See the [Embedding reference](./Embedding.md). |
| **Auto-embed** | ❌ Off | Automatically embed all detected links (without requiring a click). |
| **Floating Embeds** | ❌ Off | Embed content in a floating frame that remains in place when the page is scrolled. |

---

## Filtering

For the full filter syntax, see the [Filtering guide](./Filtering.md).

| Feature | Default | Description |
|---------|---------|-------------|
| **Anonymize** | ❌ Off | Make everyone Anonymous (hides all names and tripcodes). |
| **Filter** | ✅ On | Self-moderation: hide or highlight posts matching custom regex rules. |
| **Filtered Backlinks** | ❌ Off | When enabled, shows backlinks to filtered posts with a strikethrough. Otherwise, hides the backlinks entirely. |
| **Filter in Native Catalog** | ✅ On | Apply 4chan XT filters in the native 4chan catalog. |
| **MD5 Quick Filter Notifications** | ✅ On | Show a notification when quick-filtering by MD5 using the button or keybind. |
| **MD5 Quick Filter in the Catalog** | ✅ On | Quick filter by MD5 when Shift-clicking a thumbnail in the catalog. If disabled, Shift-clicking just hides the thread. |
| **MD5 Quick Filter in Threads** | ✅ On | Quick filter by MD5 when Shift-clicking a thumbnail in a thread. |
| **Recursive Hiding** | ✅ On | Hide replies of hidden posts, recursively. |
| **Thread Hiding Buttons** | ✅ On | Add buttons to hide entire threads. |
| **Reply Hiding Buttons** | ✅ On | Add buttons to hide single replies. |
| **Stubs** | ✅ On | Show stubs (a small placeholder) of hidden threads / replies instead of removing them completely. |
| **Filter Reason** | ✅ On | Show the reason the post was hidden in the stub. If disabled, hover over the stub to see the reason. |

---

## Images and Videos

| Feature | Default | Description |
|---------|---------|-------------|
| **Image Expansion** | ✅ On | Expand images and videos inline by clicking thumbnails. |
| **Image Hover** | ✅ On | Show the full image / video on mouseover. |
| **Image Hover in Catalog** | ✅ On | Show full image / video on mouseover in the 4chan XT catalog. |
| **Gallery** | ✅ On | Add a full-screen image gallery. Has more options in the gallery menu. |
| **Fullscreen Gallery** | ❌ Off | Open the gallery in fullscreen mode. |
| **PDF in Gallery** | ❌ Off | Show PDF files in the gallery. |
| **Sauce** | ✅ On | Add reverse image search ("sauce") links to images. See the [Sauce guide](./Sauce.md). |
| **WEBM Metadata** | ✅ On | Add a link to fetch title metadata from WebM videos. |
| **Reveal Spoiler Thumbnails** | ❌ Off | Replace spoiler thumbnails with the original image. |
| **Replace GIF** | ❌ Off | Replace GIF thumbnails with the actual animated image. |
| **Replace JPG** | ❌ Off | Replace JPG thumbnails with the actual image. |
| **Replace PNG** | ❌ Off | Replace PNG thumbnails with the actual image. |
| **Replace WEBM** | ❌ Off | Replace WebM/MP4/OGV thumbnails with the actual video. May degrade browser performance. |
| **Image Prefetching** | ✅ On | Add a shortcut icon in the header to turn on image preloading. |
| **Fappe Tyme** | ✅ On | Add a header menu toggle to hide posts without images. |
| **Werk Tyme** | ✅ On | Add a header menu toggle to hide all post images. |
| **Autoplay** | ✅ On | Videos begin playing immediately when expanded. |
| **Restart when Opened** | ❌ Off | Restart GIFs and WebMs when you hover over or expand them. |
| **Show Controls** | ✅ On | Show controls on videos expanded inline. |
| **Click Passthrough** | ❌ Off | Clicks on expanded videos trigger browser default behavior. Videos can be contracted with the close button or by dragging to the left. |
| **Allow Sound** | ✅ On | Open videos with sound unmuted. |
| **Mouse Wheel Volume** | ✅ On | Adjust video volume with the mouse wheel over the thumbnail, filename, or gallery. |
| **Loop in New Tab** | ✅ On | Loop videos opened in their own tabs. |
| **Volume in New Tab** | ✅ On | Apply 4chan XT mute and volume settings to videos opened in their own tabs. |
| **Enable sound posts** | ✅ On | Enable loading audio from `[sound=]` filenames. This audio is fetched from third parties. |

### Image Expansion Options

These options appear in the Image Expansion sub-menu (available in the header when "Expand all images" is active):

| Option | Default | Description |
|--------|---------|-------------|
| Fit width | ✅ On | Scale expanded images to fit the page width. |
| Fit height | ❌ Off | Scale expanded images to fit the viewport height. |
| Scroll into view | ✅ On | Scroll down when expanding images to bring the full image into view. |
| Expand spoilers | ✅ On | Include spoilered images when expanding all. |
| Expand videos | ✅ On | Include videos when expanding all images. |
| Expand from here | ❌ Off | Only expand images from the current position to the end of the thread. |
| Expand thread only | ❌ Off | In the index, only expand images within the current thread. |
| Advance on contract | ❌ Off | Move to the next post when contracting an expanded image. |

### Gallery Options

These options appear in the gallery's own settings menu:

| Option | Default | Description |
|--------|---------|-------------|
| Hide Thumbnails | ❌ Off | Hide the thumbnail strip in the gallery. |
| Fit Width | ✅ On | Fit gallery images to the width of the viewer. |
| Fit Height | ✅ On | Fit gallery images to the height of the viewer. |
| Stretch to Fit | ❌ Off | Stretch small images to fill the viewer. |
| Scroll to Post | ✅ On | Scroll the page to the post of the currently viewed gallery image. |
| Slide Delay | 6.0s | Delay between images in slideshow mode. |

---

## Menu

The post context menu appears when you click the **▶** button on a post.

| Feature | Default | Description |
|---------|---------|-------------|
| **Menu** | ✅ On | Add a drop-down menu to posts. |
| **Report Link** | ✅ On | Add a report link to the menu. |
| **Copy Text Link** | ✅ On | Add a link to copy the post's text. |
| **Thread Hiding Link** | ✅ On | Add a link to hide entire threads. |
| **Reply Hiding Link** | ✅ On | Add a link to hide single replies. |
| **Delete Link** | ✅ On | Add post and image deletion links to the menu. |
| **Archive Link** | ✅ On | Add an archive link to the menu. |
| **Edit Link** | ✅ On | Add a link to edit the image in Tegaki (/i/'s painting program). Requires Quick Reply. |
| **Download Link** | ❌ Off | Add a "download with original filename" link to the menu. |

---

## Monitoring

| Feature | Default | Description |
|---------|---------|-------------|
| **Thread Updater** | ✅ On | Automatically fetch and insert new replies. Has more options in the header menu and Advanced tab. |
| **Unread Count** | ✅ On | Show the unread post count in the browser tab title. |
| **Quoted Title** | ❌ Off | Change the page title to reflect you've been quoted. |
| **Hide Unread Count at (0)** | ❌ Off | Hide the unread post count from the tab title when it reaches 0. |
| **Unread Favicon** | ✅ On | Show a different favicon when there are unread posts. |
| **Unread Line** | ✅ On | Show a line separating read posts from unread ones. |
| **Remember Last Read Post** | ✅ On | Remember how far you've read after closing the thread. |
| **Scroll to Last Read Post** | ✅ On | Scroll back to the last read post when reopening a thread. |
| **Unread Line in Index** | ❌ Off | Show a line between read and unread posts in threads in the index. |
| **Remove Thread Excerpt** | ❌ Off | Replace the thread excerpt in the tab title with the board title. |
| **Thread Stats** | ✅ On | Display reply count, image count, and other statistics. |
| **IP Count in Stats** | ✅ On | Display the unique IP count in thread stats. |
| **Page Count in Stats** | ✅ On | Display the page count in thread stats. |
| **Purge Position** | ❌ Off | Update stats more often and add purge position when a thread is close to getting purged. Useful for general thread managers. |
| **Updater and Stats in Header** | ✅ On | Place the thread updater and thread stats in the header instead of floating them. |
| **Thread Watcher** | ✅ On | Bookmark threads and track them for new posts. Has more options in the watcher menu. |
| **Fixed Thread Watcher** | ✅ On | Make the thread watcher scroll with the page. |
| **Persistent Thread Watcher** | ❌ Off | Show the thread watcher when the page is loaded (instead of requiring a click). |
| **Mark New IPs** | ❌ Off | Label each post from a new IP with the thread's current IP count. |
| **Reply Pruning** | ✅ On | Add option in the header menu to hide old replies in long threads. Activated by default in stickies. |
| **Prune All Threads** | ❌ Off | Activate Reply Pruning by default in all threads. |

### Thread Updater Options

These options appear in the thread updater controls (in the header or floating):

| Option | Default | Description |
|--------|---------|-------------|
| Beep | ❌ Off | Beep on new post to a completely read thread. |
| Beep Quoting You | ❌ Off | Beep on new post quoting you. |
| Auto Scroll | ❌ Off | Scroll updated posts into view. Only active when you're at the bottom of the page. |
| Bottom Scroll | ❌ Off | Always scroll to the bottom (not just the first new post). Useful for event threads. |
| Scroll BG | ❌ Off | Auto-scroll in background tabs. |
| Auto Update | ✅ On | Automatically fetch new posts. |
| Optional Increase | ❌ Off | Increase the intervals between updates on threads without new posts. |
| Interval | 5s | Seconds between auto-updates. |

### Thread Watcher Options

These options appear in the thread watcher's settings menu:

| Option | Default | Description |
|--------|---------|-------------|
| Current Board | ❌ Off | Only show watched threads from the current board. |
| Auto Update Thread Watcher | ✅ On | Periodically check the status of watched threads. |
| Auto Watch | ✅ On | Automatically watch threads you start. |
| Auto Watch Reply | ✅ On | Automatically watch threads you reply to. |
| Auto Prune | ❌ Off | Automatically remove dead threads from the watcher. |
| Show Page | ✅ On | Show what page each watched thread is on. |
| Show Unread Count | ✅ On | Show number of unread posts in watched threads. |
| Show Site Prefix | ✅ On | When multiple sites are in the watcher, add a prefix to board names to distinguish them. |
| Require OP Quote Link | ❌ Off | For thread watcher highlighting, only consider posts with a quote link to the OP as replies to the OP. |

---

## Posting and Captchas

| Feature | Default | Description |
|---------|---------|-------------|
| **Quick Reply** | ✅ On | All-in-one form to reply, create threads, automate dumping, and more. |
| **Persistent QR** | ❌ Off | Keep the Quick Reply open after posting. |
| **Auto Hide QR** | ✅ On | Automatically hide the Quick Reply after posting. |
| **Open Post in New Tab** | ✅ On | Open new threads in a new tab. Open replies in a new tab if you're not already in the thread. |
| **Remember QR Size** | ❌ Off | Remember the size of the Quick Reply between sessions. |
| **Remember Spoiler** | ❌ Off | Remember the spoiler toggle state instead of resetting after posting. |
| **Randomize Filename** | ❌ Off | Set the filename to a random timestamp within the past year. Disabled on /f/. |
| **Show New Thread Option in Threads** | ✅ On | Show the option to post a new / different thread from inside a thread. |
| **Show Upload Progress** | ✅ On | Show file upload progress as a percentage in the submit button. |
| **Cooldown** | ✅ On | Show the remaining time before you can post again. |
| **Posting Success Notifications** | ✅ On | Show notifications on successful post creation or file uploading. |
| **Auto-load captcha** | ❌ Off | Automatically load the captcha in the QR even if your post is empty. |
| **Post on Captcha Completion** | ❌ Off | Submit the post immediately when the captcha is completed. |
| **Avoid OffscreenCanvas** | ❌ Off | Do not use OffscreenCanvas when converting images. Workaround for a LibreWolf bug. |
| **Force Noscript Captcha** | ❌ Off | Use the non-JavaScript fallback captcha even if JavaScript is enabled. |
| **Pass Link** | ❌ Off | Add a 4chan Pass login link to the bottom of the page. |

### Quick Reply Tips

- **Open**: Press `q` (empty) or `Shift+q` (with post number).
- **Submit**: Press `Ctrl+Enter` or click Submit.
- **Drag-and-drop**: Drop images onto the QR to attach them.
- **Spoiler toggle**: Mark your image as a spoiler before posting.
- **Dump mode**: Queue multiple posts for sequential submission.
- **Split post**: Split long posts across multiple submissions.
- **Filename un-randomize**: If "Randomize Filename" is on, you can click a button to restore the original filename.

### QR Personas

Configure posting personas (name, email, subject defaults per board) in **Settings → Advanced → QR → Personas**:

```
#options:"sage";boards:jp;always
```

Format: `#name:"Name";options:"email";boards:board1,board2;always`

---

## Quote Links

| Feature | Default | Description |
|---------|---------|-------------|
| **Quote Backlinks** | ✅ On | Add backlinks showing who replied to each post. |
| **OP Backlinks** | ✅ On | Add backlinks to the OP (original post). |
| **Bottom Backlinks** | ❌ Off | Place backlinks at the bottom of posts instead of the top. |
| **Quote Inlining** | ✅ On | Click a quote link to inline the quoted post. |
| **Inline Cross-thread Quotes Only** | ❌ Off | Only inline quote links when the quoted post is from a different thread. |
| **Quote Hash Navigation** | ❌ Off | Include an extra `#` link after quotes for auto-scrolling to quoted posts. |
| **Forward Hiding** | ✅ On | Hide original posts of inlined backlinks. |
| **Quote Previewing** | ✅ On | Show the quoted post on hover. |
| **Quote Highlighting** | ✅ On | Highlight the previewed post. |
| **Resurrect Quotes** | ✅ On | Link dead quotes to the archives, and support inlining/previewing of archive links. |
| **Remember Your Posts** | ✅ On | Remember your posting history across sessions. |
| **Mark Quotes of You** | ✅ On | Add "(You)" to quotes linking to your posts. |
| **Highlight Posts Quoting You** | ✅ On | Highlight any posts that contain a quote to your post. |
| **Highlight Own Posts** | ✅ On | Highlight your own posts. |
| **Mark OP Quotes** | ✅ On | Add "(OP)" to quotes linking to the OP. |
| **Mark Cross-thread Quotes** | ✅ On | Add "(Cross-thread)" to cross-thread quotes. |
| **Quote Threading** | ✅ On | Add an option in the header menu to thread conversations in a tree view. |

---

## Features Unique to 4chan XT

These features were added after the fork from 4chan X:

- **Restore Deleted Posts from Archive** — Fetches the thread from an external archive and inserts deleted posts back into the thread.
- **Basic Audio Posts Support** — Enables loading audio from `[sound=]` filenames.
- **Automatic Image Conversion** — Automatically converts unsupported image files to PNG, and JPGs above the size limit are re-encoded.
- **Dual Timestamps** — Show both relative time and an absolute timestamp on posts simultaneously.
- **Count Poster IDs** — Counts unique poster IDs as a replacement for the removed IP counter.
- **Hide All Posts by ID** — Hide all posts from a poster ID in a thread.
- **Manifest V3 Extension** — A Chrome extension build compatible with Manifest V3.
- **Un-randomize Filename** — A button to restore the original filename when "Randomize Filename" is enabled.
- **Filter Reason in Stub** — Shows why a post was filtered directly in the stub.
- **Scroll Bar Markers** — Marks replies to your posts and your own posts on the scroll bar.
- **FxTwitter Embeds** — Enhanced Twitter/X embeds with reply loading and community notes.
- **Multiple Keybind Actions** — A single keybind can trigger multiple actions.
- **Split Post** — Split long posts across multiple Quick Reply submissions.

---

*See also: [Keyboard Shortcuts](./Keyboard-Shortcuts.md) · [Filtering](./Filtering.md) · [Sauce](./Sauce.md) · [Embedding](./Embedding.md) · [Archives](./Archives.md)*