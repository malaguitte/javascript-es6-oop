import {Car} from './classes/car.js';
import {Drone} from './classes/Drone.js';
import {data} from './data/data.js';
import {DataService} from './services/data-service.js';


let dataService = new DataService();
dataService.loadData(data);

// console.log(dataService.drones);
// console.log(dataService.cars);

for (let drone of dataService.drones) {
  console.log(drone.license);
}

for (let car of dataService.cars) {
  console.log(car.make);
}