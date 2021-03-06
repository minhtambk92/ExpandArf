import Case from '../case';
import * as utils from '../../utils';

export default class ExpandM extends Case {
  constructor(data) {
    super(data);
    this.iframeWrapId = window.frameElement.id;
    this.urlClick = data.urlClick;
    this.urlLogExpand = data.urlLogExpand;
    this.btnClose = data.btnClose;
    this.top = data.top || 'bottom';
    this.left = data.left || 'right';
    this.expandSrc = data.expandSrc;
    this.height = data.height;
    this.expandHeight = data.expandHeight;
    this.width = data.width;

    this.bannerImg = data.bannerImg;
    this.bannerHtml = data.bannerHtml;
    this.expandWrap = null;

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

  createExpandWrapWithWidth(width) {
    let exanpdWrap = document.getElementById('_AdmExpand');
    if (!exanpdWrap) {
      exanpdWrap = utils.admcreateEle(`<div style="border: 0px none; ${width ? `margin-left:-${width}px` : 'margin: 0px'}; padding: 0px; text-align: left; overflow: visible; position: absolute; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>`, this.iframeWrapId);
      document.body.insertBefore(exanpdWrap, document.body.childNodes[0]);
      exanpdWrap = document.getElementById('_AdmExpand');
    }
    return exanpdWrap;
  }

  createExpandWrap() {
    let exandWrap;
    // const parentNode = this.el.parentNode.id;
    const w = this.el.parentNode.clientWidth;
    let wCompute = 0;
    if (w > 1040) {
      console.log('1');
      exandWrap = this.createExpandWrapWithWidth();
    } else if (w > 980 && w <= 1040) {
      console.log('2');
      wCompute = Math.floor((1160 - w) / 2);
      exandWrap = this.createExpandWrapWithWidth(wCompute);
    } else {
      console.log('3');
      wCompute = Math.floor((1160 - w) / 2);
      exandWrap = this.createExpandWrapWithWidth(wCompute);
    }
    this.expandWrap = exandWrap;
    return wCompute;
  }

  closeExpand() {
    utils.ExpandAnimation(this.iframeWrapId, this.height, this.expandHeight, false);
    window.__admCpExpand = false;
  }

  renderBanner() {
    const iframeWrap = parent.document.getElementById(this.iframeWrapId);
    iframeWrap.style.height = `${this.height}px`;
    iframeWrap.style.width = '100%';
    // const f = iframeWrap.parentNode.id;
    let a = iframeWrap.parentNode.clientWidth;
    const srcimg = this.bannerImg;
    const b = document;
    const e = this.urlClick;
    const srcSmall = this.bannerHtml;
    let d = '<div id="adstop" style="position:relative;overflow:hidden">';
    d = this.checkUserAgent ? `${d}<img src="${srcimg}" border="0"/><a href="${e}" target="_blank" style="position:absolute;top:0;left:0;width:1160px;height:90px;display:block;z-index:9999;"><span></span></a>` : `${d}<iframe onload="renderDone()" id="arf_html5_iframe" src="${srcSmall}?url=${encodeURIComponent(e)}&admid=${this.iframeWrapId}" width="1160" frameborder="0" scrolling="no" height="90"></iframe>`;
    b.write(`${d}</div>`);
    setTimeout(() => {
      a = a < 980 ? 980 : a;
      const adstop = document.getElementById('adstop');
      a = Math.floor((1160 - a) / 2);
      if (this.checkUserAgent) {
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
    const wCompute = this.createExpandWrap();

    if (this.expandWrap) {
      this.expandWrap.innerHTML = `<iframe src="${this.expandSrc}?url=${encodeURIComponent(this.urlClick)}&admid=${this.iframeWrapId}" frameborder="0" scrolling="no" width="${this.width}" height="${this.expandHeight}"></iframe><a href="javascript:closeExpand()" style="position:absolute; z-index:9999;${setCloseLocalT}:2px;${setCloseLocalL}:${wCompute}px;"><img border="0" src="${btnClose}" /></a>`;
      utils.ExpandAnimation(this.iframeWrapId, this.height, this.expandHeight, !0);
      if (this.callback) this.callback();
      if (this.urlLogExpand) (new Image()).src = this.urlLogExpand;
    }
  }
}
