/**
 * ES6 symbols.
 *
 * Symbol is a new primitive data type in ES6 to store unique name and prevent name conflicts.
 */
//not a constructor
try {
	new Symbol();
}

catch(e) {
	console.log(e); //Error: Symbol is not a constructor
}

//create symbol (not in global registry)
let symbol = Symbol(),
	mySymbol = Symbol('mySymbol'),
	mySymbol2 = Symbol('mySymbol');

console.log(typeof symbol); //"symbol"
console.log(typeof mySymbol); //"symbol"

console.log(symbol); //"Symbol()"
console.log(mySymbol); //"Symbol(mySymbol)"
console.log(mySymbol2); //"Symbol(mySymbol)"

console.log(mySymbol == mySymbol2); //false
console.log(mySymbol === mySymbol2); //false

//create symbol or reference to already created symbol in global registry
let forSymbol = Symbol.for('forSymbol'),
	forSymbol2 = Symbol.for('forSymbol');

console.log(forSymbol); //"Symbol(forSymbol)"
console.log(forSymbol2); //"Symbol(forSymbol)"

console.log(forSymbol == forSymbol2); //true
console.log(forSymbol === forSymbol2); //true

//get symbol name from global registry
let forSymbolName = Symbol.keyFor(forSymbol);

console.log(forSymbolName); //"forSymbol"

//example of using symbol as object property name
let obj = {
		a: 'a',
		[Symbol.for('b')]: 'b'
	};

console.log(obj); //{ a: "a", [Symbol(b)]: "b" }
console.log(obj[Symbol.for('b')]); //"b"

//get array of property symbols in object
console.log(Object.getOwnPropertySymbols(obj)); //[Symbol(b)]
