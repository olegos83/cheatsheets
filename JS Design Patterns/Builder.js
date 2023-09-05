/**
 * Builder - creational design pattern.
 * 
 * Used to create objects with complicated state which is hard to initialize inside constructor.
 */

//Implementation
class Obj {
	constructor() {
		this.type = '';
		this.data = null;
		this.handler = null;
	}
}

class ObjBuilder {
	constructor() {
		this.obj = new Obj();
	}

	setType(type) {
		this.obj.type = type;
		return this;
	}

	setData(data) {
		this.obj.data = data;
		return this;
	}

	addHandler(handler) {
		this.obj.handler = handler.bind(this.obj);
		return this;
	}

	build() {
		return this.obj;
	}
}

//Usage
const obj = new ObjBuilder().setType('A')
							.setData({ color: 'black', price: 1000 })
							.addHandler(function() { console.log(this); })
							.build();
