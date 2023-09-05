/**
 * Iterator - behavioral design pattern.
 * 
 * Used to traverse elements of a collection without exposing its underlying representation.
 */

//Implementation
class Iterator {
	constructor(collection) {
		this.index = 0;
		this.collection = collection;
	}

	next() {
		return this.collection[this.index++];
	}

	hasNext() {
		return this.index < this.collection.length;
	}
}

//Usage
const collection = ['Vasyok', 'Fedunya', 'Valerchik', 'Andron'],
	  iterator = new Iterator(collection);

while (iterator.hasNext()) {
	console.log(iterator.next());
}
