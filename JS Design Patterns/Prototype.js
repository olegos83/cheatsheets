/**
 * Prototype - creational design pattern.
 * 
 * Used to clone objects regardless of implementation details.
 * Then we can adjust properties of cloned object without changing its basic structure.
 */

//Implementation
class Prototype {
	constructor(type, data) {
		this.type = type;
		this.data = data;
	}

	clone() {
		return new Prototype(this.type, this.data);
	}
}

//Usage
const prototypeObj = new Prototype('A', { color: 'black', price: 1000 }),
	  clonedObj1 = prototypeObj.clone(),
	  clonedObj2 = prototypeObj.clone();

clonedObj1.data.color = 'red';
clonedObj2.data.color = 'white';
