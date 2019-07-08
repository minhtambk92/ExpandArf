import Case from './case';
import * as utils from '../utils';

export default class SideKick extends Case {
  constructor(data) {
    super(data);
    this.iframeWrapId = window.frameElement.id;
    this.expandSrc = data.expandSrc;
    this.width = data.width;
    this.height = data.height;
    this.widthMedium = data.widthMedium;
    this.heightMedium = data.heightMedium;
    this.urlClick = data.urlClick;
    this.urlLogExpand = data.urlLogExpand;
    this.btnCloseExpand = data.btnCloseExpand || '//adi.vcmedia.vn/cpmstick/000000.png';
    this.bannertype = 24;
    this.bid = undefined; // _arAdmExpand[a].bid;

    this.bannerImg = data.bannerImg;
    this.bannerHtml = data.bannerHtml;

    this.expandWrap = null;
    //
    this.timeStartExp = 0;

    //
    // this.jsTimeout = new Number(); // eslint-disable-line
    // this.jsTimeDelay = 60;
    // this.jsAcceleration = 0.2;
    // this.jsVelocity = 3;
    this.renderBanner();
    this.createExpandWrap();

    parent.window.ArfHtml5 = parent.window.ArfHtml5 || {};
    parent.window.ArfHtml5.closeExpand = () => {
      this.closeExpand();
    };

    // listen message to execute expand
    utils.admaddEventListener(parent.window, 'message', (a) => {
      if (typeof a.data === 'string' && a.data.indexOf(`ADMexpand_${this.iframeWrapId}`) !== -1) this.expand();
    });
  }

  get expsrc() {
    return `${this.expandSrc}?url=${encodeURIComponent(this.urlClick)}`;
  }

  advScroll(a, b, c) { // eslint-disable-line
    document.getElementById(`advZone${a}`).style.position = '';
    return !1;
  }

  create(a) {
    const b = document.createDocumentFragment();
    const c = document.createElement('div');
    for (c.innerHTML = a; c.firstChild;) b.appendChild(c.firstChild);
    return b;
  }

  admCloseIplay() {
    this.expandWrap.innerHTML = '';
    this.expandWrap.style.width = '1px';
    this.expandWrap.style.height = '1px';
    this.expandWrapument.style.backgroundImage = '';
    parent.body.style.overflow = 'auto';
  }

  createExpandWrap() {
    let admExpand = parent.document.getElementById('_AdmExpand');
    if (!admExpand) {
      const expandWrap = this.create('<div style="border: 0px none; margin: 0px; padding: 0px; text-align: left; overflow: visible; position: absolute; z-index: 1000001; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>');
      parent.document.body.insertBefore(expandWrap, parent.document.body.childNodes[0]);
      admExpand = parent.document.getElementById('_AdmExpand');
    }
    this.expandWrap = admExpand;
  }
  // animateProcess(a, b, c, d, e, f) {
  //   clearTimeout(this.jsTimeout);
  //   const g = this.jsAcceleration * Math.pow(parseInt(f), 2) / 2 + this.jsVelocity * parseInt(f); // eslint-disable-line

  //   switch (c) { // eslint-disable-line
  //     case 'increase':
  //       {
  //         d = parseInt(d) + parseInt(g); // eslint-disable-line
  //         if (d >= parseInt(e, 10)) {
  //           document.getElementById(a).style[b] = `${e}px`;
  //         } else {
  //           document.getElementById(a).style[b] = `${d}px`;
  //           f += 1; // eslint-disable-line
  //           this.jsTimeout = setTimeout(() => {
  //             this.animateProcess(a, b, c, d, e, f);
  //           }, this.jsTimeDelay);
  //         }
  //         break;
  //       }
  //     case 'decrease':
  //       {
  //         d = parseInt(d, 10) - parseInt(g, 10); // eslint-disable-line
  //         if (d <= parseInt(e, 10)) {
  //           document.getElementById(a).style[b] = `${e}px`;
  //         } else {
  //           document.getElementById(a).style[b] = `${d}px`;
  //           f++; // eslint-disable-line
  //           this.jsTimeout = setTimeout(() => {
  //             this.animateProcess(a, b, c, d, e, f);
  //           }, this.jsTimeDelay);
  //         }
  //       }
  //   }
  // }

