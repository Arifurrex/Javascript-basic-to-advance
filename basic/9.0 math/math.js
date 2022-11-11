/* 
Math.round(),Math.ceil(),Math.floor(),Math.trunc()
Math.sign(),Math.pow(),Math.sqrt(),Math.abs(),
Math.sin(),Math.cos(),Math.min() and Math.max(),
Math.random()

*/

//! JavaScript Math Object

// * The JavaScript Math object allows you to perform mathematical tasks on numbers.

console.log(Math.PI); //3.141592653589793

//! Math Methods
// *The syntax for Math any methods is : Math.method(number)

// !Number to Integer
/* 
Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
*/

//! Math.round()
//* Math.round(x) returns the nearest integer:
// ৪.৫ বা ৪.৯ হলে ৫ করে দিবে আর ৪.১ বা ৪.৪ হলে ৪ হবে 

console.log(Math.round(4.6));// 5
console.log(Math.round(4.5)); //5
console.log(Math.round(4.4)); //4


//! Math.ceil()
//* Math.ceil(x) returns the value of x rounded up to its nearest integer:
// উপরের দিকের পর্ণ সঙ্কা বের করতে পারে
/*  
round() আর ceil() এর মদ্যে ডিফারেন্ট হল ceil এ যায় থাকক না কেন 
৪ পয়েন্ট এর পরে somethin থাকলে থা ৫ হবে  
*/
  
console.log(Math.ceil(4.9)); //5
console.log(Math.ceil(4.7)); //5
console.log(Math.ceil(4.4)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.ceil(-4.2)); //-4

//! Math.floor()
//Math.floor(x) returns the value of x rounded down to its nearest integer:
// নিচের দিকে পূর্ণ সঙ্কা বের করতে পারে

console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.4)); // 4
console.log(Math.floor(4.2)); // 4
console.log(Math.floor(-4.2)); // -5


// ! Math.trunc()
// Math.trunc(x) returns the integer part of x:
// Math.trunc(x) মানে হলো point এর পরে ফেলে দিবে 

console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(4.7)); // 4
console.log(Math.trunc(4.4)); // 4
console.log(Math.trunc(4.2)); // 4
console.log(Math.trunc(-4.2)); //-4

// ! Math.sign()

console.log(Math.sign(-4)); //-1
console.log(Math.sign(0)); // 0
console.log(Math.sign(4)); // 1

// ! Math.pow()
//Math.pow(x, y) returns the value of x to the power of y:
// Math.pow(x, y) এর মদ্যমে x to the power y এর মান বের করে

console.log(Math.pow(8, 2)); // 64


// ! Math.sqrt()
// Math.sqrt(x) returns the square root of x:

console.log(Math.sqrt(64)); // 8


// ! Math.abs()
// Math.abs(x) returns the absolute (positive) value of x:

console.log(Math.abs(4.7)); //4.7


// ! Math.sin()
console.log(Math.sin(90)); // 0.8939966636005579


// ! Math.cos()
console.log(Math.cos(90)); // -0.4480736161291702

// ! Math.min() and Math.max()
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

// ! Math.random()
console.log(Math.random());
