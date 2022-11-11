//! JavaScript For Of
// for of loop in over array,string

// The JavaScript for of statement loops through the values of an iterable object.
//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

/* for (variable of iterable) {
  code block to be executed
} */

// object iterable na
// array iterable
//string iterable ,map and nodelist iterable



/* for (variable of iterable) {
  code block to be executed
} */

//! Looping over a String
let names = "arifur";
for (let x of names) {
    console.log(x); // a r i f u r
}

////! Looping over an array 
let a = [4, 7, 8, 4, 5, 6];
for (x of a) {
    console.log(x); // 4 7 8 4 5 6
}


// ! যখন object এর মদ্য loop এর জন্যে for in
// ! যখন array এর মদ্য loop এর জন্যে for of  