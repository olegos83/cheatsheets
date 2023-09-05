/**
 * Flyweight - structural design pattern.
 * 
 * Used to create a lot of objects using less amount of RAM.
 * It shares common state of objects instead of storing similar data inside each of the objects.
 * 
 * Flyweight can be used to implement cache or pool of objects.
 */

//Implementation
class Flyweight {
	constructor(type) {
		this.type = type;
	}
}

class FlyweightFactory {
	constructor() {
		this.objects = {};
	}

	create(type) {
		let obj = this.objects[type];
		
		if (obj) return obj;
		console.count('object');
		this.objects[type] = new Flyweight(type);

		return this.objects[type];
	}

	getObjects() {
		console.table(this.objects);
	}
}

//Usage
const objFactory = new FlyweightFactory(),
	  
	  objA = objFactory.create('A'),
	  objA2 = objFactory.create('A'),

	  objB = objFactory.create('B'),
	  objB2 = objFactory.create('B'),

	  objC = objFactory.create('C'),
	  objC2 = objFactory.create('C');

objFactory.getObjects();
