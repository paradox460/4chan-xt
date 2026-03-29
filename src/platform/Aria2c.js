import Notice from "../classes/Notice";
import { Conf } from "../globals/globals";
import $ from "./$";

const Aria2c = {
  /**
   * Check if the aria2c JSON-RPC server is reachable.
   * Returns a Promise<boolean>.
   */
  checkAvailability() {
    const url = Conf['aria2cUrl'] || 'http://localhost:6800/jsonrpc';

    return new Promise((resolve) => {
      const gmXHR = window.GM?.xmlHttpRequest || window.GM_xmlhttpRequest;
      if (gmXHR) {
        try {
          gmXHR({
            method: 'HEAD',
            url: url,
            timeout: 3000,
            onload() { resolve(true); },
            onerror() { resolve(false); },
            ontimeout() { resolve(false); },
            onabort() { resolve(false); }
          });
          return;
        } catch (e) {
          // fall through to XHR
        }
      }

      try {
        const xhr = new XMLHttpRequest();
        xhr.open('HEAD', url, true);
        xhr.timeout = 3000;
        xhr.onloadend = function() {
          resolve(this.status > 0);
        };
        xhr.onerror = function() { resolve(false); };
        xhr.ontimeout = function() { resolve(false); };
        xhr.send();
      } catch (e) {
        resolve(false);
      }
    });
  },

  /**
   * Make an aria2c JSON-RPC call.
   * @param {string} method - RPC method name (e.g. 'aria2.addUri')
   * @param {Array} params - RPC params (secret token is prepended automatically)
   * @returns {Promise<any>} - resolves with the RPC result
   */
  rpc(method, params) {
    const url = Conf['aria2cUrl'] || 'http://localhost:6800/jsonrpc';
    const secret = Conf['aria2cSecret'] || '';

    const rpcParams = secret ? [`token:${secret}`, ...params] : params;

    const body = JSON.stringify({
      jsonrpc: '2.0',
      id: `4chanx-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      method: method,
      params: rpcParams
    });

    return new Promise((resolve, reject) => {
      const gmXHR = window.GM?.xmlHttpRequest || window.GM_xmlhttpRequest;
      if (gmXHR) {
        try {
          gmXHR({
            method: 'POST',
            url: url,
            headers: { 'Content-Type': 'application/json' },
            data: body,
            responseType: 'json',
            onload(xhr) {
              let response;
              try {
                response = typeof xhr.response === 'string' ? JSON.parse(xhr.response) : xhr.response;
              } catch (e) {
                try {
                  response = JSON.parse(xhr.responseText);
                } catch (e2) {
                  reject(new Error('Failed to parse aria2c response'));
                  return;
                }
              }
              if (response?.error) {
                reject(new Error(response.error.message || 'aria2c RPC error'));
              } else {
                resolve(response?.result);
              }
            },
            onerror() {
              reject(new Error('Failed to connect to aria2c'));
            },
            ontimeout() {
              reject(new Error('aria2c request timed out'));
            }
          });
          return;
        } catch (e) {
          // fall through to XHR
        }
      }

      // Fallback to regular XHR (works if aria2c is on same origin or has CORS)
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.responseType = 'json';
      xhr.onloadend = function() {
        const response = this.response;
        if (!response) {
          reject(new Error('Failed to connect to aria2c'));
        } else if (response.error) {
          reject(new Error(response.error.message || 'aria2c RPC error'));
        } else {
          resolve(response.result);
        }
      };
      xhr.send(body);
    });
  },

  /**
   * Resolve a potentially relative URL to an absolute one.
   */
  resolveUrl(fileUrl) {
    if (fileUrl.startsWith('//')) {
      return location.protocol + fileUrl;
    } else if (fileUrl.startsWith('/')) {
      return location.origin + fileUrl;
    }
    return fileUrl;
  },

  /**
   * Send a single file to aria2c.
   * @param {string} url - file URL
   * @param {string} name - desired output filename
   * @returns {Promise<string>} - resolves with aria2c GID
   */
  addUri(url, name) {
    return Aria2c.rpc('aria2.addUri', [
      [Aria2c.resolveUrl(url)],
      { out: name }
    ]);
  },

  /**
   * Download a single file via aria2c, with silent fallback to browser download
   * if aria2c is unavailable.
   *
   * @param {string} url - file URL (the href)
   * @param {string} name - desired filename (the download attribute)
   * @param {function} browserFallback - function to call for browser download
   */
  async downloadSingle(url, name, browserFallback) {
    if (!Conf['aria2cEnabled']) {
      browserFallback();
      return;
    }

    const available = await Aria2c.checkAvailability();
    if (!available) {
      browserFallback();
      return;
    }

    try {
      await Aria2c.addUri(url, name);
      new Notice('success', `Sent to aria2c: ${name}`, 3);
    } catch (e) {
      new Notice('warning', `aria2c failed, downloading via browser: ${e.message}`, 5);
      browserFallback();
    }
  },

  /**
   * Download multiple files via aria2c, with availability check and user prompt
   * for fallback.
   *
   * @param {Array<{url: string, name: string}>} files
   * @param {function} browserFallback - async function(files) for browser download
   */
  async downloadMultiple(files, browserFallback) {
    if (!Conf['aria2cEnabled']) {
      await browserFallback(files);
      return;
    }

    const available = await Aria2c.checkAvailability();
    if (!available) {
      const shouldContinue = await Aria2c.promptFallback(files.length);
      if (shouldContinue) {
        await browserFallback(files);
      }
      return;
    }

    const notice = new Notice('info', `Sending ${files.length} file${files.length === 1 ? '' : 's'} to aria2c...`);

    let sent = 0;
    let failed = 0;
    const errors = [];

    for (const file of files) {
      try {
        await Aria2c.addUri(file.url, file.name);
        sent++;
      } catch (e) {
        failed++;
        errors.push(`${file.name}: ${e.message}`);
      }
      notice.el.lastElementChild.textContent =
        `Sending to aria2c: ${sent + failed} of ${files.length}...`;
    }

    notice.close();
    if (failed) {
      const msg = $.el('div');
      $.add(msg, $.tn(`Sent ${sent} of ${files.length} files to aria2c. ${failed} failed.`));
      if (errors.length <= 5) {
        for (const err of errors) {
          $.add(msg, $.el('br'));
          $.add(msg, $.tn(err));
        }
      }
      new Notice('warning', msg, 15);
    } else {
      new Notice('success', `Sent all ${files.length} file${files.length === 1 ? '' : 's'} to aria2c.`, 5);
    }
  },

  /**
   * Prompt the user whether to fall back to browser download when aria2c is
   * unreachable and multiple files are involved.
   *
   * @param {number} fileCount
   * @returns {Promise<boolean>} - true if user wants to continue with browser download
   */
  promptFallback(fileCount) {
    return new Promise((resolve) => {
      const msg = $.el('div');
      $.add(msg, $.tn(`aria2c is not reachable at ${Conf['aria2cUrl'] || 'http://localhost:6800/jsonrpc'}.`));
      $.add(msg, $.el('br'));
      $.add(msg, $.tn(`Download ${fileCount} files via browser instead?`));
      $.add(msg, $.el('br'));

      const yes = $.el('button', { textContent: 'Yes, download via browser' });
      const no = $.el('button', { textContent: 'Cancel' });
      yes.style.marginRight = '8px';
      yes.style.marginTop = '8px';
      no.style.marginTop = '8px';

      $.add(msg, yes);
      $.add(msg, no);

      const notice = new Notice('warning', msg);

      $.on(yes, 'click', () => {
        notice.close();
        resolve(true);
      });
      $.on(no, 'click', () => {
        notice.close();
        resolve(false);
      });
    });
  }
};

export default Aria2c;