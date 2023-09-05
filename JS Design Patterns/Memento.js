/**
 * Memento - behavioral design pattern.
 * 
 * Used to save and restore the previous state of an object
 * without revealing the details of its implementation.
 */

//Implementation
class Memento {
	constructor(data) {
		this.data = data;
	}
}

class Caretaker {
	constructor() {
		this.mementos = [];
	}

	addMemento(memento) {
		this.mementos.push(memento);
	}

	getMemento(index) {
		return this.mementos[index];
	}
}

const Creator = {
		save: data => new Memento(data),
		restore: memento => memento.data
	  };

//Usage
const caretaker = new Caretaker();

caretaker.addMemento(Creator.save('data 1'));
caretaker.addMemento(Creator.save('data 2'));
caretaker.addMemento(Creator.save('data 3'));

console.log(Creator.restore(caretaker.getMemento(1)));
