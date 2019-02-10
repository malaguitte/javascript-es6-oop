import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {Button} from '../ui/button.js';
import {app} from '../app.js';

export class HomePage extends Page {
  
  constructor(){
    super('Home');
  }

  createElement() {
    super.createElement();
    let image = new Image('../../images/drone.jpg');
    image.appendToElement(this.element);

    let styleString = 'width:300px; height:80px; font-size';
    let button = new Button('Cars');
    button.setStyleString(styleString);
    button.appendToElement(this.element);
    button.element.click(() => app.activateRoute('Cars'));

    button = new Button('Drones');
    button.setStyleString(styleString);
    button.appendToElement(this.element);
    button.element.click(() => app.activateRoute('Drones'));
  }

  getElementString() {
    return `
      <div style="text-align: center;"></div>
    `;
  }
}