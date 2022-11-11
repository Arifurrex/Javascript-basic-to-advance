// ! JavaScript Iterables পুনরাবৃত্তিযোগ্য
// Iterables মনে যেটার মদ্যে step বাই step যায় বা লুপ করা যায়
//আমরা জানি জাভাস্ক্রীপ্ট এ সবগলো object
// so javascript এ iterable মনে iterable object
// array , string সবগলো আমরা iterate করতে পরি
// কিন্ত অবজেক্ট কিন্ত iterable না

const person = {
  fname: "arifur",
  lname:"rahman"
}

// অবজেক্ট কিন্ত iterable না .object a একটা একটা করে iterate করতে পরি না

// array কিন্ত iterable
const nums = [1, 2, 3, 4];
for(const x of nums){
  console.log(x); // 1 2 3 4 
}
// string ও iterable 
let a = "bangladesh"
for (const y of a) {
  console.log(y); // b a n g l a d e s h
}

//! Iterating Over a Set
// set হল unique collection of value;
// set এর কেটরে unique value থাকবে না 

const letters = new Set(["a", "b", "c", "a"]);
for (l of letters) {
  console.log(l); // a b c
}

//! Iterating Over a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (f of fruits) {
  console.log(f);
}



