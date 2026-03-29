import Notice from "../classes/Notice";
import { d, g } from "../globals/globals";
import Aria2c from "../platform/Aria2c";
import CrossOrigin from "../platform/CrossOrigin";
import $ from "../platform/$";
import Header from "../General/Header";

const DELAY_BETWEEN_DOWNLOADS = 500;

const DownloadAllLink = {
  init() {
    if (g.VIEW !== 'thread') { return; }

    const menuEntry = $.el('a', {
      href: 'javascript:;',
      textContent: 'Download All Media'
    });

    $.on(menuEntry, 'click', () => {
      DownloadAllLink.download();
      Header.menu.close();
    });

    Header.menu.addEntry({
      el: menuEntry,
      order: 15,
    });
  },

  collectFiles() {
    const thread = g.threads.get(`${g.BOARD}.${g.THREADID}`);
    if (!thread) { return []; }

    const files = [];
    thread.posts.forEach(function(post) {
      if (post.isClone) { return; }
      for (const file of post.files) {
        if (!file.isDead) {
          files.push({ url: file.url, name: file.name });
        }
      }
    });
    return files;
  },

  fetchFile(file) {
    return new Promise((resolve) => {
      CrossOrigin.file(file.url, function(blob) {
        resolve(blob);
      });
    });
  },

  triggerDownload(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = $.el('a', {
      href: url,
      download: name,
      hidden: true
    });
    $.add(d.body, a);
    a.click();
    $.rm(a);
    setTimeout(() => URL.revokeObjectURL(url), 30000);
  },

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },

  async downloadViaBrowser(files) {
    const notice = new Notice('info', `Downloading 0 of ${files.length} file${files.length === 1 ? '' : 's'}...`);

    let completed = 0;
    let failed = 0;

    for (const file of files) {
      const blob = await DownloadAllLink.fetchFile(file);
      if (blob) {
        DownloadAllLink.triggerDownload(blob, file.name);
      } else {
        failed++;
      }
      completed++;
      notice.el.lastElementChild.textContent =
        `Downloading ${completed} of ${files.length} file${files.length === 1 ? '' : 's'}...`;
      await DownloadAllLink.delay(DELAY_BETWEEN_DOWNLOADS);
    }

    notice.close();
    if (failed) {
      new Notice('warning', `Downloaded ${completed - failed} of ${files.length} files. ${failed} failed.`, 10);
    } else {
      new Notice('success', `Downloaded all ${files.length} file${files.length === 1 ? '' : 's'}.`, 5);
    }
  },

  async download() {
    const files = DownloadAllLink.collectFiles();

    if (!files.length) {
      new Notice('warning', 'No files found in this thread.', 5);
      return;
    }

    await Aria2c.downloadMultiple(files, DownloadAllLink.downloadViaBrowser);
  }
};
export default DownloadAllLink;