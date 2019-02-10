import {Page} from '../framework/page.js';
import {DataTable} from '../ui/data-table.js';
import {app} from '../app.js';

export class DronesPage extends Page {
  constructor() {
    super('Drones');
  }

  createElement() {
    super.createElement();
    let headers = 'License Model Base'.split(' ');
    let table = new DataTable(headers, app.dataService.drones);
    table.appendToElement(this.element);
  }

  getElementString() {
    return `
      <div style="margin:20px;"><h3>Drones</h3></div>
    `;
  }
}