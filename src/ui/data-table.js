import {BaseElement} from './base-element.js';

export class DataTable extends BaseElement {
  constructor(headers, data) {
    super();
    this.headers = headers;
    this.data = data;
  }

  getElementString() {
    return `
    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
      <thead>
        <tr>
          ${this.getTableHeaders()}
        </tr>
      </thead>
      <tbody>
        ${this.getTableRows()}
      </tbody>
    </table>
    `
  }

  getTableHeaders() {
    let headers = '';
    for (let header of this.headers) {
      headers += `<th class="mdl-data-table__cell--non-numeric">${header}</th>`;
    }
    return headers;
  }

  getTableRows() {
    let rows = '';
    for(let row of this.data) {
      rows += `<tr>`;
      let content = '';
      for (let header of this.headers) {
        let field = row[header.toLowerCase()];
        content += `<td class="mdl-data-table__cell--non-numeric">
                  ${field}
                  </td>`;
      }
      rows += `${content} </tr>`;
    }
    return rows;
  }
}