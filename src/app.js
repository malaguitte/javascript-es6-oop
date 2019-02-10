import {data} from './data/data.js';
import {DataService} from './services/data-service.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './pages/home-page.js';
import {CarsPage} from './pages/cars-page.js';
import {DronesPage} from './pages/drones-page.js';

export class App extends ApplicationBase {
  
  constructor(title) {
    super(title);
    this.dataService = new DataService();
    this.dataService.loadData(data);

    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Cars', new CarsPage());
    this.addRoute('Drones', new DronesPage());
    this.addRoute('Map', null);
  }
  
}

export let app = new App('Management App');
app.show($('body'));

// let mapCenter = {lat: 40.783661, lng: -73.965883};
// let map = new GoogleMap(mapCenter, dataService.cars);
// map.appendToElement($('body'));