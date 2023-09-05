/**
 * ES6 promises.
 *
 * Promises are used to help working with asynchronous requests without callback hell.
 */
//create promise
let promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (true) {
				//resolve is a function called on success
				resolve('Success');
			}

			else {
				//reject is a function called on error
				reject('Error');
			}
		}, 1000);
	});

//then, catch and finally also return promise, so they can be chained
promise.then(data => {
	//called on success and returns data to next then call
	console.log(data);
	return data + ' (modified)';
}).then(data => console.log(data)) //data was modified in previous then call
  .catch(err => console.log(err)) //called on error
  .finally(() => console.log('Finally')); //allways called after promise execution

console.log('Waiting 1 second...');

//promise example using fetch method that returns promise (works in browser)
try {
	let fetchPromise = fetch('https://jsonplaceholder.typicode.com/posts/');

	fetchPromise.then(response => response.json()) //returns json to next then call
				.then(data => console.log(data)) //data is returned from previous then call
				.catch(err => console.log(err));
}

catch(e) {
	//not a browser
}