  // hookExpand(a, b, c) {
  //   a = document.getElementById(a); // eslint-disable-line
  //   if (a != null) {
  //     if (c) {
  //       c = a.offsetTop; // eslint-disable-line
  //       for (let d = a; d.offsetParent && d.offsetParent != document.body;) d = d.offsetParent, c += d.offsetTop; // eslint-disable-line
  //       window.scrollTo(0, c);
  //     }
  //     a.style.clip = b; // eslint-disable-line
  //   }
  // }

  // jsAnimate(a, b, c) {
  //   let d;
  //   d = String(document.getElementById(a).style[b]).split('px');
  //   d = parseInt(d[0], 10);
  //   clearTimeout(this.jsTimeout);
  //   if (parseInt(c, 10) > d) {
  //     setTimeout(() => {
  //       this.animateProcess(a, b, 'increase', d, c, 1);
  //     }, this.jsTimeDelay);
  //   } else if (parseInt(c, 10) < d) {
  //     this.jsTimeout = setTimeout(() => {
  //       this.animateProcess(a, b, 'increase', d, c, 1);
  //     }, this.jsTimeDelay);
  //   }
  // }

  closeExpand(a) {
    try {
      const eleo = document.getElementById(a);
      if (eleo) {
        eleo.contentWindow.document.querySelector('#adsTop iframe').contentWindow.postMessage('start', '*');
      }
    } catch (e) {
      //
    }
    // const bid = this.bid;
    setTimeout(() => {
      switch (parseInt(this.bannertype, 10)) { // eslint-disable-line
        // case 21:
        //   {
        //     const c = document.getElementById(`admBanLarge_${bid}`);
        //     if (c) {
        //       c.style.width = '1px';
        //       c.style.height = '1px';
        //       c.style.display = 'none';
        //     }
        //     const d = document.getElementById(`admBanSmall_${bid}`);
        //     if (d) {
        //       setTimeout(() => {
        //         d.style.width = `${this.widthMedium}px`;
        //         d.style.height = `${this.heightMedium}px`;
        //       }, 300);
        //       d.style.display = 'block';
        //     }
        //     this.jsAnimate(`admBanExpand_${bid}`, 'height', this.heightMedium);
        //     break;
        //   }
        // case 22:
        //   {
        //     const c = document.getElementById(`admBanLarge_${bid}`);
        //     const d = document.getElementById(`admBanSmall_${bid}`);
        //     if (c) {
        //       c.style.width = '1px';
        //       c.style.height = '1px';
        //       c.style.display = 'none';
        //     }
        //     if (d) {
        //       setTimeout(() => {
        //         d.style.width = `${this.widthMedium}px`;
        //         d.style.height = `${this.heightMedium}px`;
        //       }, 300);
        //       d.style.display = 'block';
        //     }
        //     this.hookExpand(`admBanExpand_${bid}`, `rect(0px,${this.widthMedium}px,${this.heightMedium}px,0px)`);
        //     break;
        //   }
        // case 23:
        //   {
        //     this.admCloseIplay(a);
        //     break;
        //   }
        case 24:
          {
            const c = document.getElementById('admMenuStick');
            if (c) c.style.display = '';
            this.admCloseSidekick(a);
          }
      }
    }, 200);
  }

  admCloseSidekick(a) {
    if (this.timeStartExp === 0) this.timeStartExp = (new Date()).getTime();

    let b = ((new Date()).getTime() - this.timeStartExp) / 1500;
    if (b > 1) b = 1;
    const c = b * parent.window.ADS_CHECKER.wdWidth();
    parent.document.getElementById('_AdmFrameExpand').style.left = `${c}px`;
    if (b === 1) {
      if (typeof advScroll !== 'undefined') this.advScroll = window.adm_expandScroll;
      const el = parent.document.getElementById(a);
      if (el) el.style.visibility = 'visible';
      this.expandWrap.innerHTML = '';
      document.body.style.overflow = 'auto';
      return false;
    }

    setTimeout(() => {
      this.admCloseSidekick(a);
    }, 50);

    return !1;
  }

