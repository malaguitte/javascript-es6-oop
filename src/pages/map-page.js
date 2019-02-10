import {Page} from "../framework/page.js";
import {GoogleMap} from "../ui/google-map.js";
import {app} from "../app.js";

export class MapPage extends Page{

  constructor() {
    super('Map');
  }

  createElement() {
    super.createElement();
    let mapCenter = {lat: 40.783661, lng: -73.965883};
    let map = new GoogleMap(mapCenter, app.dataService.cars);
    map.appendToElement(this.element);
  }

  getElementString() {
    return `
      <div style="margin: 20px;"><h3>Map</h3></div>
    `;
  }

}