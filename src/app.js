class Drone {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //method attached to the class
    static getCompany() {
        console.log('getCompany method has been called');
    }
    //method for the instance
    fly() {
        console.log(`Drone ${this.id} is flying`);
    }
}

let drone = new Drone('A123', 'Flyer');
let drone2 = new Drone('B456', 'Twirl');

drone.fly();
drone2.fly();

// drone.getCompany(); // error
Drone.getCompany();