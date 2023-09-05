/**
 * JS Function features.
 */
//function declaration
function hi(name) {
	console.log('Hi,', name);
}

hi('Vasyok');

//function expression
const hello = function(name) {
		  console.log('Hello,', name);
	  };

hello('Vasyok');

typeof hi; //"function"
typeof hello; //"function"

//anonymous function
let c = 0,

	i = setInterval(function() {
		c === 5 ? clearInterval(i) : console.log(++c);
	}, 350);

//array-like arguments object accessible inside function
function logArgs() {
	//log values of the arguments passed to the function
	console.log(arguments);
}

logArgs(1, 2, 3); //Arguments(3) [1, 2, 3]
logArgs('a', 'b'); //Arguments(2) ["a", "b"]

//ES6 arrow functions
const arrowHi = (name, x) => { console.log('Hi,', name + '! X is', x); },
	  arrowHello = name => console.log('Hello,', name);

arrowHi('Vasyok', 8);
arrowHello('Vasyok');

typeof arrowHi; //"function"
typeof arrowHello; //"function"

//arrow function return example
const pow2 = n => n ** 2;

pow2(5); //25
pow2(10); //100

//ES6 default arguments
const sum = (a = 4, b = a * 2) => a + b;

sum(5, 10); //15
sum(8); //24
sum(); //12

//ES6 ...rest arguments
function showRest(...rest) {
	console.log(rest);
}

showRest(1, 2, 3); //[1, 2, 3]
showRest('a', 'b', 'c', 'd'); //["a", "b", "c", "d"]

//closures
function createFullName(name) {
	return function(lastName) {
		console.log(name + ' ' + lastName); //name is saved in closure and is visible for returned function
	}
}

const vasyokFullName = createFullName('Vasyok'),
	  fedunyaFullName = createFullName('Fedunya');

vasyokFullName('Pupkin'); //"Vasyok Pupkin"
vasyokFullName('Lanovy'); //"Vasyok Lanovy"

fedunyaFullName('Ivanov'); //"Fedunya Ivanov"
fedunyaFullName('Petrov'); //"Fedunya Petrov"

//this and context
let objA = { name: 'Object A' },
	objB = { name: 'Object B' };

function fnCallDemo(arg1, arg2) {
	let name = this.name || this.toString();
	console.log('arg1: ' + arg1 + ', arg2: ' + arg2 + ', this.name: ' + name);
}

//call in global context
fnCallDemo('A', 'B'); //"arg1: A, arg2: B, this.name: [object Window]"

//set context using call and apply methods
fnCallDemo.call(objA, 'A', 'B'); //"arg1: A, arg2: B, this.name: Object A"
fnCallDemo.apply(objB, ['A', 'B']); //"arg1: A, arg2: B, this.name: Object B"

//bind example
let objC = { name: 'Object C' },
	boundCallDemo = fnCallDemo.bind(objC);

boundCallDemo('A', 'B'); //"arg1: A, arg2: B, this.name: Object C"

//bind with arguments
let boundArgsDemo = fnCallDemo.bind(null, 'A');

boundArgsDemo('B'); //"arg1: A, arg2: B, this.name: [object Window]"
