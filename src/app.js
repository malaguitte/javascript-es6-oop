class Drone {
    constructor(id, name) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set id(newId) {
        this._id = newId;
    }
}

let drone = new Drone("A123");
console.log(`Drone id: ${drone.id}`);
drone.id = 'B456';
console.log(`Drone id: ${drone.id}`);