/**
 * ES6 module.
 */
//export variables
export let varFromModule = 8;

let varFromModule2 = 88,
	varFromModule3 = 888;

export {
	varFromModule2,
	varFromModule3
};

//export class
export class ClassFromModule {
	constructor() {
		console.log('Class from module');
	}
};

//export function
export function functionFromModule() {
	console.log('Function from module');
};

//export class and function
class ClassFromModule2 {
	constructor() {
		console.log('Class from module 2');
	}
};

function functionFromModule2() {
	console.log('Function from module 2');
}

export { ClassFromModule2, functionFromModule2 };

//export with renaming
let var1 = 'Var from module';

function fn() {
	console.log('Function from module 3');
}

export {
	var1 as varFromModule4,
	fn as functionFromModule3
};

//default export
let defaultVarFromModule = 'Default var from module';

export default defaultVarFromModule;
