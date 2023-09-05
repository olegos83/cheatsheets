/**
 * Command - behavioral design pattern.
 * 
 * Used to turn a request into a stand-alone object that contains all
 * information about the request.
 * 
 * Allows to parametrize methods with different requests, delay or queue
 * request execution, and support undoable operations.
 */

//Implementation
class Switcher {
	constructor() {
		this.state = false;
	}

	on() {
		this.state = true;
	}

	off() {
		this.state = false;
	}
}

class Executor {
	constructor(command) {
		this.command = command;
	}

	execute() {
		this.command.execute();
	}
}

class SwitchOnCommand {
	constructor(switcher) {
		this.switcher = switcher;
	}

	execute() {
		this.switcher.on();
	}
}

class SwitchOffCommand {
	constructor(switcher) {
		this.switcher = switcher;
	}

	execute() {
		this.switcher.off();
	}
}

//Usage
let switcher = new Switcher(),

	switchOnCmd = new SwitchOnCommand(switcher),
	switchOffCmd = new SwitchOffCommand(switcher),

	executorOn = new Executor(switchOnCmd),
	executorOff = new Executor(switchOffCmd);

console.log(switcher);

executorOn.execute();
console.log(switcher);

executorOff.execute();
console.log(switcher);
