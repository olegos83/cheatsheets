/**
 * ES6 destructuring.
 */
//object destructuring
let obj = {
		a: 'a',
		b: 'b',
		c: 'c',

		nested: {
			a_nested: 'a nested',
			b_nested: 'b nested'
		}
	};

//variables from given object properties
let { a, b } = obj,
	{ c, d = 'd default' } = obj, //default variable value if given property does not exist
	{ a: a_renamed } = obj, //renamed variable from given property

	//variables from nested object properties
	{ nested: { a_nested, b_nested } } = obj,
	{ nested: { c_nested = 'c_nested default' } } = obj; //with default value

console.log(obj); //{ a: "a", b: "b", c: "c", nested: {...} }
console.log(a); //"a"
console.log(b); //"b"
console.log(c); //"c"
console.log(d); //"d default"
console.log(a_renamed); //"a"

console.log(a_nested); //"a nested"
console.log(b_nested); //"b nested"
console.log(c_nested); //"c nested default"

//destructuring of function arguments from given object and returning multiply values as object
let obj2 = {
		a2: 'a2',
		b2: 'b2',
		c2: 'c2',

		nested2: {
			a2_nested: 'a2 nested',
			b2_nested: 'b2 nested'
		}
	};

function objInfo({ a2, c2, nested2: { b2_nested } }) {
	console.log(`${a2}, ${c2}, ${b2_nested}`);
	return { a2, c2, b2_nested };
}

let obj3 = objInfo(obj2); //"a2, c2, b2 nested"

console.log(obj3); //{ a2: "a2", c2: "c2", b2_nested: "b2 nested" }

//array destructuring
let arr = ['x', 'y', 'z', [1, 2]];

//variables from given array
let [x, y, z, [nested_1, nested_2], k_default = 'k default'] = arr;

console.log(arr); //["x", "y", "z", [1, 2]]
console.log(x); //"x"
console.log(y); //"y"
console.log(z); //"z"
console.log(nested_1); //1
console.log(nested_2); //2
console.log(k_default); //"k default"

//destructuring of function arguments from given object
function arrInfo([i, j]) {
	console.log(i + j);
}

arrInfo(arr); //"xy"