  admExpandSidekickTimeout(admid) {
    let b = (new Date()).getTime();
    b = parent.window.ADS_CHECKER.getQuery('chktest') === 'test' ? (b - this.timeStartExp) / 100 : (b - this.timeStartExp) / 1500;
    if (b > 1) b = 1;

    const c = parent.window.ADS_CHECKER.wdWidth() - b * parent.window.ADS_CHECKER.wdWidth(); // eslint-disable-line
    parent.document.getElementById('_AdmFrameExpand').style.left = `${c}px`;
    if (b === 1) {
      this.timeStartExp = 0;
      const btnCloseStick = parent.document.getElementById('btnCloseStick');
      if (btnCloseStick) btnCloseStick.style.visibility = 'visible';
      return false;
    }

    setTimeout(() => {
      this.admExpandSidekickTimeout(admid);
    }, 50);

    return false;
  }

  renderBanner() {
    const iframeWrap = parent.document.getElementById(this.iframeWrapId);
    iframeWrap.style.width = '100%';
    const f = iframeWrap.parentNode.id;
    let a = parent.wPrototype.getElementWidth(f);
    const srcimg = this.bannerImg;
    const htmlSrc = `${this.bannerHtml}?url=${encodeURIComponent(this.urlClick)}&admid=${this.iframeWrapId}`;
    const b = document;

    let d = '<div id="adstop" style="position:relative;overflow:hidden">';
    d = (this.checkUserAgent) ? `${d}<img src="${srcimg}" border="0"/><a href="${this.urlClick}" target="_blank" style="position:absolute;top:0;left:0;width:710px;height:90px;display:block;z-index:9999;"><span></span></a>` : `${d}<iframe onload="renderDone()" id="demo_iframe" src="${htmlSrc}" width="710" frameborder="0" scrolling="no" height="90"></iframe>`;
    b.write(`${d}</div>`);

    window.setTimeout(() => {
      a = a < 665 ? 665 : a;
      const adsStop = document.getElementById('adstop');
      a = Math.floor((710 - a) / 2);
      if (this.checkUserAgent) {
        adsStop.style.marginLeft = `-${a < 0 ? 0 : a}px`;
      } else {
        adsStop.style.marginLeft = `-${a < 0 ? 0 : a}px`;
      }
    }, 100);
  }

  expand() {
    this.timeStartExp = (new Date()).getTime();
    window.adm_expandScroll = this.advScroll;
    const admMenuStick = document.getElementById('admMenuStick');
    if (admMenuStick) (admMenuStick.style.display = 'none');

    let html = '';

    if (this.expandWrap) {
      if (typeof window._AdmAPIExpand !== 'undefined') window._AdmAPIExpand(0);
      html = `<iframe style="width:${parent.window.ADS_CHECKER.wdWidth()}px; height:${parent.window.ADS_CHECKER.wdHeight()}px;" frameborder="no" src="${this.expsrc}" id="expIframe" style="border:none; overflow: hidden;" scrolling="yes" name="ariel"></iframe>`;

      html += `<div style="height: 69px; position: fixed; top: 10px; right: 15px; z-index: 1000001; visibility: visible;" id="advStickyClose"><a style="clear:both; height:69px;text-align:right; padding-right:10px;" href="javascript:void(0);ArfHtml5.closeExpand('${this.iframeWrapId}');"><img id="btnCloseStick" style="visibility:hidden;" border="0" src="${this.btnCloseExpand}"></a></div>`;

      this.expandWrap.innerHTML = `<div id="_AdmFrameExpand" style="border: 0 none;clip:rect(0px, ${parent.window.ADS_CHECKER.wdWidth()}px, ${parent.window.ADS_CHECKER.wdHeight()}px, 0px);position: fixed;background:#fff;width:${parent.window.ADS_CHECKER.wdWidth()}px;height:${parent.window.ADS_CHECKER.wdHeight()}px;">${html}</div>`;
      document.body.style.overflow = 'hidden';
      parent.document.getElementById('_AdmFrameExpand').style.left = `${parent.window.ADS_CHECKER.wdWidth()}px`;
      if (this.urlLogExpand) (new Image()).src = this.urlLogExpand;
    }
    parent.document.getElementById('_AdmFrameExpand').style.bottom = 'auto';
    parent.document.getElementById('_AdmFrameExpand').style.top = '0px';
    this.admExpandSidekickTimeout(this.iframeWrapId);
  }
}
