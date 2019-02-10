import {TitleBar} from '../ui/title-bar.js';

export class ApplicationBase {

  constructor(title) {
    this.title = title;
    this.TitleBar = new TitleBar(this.title);
    this.routeMap = {};
    this.defaultRoute = null;
  }

  show(element) {
    this.TitleBar.appendToElement(element);
  }

  addRoute(id, pageObject, defaultRoute = false) {
    this.TitleBar.addLink(id, '');
    this.routeMap[id] = pageObject;
    this.defaultRoute = (defaultRoute) ? id : null;

  }

}