import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';

export class DataService {

  constructor() {
    this.cars   = [];
    this.drones = [];
  }

  loadData(data) {
    for (let item of data) {
      
      if (item.type === 'drone') {
        this.drones.push(item);
      } else if (item.type === 'car') {
        this.cars.push(item);
      } 

    }
  }
  

}