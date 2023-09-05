/**
 * Composite - structural design pattern.
 * 
 * Used to group objects into tree structure and work with that tree as with single object.
 */

//Implementation
class Obj {
	setName(name) {
		this.name = name;
	}

	getName() {
		return this.name || '';
	}

	setPrice(price) {
		this.price = price;
	}

	getPrice() {
		return this.price || 0;
	}
}

class ObjA extends Obj {
	constructor() {
		super();
		this.setName('Obj A');
		this.setPrice(100);
	}
}

class ObjB extends Obj {
	constructor() {
		super();
		this.setName('Obj B');
		this.setPrice(200);
	}
}

class ObjC extends Obj {
	constructor() {
		super();
		this.setName('Obj C');
		this.setPrice(300);
	}
}

class Composite extends Obj {
	constructor() {
		super();
		this.objs = [];
	}

	add(obj) {
		this.objs.push(obj);
	}

	getPrice() {
		return this.objs.map(o => o.getPrice()).reduce((a, b) => a + b);
	}
}

class ObjGroup extends Composite {
	constructor() {
		super();
		this.setName('Objects group');
	}
}

//Usage
const grp = new ObjGroup();

grp.add(new ObjA());
grp.add(new ObjB());
grp.add(new ObjC());

console.log(`${grp.getName()} price is ${grp.getPrice()}`);
