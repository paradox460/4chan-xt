# Monitoring & Thread Watching

4chan XT includes a suite of tools for monitoring threads in real time — automatic updates, unread post tracking, thread watching across boards, and detailed thread statistics.

---

## Table of Contents

- [Thread Updater](#thread-updater)
- [Unread Post Tracking](#unread-post-tracking)
- [Thread Watcher](#thread-watcher)
- [Thread Statistics](#thread-statistics)
- [Notifications](#notifications)
- [Reply Pruning](#reply-pruning)
- [Mark New IPs](#mark-new-ips)
- [Favicon Indicators](#favicon-indicators)

---

## Thread Updater

The Thread Updater automatically fetches new replies in threads you're viewing, so you never have to manually refresh.

**Enable:** Settings → Main → Monitoring → **Thread Updater** (on by default)

### How It Works

- When viewing a thread, 4chan XT periodically polls the server for new posts.
- New posts are inserted at the bottom of the thread as they arrive.
- The update interval is configurable (default: **5 seconds**).
- If **Optional Increase** is enabled, the interval grows when no new posts are found, reducing server load on slow threads.

### Controls

The updater controls appear in the **header bar** (if "Updater and Stats in Header" is enabled) or as a floating element. They display:

- The countdown timer until the next update
- A manual **Update** button
- Status indicator (updating, error, thread dead, etc.)

You can also press **R** to manually trigger an update at any time.

### Updater Options

Configure these in the thread updater's menu or in Settings → Advanced:

| Option | Default | Description |
|--------|---------|-------------|
| **Auto Update** | ✅ On | Automatically fetch new posts on the timer interval. |
| **Interval** | 5 seconds | Time between automatic updates. |
| **Optional Increase** | ❌ Off | Gradually increase the interval when no new posts are found. |
| **Beep** | ❌ Off | Play a sound when a new post arrives in a completely-read thread. |
| **Beep Quoting You** | ❌ Off | Play a sound when a new post quotes you. |
| **Auto Scroll** | ❌ Off | Scroll new posts into view. Only active when you're at the bottom of the page. |
| **Bottom Scroll** | ❌ Off | Always scroll to the very bottom, not just the first new post. Useful for event threads. |
| **Scroll BG** | ❌ Off | Auto-scroll even in background tabs. |

### Custom Beep Sound

You can provide a custom notification sound URL in **Settings → Advanced → Beep Source**. Leave blank to use the built-in beep. Adjust the volume with **Beep Volume** (0.0–1.0, default: 1.0).

---

## Unread Post Tracking

4chan XT tracks which posts you've read and provides multiple visual indicators for unread content.

### Unread Count in Tab Title

**Enable:** Settings → Main → Monitoring → **Unread Count** (on by default)

The browser tab title shows the number of unread posts in parentheses, e.g.:

```
(3) /g/ - Technology
```

Related options:

| Option | Default | Description |
|--------|---------|-------------|
| **Quoted Title** | ❌ Off | Change the tab title when you've been quoted (e.g., `(!) /g/ - Technology`). |
| **Hide Unread Count at (0)** | ❌ Off | Don't show `(0)` when all posts are read. |
| **Remove Thread Excerpt** | ❌ Off | Replace the thread excerpt in the tab title with just the board title. |

### Unread Line

**Enable:** Settings → Main → Monitoring → **Unread Line** (on by default)

A horizontal line is drawn between the last post you've read and the first unread post. This makes it easy to find where you left off.

| Option | Default | Description |
|--------|---------|-------------|
| **Unread Line in Index** | ❌ Off | Also show the unread line in threads on the board index. |

### Remember Last Read Post

**Enable:** Settings → Main → Monitoring → **Remember Last Read Post** (on by default)

4chan XT saves your reading position for each thread. When you revisit a thread, it knows where you left off.

| Option | Default | Description |
|--------|---------|-------------|
| **Scroll to Last Read Post** | ✅ On | Automatically scroll to your last read position when reopening a thread. |

> **Privacy note:** This data persists even in private browsing / incognito mode by default. Disable "Remember Last Read Post" if you don't want this. You can also clear all history by resetting your settings, or export settings without history by unchecking **Export History**.

### Scroll Bar Markers

**Enable:** Settings → Main → Miscellaneous → **Scroll Markers** (on by default)

Your own posts and replies to your posts are marked on the browser scroll bar, making it easy to spot where in a long thread you've been mentioned or have posted. This feature relies on **Highlight Posts Quoting You** and **Highlight Own Posts** being enabled.

---

## Thread Watcher

The Thread Watcher lets you bookmark threads and monitor them for new posts — even across different boards and sites.

**Enable:** Settings → Main → Monitoring → **Thread Watcher** (on by default)

### How to Use

1. **Watch a thread:** Click the bookmark icon next to a thread's subject, or press **W** while viewing a thread.
2. **Open the watcher panel:** Click the watcher icon in the header bar, or press **T**.
3. **View updates:** Watched threads show their board, subject, and unread post count.
4. **Click a thread** in the watcher to navigate to it.
5. **Unwatch:** Click the × button next to a thread in the watcher, or press **W** again while viewing the thread.

### Watcher Panel

The watcher panel displays a list of all your watched threads with:

- **Board name** (with site prefix if watching threads on multiple sites)
- **Thread subject / excerpt**
- **Unread count** (if "Show Unread Count" is enabled)
- **Page number** (if "Show Page" is enabled) — helps you know how close a thread is to being pruned
- **Dead indicator** — threads that have 404'd are marked

### Watcher Options

Configure in the watcher's own menu (click the gear icon in the watcher panel):

| Option | Default | Description |
|--------|---------|-------------|
| **Current Board** | ❌ Off | Only show watched threads from the current board. |
| **Auto Update Thread Watcher** | ✅ On | Periodically check the status of watched threads. |
| **Auto Watch** | ✅ On | Automatically watch threads you create. |
| **Auto Watch Reply** | ✅ On | Automatically watch threads you reply to. |
| **Auto Prune** | ❌ Off | Automatically remove dead (404'd) threads from the watcher. |
| **Show Page** | ✅ On | Show what page each watched thread is on. |
| **Show Unread Count** | ✅ On | Show the number of unread posts per watched thread. |
| **Show Site Prefix** | ✅ On | Add a site prefix to board names when multiple sites are shown (e.g., `4:/g/` vs `kis:/megu/`). |
| **Require OP Quote Link** | ❌ Off | Only highlight a thread as having new replies if a post contains a direct quote link to the OP. |

### Display Options

| Option | Default | Description |
|--------|---------|-------------|
| **Fixed Thread Watcher** | ✅ On | The watcher panel scrolls with the page (stays visible). |
| **Persistent Thread Watcher** | ❌ Off | Show the watcher panel on page load instead of requiring a click to open it. |

### Watcher Actions

The thread watcher panel includes several bulk-action buttons:

- **Refresh** (`Shift+R`) — Manually refresh the status of all watched threads.
- **Prune Read Dead Threads** — Remove all dead threads that have no unread posts.
- **Open Unread Dead Threads** — Open all dead threads that still have unread posts in new tabs (so you can read them before they disappear from archives).
- **Clear Thread Watcher** — Remove all watched threads at once (with confirmation).

### Keyboard Shortcuts

| Action | Default Key | Description |
|--------|-------------|-------------|
| Watch / Unwatch | `w` | Toggle watching the current thread |
| Toggle watcher panel | `t` | Show or hide the watcher panel |
| Update watcher | `Shift+r` | Manually refresh all watched threads |
| Mark thread read | `Ctrl+0` | Mark the current thread as read from the index (requires "Unread Line in Index") |

---

## Thread Statistics

**Enable:** Settings → Main → Monitoring → **Thread Stats** (on by default)

Thread stats display reply count, image count, and optionally more information. They appear in the **header bar** (if "Updater and Stats in Header" is enabled) or as a floating element.

### Displayed Information

- **Reply count** — Total number of replies in the thread
- **Image count** — Total number of images/files posted
- **Unique IP count** — Number of unique posters (if **IP Count in Stats** is enabled)
- **Page number** — What page the thread is currently on (if **Page Count in Stats** is enabled)
- **Purge position** — How close the thread is to being pruned (if **Purge Position** is enabled)

### Stats Options

| Option | Default | Description |
|--------|---------|-------------|
| **IP Count in Stats** | ✅ On | Display the unique IP count (or poster ID count as a replacement for the removed IP counter). |
| **Page Count in Stats** | ✅ On | Display which page the thread is on. |
| **Purge Position** | ❌ Off | Update stats more frequently and show purge position when the thread is close to being pruned. Useful for general thread managers. |
| **Updater and Stats in Header** | ✅ On | Place stats in the header bar instead of floating them on the page. |

---

## Notifications

4chan XT can send browser desktop notifications for various events.

**Enable:** Settings → Main → Miscellaneous → **Desktop Notifications** (on by default)

> **Note:** Your browser will ask for permission to show notifications. You must allow it for this feature to work.

### Notification Triggers

| Source | Trigger |
|--------|---------|
| **Thread Updater** | New posts arrive (when Beep is enabled, a notification may accompany it) |
| **Quotes of You** | Someone replies to one of your posts |
| **Filters** | A post matches a filter with the `notify` option |
| **Thread Watcher** | Watched threads receive new posts |
| **Post Success** | Your post was submitted successfully (if "Posting Success Notifications" is enabled) |
| **MD5 Quick Filter** | An image was quick-filtered by MD5 (if "MD5 Quick Filter Notifications" is enabled) |
| **Update Notification** | 4chan XT was updated (if "Show Updated Notifications" is enabled) |

### Closing Notifications

Press **Esc** (or click the × on the notification) to dismiss notifications and dialogs.

---

## Reply Pruning

**Enable:** Settings → Main → Monitoring → **Reply Pruning** (on by default)

Reply Pruning hides old replies in long threads to improve browser performance. This is especially useful in sticky threads that can accumulate thousands of replies.

- By default, pruning is only activated automatically in **stickied threads**.
- Enable **Prune All Threads** to activate pruning in all threads by default.
- A toggle in the **header menu** lets you turn pruning on/off for the current thread.
- Pruned (hidden) posts are not deleted — they are just hidden from view. Scrolling up will not reveal them, but they can be restored by toggling pruning off.

### Max Replies

In **Settings → Advanced**, the **Max Replies** setting (default: 1000) controls the threshold. When a thread exceeds this many replies, the oldest replies are hidden.

---

## Mark New IPs

**Enable:** Settings → Main → Monitoring → **Mark New IPs** (off by default)

When enabled, each post from a new IP address is labeled with the thread's current IP count at the time the post was detected. This helps you see when new posters join a thread.

The label appears next to the post and indicates the poster's position in the thread's IP count history (e.g., "IP: 47" means this was the 47th unique poster detected).

---

## Favicon Indicators

**Enable:** Settings → Main → Monitoring → **Unread Favicon** (on by default)

4chan XT changes the browser tab's favicon to indicate thread status:

| State | Favicon |
|-------|---------|
| No unread posts | Default board favicon |
| Unread posts | Modified favicon (style depends on the selected favicon set) |
| Unread reply to you | Special "(You)" variant favicon |
| Dead thread (404) | Dead thread favicon |

### Favicon Styles

Choose your favicon style in **Settings → Advanced → Favicon**:

- **ferongr** (default)
- **xat-**
- **Mayhem**
- **Original**
- **dead**

Each style has SFW (blue-tinted), NSFW (red-tinted), dead, and "(You)" variants.

---

*See also: [Features →](./Features.md) · [Keyboard Shortcuts →](./Keyboard-Shortcuts.md) · [Settings →](./Settings.md)*