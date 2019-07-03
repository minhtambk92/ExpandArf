import ExpandM from './expandM';
import ExpandS from './expandS';

export default class Expand {
  constructor(data) {
    this.expand = null;
    if (data.type && data.type.toLocaleLowerCase() === 'm') {
      this.expand = new ExpandM(data);
    } else if (data.type && data.type.toLocaleLowerCase() === 's') {
      this.expand = new ExpandS(data);
    } else if (data.width === 1160) {
      this.expand = new ExpandM(data);
    } else if (data.width === 980) {
      this.expand = new ExpandS(data);
    } else {
      this.expand = new ExpandS(data);
    }
  }
}
