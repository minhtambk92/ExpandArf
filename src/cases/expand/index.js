import ExpandM from './expandM';
import ExpandS from './expandS';

export default class Expand {
  constructor(data) {
    this.expand = null;
    if (data.width === 1160) {
      this.expand = new ExpandM(data);
    } else if (data.width === 980) {
      this.expand = new ExpandS(data);
    } else {
      this.expand = new ExpandM(data);
    }
  }
}
