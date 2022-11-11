//! JavaScript Hoisting(উত্তোলন/উপরের দিকে নিয়ে আসা)
// Hoisting হল জাভাস্ক্রিপ্টের ডিফল্ট behavior যা declarations কে উপরের দিকে নিয়ে যায়।
// var x ,let y ,const z হল declaration


//! JavaScript Declarations are Hoisted
//একটি variable ব্যবহার করার পরে  declared করা যেতে পারে ।
//অন্য কথায়, একটি variable declared করার আগে ব্যবহার করা যেতে পারে ।

// example 1:
x = 5;
console.log(x); // 5
var x;

// example 2:
var y;
y = 5;
console.log(y); //

//Example 1 gives the same result as Example 2:

/* Hoisting হল javascript এর ডিফল্ট behavior
যা moving all declarations to the top of the current scope
(বর্তমান স্ক্রিপ্ট বা বর্তমান ফাংশনের শীর্ষে) নিয়ে যায়।

*/

//! The let and const Keywords
/* 
Variables defined with let and const are hoisted to the top of the block, but not initialized. 
Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
Using a let variable before it is declared will result in a ReferenceError.
The variable is in a "temporal dead zone" from the start of the block until it is declared:

*/

// example let
/*  
a = 5;
console.log(a);
Uncaught ReferenceError: Cannot access 'a' before initialization
let a; 

*/


// example const
/* 

b = 6;
console.log(b);
const b;
Uncaught SyntaxError: Missing initializer in const declaration
 
*/


//* kibabe kaj kore

// *var
/* 
x = 5;
console.log(x); // 5
var x;

se prothome programme ta akbar deke nei.se deke nei kothi kothi var declairation ace.
se asole protheme hoist kore var declairation golo upore niye jai

javascript যেভাবে think kore
var x;
x=undefine; // js x e undefine assign kore;
x = 5;
console.log(x); // 5
*/

//* let
// m = 6; // assign
//  // Uncaught ReferenceError: Cannot access 'm' before initialization
// console.log(m);
// let m; // declare

// javascript যেভাবে think kore
// let m;
// m = undefine; // eta korbe na let e
/* 
se prothome programme ta akbar deke nei.se deke nei kothi kothi var declairation ace.
se asole protheme hoist kore var declairation golo upore niye jai
let এর জন্যে x e undefine assign kore na;
১ মে let m decliare kore .
secondly m = undefine assian kore (var er ketre)
secondly m = let undefine assian korte pare na
var m = undefine ;javascript automaticly assain kore memory te জায়গা করে নেয় । 
let m = undefine ;javascript automaticly assain kore na.tai reference error dekai hoisting er সময় । 

*/

/* 
m = 6;
console.log(m); // Cannot access 'm' before initialization
let m; 
*/

//* const

// m = 12;
// console.log(m);
// const m;
// Uncaught SyntaxError: Missing initializer in const declaration

/* 
ei error ta dekabe
const m;
m=12;
evabe likle o syntext error dekabe const er jonne;
*/

// ! JavaScript Initializations are Not Hoisted
//JavaScript শুধুমাত্র declarations Hoist করে / উপরে নিয়ে যায় না, initialize করে না

// example 1
var p = 6; // Initialize p
var q = 7; // Initialize q
console.log(`${p + q}`); // 13

// example 2
var u = 6; // Initialize u
// console.log(`${u + v}`); Uncaught ReferenceError: v is not defined
var v = 7; // Initialize v


// only declaration part টা hoist করে উপরে যাবে। inisilization টা উপরে যাবে না


// ! Declare Your Variables At the Top !
/* 
declairation golo upore likbe .etai better.
*/