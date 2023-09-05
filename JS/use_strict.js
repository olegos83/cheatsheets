/**
 * JS strict mode restrictions.
 */
 //must be declared as string at the beginning of a script or a function (works only inside function)
"use strict";

//variables must be declared
x = 8; //ReferenceError: x is not defined

function fn() {
	"use strict";
	x = 8; //ReferenceError: x is not defined
}

//deleting a variable is not allowed
"use strict";

var x = 8;
delete x; //SyntaxError: Delete of an unqualified identifier in strict mode

//deleting a function is not allowed
"use strict";

function fn() {}
delete fn; //SyntaxError: Delete of an unqualified identifier in strict mode

//duplicating parameter is not allowed
"use strict";

function fn(x, x) {} //SyntaxError: Duplicate parameter name not allowed in this context

//octal numeric literals and octal escape characters are not allowed
"use strict";

var x = 010; //SyntaxError: Octal literals are not allowed in strict mode
var y = "\010"; //SyntaxError: Octal escape sequences are not allowed in strict mode

//writing to a read-only property is not allowed
"use strict";

var o = {};

Object.defineProperty(o, "x", { value: 8, writable: false });
o.x = 10; //TypeError: Cannot assign to read only property 'x' of object

//writing to a get-only property is not allowed
"use strict";

var o = { get x() { return 8; } };

o.x = 10; //TypeError: Cannot set property which has only a getter

//deleting an undeletable property is not allowed
"use strict";
delete Object.prototype; //TypeError: Cannot delete property 'prototype' of function Object()

//eval and arguments cannot be used as variable
"use strict";

var eval = 8; //SyntaxError: Unexpected eval or arguments in strict mode
var arguments = 8; //SyntaxError: Unexpected eval or arguments in strict mode

//with statement is not allowed
"use strict";

var x;

with (Math) {
	x = cos(2); //SyntaxError: Strict mode code may not include a with statement
}

//eval() is not allowed to create variables in the scope from which it was called
"use strict";

eval("var x = 8;");
console.log(x); //ReferenceError: x is not defined

//if the object is not specified, this inside functions will be undefined instead of referencing global object
"use strict";

function fn() {
	console.log(this);
}

fn(); //undefined

//reserved keywords cannot be used as variable names
//implements, interface, let, package, private, protected, public, static, yield
"use strict";

var yield = "reserved keyword"; //SyntaxError: Unexpected strict mode reserved word
