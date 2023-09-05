/**
 * ES6 Set (WeakSet) and Map (WeakMap) collections.
 */
//Map is a key/value collection
let map = new Map();

//map keys with different types
map.set('str', 'string key')
   .set(1, 'number key')
   .set(true, 'boolean key')
   .set(false, { prop: 'value' });

//get map values
console.log(map.get('str')); //"string key"
console.log(map.get(1)); //"number key"
console.log(map.get(true)); //"boolean key"
console.log(map.get(false)); //{ prop: "value" }

//map size
console.log(map.size); //4

//map iterators
map.keys(); //MapIterator {"str", 1, true, false}
map.values(); //MapIterator {"string key", "number key", "boolean key", {…}}
map.entries(); //MapIterator {"str" => "string key", 1 => "number key", true => "boolean key", false => {…}}

//iterate map using for of loop
for (let o of map) console.log(o); //logs map entries as [key, value] arrays

//iterate map using forEach method
map.forEach((value, key) => console.log(key, value)); //logs map keys and values

//map initialization using iterable object
let map = new Map([
	['1', '1'],
	[2, 2]
]);

console.log(map.get('1')); //"1"
console.log(map.get(2)); //2

//check if map key exists
map.has('1'); //true
map.has(1); //false
console.log(map.get(1)); //undefined

//delete map entry
map.delete(1); //false (key does not exist)
map.delete(2); //true (key exists)

//clear map (delete all entries)
map.clear();

//Set is a collection of unique items
let set = new Set();

//add items to set
let o1 = { n: 1 }, o2 = { n: 2 }, o3 = { n: 3 };

set.add(o1)
   .add(o2)
   .add(o3);

//set size
set.size; //3

//try to add item that already exists
set.add(o2);
set.size; //3 (existing item is not added)

//check if set item exists
set.has(o2); //true

//delete set item
set.delete(o2); //true (item exists, can be false if item does not exist)

//clear set (delete all items)
set.clear();

//iterate set using for of loop
for (let o of set) console.log(o); //logs set items

//iterate set using forEach method
set.forEach(o => console.log(o)); //logs set items

/*
	WeakMap and WeakSet are the same as Map and Set.

	But they allow items to be freed by garbage collector,
	when map or set are freed from memory.
*/
