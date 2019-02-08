class Drone {
    constructor(id, name) {
        console.log(`ID: ${id} | Name: ${name}`);
        this.id = id;
        this.name = name;
    }
}

let drone = new Drone('A123', 'Flyer');

// console.log(typeof Drone); // function
// console.log(drone instanceof Drone); // true