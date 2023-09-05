/**
 * Singleton - creational design pattern.
 * 
 * It is an object, which must be single in the system and has global access.
 * Sometimes considered as antipattern.
 */

//Implementation using simple object
const Singleton = {
	name: 'singleton'
};

//Implementation using class
let instance;

class Singleton {
	constructor() {
		if (!instance) instance = this;
		return instance;
	}
};

//Implementation using class with static instance variable instead of global
class Singleton {
	constructor() {
		if (typeof Singleton.instance === 'object') {
			return Singleton.instance;
		}

		Singleton.instance = this;
		return this;
	}
};
