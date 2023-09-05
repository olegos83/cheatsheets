/**
 * Strategy - behavioral design pattern.
 * 
 * Used to define a family of algorithms in separate classes and make them interchangeable.
 */

//Implementation
function basicStrategy() {
	return 'Basic';
}

function extendedStrategy() {
	return 'Extended';
}

function reserveStrategy() {
	return 'Reserve';
}

class Context {
	constructor(strategy) {
		this.strategy = strategy;
	}

	doAction() {
		console.log('Action done, strategy: ' + this.strategy());
	}
}

//Usage
let basic = new Context(basicStrategy),
	extended = new Context(extendedStrategy),
	reserve = new Context(reserveStrategy);

basic.doAction();
extended.doAction();
reserve.doAction();
