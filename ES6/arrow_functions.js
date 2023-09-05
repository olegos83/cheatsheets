/**
 * ES6 arrow functions.
 */
//arrow function without arguments
let arrowFunction = () => {
		console.log('Arrow function');
	};

arrowFunction(); //"Arrow function"

//arrow function with single argument without braces
let singleArg = arg => {
		console.log(arg);
	};

singleArg(8); //8

//arrow function with arguments
let arrowArgs = (arg1, arg2) => {
		console.log(`${arg1}, ${arg2}`);
	};

arrowArgs(1, 2); //1, 2

//arrow function with default argument
let defaultArgs = (arg1, arg2 = 8) => {
		console.log(`${arg1}, ${arg2}`);
	};

defaultArgs(1, 2); //1, 2
defaultArgs(1); //1, 8

//multiline arrow function with return statement
let sum = (a, b) => {
		let sum = a + b;
		return sum;
	};

sum(5, 5); //10

//single line arrow functions without return statement and braces around function body
let sqrt = x => x * x,
	retObj = () => ({ msg: 'Returned object inside round braces' });

sqrt(4); //16
retObj(); //{ msg: "Returned object inside round braces" }

//self-invoking anonymous arrow functions
(() => console.log('Hello'))(); //Hello
(arg => { console.log(arg); })(8); //8

//arrow function has no arguments object
let testArguments = (a, b, c) => {
		console.log(arguments);
	};

testArguments(1, 2, 3); //Error: arguments is not defined

//arrow function can't be used as constructor with new operator
let TestNew = () => {
		this.property = 'value';
	};

new TestNew(); //Error: TestNew is not a constructor

//arrow function takes 'this' context from that level of code, where it was declared
let	obj = {
		name: 'Obj',

		method: function() {
			let testThis = () => {
				console.log(this.name);
			};

			testThis();
		}
	};

obj.method(); //"Obj"

//arrow function can't be used correctly with call, apply and bind methods
let testContext = () => {
		console.log(this.name || this.toString());
	};

testContext.call(obj); //[object Window]
testContext.apply(obj); //[object Window]
testContext.bind(obj)(); //[object Window]
