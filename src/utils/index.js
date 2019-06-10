export function admcreateEle(a, d) {
  let b = admExpandCase === 1 ? parent.document : document;
  let c = b.getElementById(d);
  c.style.width = '100%';
  c.style.transition = 'height 2s ease-out';
  c = b.createDocumentFragment();
  b = b.createElement('div');
  for (b.innerHTML = a; b.firstChild;) c.appendChild(b.firstChild);
  return c;
}

/* eslint-disable */
export function ScrollContent(a, d, b, c, g, k, e) {
    var h = (new Date).getTime() - k,
        f = g ? b + Math.floor((c - b) * h / e) : c - Math.floor((c - b) * h / e),
        l = parent.document.getElementById(a);
    h > e ? (g ? f = c : (f = b, document.getElementById("_AdmExpand").innerHTML = ""), l.style[d] = f + "px") : (l.style[d] = f + "px", window.setTimeout(function () {
        ScrollContent(a, d, b, c, g, k, e)
    }, 100))
}

export function ExpandAnimation(admid, d, b, c) {
  var adm = parent.document.getElementById(admid); // eslint-disable-line
  if (c) {
    adm.style.height = `${b}px`; // eslint-disable-line
    adm.style.transition = 'height 2s ease-out'; // eslint-disable-line
  } else {
    adm.style.height = `${d}px`; // eslint-disable-line
    adm.style.transition = 'height 1.5s ease-out', window.setTimeout(() => { // eslint-disable-line
      document.getElementById('_AdmExpand').innerHTML = '';
    }, 1400);
  }
}

export function closeExpand(admid, admExpandPram) {
  if (admExpandCase === 1) {
    ExpandAnimation(admid, admExpandPram.hs, admExpandPram.he, !1);
  }
  window.__admCpExpand = false;
}

export function admaddEventListener(a, d, b) {
  if ('addEventListener' in a) {
    a.addEventListener(d, b);
  } else if ('attachEvent' in a) {
    a.attachEvent(`on${d}`, b);
  }
}

export function admcloseExpand() {
  const a = parent.document.getElementById('_AdmExpand');
  if (a) (a.innerHTML = '');
  parent.document.body.style.overflow = 'auto';
}

export function admExpand(admid, urlClick, urlLogExpand, admExpandPram, callback) {
    window.__admCpExpand = true;
    var a = "";
    var btnClose = admExpandPram.btnClose || '//adi.vcmedia.vn/adt/banners/nam2015/148/expand/closeBtn0004.png';
    var setCloseLocal_T = admExpandPram.Top || 'bottom',
        setCloseLocal_L = admExpandPram.Left || 'right';
    var b = parent.document.getElementById(admid);
    var f = b.parentNode.id;
    var w = parent.wPrototype.getElementWidth(f);
    var isRun = false;
    if (w > 1040) {
        console.log('1');
        isRun = true;
        1 == admExpandCase && (a = document.getElementById("_AdmExpand"), void 0 == a && (a = admcreateEle('<div style="border: 0px none; margin: 0px; padding: 0px; text-align: left; overflow: visible; position: absolute; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>', admid), document.body.insertBefore(a, document.body.childNodes[0]), a = document.getElementById("_AdmExpand")), a.innerHTML =
            '<iframe src="' + admExpandPram.src + '?url=' + encodeURIComponent(urlClick + encodeURIComponent(__admLink)) + '&admid=' + admid + '" frameborder="0" scrolling="no" width="' + admExpandPram.wd + '" height="' + admExpandPram.he + '"></iframe><a href="javascript:closeExpand()" style="position:absolute; z-index:9999;' + setCloseLocal_T + ':2px;' + setCloseLocal_L + ':2px;"><img border="0" src="' + btnClose + '" /></a>', ExpandAnimation(admid, admExpandPram.hs, admExpandPram.he, !0))
    } else if (w > 980 && w <= 1040) {
        console.log('2');
        isRun = true;
        var w = Math.floor((1160 - w) / 2);
        1 == admExpandCase && (a = document.getElementById("_AdmExpand"), void 0 == a && (a = admcreateEle('<div style="border: 0px none; margin-left: -' + w + 'px; padding: 0px; text-align: left; overflow: visible; position: absolute; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>', admid), document.body.insertBefore(a, document.body.childNodes[0]), a = document.getElementById("_AdmExpand")), a.innerHTML =
            '<iframe src="' + admExpandPram.src + '?url=' + encodeURIComponent(urlClick + encodeURIComponent(__admLink)) + '&admid=' + admid + '" frameborder="0" scrolling="no" width="' + admExpandPram.wd + '" height="' + admExpandPram.he + '"></iframe><a href="javascript:closeExpand()" style="position:absolute; z-index:9999;' + setCloseLocal_T + ':2px;' + setCloseLocal_L + ':' + w + 'px;"><img border="0" src="' + btnClose + '" /></a>', ExpandAnimation(admid, admExpandPram.hs, admExpandPram.he, !0))
    } else {
        console.log('3');
        isRun = true;
        var w = Math.floor((1160 - w) / 2);
        1 == admExpandCase && (a = document.getElementById("_AdmExpand"), void 0 == a && (a = admcreateEle('<div style="border: 0px none; margin-left: -' + w + 'px; padding: 0px; text-align: left; overflow: visible; position: absolute; z-index: 100000; top: 0px; left: 0px;" dir="ltr" id="_AdmExpand"></div>', admid), document.body.insertBefore(a, document.body.childNodes[0]), a = document.getElementById("_AdmExpand")), a.innerHTML =
            '<iframe src="' + admExpandPram.src + '?url=' + encodeURIComponent(urlClick + encodeURIComponent(__admLink)) + '&admid=' + admid + '" frameborder="0" scrolling="no" width="' + admExpandPram.wd + '" height="' + admExpandPram.he + '"></iframe><a href="javascript:closeExpand()" style="position:absolute; z-index:9999;' + setCloseLocal_T + ':2px;' + setCloseLocal_L + ':' + w + 'px;"><img border="0" src="' + btnClose + '" /></a>', ExpandAnimation(admid, admExpandPram.hs, admExpandPram.he, !0))
    }

    if (isRun) {
        if (callback) callback();
        if (urlLogExpand) (new Image).src = urlLogExpand;

    }
}
