import * as utils from './utils';

parent.window.admcloseExpand = utils.closeExpand;

function Execute(admid, urlClick, urlLogExpand, admExpandPram, callback) {
  utils.admaddEventListener(parent.window, 'message', (a) => {
    if (typeof a.data === 'string' && a.data.indexOf(`ADMexpand_${admid}`) !== -1) utils.admExpand(admid, urlClick, urlLogExpand, admExpandPram, callback);
  });
}

export { Execute };
export default { Execute };
