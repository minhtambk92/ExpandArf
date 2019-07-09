import Case from './case';

export default class StandardBanner extends Case {
  constructor(data) {
    super(data);
    this.iframeWrapId = window.frameElement.id;
    this.bannerImg = data.bannerImg;
    this.bannerHtml = data.bannerHtml;
    this.urlClick = data.urlClick;
    this.width = data.width;
    this.height = data.height;

    this.renderBanner();
  }

  renderBanner() {
    const iframeWrap = parent.document.getElementById(this.iframeWrapId);
    iframeWrap.style.width = '100%';
    // const f = iframeWrap.parentNode.id;
    let a = iframeWrap.parentNode.clientWidth;
    const b = document;
    const e = this.urlClick;
    const srcimg = this.bannerImg;
    const bannerHtml = `${this.bannerHtml}?url=${encodeURIComponent(e)}&admid=${this.iframeWrapId}`;
    let html = '<div id="adstop" style="position:relative;overflow:hidden">';
    html = this.checkUserAgent ? `${html}<img src="${srcimg}" border="0"/><a href="${e}" target="_blank" style="position:absolute;top:0;left:0;width:${this.width}px;height:${this.height}px;display:block;z-index:9999;"><span></span></a>` : `${html}<iframe onload="renderDone()" id="demo_iframe" src="${bannerHtml}" width="${this.width}" frameborder="0" scrolling="no" height="${this.height}"></iframe>`;
    b.write(`${html}</div>`);

    if (this.width !== 1160 && this.width !== 710) return;
    window.setTimeout(() => {
      const ratio = (() => {
        if (this.width === 1160) return 980;
        else if (this.width === 710) return 665;
        return 0;
      })();
      a = a < ratio ? ratio : a;
      const adstop = document.getElementById('adstop');
      a = Math.floor((this.width - a) / 2);
      if (this.checkUserAgent) {
        adstop.style.marginLeft = `-${a < 0 ? 0 : a}px`;
      } else {
        adstop.style.marginLeft = `-${a < 0 ? 0 : a}px`;
      }
    }, 100);
  }
}
