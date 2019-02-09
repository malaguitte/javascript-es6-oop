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
        let drone = this.loadDrone(item);
        this.drones.push(drone);
      } else if (item.type === 'car') {
        let car = this.loadCar(item);
        this.cars.push(car);
      } 

    }
  }

  loadCar(carData) {
    let car   = new Car(carData.license, carData.model, carData.latLong);
    car.miles = carData.miles;
    car.make  = carData.make;
    return car;
  }

  loadDrone(droneData) {
    let drone           = new Drone(droneData.license, droneData.model, droneData.latLong);
    drone.airTimeHours  = droneData.airTimeHours;
    drone.base          = droneData.base;
    return drone;
  }
  

}