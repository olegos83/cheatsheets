/**
 * ES6 iterators.
 */
//iterate numbers from start to end using iterator to make nums object iterable
let nums = {
		start: 1,
		end: 10
	};

//add iterator using Symbol.iterator as property name
nums[Symbol.iterator] = function() {
	let val = this.start, last = this.end;

	return {
		//iterator must have next method to get next entry
		next() {
			if (val <= last) {
				return {
					done: false, //flag to check if iteration is finished
					value: val++
				};
			}

			else {
				return {
					done: true //iteration is finished
				};
			}
		}
	};
};

//after adding iterator we can use for of loop to iterate
for (let n of nums) console.log(n); //1 2 3 4 5 6 7 8 9 10
