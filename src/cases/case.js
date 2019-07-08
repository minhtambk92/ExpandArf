import * as utils from '../utils';

export default class Case {
  constructor() {
    window.renderDone = () => {
      this.renderDone();
    };

    utils.admaddEventListener(window, 'message', (a) => {
      console.log('receive', a.data);
      if (typeof a.data === 'string' && a.data === 'start') {
        const iframes = this.getIframes();
        iframes.forEach((ifr) => {
          ifr.contentWindow.postMessage('start', '*');
        });
      }
      if (typeof a.data === 'string' && a.data === 'pause') {
        const iframes = this.getIframes();
        iframes.forEach((ifr) => {
          ifr.contentWindow.postMessage('pause', '*');
        });
      }
    });

    this.checkUserAgent = utils.checkUserAngent();
  }

  getIframes() {
    return Array.from(document.getElementsByTagName('iframe'));
  }
  /**
   * this function to tell Arf core the time when html5 loaded. eg: Arf'll post msg start/stop when html5 loaded.
   */
  renderDone() {
    const signal = {};
    signal.name = 'ArfHtml5';
    signal.type = 'onload';
    signal.iframeId = window.frameElement.id;
    parent.window.postMessage(signal, '*');
  }
}
