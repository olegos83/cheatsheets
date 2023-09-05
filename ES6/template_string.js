/**
 * ES6 template string.
 */
//template string with variables inside ${}
let name = 'Vasyok', age = 28, amount = 88,
	str = `Hello, my name is ${name}, I am ${age} years old and I have ${amount} dollars.`;

console.log(str); //"Hello, my name is Vasyok, I am 28 years old and I have 88 dollars."

//template string tagging
function tagFunction(literalsArray, value) {
	console.log(literalsArray); //["Hello, I am ", "!", raw: Array(2)]
	console.log(value); //"Vasyok"

	return literalsArray[0] + value.toUpperCase() + literalsArray[1];
}

console.log(tagFunction`Hello, I am ${name}!`); //"Hello, I am VASYOK!"

//multiline template string
let className = 'example',

	str2 = `<div class="${className}">
				<p>This is HTML template example.</p>
				<p>Created using ES6 multiline template string.</p>
			</div>`;

console.log(str2);
