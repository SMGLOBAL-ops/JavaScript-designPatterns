class Car {
	constructor(doors, engine, color) {
		this.doors = doors;
		this.engine = engine;
		this.color = color;
	}
}

const civic = new Car(4, "V6", "grey");
console.log(civic);

// class Constructor Pattern

class SUV extends Car {
	constructor(doors, engine, color) {
		super(doors, engine, color);
		this.wheels = 4;
	}
}

// default of 4 wheels

const rangeRover = new SUV(4, "V8", "red");
console.log(rangeRover);
