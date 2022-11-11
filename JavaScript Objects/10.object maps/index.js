// ! JavaScript Maps
/* 
set এর সাথে মিল আছে হল array 
set হল unique value collection 
আর array হল value collection 

map এর সাথে মিল আছে object
map এর key value paire থাকে 
আর object এ key value paire থাকে 

A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys.
A Map has a property that represents the size of the map.

*/
// * object 
const person = {
    firstName: 'arifur', // এখানে firstName lastName হল string only 
    lastName: 'rahman'
};

const fname = person.firstName;
console.log(fname); // arifur

person.age = 32;
console.log(person);
/* 
{firstName: 'arifur', lastName: 'rahman', age: 32}
age: 32
firstName: "arifur"
lastName: "rahman"

object এ order follow করে না । যেমন age : 32 আগে দেখচ্ছে ।  
A Map remembers the original insertion order of the keys.
*/


// * Map 
const person2 = new Map([
    ['firstName', 'arifur'],
    ['firstName', 'rahman'],
    [2000, 'stablish'],
    [2010, 'demolish']
]);
 
console.log(person2.get('firstName')); // rahman    
console.log(person2.firstName); // undefine এভাবে কাজ করে না


// !Map Methods
/* 

Method	       Description
new Map()	   Creates a new Map object
set()	       Sets the value for a key in a Map
get()	       Gets the value for a key in a Map
clear()	       Removes all the elements from a Map
delete()	   Removes a Map element specified by a key
has()	       Returns true if a key exists in a Map
forEach()	   Invokes a callback for each key/value pair in a Map
entries()	   Returns an iterator object with the [key, value] pairs in a Map
keys()	       Returns an iterator object with the keys in a Map
values()	   Returns an iterator object of the values in a Map

Property	  Description
size	      Returns the number of Map elements

*/


// ! How to Create a Map
/* 
You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set() 
*/

//! new Map()
// You can create a Map by passing an Array to the new Map() constructor:

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits);
// Map(3) {'apples' => 500, 'bananas' => 300, 'oranges' => 200}


//! Map.set()
// You can add elements to a Map with the set() method:

// Create a Map
const fruitso = new Map();

// Set Map Values
fruitso.set("apples", 500);
fruitso.set("bananas", 300);
fruitso.set("oranges", 200);

console.log(fruitso);
// Map(3) {'apples' => 500, 'bananas' => 300, 'oranges' => 200}

/* 
[[Entries]]
0: {"apples" => 500}
1: {"bananas" => 300}
2: {"oranges" => 200}
size: 3
*/
// order follow kore ar key ta any data type hote pare


// * The set() method can also be used to change existing Map values:
fruitso.set("apples", 900);
console.log(fruitso);
// Map(3) {'apples' => 900, 'bananas' => 300, 'oranges' => 200}


//! Map.get()
// The get() method gets the value of a key in a Map:
console.log(fruitso.get("apples")); // 900

//! Map.size
// The size property returns the number of elements in a Map:
console.log(fruitso.size); // 3


// ! Map.delete()
// The delete () method removes a Map element:

console.log(fruitso.delete("apples")); //true
console.log(fruitso);
// Map(2) {'bananas' => 300, 'oranges' => 200}


// ! Map.has()
// The has() method returns true if a key exists in a Map:
console.log(fruitso.has("apples")); // false 
console.log(fruitso.has("bananas")); // true 
console.log(fruitso);
//Map(2) {'bananas' => 300, 'oranges' => 200}


// //! Map.clear()
// The clear() method removes all the elements from a Map:
console.log(fruitso.clear());  // undefine
console.log(fruitso); // Map(0) {size: 0}


//! Maps are Objects
console.log(typeof fruitso); //object

console.log(fruitso instanceof Map); // true


//! JavaScript Objects vs Maps
/* 
Differences between JavaScript Objects and Maps:

Object	                               Map
Not directly iterable	              Directly iterable
Do not have a size property	         Have a size property
Keys must be Strings (or Symbols)	 Keys can be any datatype
Keys are not well ordered	         Keys are ordered by insertion
Have default keys	                 Do not have default keys
*/

//! Map.forEach()
// The forEach() method invokes a callback for each key / value pair in a Map:

const frut = new Map([
    ['apple', 500],
    ['orange', 300],
    ['mango', 200]
]);

let text = "";

frut.forEach(function (value, key){
    text += `${key} = ${value}    `;
});
console.log(text); // apple = 500    orange = 300    mango = 200


// * set এর ক্ষেত্রে  forEach(value) এ শুদুমাত্র value থাকে 
const letter = new Set(["a", "b", "c"]);
let txt = "";
letter.forEach(function (value) {
    txt += `${value}  `;
});

console.log(txt); // a b c



//! Map.keys()
// The keys() method returns an iterator object with the keys in a Map:
const letter1 = new Map([
    ['a', 400],
    ['b', 300],
    ['c', 800]
]);
console.log(letter1.keys()); // MapIterator {'a', 'b', 'c'}
// only key er iterator paben
  
let txt1 = "";
for (const x of letter1.keys()) {
    txt1 += x  ;
}
console.log(txt1); // abc



// * set er ketrre 
const letter2 = new Set(["a", "b", "c"]);
console.log(letter2.keys()); // SetIterator {'a', 'b', 'c'}

let txt2 = "";
for (const x of letter2.keys()) {
    txt2 += x;
}
console.log(txt2); // abc



// !Map.values()
// The values() method returns an iterator object with the values in a Map:

const fruits3 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits3); // Map(3) {'apples' => 500, 'bananas' => 300, 'oranges' => 200}
console.log(fruits3.keys()); // MapIterator {'apples', 'bananas', 'oranges'}
console.log(fruits3.values()); // MapIterator {500, 300, 200}


for (x of fruits3.values()) {
    console.log(x); // 500 300 200
}


// You can use the values() method to sum the values in a Map:
let total = 0;
for (x of fruits3.values()) {
    total += x;
}
console.log(total); //1000



// ! Objects as Keys
// Being able to use objects as keys is an important Map feature.

// Create Objects
const apples = { name: 'Apples' };
const bananas = { name: 'Bananas' };
const oranges = { name: 'Oranges' };

// Create a Map
const fruits4 = new Map();

// Add new Elements to the Map
fruits4.set(apples, 500);
fruits4.set(bananas, 300);
fruits4.set(oranges, 200);

console.log(fruits4); 
//Map {{ name : 'Apples'} => 500, {name : 'Bananas'} => 300, { name : 'oranges'}=> 200 }

console.log(fruits4.get(apples)); // 500

// Remember: The key is an object(apples), not a string("apples"):
console.log(fruits4.get("apples")); //undefine


