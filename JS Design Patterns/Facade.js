/**
 * Facade - structural design pattern.
 * 
 * Used to hide complex logic behind a simple facade.
 */

//Implementation
class Obj {
	addProp(prop) {
		console.log('Property ' + prop + ' added');
	}

	doAction(action) {
		console.log('Action ' + action + ' done');
	}
}

class Facade {
	constructor(obj) {
		this.obj = obj;
	}

	doSomething() {
		this.obj.addProp('A');
		this.obj.addProp('B');
		this.obj.addProp('C');
		this.obj.doAction('ABC');
	}
}

//Usage
const facade = new Facade(new Obj());
