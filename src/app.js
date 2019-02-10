import {Car} from './classes/car.js';
import {Drone} from './classes/Drone.js';
import {data} from './data/data.js';
import {DataService} from './services/data-service.js';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';
import {DataTable} from './ui/data-table.js';
import {GoogleMap} from './ui/google-map.js';


let dataService = new DataService();
dataService.loadData(data);

// let headers = [];
// headers.push('License');
// headers.push('Make');
// headers.push('Model');
// headers.push('Miles');
// let cars = dataService.cars;
// let table = new DataTable(headers, cars);
// table.appendToElement($('body'));

let mapCenter = {lat: 40.783661, lng: -73.965883};
let map = new GoogleMap(mapCenter, dataService.cars);
map.appendToElement($('body'));