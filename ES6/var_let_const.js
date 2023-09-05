/**
 * ES6 variable declarations.
 */
//ES5 variable (hoisted and can be accessed before declaration)
var z = 0;

//ES6 variable (can`t be accessed before declaration)
let v = 0;

//ES6 constant (can`t be changed and accessed before declaration)
const x = 50;
x = 10; //Error: Assignment to constant variable

//scope
function scope() {
	if (true) {
		var x = 50; //var declaration is hoisted and is visible inside whole function
		let y = 10; //let declaration is visible only inside those block, where it was declared

		console.log('Inside if');
		console.log(x);
		console.log(y);
	}

	console.log('Outside if');
	console.log(x);
	console.log(y); //Error: y is not defined
}

scope();

//var inside loop
function varLoop() {
	console.log('var loop');

	for (var i = 0; i < 5; i++) {
		setTimeout(function() {
			console.log(i);
		}, i * 500);
	}
}

varLoop(); //logs 5 all the time

//let inside loop
function letLoop() {
	console.log('let loop');

	for (let i = 0; i < 5; i++) {
		setTimeout(function() {
			console.log(i);
		}, i * 500);
	}
}

letLoop(); //logs 0, 1, 2, 3, 4
