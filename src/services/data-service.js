import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {Error} from '../errors/error.js';

export class DataService {

  constructor() {
    this.cars   = [];
    this.drones = [];
    this.errors = [];
  }

  loadData(data) {
    for (let item of data) {
      
      if (item.type === 'drone') {
        let drone = this.loadDrone(item);
        this.drones.push(drone);
      } else if (item.type === 'car') {
        let car = this.loadCar(item);
        this.cars.push(car);
      } else {
        let error = new Error('Invalid vehicle type', item);
        this.errors.push(error);
      }

    }
  }

  loadCar(carData) {
    try {
      let car   = new Car(carData.license, carData.model, carData.latLong);
      car.miles = carData.miles;
      car.make  = carData.make;
      return car;
    } catch(e) {
      this.errors.push(new Error('Error loading car', carData));
    }
    return null;    
  }

  loadDrone(droneData) {
    try {
      let drone           = new Drone(droneData.license, droneData.model, droneData.latLong);
      drone.airTimeHours  = droneData.airTimeHours;
      drone.base          = droneData.base;
      return drone;
    } catch(e) {
      this.errors.push(new Error('Error loading drone', droneData));
    }
    return null;    
  }
  

}