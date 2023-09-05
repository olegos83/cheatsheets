/**
 * State - behavioral design pattern.
 * 
 * Used to alter behavior of an object when its internal state changes.
 * It appears as if the object changed its class.
 */

//Implementation
class State {
	constructor(name, nextState) {
		this.name = name;
		this.nextState = nextState;

		console.log(`State: ${this.name}`);
	}

	next() {
		return new this.nextState();
	}
}

class Starting extends State {
	constructor() {
		super('Starting', Running);
	}
}

class Running extends State {
	constructor() {
		super('Running', Finished);
	}
}

class Finished extends State {
	constructor() {
		super('Finished', Finished);
	}
}

class Action {
	constructor() {
		this.state = new Starting();
	}

	nextState() {
		this.state = this.state.next();
	}
}

//Usage
let action = new Action();

action.nextState();
action.nextState();
action.nextState();
action.nextState();
action.nextState();
