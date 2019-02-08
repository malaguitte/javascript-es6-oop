class Drone {
    constructor(id, name) {
        console.log(`ID: ${id} | Name: ${name}`);
        this.id = id;
        this.name = name;
    }
}
//static property
Drone.maxHeight = 2000;

let drone = new Drone('A123', 'Flyer');
let drone2 = new Drone('B456', 'Twirl');

console.log(drone.maxHeight); //undefined

// console.log(typeof Drone); // function
// console.log(drone instanceof Drone); // true