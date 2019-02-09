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
        
        if (this.isDroneDataValid(item)) {
          let drone = this.loadDrone(item);
          if (drone) {
            this.drones.push(drone);
          }
        } else {
          let error = new Error('Invalid drone data', item);
          this.errors.push(error);
        }
        
      } else if (item.type === 'car') {
        
        if (this.isCarDataValid(item)) {
          let car = this.loadCar(item);
          if (car) {
            this.cars.push(car);
          }
        } else {
          let error = new Error('Invalid car data', item);
          this.errors.push(error);
        }

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

  isCarDataValid(carData) {
    let requiredProperties = 'license model latLong miles make'.split(' ');
    requiredProperties.forEach((property) => {
      if (!carData[property]) {
        this.errors.push(new Error(`Missing property ${property} for the car's data`, carData));
        return false;
      }
    });
    if (Number.isNaN(Number.parseFloat(carData.miles))) {
      this.errors.push(new Error(`Invalid miles value '${carData.miles}' for the car`, carData));
      return false;
    }
    return true;
  }
  
  isDroneDataValid(droneData) {
    let requiredProperties = 'license model latLong airTimeHours base'.split(' ');
    requiredProperties.forEach((property) => {
      if (!droneData[property]) {
        this.errors.push(new Error(`Missing property ${property} for the drone's data`, droneData));
        return false;
      }
    });
    if (Number.isNaN(Number.parseFloat(droneData.airTimeHours))) {
      this.errors.push(new Error(`Invalid airTimeHours value '${droneData.airTimeHours}' for the drone`, droneData));
      return false;
    }
    return true;
  }
  

}