/**
 * Observer - behavioral design pattern.
 * 
 * Used to define a subscription mechanism to notify multiple objects
 * about any events that happen to the object they are observing.
 */

//Implementation
class Observable {
	constructor() {
		this.data = null;
		this.observers = [];
	}

	setData(data) {
		this.data = data;
		this.notifyObservers();
	}

	notifyObservers() {
		return this.observers.forEach(o => o.notify(this));
	}

	register(observer) {
		this.observers.push(observer);
	}

	unregister(observer) {
		this.observers = this.observers.filter(o => o !== observer);
	}
}

class Observer {
	constructor(name) {
		this.name = name;
	}

	notify(observable) {
		console.log(`${this.name} is notified about: ${observable.data}`);
	}
}

//Usage
const subject = new Observable(),

	  vasyok = new Observer('Vasyok'),
	  fedunya = new Observer('Fedunya'),
	  valerchik = new Observer('Valerchik');

subject.register(vasyok);
subject.register(fedunya);
subject.register(valerchik);
subject.setData('Data change 1');

subject.unregister(fedunya);
subject.setData('Data change 2');
