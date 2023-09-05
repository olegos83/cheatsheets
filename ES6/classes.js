/**
 * ES6 classes.
 */
//class declaration
class Example {
	//constructor
	constructor(title = 'Untitled') {
		//properties
		this.title = title;
		this._name = 'No name';
	}

	//getter
	get name() {
		return this._name;
	}

	//setter
	set name(name) {
		this._name = name;
	}

	//methods
	setTitle(title) {
		this.title = title;
		return this;
	}

	showTitle() {
		console.log(this.title);
		return this;
	}

	//static method
	static staticMethod() {
		console.log('This is static method');
	}
};

//static property
Example.staticProperty = 'Example static property';

//class instance
let example = new Example('ES6 class example');

typeof Example; //"function"
example instanceof Example; //true

example.showTitle();
example.setTitle('New title').showTitle();

example.name = 'Vasyok';
console.log(example.name);

new Example().showTitle(); //"Untitled"
new Example().name; //"No name"

console.log(Example.staticProperty);
Example.staticMethod();

//class inheritance
class ExampleChildClass extends Example {
	//if omitted, parent class constructor is called
	constructor() {
		super(); //call parent class constructor
		this.title = 'Example child class';
	}

	//override method
	setTitle() {
		super.setTitle(this.title); //call parent class method
		return this;
	}
};

let exampleChild = new ExampleChildClass();

exampleChild instanceof ExampleChildClass; //true
exampleChild instanceof Example; //true

console.log(exampleChild.name); //"No name"
exampleChild.setTitle('New title').showTitle();

//class expression
let ClassName = class ClassName {
		//class implementation
	};
