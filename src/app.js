import {Car} from './classes/car.js';
import {Drone} from './classes/Drone.js';
import {data} from './data/data.js';
import {DataService} from './services/data-service.js';


let dataService = new DataService();
dataService.loadData(data);

// console.log(dataService.drones);
// console.log(dataService.cars);

// for (let drone of dataService.drones) {
//   console.log(drone.license);
// }

// for (let car of dataService.cars) {
//   console.log(car.make);
// }

// for (let error of dataService.errors) {
//   console.log(error.message);
// }

// let car = dataService.getCarByLicense('AT9900');
// console.log(car);

// let cars = dataService.getCarsSortedByLicense();
let cars = dataService.filterCarsByMake('e');
cars.forEach(car => console.log(car.make));