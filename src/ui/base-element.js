export class BaseElement {

  constructor() {
    this.element = null; //jquery object
  }

  appendToElement(appendTo) {
    this.createElement();
    appendTo.append(this.element);
    this.enableJS();
  }

  createElement() {
    let elementString = this.getElementString();
    this.element = $(elementString);
  }

  getElementString() {
    throw 'Please override getElementString() in BaseElement'
  }

  enableJS() {
    componentHandler.upgradeElement(this.element[0]);
  }
}