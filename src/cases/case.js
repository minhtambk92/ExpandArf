import * as utils from '../utils';

export default class Case {
  constructor() {
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
  }

  getIframes() {
    return Array.from(document.getElementsByTagName('iframe'));
  }
}
