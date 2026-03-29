# Quick Reply & Posting

4chan XT replaces the native posting form with an enhanced Quick Reply (QR) panel that supports drag-and-drop images, automatic captcha handling, file dumping, post splitting, and many quality-of-life improvements.

---

## Table of Contents

- [Opening the Quick Reply](#opening-the-quick-reply)
- [Quick Reply Interface](#quick-reply-interface)
- [Posting a Reply](#posting-a-reply)
- [Creating a New Thread](#creating-a-new-thread)
- [Captcha](#captcha)
- [File Handling](#file-handling)
- [Dump Mode](#dump-mode)
- [Post Splitting](#post-splitting)
- [Cooldown Timer](#cooldown-timer)
- [Personas](#personas)
- [Posting Settings Reference](#posting-settings-reference)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Tips & Best Practices](#tips--best-practices)

---

## Opening the Quick Reply

There are several ways to open the Quick Reply panel:

| Method | Description |
|--------|-------------|
| Press **Q** | Open the QR without a post number (empty reply) |
| Press **Shift+Q** | Open the QR with the selected post's number inserted as a quote link |
| Click a post number | Open the QR with that post number inserted |
| Click **[Reply]** | Open the QR for the current thread |

The QR panel is draggable — click and drag the title bar to reposition it anywhere on the page.

---

## Quick Reply Interface

The QR panel contains the following fields:

| Field | Description |
|-------|-------------|
| **Name** | Your name (leave blank for Anonymous). Supports tripcodes. |
| **Email / Options** | Email field. Enter `sage` to sage your post, or use the sage toggle shortcut (`Alt+S`). |
| **Subject** | Thread subject (limited to 100 characters). Primarily used when creating new threads. |
| **Comment** | The body of your post. Supports 4chan markup (spoilers, code tags, etc.). |
| **File** | Attach an image or file by clicking, pasting, or dragging and dropping. |
| **Spoiler** | Check to mark your attached file as a spoiler (on boards that support it). |
| **Submit** | Submit your post. Shows upload progress if "Show Upload Progress" is enabled. |

### Text Formatting Tags

You can insert formatting tags using keyboard shortcuts while typing in the comment field:

| Action | Shortcut | Result |
|--------|----------|--------|
| Spoiler tags | `Ctrl+S` | `[spoiler]selected text[/spoiler]` |
| Code tags | `Alt+C` | `[code]selected text[/code]` |
| Eqn tags | `Alt+E` | `[eqn]selected text[/eqn]` |
| Math tags | `Alt+M` | `[math]selected text[/math]` |
| SJIS tags | `Alt+A` | `[sjis]selected text[/sjis]` |

If you have text selected, the tags wrap the selection. Otherwise, they insert an empty tag pair with the cursor between them.

---

## Posting a Reply

1. **Open the QR** by pressing `Q`, `Shift+Q`, or clicking a post number.
2. **Type your comment** in the text area.
3. **Attach a file** (optional) by clicking the file area, pasting from the clipboard, or dragging and dropping.
4. **Solve the captcha** if required (see [Captcha](#captcha) below).
5. **Submit** by pressing `Ctrl+Enter` or clicking the Submit button.

After posting:
- If **Open Post in New Tab** is enabled and you're not in the thread, your reply opens in a new tab.
- If **Persistent QR** is enabled, the QR stays open. Otherwise, it closes (or auto-hides if **Auto Hide QR** is on).
- If **Posting Success Notifications** is enabled, a notification confirms your post was submitted.

---

## Creating a New Thread

When you're on a board index or catalog:

1. Open the QR (press `Q`).
2. Fill in the **Subject** field (required or recommended for new threads on most boards).
3. **Attach an image** — most boards require an image for new threads.
4. Write your **Comment**.
5. Submit with `Ctrl+Enter`.

When you're already inside a thread, you can still create a new thread if **Show New Thread Option in Threads** is enabled. A dropdown or toggle in the QR lets you switch between replying to the current thread and starting a new one.

---

## Captcha

4chan requires solving a CAPTCHA before posting. 4chan XT integrates the captcha directly into the Quick Reply.

### Captcha Options

| Setting | Default | Description |
|---------|---------|-------------|
| **Auto-load captcha** | ❌ Off | Automatically load the captcha in the QR even if your post is empty. By default, the captcha loads only when you have content to submit. |
| **Post on Captcha Completion** | ❌ Off | Submit the post immediately as soon as the captcha is completed, without needing to click Submit. |
| **Force Noscript Captcha** | ❌ Off | Use the non-JavaScript fallback captcha. May be useful if the standard captcha is broken. |
| **Captcha Language** | *(blank)* | Language code for the captcha widget (e.g., `en`, `ja`). Set in Settings → Advanced. |
| **Avoid OffscreenCanvas** | ❌ Off | Workaround for a bug in LibreWolf where OffscreenCanvas causes captcha rendering issues. |

### 4chan Pass

If you have a 4chan Pass, you can bypass the captcha entirely.

- **Pass Link** (off by default) — Adds a 4chan Pass login link to the bottom of the page.
- Once logged in with your Pass, captchas are no longer required.

---

## File Handling

### Attaching Files

You can attach files to your post in multiple ways:

| Method | How |
|--------|-----|
| **Click** | Click the file area in the QR to open a file picker |
| **Paste** | Paste an image from your clipboard (`Ctrl+V` / `⌘+V`) into the QR |
| **Drag and drop** | Drag a file from your file manager onto the QR panel |
| **Post from URL** | Press `Alt+L` to post an image directly from a URL |

### Pasted File Naming

When you paste an image from the clipboard, it is given a default filename. You can customize this name in **Settings → Advanced → Pasted Filename** (default: `file`).

### Filename Randomization

**Setting:** Posting and Captchas → **Randomize Filename** (off by default)

When enabled, the filename is replaced with a random timestamp within the past year before uploading. This prevents your filename from revealing information about when or where you saved the image. Disabled automatically on /f/ (Flash board).

If you change your mind after randomization, a button appears to **restore the original filename**.

### Automatic Image Conversion

4chan XT can automatically handle file format and size issues:

- **Unsupported formats → PNG:** If you attach an image in a format not supported by 4chan (e.g., WebP, BMP), 4chan XT converts it to PNG before uploading.
- **Oversized JPGs:** If a JPG exceeds the board's file size limit, 4chan XT re-encodes it at a lower quality to fit within the limit.

These conversions happen transparently — you'll see the converted file in the QR before submitting.

### Spoiler Toggle

Check the **Spoiler** checkbox in the QR to mark your file as a spoiler image (on boards that support spoilered images).

- If **Remember Spoiler** is enabled, the spoiler state carries over between posts instead of resetting.

---

## Dump Mode

Dump mode lets you queue multiple posts for sequential submission. This is useful for image dump threads where you want to post many images in rapid succession.

### How to Use

1. Open the QR.
2. Add multiple posts to the queue using `Alt+N` (Add new post).
3. Each queued post can have its own comment and file.
4. Submit — 4chan XT will post each queued entry one after another, respecting the cooldown timer between posts.

The dump list appears as a row of thumbnails/entries at the top of the QR. Click an entry to edit it. Drag entries to reorder them.

---

## Post Splitting

When your comment exceeds 4chan's character limit, 4chan XT can automatically split it across multiple posts.

### How It Works

1. Write a long comment in the QR.
2. If the comment exceeds the character limit, 4chan XT splits it into multiple sequential posts.
3. Each part is submitted separately, respecting the cooldown timer.

This is particularly useful for copypasting long text or writing detailed responses.

---

## Cooldown Timer

**Setting:** Posting and Captchas → **Cooldown** (on by default)

After posting, 4chan enforces a cooldown period before you can post again. 4chan XT displays a countdown timer on the Submit button showing how many seconds remain.

### Custom Cooldown

In **Settings → Advanced**, you can set a **Custom Cooldown** value (in seconds). This adds additional delay on top of the standard cooldown, which can be useful if you're getting rate-limited.

- **Custom Cooldown Enabled** — Toggle the custom cooldown on or off.
- **Toggle Cooldown** shortcut (`Alt+Comma`) — Quickly enable/disable the custom cooldown.

---

## Personas

Personas let you pre-configure name, email, and subject defaults that are automatically filled in the QR based on which board you're posting on.

### Configuration

Configure personas in **Settings → Advanced → QR → Personas**. Each line defines a persona:

```
#name:"Your Name";options:"sage";boards:jp;always
```

### Persona Format

| Field | Description |
|-------|-------------|
| `#name:"Name"` | The name to fill in |
| `options:"email"` | The email/options field value (e.g., `"sage"`) |
| `boards:` | Comma-separated list of boards this persona applies to (e.g., `boards:jp,a,vg`) |
| `always` | Always use this persona (even if you've manually changed the field) |

Lines starting with `#` in the name field are the persona identifier, not a comment. The entire line is the persona definition.

### Example Personas

Always sage on /jp/:
```
#options:"sage";boards:jp;always
```

Use a specific name on /vg/:
```
#name:"Anon";boards:vg
```

---

## Posting Settings Reference

All posting-related settings in **Settings → Main → Posting and Captchas**:

| Setting | Default | Description |
|---------|---------|-------------|
| **Quick Reply** | ✅ On | Enable the all-in-one Quick Reply form. |
| **Persistent QR** | ❌ Off | Keep the QR open after posting. |
| **Auto Hide QR** | ✅ On | Automatically hide (minimize) the QR after posting. |
| **Open Post in New Tab** | ✅ On | Open new threads in a new tab. Open replies in a new tab if you're not in the thread. |
| **Remember QR Size** | ❌ Off | Remember the QR's dimensions between sessions. |
| **Remember Spoiler** | ❌ Off | Preserve the spoiler toggle state between posts. |
| **Randomize Filename** | ❌ Off | Replace the filename with a random timestamp before uploading. Disabled on /f/. |
| **Show New Thread Option in Threads** | ✅ On | Show the option to create a new thread from within a thread. |
| **Show Upload Progress** | ✅ On | Display file upload progress as a percentage on the Submit button. |
| **Cooldown** | ✅ On | Show remaining cooldown time before you can post again. |
| **Posting Success Notifications** | ✅ On | Show a notification when your post is submitted or file is uploaded. |
| **Auto-load captcha** | ❌ Off | Load the captcha as soon as the QR opens, even with an empty post. |
| **Post on Captcha Completion** | ❌ Off | Submit immediately upon completing the captcha. |
| **Avoid OffscreenCanvas** | ❌ Off | Workaround for OffscreenCanvas issues in LibreWolf. |
| **Force Noscript Captcha** | ❌ Off | Use the fallback non-JavaScript captcha. |
| **Pass Link** | ❌ Off | Add a 4chan Pass login link to the page. |

---

## Keyboard Shortcuts

All posting-related keyboard shortcuts (customizable in Settings → Keybinds):

### Opening & Submitting

| Action | Default | Description |
|--------|---------|-------------|
| Open empty QR | `Q` | Open the QR without a post number |
| Open QR | `Shift+Q` | Open the QR with the selected post's number |
| Submit QR | `Ctrl+Enter` | Submit your post |
| Close | `Esc` | Close the QR (and other dialogs) |

### Text Formatting

| Action | Default | Description |
|--------|---------|-------------|
| Spoiler tags | `Ctrl+S` | Insert `[spoiler]...[/spoiler]` tags |
| Code tags | `Alt+C` | Insert `[code]...[/code]` tags |
| Eqn tags | `Alt+E` | Insert `[eqn]...[/eqn]` tags |
| Math tags | `Alt+M` | Insert `[math]...[/math]` tags |
| SJIS tags | `Alt+A` | Insert `[sjis]...[/sjis]` tags |

### Posting Options

| Action | Default | Description |
|--------|---------|-------------|
| Toggle sage | `Alt+S` | Toggle `sage` in the email/options field |
| Toggle Cooldown | `Alt+Comma` | Toggle the custom cooldown timer |
| Post from URL | `Alt+L` | Attach an image from a URL |
| Add new post | `Alt+N` | Add a new entry to the dump queue |

---

## Tips & Best Practices

- **Quick quoting:** Click any post number to instantly open the QR with a quote link (`>>12345678`) already inserted.
- **Multi-quoting:** Click multiple post numbers — each one is appended to the QR's comment field as a new quote link.
- **Drag to reposition:** The QR is fully draggable. Place it wherever is most convenient.
- **Resize the comment box:** Drag the bottom-right corner of the comment text area to resize it. Enable **Remember QR Size** to save the size between sessions.
- **Paste images directly:** Copy an image from any application and paste it into the QR with `Ctrl+V`. It's often faster than saving the file first.
- **Use sage wisely:** Press `Alt+S` to quickly toggle sage without typing in the email field. The sage state is visible in the QR header.
- **Rapid posting with dump mode:** For image dump threads, queue all your images with `Alt+N`, then submit once. 4chan XT handles the rest, respecting cooldowns.
- **Post on Captcha Completion** is a great time-saver if you always submit immediately after solving the captcha. Enable it to skip the extra `Ctrl+Enter` step.
- **SJIS Preview:** Enable `sjisPreview` in Settings → Advanced → QR to preview Shift-JIS art in the QR before posting.

### Aria2c Integration

For power users, 4chan XT supports downloading files via the [Aria2](https://aria2.github.io/) download manager:

| Setting | Default | Description |
|---------|---------|-------------|
| **Aria2c Enabled** | ❌ Off | Enable downloading via Aria2c. |
| **Aria2c URL** | `http://localhost:6800/jsonrpc` | Aria2c JSON-RPC endpoint. |
| **Aria2c Secret** | *(blank)* | Secret token for Aria2c authentication. |

When enabled, download links in the post menu will send files to your Aria2c instance instead of downloading through the browser.

---

*See also: [Features →](./Features.md) · [Keyboard Shortcuts →](./Keyboard-Shortcuts.md) · [Settings →](./Settings.md) · [Filtering →](./Filtering.md)*