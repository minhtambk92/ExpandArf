import * as utils from '../utils';

export default class Case1160 {
  constructor(data) {
    this.admid = data.admid;
    this.urlClick = data.urlClick;
    this.urlLogExpand = data.urlLogExpand;
    this.admExpandPram = data.admExpandPram;
    this.callback = data.callback;
    this.el = null;

    window.closeExpand = () => {
      this.closeExpand();
    };
  }

  closeExpand() {
    if (admExpandCase === 1) {
      utils.ExpandAnimation(this.admid, this.admExpandPram.hs, this.admExpandPram.he, !1);
    }
    window.__admCpExpand = false;
  }

  expand() {
    window.__admCpExpand = true;
    const btnClose = this.admExpandPram.btnClose || '//adi.vcmedia.vn/adt/banners/nam2015/148/expand/closeBtn0004.png';
    const setCloseLocalT = this.admExpandPram.Top || 'bottom';
    const setCloseLocalL = this.admExpandPram.Left || 'right';
    this.el = parent.document.getElementById(this.admid);
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
        el = utils.admcreateEle('<div style="border: 0px none; margin: 0px; padding: 0px; text-align: left; overflow: visible; position: absolute; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>', this.admid);
        document.body.insertBefore(el, document.body.childNodes[0]);
        el = document.getElementById('_AdmExpand');
      }
    } else if (w > 980 && w <= 1040) {
      console.log('2');
      wCompute = Math.floor((1160 - w) / 2);
      isRun = true;
      el = document.getElementById('_AdmExpand');
      if (!el) {
        el = utils.admcreateEle(`<div style="border: 0px none; margin-left: -${wCompute}px; padding: 0px; text-align: left; overflow: visible; position: absolute; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>`, this.admid);
        document.body.insertBefore(el, document.body.childNodes[0]);
        el = document.getElementById('_AdmExpand');
      }
    } else {
      console.log('3');
      wCompute = Math.floor((1160 - w) / 2);
      isRun = true;
      el = document.getElementById('_AdmExpand');
      if (!el) {
        el = utils.admcreateEle(`<div style="border: 0px none; margin-left: -${wCompute}px; padding: 0px; text-align: left; overflow: visible; position: absolute; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>`, this.admid);
        document.body.insertBefore(el, document.body.childNodes[0]);
        el = document.getElementById('_AdmExpand');
      }
    }

    if (isRun) {
      el.innerHTML = `<iframe src="${this.admExpandPram.src}?url=${encodeURIComponent(this.urlClick)}&admid=${this.admid}" frameborder="0" scrolling="no" width="${this.admExpandPram.wd}" height="${this.admExpandPram.he}"></iframe><a href="javascript:closeExpand()" style="position:absolute; z-index:9999;${setCloseLocalT}:2px;${setCloseLocalL}:${wCompute}px;"><img border="0" src="${btnClose}" /></a>`;
      utils.ExpandAnimation(this.admid, this.admExpandPram.hs, this.admExpandPram.he, !0);
      if (this.callback) this.callback();
      if (this.urlLogExpand) (new Image()).src = this.urlLogExpand;
    }
  }
}
