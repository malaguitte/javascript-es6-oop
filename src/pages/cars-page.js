import {Page} from '../framework/page.js';
import {DataTable} from '../ui/data-table.js';
import {app} from '../app.js';

export class CarsPage extends Page {
  constructor() {
    super('Cars');
  }

  createElement() {
    super.createElement();
    let headers = 'License Make Model Miles'.split(' ');
    let table = new DataTable(headers, app.dataService.cars);
    table.appendToElement(this.element);
  }

  getElementString() {
    return `
      <div style="margin:20px;"><h3>Cars</h3></div>
    `;
  }
}