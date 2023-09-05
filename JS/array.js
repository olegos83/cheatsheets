/**
 * JS Array features.
 */
const arr = ['a', 'b', 'c', 'd'];

//add item to the end of array
arr.push('e');
console.log(arr); //["a", "b", "c", "d", "e"]

//remove and return item from the end of array
arr.pop(); //"e"
console.log(arr); //["a", "b", "c", "d"]

//add item to the beginning of array
arr.unshift("1");
console.log(arr); //["1", "a", "b", "c", "d"]

//remove and return item from the beginning of array
arr.shift(); //"1"
console.log(arr); //["a", "b", "c", "d"]

//slice array
arr.slice(0, 2); //["a", "b"]
arr.slice(2); //["c", "d"]
arr.slice(1, 3); //["b", "c"]

//delete 2 items from array starting from index 1
arr.splice(1, 2); //["b", "c"]
console.log(arr); //["a", "d"]

//insert 2 items into array starting from index 1
arr.splice(1, 0, "b", "c"); //[]
console.log(arr); //["a", "b", "c", "d"]

//delete 1 item from array at index 1 and insert there 2 items
arr.splice(1, 1, "1", "2"); //["b"]
console.log(arr); //["a", "1", "2", "c", "d"]

//reverse array (changes the original array)
arr.reverse(); //["d", "c", "2", "1", "a"]
console.log(arr); //["d", "c", "2", "1", "a"]

//clear array
arr.length = 0;
console.log(arr); //[]

//get index of given item and check if it exists inside array
const arr2 = ['a', 'b', 'c', 'd'];

arr2.indexOf('d'); //3
arr2.indexOf('e'); //-1
arr2.includes('d'); //true

//find item reference or its index inside array of objects
const arr3 = [
		  { name: 'Vasyok', amount: 50 },
		  { name: 'Fedunya', amount: 30 },
		  { name: 'Valerchik', amount: 20 }
	  ];

arr3.find(function(item) { return item.amount == 30; }); //{ name: "Fedunya", amount: 30 }
arr3.find(function(item) { return item.amount == 0; }); //undefined

arr3.findIndex(function(item) { return item.amount == 30; }); //1
arr3.findIndex(function(item) { return item.amount == 0; }); //-1

//reduce array
arr3.reduce(function(acc, item) { return acc + item.amount; }, 0); //100

//filter array
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	  filteredArr4 = arr4.filter(function(item) { return item > 5; });

console.log(arr4); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(filteredArr4); //[6, 7, 8, 9, 10]

//map array
const arr5 = ['a', 'b', 'c', 'd'],
	  mappedArr5 = arr5.map(function(item) { return item.toUpperCase(); });

console.log(arr5); //["a", "b", "c", "d"]
console.log(mappedArr5); //["A", "B", "C", "D"]

//join array to string
arr5.join(); //"a,b,c,d"
arr5.join(''); //"abcd"
arr5.join(':'); //"a:b:c:d"

//flatten array containing subarrays
const arr6 = [1, [2, 3], [4, 5], 6, 7, 8];

arr6.flat(); //[1, 2, 3, 4, 5, 6, 7, 8]

//concatenate arrays
const arr7 = ['a', 'b', 'c'],
	  arr8 = ['d', 'e', 'f'];

arr7.concat(arr8, ['g', 'h']); //["a", "b", "c", "d", "e", "f", "g", "h"]

//invoke provided function once for each array element
arr7.forEach(function(item, index) { console.log(index + ': ' + item); }); //0: a, 1: b, 2: c

//check if given instance is an array
Array.isArray(arr7); //true
Array.isArray([1, 2, 3]); //true
Array.isArray({ str: 123 }); //false
Array.isArray(45); //false
Array.isArray('str'); //false
Array.isArray(null); //false
Array.isArray(undefined); //false
