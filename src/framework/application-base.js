import {TitleBar} from '../ui/title-bar.js';

export class ApplicationBase {

  constructor(title) {
    this.title = title;
    this.TitleBar = new TitleBar(this.title);
  }

  show(element) {
    this.TitleBar.appendToElement(element);
  }

}