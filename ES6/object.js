/**
 * ES6 object.
 */
let name = 'Vasyok', age = 28, key = 'dynamicKey',

	obj = {
		//set properties in new object from variables with same name
		name,
		age,

		//set dynamic property name from variable in new object
		[key]: 'dynamic key',

		//set method in new object without ':' and function keyword
		hello() {
			console.log(`Hello, I am ${this.name}!`);
		},

		//get method
		get info() {
			return `${this.name}, ${this.age}`;
		}
	};

console.log(obj); //{ name: "Vasyok", age: 28, dynamicKey: "dynamic key" }
console.log(obj.info); //"Vasyok, 28"
obj.hello(); //"Hello, I am Vasyok!"
