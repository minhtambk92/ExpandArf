export function admcreateEle(a, d) {
  let b = parent.document;
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

