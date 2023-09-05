/**
 * JS String features.
 */
//string concatenation
const name = 'Vasyok', age = 28,
	  str = 'Hi, my name is ' + name + ' and I am ' + age + ' years old.',
	  strES6 = `Hi, my name is ${name} and I am ${age} years old.`;

console.log(str);
console.log(strES6);

//multiline string
const multiLineStr = 'This is\n\
multiline string.';

const multiLineStrES6 = `This is
multiline string ES6.`;

console.log(multiLineStr);
console.log(multiLineStrES6);

//string methods
const str1 = "Some String";

str1.length; //11
str1[3]; //"e"
str1.charAt(3); //"e"

str1.repeat(3); //"Some StringSome StringSome String"

str1.toLowerCase(); //"some string"
str1.toUpperCase(); //"SOME STRING"

str1.indexOf('Str'); //5
str1.indexOf('!'); //-1

str1.includes('Some'); //true
str1.startsWith('Some'); //true
str1.endsWith('ing'); //true

const str2 = "    Another String    ";

str2.trim(); //"Another String"
str2.trimLeft(); //"Another String    "
str2.trimRight(); //"    Another String"

const str3 = 'a,b,c';

str3.split(); //["a,b,c"]
str3.split(''); //["a", ",", "b", ",", "c"]
str3.split(','); //["a", "b", "c"]
