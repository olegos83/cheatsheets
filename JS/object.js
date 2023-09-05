/**
 * JS Object features.
 */
const obj = {
		  name: 'Obj A',
		  serial: 8888,
		  isObject: true,
		  data: ['a', 'b', 'c'],

		  'string key': 'str',
		  ['key_' + 4]: 'key 4',

		  toString: function() {
			  console.log(JSON.stringify(this));
		  }
	  };

console.log(obj.name); //"Obj A"
console.log(obj['string key']); //"str"

//get object property names
Object.keys(obj); //["name", "serial", "isObject", "data", "string key", "key_4", "toString"]

//delete properties
delete obj.name;
delete obj['string key'];

console.log(obj.name); //undefined
console.log(obj['string key']); //undefined

//check if property exist in given object (not in prototype)
obj.hasOwnProperty('name'); //false
obj.hasOwnProperty('serial'); //true

//copy all enumerable own properties from one or more source objects to a target object and return it
let obj1 = { a: 'a', v: 1 },
	obj2 = { b: 'b', v: 2 },
	obj3 = Object.assign(obj1, obj2, { v: 3 }); //{ a: "a", b: "b", v: 3 }

obj1 === obj3; //true
console.log(obj1, '===', obj3); //{ a: "a", v: 3, b: "b" } === { a: "a", v: 3, b: "b" }
console.log(obj2); //{ b: "b", v: 2 }
