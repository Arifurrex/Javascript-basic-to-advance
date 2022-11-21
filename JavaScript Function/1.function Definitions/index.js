// ! JavaScript Function Definitions
/* 
JavaScript functions are defined with the function keyword.
You can use a function declaration or a function expression.
*/

// !Function Declarations
function functionName(parameters) {
    // code to be executed
}

/* 
Declared functions are not executed immediately. 
They are "saved for later use", and will be executed later, 
when they are invoked (called upon).
*/
function myFunction(a, b) {
    return a * b;
}

/* 
Semicolons are used to separate executable JavaScript statements.
Since a function declaration is not an executable statement, it is not common to end it with a semicolon.
*/

// ! Function Expressions
/* 
A JavaScript function can also be defined using an expression.
A function expression can be stored in a variable:
*/
const x = function (a, b) { return a * b };

// After a function expression has been stored in a variable, the variable can be used as a function:
const m = function (a, b) { return a * b };
let z = m(4, 3);
console.log(z); // 12
/* 
যে function এর name নাই তাকে anonymous function বলে 
The function above is actually an anonymous function (a function without a name).
Functions stored in variables do not need function names. They are always invoked(called) using the variable name.
 */


/* এখানে কিন্ত ; সেমিকলনে হবে কারণ এটা part of an executable statement
let z = m(4, 3); এখানে z কিন্তু name না । এটা variable এর ভেতর store করে রেখেছি  
The function above ends with a semicolon because it is a part of an executable statement.
 */


//  ! The Function() Constructor
/* 
As you have seen in the previous examples, JavaScript functions are defined with the function keyword.
Functions can also be defined with a built-in JavaScript function constructor called Function().
*/


// function a(){} এটা হল function এর literal syntex 
// আপনি চাইলে ফাংশন এর একটি constructor বানাতে পারেন 

const myFunc = new Function("a", "b", "return a * b");
let p = myFunc(4, 3);
console.log(p); // 12

// *You actually don't have to use the function constructor. The example above is the same as writing:

// Most of the time, you can avoid using the new keyword in JavaScript.

//* new keyword ta object r class chara kotao amra use korbo na


// !Function Hoisting
/* 
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
Hoisting applies to variable declarations and to function declarations.
Because of this, JavaScript functions can be called before they are declared: 
*/

/* 
javascript variable declare and function hoisting হয়ে উপরের দিকে চলে যায়
তাই javascript এর function call declaration এর আগে করা হলেও function invocation, function declaretaion 
এর নিচে হয়ে থাকে 

*/

console.log(myFunct(5));

function myFunct(y) {
    return y * y;
}

// *Functions defined using an expression are not hoisted.
// console.log(myFunction2(2, 5));
 // Uncaught ReferenceError: Cannot access 'myFunction2' before initialization

const myFunction2 = function (a, b) { return a * b };
// eta hoisting hobe na karon eta variable

console.log(myFunction2(2, 5));  // 10
/*   function যখন variable এ রাখবো তখন variable রাখা function defination টা 
hoistion হবে না  */


// ! Self-Invoking Functions
/* 
Function expressions can be made "self-invoking".

A self-invoking expression is invoked (started) automatically, without being called.
Function expressions will execute automatically if the expression is followed by ().
You cannot self-invoke a function declaration.
You have to add parentheses around the function to indicate that it is a function expression:
*/

// normal নিয়মে function call না করলে কাজ করে না 
function a() {
    console.log('hello');
}
a();

// self invoking
//normal নিয়মে আমরা fuction name দেয় কারণ আমরা এই নামে function কে কল দিতে পরি 
// self invocation এর সময় ফাংশন এর name দিতে হবে না । কারণ ফাংশন টা নিজেই নিজেকে call দিবে 
(function () {
    console.log('hello'); //hello
})()

/* 
rules:
১/ function er নাম দেব না।
২/ ফাংশন কে() paranthasis এর ভেতরে রাখবো 
৩/ যেহেতু function ফাংশন এর name নাই তাই শুদুমাত্র ()parantasis এর মদ্যমে কল দিব 

*/

/*  
The function above is actually an anonymous self-invoking function (function without name).
 এটাকে  IIFE = immediately invoke function expression 
 */


// !Functions Can Be Used as Values
// JavaScript functions can be used as values:

function myFunction3(a, b) {
    return a * b;
}

let x1 = myFunction3(4, 3);
console.log(x1); // 12


//* JavaScript functions can be used in expressions:

function myFunction4(a, b) {
    return a * b;
}

let x4 = myFunction(4, 3) * 2;
console.log(x4); //24

// ! Functions are Objects
/*
The typeof operator in JavaScript returns "function" for functions.
But, JavaScript functions can best be described as objects.
JavaScript functions have both properties and methods.
The arguments.length property returns the number of arguments received when the function was invoked: */

function myFunction5(a, b) {
    return a * b;
}

let x5 = myFunction(4, 3);
console.log(x5); //24
console.dir(x5);
console.dir(myFunction);
/* 
ƒ myFunction(a, b)
arguments: null
caller: null
length: 2
name:"myFunction"
prototype: {constructor: ƒ}
[[FunctionLocation]]:index.js:17
[[Prototype]]: ƒ ()
[[Scopes]]: Scopes[2]
*/

// * The toString() method returns the function as a string
function myFunction6(a, b) {
    return a * b;
}

let x6 = myFunction(4, 3) * 2;
console.log(x6); //24
console.log(x6.toString());

let x7 = myFunction(4, 3).toString();
console.log(x7);


/* 
A function defined as the property of an object, is called a method to the object.
A function designed to create new objects, is called an object constructor.
*/


// ! Arrow Functions
/* 
Arrow functions allows a short syntax for writing function expressions.
You don't need the function keyword, the return keyword, and the curly brackets.
 */

//* ES5
var x8 = function (x, y) {
    return x * y;
}
console.log(x8(2,5)); //10


//* ES6
const x9 = (x, y) => x * y;
console.log(x9(9, 8)); // 72

/* 

Arrow functions do not have their own this. They are not well suited for defining object methods.
Arrow functions are not hoisted. They must be defined before they are used.
Using const is safer than using var, because a function expression is always constant value.
You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:
*/

const x0 = (x, y) => { return x * y };
console.log(x0(2,7)); // 14















