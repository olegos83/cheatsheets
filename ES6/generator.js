/**
 * ES6 generators.
 *
 * Generator is a type of function that can pause its execution and return intermediate value.
 */
//create generator using * before its name
function *generator() {
	console.log('Step 1');
	yield 1; //keyword to return intermediate value from generator and suspend its execution
	console.log('Step 2');
	yield 2;
	console.log('Step 3');
	yield 3;
	console.log('Done');
}

//generator returns object with Generator as prototype, which is iterable because it has method next
let iterable = generator(), o = null;

console.log(iterable); //generator {<suspended>}

o = iterable.next(); //"Step 1"
console.log(o); //{ value: 1, done: false }

o = iterable.next(); //"Step 2"
console.log(o); //{ value: 2, done: false }

o = iterable.next(); //"Step 3"
console.log(o); //{ value: 3, done: false }

o = iterable.next(); //"Done"
console.log(o); //{ value: undefined, done: true }

//generate range example
function *generateRange(start, end) {
	let i = start;

	while (i <= end) {
		yield i++;
	}
}

//iterate created range using for of loop
let range = generateRange(1, 10);

for (let num of range) {
	console.log(num); //1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
