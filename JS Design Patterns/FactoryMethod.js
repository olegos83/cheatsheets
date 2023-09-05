/**
 * Factory Method - creational design pattern.
 * 
 * Used to create many objects of same type or structure, but with different data.
 * Also, it is used when there are difficulties in creation of object directly using its constructor.
 */

//Implementation
class Obj {
	constructor(type, title) {
		this.type = type;
		this.title = title;
	}
}

class ObjFactory {
	create(type) {
		if (type === 'X') return new Obj(type, 'Obj X');
		if (type === 'Y') return new Obj(type, 'Obj Y');
	}
}

//Usage
const objFactory = new ObjFactory(),
	  objX = objFactory.create('X'),
	  objY = objFactory.create('Y');
