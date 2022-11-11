// ! JavaScript Sets
/* A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set. */
// set হল unique collection of value;
// set এর কেটরে unique value থাকবে না
// set er S capital hobe
//* array হল collection of values আর sets হল collection of uniques values

//! How to Create a Set
const alphabet = new Set(["a", "b", "c"]);

//! The new Set() Method
const letters = new Set(["a", "b", "c"]);

//* Create a Set and add values:
// Create a Set
const letter = new Set();

// Add Values to the Set
letter.add("a");
letter.add("b");
letter.add("c");

console.log(letter); // Set(3) {'a', 'b', 'c'}

//!The add() Method

letter.add("f");
letter.add("g");
console.log(letter); //Set(5) {'a', 'b', 'c', 'f', 'g'}

//!The forEach() Method
const num = new Set([1, 2, 3, 4]);
console.log(num);
num.forEach(myFunction);
function myFunction(i) {
    console.log(i); // 1 2 3 4
}

//! The values() Method
const val=new Set(['a','b','c'])
console.log(letters.values());// SetIterator {'a', 'b', 'c'}

//* Now you can use the Iterator object to access the elements:

// List all Elements
const val2 = new Set([1, 2, 3, 4, 5]);
for (const x of val2.values()) {
    console.log(x); // 1 2 3 4 5
}