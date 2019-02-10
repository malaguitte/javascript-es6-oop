import {BaseElement} from '../ui/base-element.js';
import {Image} from '../ui/image.js';
import {Button} from '../ui/button.js';
import {App} from '../app.js';

export class HomePage extends BaseElement {
  
  constructor(){
    super();
  }

  createElement() {
    super.createElement();
    let image = new Image('../../images/drone.jpg');
    image.appendToElement(this.element);

    let styleString = 'width:300px; height:80px; font-size';
    let button = new Button('Self Driving Cars');
    button.setStyleString(styleString);
    button.appendToElement(this.element);

    button = new Button('Drones');
    button.setStyleString(styleString);
    button.appendToElement(this.element);
  }

  getElementString() {
    return `
      <div style="text-align: center;"></div>
    `;
  }
}