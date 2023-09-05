/**
 * Useful console methods.
 */
//simple logging
console.log('message');
console.dir(obj);

//clear console
console.clear();

//warnings and errors highlighting
console.warn('warning');
console.error('error');

//table output array of objects
console.table(arr);

//grouping of messages
console.group('group name');
console.groupCollapsed('group name'); //collapsed group
console.groupEnd('group name'); //end of group

//time measurement
console.time("timer name"); //start timer
console.timeEnd("timer name"); //stop timer and show ellapsed time

//count something
console.count("counter name"); //initialize counter and then count
console.countReset("counter name"); //reset counter

//trace call stack inside function calls
function f() {
	function f2() {
		console.trace(); //show call stack
	}

	f2();
}
