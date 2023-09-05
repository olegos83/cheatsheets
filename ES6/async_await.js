/**
 * ES6 async/await.
 *
 * Async/await is used to simplify work with promises.
 */
//async function always returns a promise and its return value is wrapped in a resolved promise automatically
async function asyncFn() {
	return 8;
}

asyncFn(); //Promise { <resolved>: 8 }

//async can also be used in class methods and that method allways returns a promise like async function
class AsyncMethodDemo {
	async asyncMethod() {
		return 8;
	}
}

new AsyncMethodDemo().asyncMethod(); //Promise { <resolved>: 8 }

//await works only inside async functions and makes JavaScript wait until that promise settles and returns its result
async function awaitDemo() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("Done!"), 1000);
	});

	console.log('Waiting 1 second...');

	let result = await promise; //wait until the promise resolves

	console.log(result);
}

awaitDemo();

//await allows us to use thenable objects, those with a callable then method
class Thenable {
	constructor(num) {
		this.num = num;
	}

	then(resolve, reject) {
		setTimeout(() => resolve(this.num * 2), 1000);
	}
};

async function awaitThenableDemo() {
	console.log('Waiting 1 second...');
	console.log(await new Thenable(4));
}

awaitThenableDemo(); //8

//create promise for one more example
function createPromise() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('Data');
		}, 1000);
	});
}

//get data without async/await
async function getData() {
	console.log('Waiting 1 second...');

	createPromise().then(data => {
		console.log(data);
		console.log('Done');
	});
}

getData();

//do the same using async/await
async function getDataAsync() {
	console.log('Waiting 1 second...');
	console.log(await createPromise());
	console.log('Done');
}

getDataAsync();

//one more example
let calc = () => {
		Promise.resolve(8).then(x => {
			Promise.resolve(8).then(y => {
				console.log(x + y);
			});
		});
	};

calc(); //16

//do the same using async/await
let calcAsync = async () => {
		let x = await Promise.resolve(8),
			y = await Promise.resolve(8);

		console.log(x + y);
	};

calcAsync(); //16
