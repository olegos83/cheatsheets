/**
 * Visitor - behavioral design pattern.
 * 
 * Used to extend class functionality without changing its initial implementation.
 */

//Implementation
class Obj {
	accept(visitor) {
		visitor(this);
	}
}

class ObjA extends Obj {
	info() {
		console.log('Hello, I am object A');
	}
}

class ObjB extends Obj {
	info() {
		console.log('Hello, I am object B');
	}
}

//visitor
function jsonExport(obj) {
	if (obj instanceof ObjA) {
		console.log(`JSON: ${JSON.stringify({ type: 'A' })}`);
	}

	else if (obj instanceof ObjB) {
		console.log(`JSON: ${JSON.stringify({ type: 'B' })}`);
	}
}

//Usage
let objA = new ObjA(),
	objB = new ObjB();

objA.info();
objA.accept(jsonExport);

objB.info();
objB.accept(jsonExport);
