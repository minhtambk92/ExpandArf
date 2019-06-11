import * as utils from './utils';
import cases from './cases';

parent.window.admcloseExpand = utils.admcloseExpand;


function Execute(data) {
  if (data.type === 1) {
    const case1160 = new cases.Case1160({ admid: data.admid, urlClick: data.urlClick, urlLogExpand: data.urlLogExpand, admExpandPram: data.admExpandPram, callback: data.callback });

    utils.admaddEventListener(parent.window, 'message', (a) => {
      if (typeof a.data === 'string' && a.data.indexOf(`ADMexpand_${data.admid}`) !== -1) case1160.expand();
    });
  } else if (data.type === 2) {
    let idm = data.admid.replace('cpmzone_', '');
    idm = idm.replace('_0_', '_');
    const sideKick = new cases.SideKick({
      admid: idm,
      expandSrc: data.expandSrc,
      width: data.width,
      height: data.height,
      widthMedium: data.widthMedium,
      heightMedium: data.heightMedium,
      urlClick: data.urlClick,
      urlLogExpand: data.urlLogExpand,
      draw: data.draw,
    });

    utils.admaddEventListener(parent.window, 'message', (a) => {
      if (typeof a.data === 'string' && a.data.indexOf(`ADMexpand_${data.admid}`) !== -1) sideKick.expand(idm);
    });
  }
}

export { Execute };
export default { Execute };
