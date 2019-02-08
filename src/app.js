class Vehicle {
    constructor(licenseNumber) {
        console.log('constructing Vehicle');
        this.licenseNumber = licenseNumber;
    }
}

class Drone extends Vehicle {
}

class Car extends Vehicle {
    constructor(licenseNumber) {
        // super(); //This is required in JS
        super(licenseNumber);
        console.log('constructing Car');
    }
}

let c = new Car();
console.log(c instanceof Car); //true
console.log(c instanceof Vehicle); //true
console.log(c instanceof Object); //true