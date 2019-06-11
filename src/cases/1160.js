import * as utils from '../utils';

export default class Case1160 {
  constructor(data) {
    this.iframeWrapId = window.frameElement.id;
    this.urlClick = data.urlClick;
    this.urlLogExpand = data.urlLogExpand;
    this.admExpandPram = data.admExpandPram;
    this.btnClose = data.btnClose;
    this.top = data.top || 'bottom';
    this.left = data.left || 'right';
    this.src = data.src;
    this.hs = data.hs;
    this.he = data.he;
    this.wd = data.wd;

    this.callback = data.callback;
    this.el = null;

    window.closeExpand = () => {
      this.closeExpand();
    };

    this.renderBanner();

    utils.admaddEventListener(parent.window, 'message', (a) => {
      if (typeof a.data === 'string' && a.data.indexOf(`ADMexpand_${this.iframeWrapId}`) !== -1) this.expand();
    });
  }

  closeExpand() {
    utils.ExpandAnimation(this.iframeWrapId, this.hs, this.he, !1);
    window.__admCpExpand = false;
  }

  renderBanner() {
    const iframeWrap = parent.document.getElementById(this.iframeWrapId);
    iframeWrap.style.width = '100%';
    const f = iframeWrap.parentNode.id;
    let a = parent.wPrototype.getElementWidth(f);
    const srcimg = '//adi.admicro.vn/adt/banners/nam2015/1629/SunGroup/Sun_sukien.jpg';
    const b = document;
    const e = this.urlClick;
    const userAgent = `${navigator.userAgent}`;
    const srcSmall = '//adi.admicro.vn/adt/banners/nam2015/4043/min_html5/2017_05_30/sun-sukien-1160x90-1-62/sun-sukien-1160x90-1/sun-sukien-1160x90-1_1160_90_left.html';
    let d = '<div id="adstop" style="position:relative;overflow:hidden">';
    d = userAgent.indexOf('Firefox') !== -1 || userAgent.indexOf('Android') !== -1 || userAgent.indexOf('iPad') !== -1 || userAgent.indexOf('iPhone') !== -1 ? `${d}<img src="${srcimg}" border="0"/><a href="${e}" target="_blank" style="position:absolute;top:0;left:0;width:1160px;height:90px;display:block;z-index:9999;"><span></span></a>` : `${d}<iframe id="demo_iframe" src="${srcSmall}?url=${encodeURIComponent(e)}&admid=${this.iframeWrapId}" width="1160" frameborder="0" scrolling="no" height="90"></iframe>`;
    b.write(`${d}</div>`);
    window.setTimeout(() => {
      a = a < 980 ? 980 : a;
      const adstop = document.getElementById('adstop');
      a = Math.floor((1160 - a) / 2);
      if (userAgent.indexOf('Firefox') !== -1 || userAgent.indexOf('Android') !== -1 || userAgent.indexOf('iPad') !== -1 || userAgent.indexOf('iPhone') !== -1) {
        adstop.style.marginLeft = `-${a < 0 ? 0 : a}px`;
      } else {
        adstop.style.marginLeft = `-${a < 0 ? 0 : a}px`;
      }
    }, 100);
  }

  expand() {
    window.__admCpExpand = true;
    const btnClose = this.btnClose || '//adi.vcmedia.vn/adt/banners/nam2015/148/expand/closeBtn0004.png';
    const setCloseLocalT = this.top;
    const setCloseLocalL = this.left;
    this.el = parent.document.getElementById(this.iframeWrapId);
    const parentNode = this.el.parentNode.id;
    const w = parent.wPrototype.getElementWidth(parentNode);
    let wCompute;
    let isRun = false;
    let el;

    if (w > 1040) {
      console.log('1');
      isRun = true;
      el = document.getElementById('_AdmExpand');
      if (!el) {
        el = utils.admcreateEle('<div style="border: 0px none; margin: 0px; padding: 0px; text-align: left; overflow: visible; position: absolute; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>', this.iframeWrapId);
        document.body.insertBefore(el, document.body.childNodes[0]);
        el = document.getElementById('_AdmExpand');
      }
    } else if (w > 980 && w <= 1040) {
      console.log('2');
      wCompute = Math.floor((1160 - w) / 2);
      isRun = true;
      el = document.getElementById('_AdmExpand');
      if (!el) {
        el = utils.admcreateEle(`<div style="border: 0px none; margin-left: -${wCompute}px; padding: 0px; text-align: left; overflow: visible; position: absolute; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>`, this.iframeWrapId);
        document.body.insertBefore(el, document.body.childNodes[0]);
        el = document.getElementById('_AdmExpand');
      }
    } else {
      console.log('3');
      wCompute = Math.floor((1160 - w) / 2);
      isRun = true;
      el = document.getElementById('_AdmExpand');
      if (!el) {
        el = utils.admcreateEle(`<div style="border: 0px none; margin-left: -${wCompute}px; padding: 0px; text-align: left; overflow: visible; position: absolute; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>`, this.iframeWrapId);
        document.body.insertBefore(el, document.body.childNodes[0]);
        el = document.getElementById('_AdmExpand');
      }
    }

    if (isRun) {
      el.innerHTML = `<iframe src="${this.src}?url=${encodeURIComponent(this.urlClick)}&admid=${this.iframeWrapId}" frameborder="0" scrolling="no" width="${this.wd}" height="${this.he}"></iframe><a href="javascript:closeExpand()" style="position:absolute; z-index:9999;${setCloseLocalT}:2px;${setCloseLocalL}:${wCompute}px;"><img border="0" src="${btnClose}" /></a>`;
      utils.ExpandAnimation(this.iframeWrapId, this.hs, this.he, !0);
      if (this.callback) this.callback();
      if (this.urlLogExpand) (new Image()).src = this.urlLogExpand;
    }
  }
}
