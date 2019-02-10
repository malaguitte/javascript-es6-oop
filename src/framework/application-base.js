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
    this.TitleBar.element.find('.mdl-navigation__link').click((event) => {
      let route = event.target.innerHTML;
      this.activateRoute(route.trim());
    });
    if (this.defaultRoute) {
      this.activateRoute(this.defaultRoute);
    }
  }

  activateRoute(route) {
    let content = this.TitleBar.element.find('.page-content');
    content.empty();
    this.routeMap[route].appendToElement(content);
  }

  addRoute(id, pageObject, defaultRoute = false) {
    this.TitleBar.addLink(id, '');
    this.routeMap[id] = pageObject;
    if (defaultRoute) {
      this.defaultRoute = id;
    }
  }
}