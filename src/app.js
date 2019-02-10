import {data} from './data/data.js';
import {DataService} from './services/data-service.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './pages/home-page.js';

export class App extends ApplicationBase {
  
  constructor(title) {
    super(title);
    this.dataService = new DataService();
    this.dataService.loadData(data);

    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Cars', null);
    this.addRoute('Drones', null);
    this.addRoute('Map', null);
  }
  
}

export let application = new App('Management App');
application.show($('body'));

// let mapCenter = {lat: 40.783661, lng: -73.965883};
// let map = new GoogleMap(mapCenter, dataService.cars);
// map.appendToElement($('body'));