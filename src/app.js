class Vehicle {
    constructor() {
       this.gpsEnabled = true;
    }
}

class Drone extends Vehicle {
    constructor() {
        super();
    }
}

class Car extends Vehicle {
    constructor() {
        super();
    }
}

let car = new Car();
console.log(car.gpsEnabled)