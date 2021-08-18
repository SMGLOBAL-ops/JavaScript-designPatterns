// Class Singleton Pattern - checks if instance of object
// already exists

let instance = null;

class Car {
	constructor(doors, engine, color) {
		if (!instance) {
			this.doors = doors;
			this.engine = engine;
			this.color = color;
			instance = this;
		} else {
			return instance;
		}
	}
}

const civic = new Car(4, "V6", "grey");
console.log(civic);

// class SUV extends Car {
// 	constructor(doors, engine, color) {
// 		super(doors, engine, color);
// 		this.wheels = 4;
// 	}
// }

const honda = new Car(2, "V8", "red");
console.log(honda);
