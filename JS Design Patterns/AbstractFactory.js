/**
 * Abstract Factory - creational design pattern.
 * 
 * Used to create interface for grouping other factories with similar logic.
 * It is an abstraction over factory and factory method.
 */

//Implementation
class ObjX {
	constructor() {
		this.type = 'X';
	}
}

class ObjY {
	constructor() {
		this.type = 'Y';
	}
}

function xFactory() {
	return new ObjX();
}

function yFactory() {
	return new ObjY();
}

function abstractFactory(type) {
	return type === 'X' ? xFactory : yFactory;
}

//Usage
const factoryX = abstractFactory('X'),
	  factoryY = abstractFactory('Y'),
	  xObj = factoryX(),
	  yObj = factoryY();
