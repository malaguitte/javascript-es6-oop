class Vehicle {
    start() {
        console.log('Starting Vehicle');
    }
    static getCompanyName() {
        console.log('My Company');
    }
}


class Car extends Vehicle {
    start() {
        console.log('Starting Car');
        super.start(); //calls parent's start() method
    }
    static getCompanyName() {
        super.getCompanyName();
        console.log('My Other Company');
    }
}

let car = new Car();
car.start();
Car.getCompanyName(); //works fine
car.getCompanyName(); // error