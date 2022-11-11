// ! JavaScript Sets
/* 
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
A Set can hold any value of any data type.
*/

// ! Set Methods
/* 
Method	      Description
new Set()	  Creates a new Set
add()	      Adds a new element to the Set
delete ()	  Removes an element from a Set
has()	      Returns true if a value exists
clear()	      Removes all elements from a Set
forEach()	  Invokes a callback for each element
values()	  Returns an Iterator with all the values in a Set
keys()	      Same as values()
entries()	  Returns an Iterator with the[value, value] pairs from a Set

size	      Returns the number elements in a Set
 */


// ! How to Create a Set

/* 
You can create a JavaScript Set by:

Passing an Array to new Set()
Create a new Set and use add() to add values
Create a new Set and use add() to add variables
*/


//! The new Set() Method
// Pass an Array to the new Set() constructor:

// Create a Set
const letters = new Set(["a", "b", "c"]);
console.log(letters); // Set(3) {'a', 'b', 'c'}
/* 
Set(3) {'a', 'b', 'c'}
[[Entries]]
0: "a"
1: "b"
2: "c"
size: 3

*/

// * Create a Set and add literal values:
// Create a Set
const letter = new Set();

// Add Values to the Set
letter.add("a");
letter.add("b");
letter.add("c");

console.log(letter); //Set(3) {'a', 'b', 'c'}

// * Create a Set and add variables:
// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Create a Set
const letter1 = new Set();

// Add Variables to the Set
letter1.add(a);
letter1.add(b);
letter1.add(c);

console.log(letter1); // Set(3) {'a', 'b', 'c'}


// ! The add() Method
letter1.add("d");
letter1.add("e");
console.log(letter1); //Set(5) {'a', 'b', 'c', 'd', 'e'}


// ! If you add equal elements, only the first will be saved:
const letterss = new Set();
letterss.add("a");
letterss.add("b");
letterss.add("c");
letterss.add("c");
letterss.add("c");
letterss.add("c");
letterss.add("c");
letterss.add("c");

console.log(letterss); // Set(3) {'a', 'b', 'c'}


// !The forEach() Method
// The forEach() method invokes a function for each Set element:

// Create a Set
const letter3 = new Set(["a", "b", "c"]);

// List all entries
let text = "";
letters.forEach(function (value) {
    console.log(value); // a b c
})


//! The values() Method
// The values() method returns an Iterator object containing all the values in a Set:
//  Returns [object Set Iterator]

const letter4 = new Set(["a", "b", "c"]);
console.log(letter4.values()); // SetIterator {'a', 'b', 'c'}

/* 
SetIterator {'a', 'b', 'c'}
[[Entries]]
0: "a"
1: "b"
2: "c"
[[Prototype]]: Set Iterator
[[IteratorHasMore]]: true
[[IteratorIndex]]: 0
[[IteratorKind]]: "values"

*/


// ! The keys() Method
/* 
A Set has no keys.
*keys() returns the same as values().
This makes Sets compatible with Maps.
*/
const letter5 = new Set(["a", "b", "c"]);
console.log(letter5.keys()); // SetIterator {'a', 'b', 'c'}
/* 
SetIterator {'a', 'b', 'c'}
[[Entries]]
0: "a"
1: "b"
2: "c"
[[Prototype]]: Set Iterator
[[IteratorHasMore]]: true
[[IteratorIndex]]: 0
[[IteratorKind]]: "values"

*/

//! The entries() Method
/* 
A Set has no keys.
entries() returns [value,value] pairs instead of [key,value] pairs.
This makes Sets compatible with Maps
*/
const letter6 = new Set(["a", "b", "c"]);
// Create an Iterator
const myIterator = letter6.entries();

// List all Entries
for (const entry of myIterator) {
    console.log(entry);
    /* 
    (2) ['a', 'a']
    (2) ['b', 'b']
    (2) ['c', 'c']
    */
}


// ! Sets are Objects
// For a Set, typeof returns object:
console.log(typeof (letter6)); //object


// For a Set, instanceof Set returns true:
console.log(letter6 instanceof Set);  // Returns true




