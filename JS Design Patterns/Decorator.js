/**
 * Decorator - structural design pattern.
 * 
 * Used to add some object new properties/methods, extending its features.
 */

//Implementation
class Obj {
	constructor() {
		this.type = '';
	}

	getType() {
		return this.type;
	}
}

class ObjA extends Obj {
	constructor() {
		super();
		this.type = 'A';
	}
}

class Decorator {
	constructor(obj) {
		this.obj = obj;
	}

	getType() {
		return this.obj.getType() + 'B';
	}
}

//Usage
let objA = new ObjA(), objAB = new Decorator(objA);
