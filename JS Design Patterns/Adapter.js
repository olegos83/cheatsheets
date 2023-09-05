/**
 * Adapter - structural design pattern.
 * 
 * Used to wrap uncompatible object to make it compatible with other components of your system.
 */

//Implementation
class ObjA {
	objActionA() {
		console.log('Obj A action');
	}
}

class Adapter {
	constructor(obj) {
		this.obj = obj;
	}

	objAction() {
		this.obj.objActionA();
	}
}

//Usage
const obj = new Adapter(new ObjA());
