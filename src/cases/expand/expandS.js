import ExpandM from './expandM';
import * as utils from '../../utils';

export default class ExpandS extends ExpandM {

  createExpandWrap() {
    let exanpdWrap = document.getElementById('_AdmExpand');
    if (!exanpdWrap) {
      exanpdWrap = utils.admcreateEle('<div style="border: 0px none; margin: 0px; padding: 0px; text-align: left; overflow: visible; position: relative; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>', this.iframeWrapId, `${this.width}px`);
      document.body.insertBefore(exanpdWrap, document.body.childNodes[0]);
      exanpdWrap = document.getElementById('_AdmExpand');
    }
    return exanpdWrap;
  }

  renderBanner() {
    const iframeWrap = parent.document.getElementById(this.iframeWrapId);
    iframeWrap.style.height = `${this.height}px`;
    iframeWrap.style.width = '100%';
    const srcimg = this.bannerImg;
    const b = document;
    const e = this.urlClick;
    const srcSmall = this.bannerHtml;
    let d = '<div id="adstop" style="position:relative;overflow:hidden">';
    d = this.checkUserAgent ? `${d}<img src="${srcimg}" border="0"/><a href="${e}" target="_blank" style="position:absolute;top:0;left:0;width:1160px;height:90px;display:block;z-index:9999;"><span></span></a>` : `${d}<iframe onload="renderDone()" id="arf_html5_iframe" src="${srcSmall}?url=${encodeURIComponent(e)}&admid=${this.iframeWrapId}" width="1160" frameborder="0" scrolling="no" height="90"></iframe>`;
    b.write(`${d}</div>`);
  }

  expand() {
    let a = document.createElement('style');
    a.type = 'text/css';
    top.document.getElementsByTagName('head')[0].appendChild(a);
    if (a.styleSheet) {
      a.styleSheet.cssText = '.top-ads{max-height: unset; min-height:unset; height: auto;}';
    } else {
      a.appendChild(document.createTextNode('.top-ads{max-height: unset; min-height:unset; height: auto;}'));
    }
    a = this.urlClick;

    const d = this.btnClose || '//adi.vcmedia.vn/adt/banners/nam2015/148/expand/closeBtn0004.png';
    const setCloseLocalT = this.top;
    const setCloseLocalL = this.left;

    this.expandWrap = this.createExpandWrap();
    this.expandWrap.innerHTML = `<iframe src="${this.expandSrc}?url=${encodeURIComponent(this.urlClick)}&admid=${this.iframeWrapId}" frameborder="0" scrolling="no" width="${this.width}" height="${this.expandHeight}"></iframe><a href="javascript:closeExpand()" style="position:absolute; z-index:9999;${setCloseLocalT}:2px;${setCloseLocalL}:2px;"><img border="0" src="${d}" /></a>`;
    setTimeout(() => {
      utils.ExpandAnimation(this.iframeWrapId, this.height, this.expandHeight, true);
    }, 500);
    if (this.expandWrap && this.urlLogExpand) (new Image()).src = this.urlLogExpand;
  }
}

