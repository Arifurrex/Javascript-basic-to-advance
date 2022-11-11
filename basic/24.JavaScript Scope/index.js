//! JavaScript Scope

/*
scope হল accessibility (visibility) of variables

JavaScript ৩ types এর scope আছে :
Block scope
Function scope
Global scope

*/

// !block scoop
/*  
২০১৫ সালের আগে javaScript এর Global Scope আর Function Scope ছিল । 
ES6 ২ টা নুতন keyword introduce করে : let ও const 
let ও const এই দুটি কীওয়ার্ড জাভাস্ক্রিপ্টে block scope প্রদান করে । 
Variables declared inside a { } block cannot be accessed from outside the block:
যখন Variables declared {} block এর ভেতরের করা হয় । তখন outside {}ব্লক  থেকে ঐ variable access করা যাবে না । 
*/

{ let x = 5 };
// console.log(x);
//Uncaught ReferenceError: x is not defined
//{} scoop er betore varible declare korle outside theke tar value pawa jai na


//* var keyword can NOT have block scope
//*var কীওয়ার্ডের ব্লক স্কোপ থাকতে পারে না
{
    var i = 2;
}
console.log(i); // 2
//Variables declared inside a { } block can be accessed from outside the block.

//!Local Scope
// Variables declared within a JavaScript function, become LOCAL to the function.
// যখন variable javascript function এর ভেতরে declare করা হয় । তখন তা ফাংশনে স্থানীয় হয়ে উঠে ।

// code here can NOT use carName
// console.log(carName); //Uncaught ReferenceError: carName is not defined 

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
    console.log(carName); // Volvo
}
myFunction();

// code here can NOT use carName
// console.log(carName); // Uncaught ReferenceError: carName is not defined

/* 
স্থানীয় ভেরিয়েবলের ফাংশন স্কোপ আছে:
তারা শুধুমাত্র ফাংশন মধ্যে থেকে অ্যাক্সেস করা যেতে পারে.
*/

// *(Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.)
// বিভিন্ন function এ একই নামের variable use করতে পারবেন 
function myFunction() {
    let x = 24
    console.log(x); //24
}
function myFunction2() {
    let x =24;
    console.log(x); //24
}
myFunction();
myFunction2();
//Local variables are created when a function starts, and deleted when the function is completed.

//! Function Scope
/* 
JavaScript has function scope: Each function creates a new scope.
Variables defined inside a function are not accessible (visible) from outside the function.
Variables declared with var, let and const are quite similar when declared inside a function.
 */

//*var
function myFunction0() {
    var carName = "Volvo";   // Function Scope
}

//*let 
function myFunction9() {
    let carName = "Volvo";   // Function Scope
}

//* const
function myFunction8() {
    const carName = "Volvo";   // Function Scope
}

//Variables defined inside a function are not accessible (visible) from outside the function.




//!Global JavaScript Variables
//A variable declared outside a function, becomes GLOBAL.
// function এর বাহিরের variable ভেতরে access করতে পারে ,become global

let carName = "Volvo";
// code here can use carName

function myFunction7() {
    // code here can also use carName
    console.log(carName); //Volvo
}
myFunction7()

/* 
A global variable has Global Scope:
All scripts and functions on a web page can access it.
*/



// ! Global Scope
/* 
Variables declared Globally (outside any function) have Global Scope.
Global variables can be accessed from anywhere in a JavaScript program.
Variables declared with var, let and const are quite similar when declared outside a block.
*/

var e = 2; // Global scope

let f = 2; // Global scope

let g = 2; // Global scope


//! JavaScript Variables
//In JavaScript, objects and functions are also variables.
//* Scope determines the accessibility of variables, objects, and functions from different parts of the code.


//! Automatically Global
/* 
If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
This code example will declare a global variable carName, even if the value is assigned inside a function.
*/

myFunction44();

// code here can use carName
console.log(carName); // Volvo44

function myFunction44() {
    carName = "Volvo44"; // এখানে carName  declared করা হয় নয় । let/var/const
}


//!  The Lifetime of JavaScript Variables
/* 
The lifetime of a JavaScript variable starts when it is declared.
Function (local) variables are deleted when the function is completed.
In a web browser, global variables are deleted when you close the browser window (or tab).
*/

// !Function Arguments
// Function arguments (parameters) work as local variables inside functions.