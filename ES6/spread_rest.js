/**
 * ES6 spread and rest operators.
 */
//spread in arrays
const arr1 = [1, 2, 3, 4],
	  arr2 = [5, 6, 7, 8],
	  arr3 = [...arr1, ...arr2];

console.log(arr3); //[1, 2, 3, 4, 5, 6, 7, 8]

//spread in objects
const objA = { a: 'a', b: 'b' },
	  objB = { a: 'a from objB', c: 'c' },
	  objC = { ...objA, ...objB };

console.log(objC); //{ a: "a from objB", b: "b", c: "c" }

//spread in functions
const arr = [1, 2, 3];

function sum(a, b, c) {
	return a + b + c;
}

sum(...arr); //6

//rest in functions
function logArgs(arg1, ...rest) {
	console.log('arg1:', arg1, '| rest:', rest);
}

logArgs(8, 9, 10, 11); //arg1: 8 | rest: [9, 10, 11]
