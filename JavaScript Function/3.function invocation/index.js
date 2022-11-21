// The code inside a JavaScript function will execute when "something" invokes it.

// ! Invoking a JavaScript Function
/* 
The code inside a function is not executed when the function is defined.
The code inside a function is executed when the function is invoked.
It is common to use the term "call a function" instead of "invoke a function".
It is also common to say "call upon a function", "start a function", or "execute a function".
In this tutorial, we will use invoke, because a JavaScript function can be invoked without being called

*/

// *The code inside a function is not executed when the function is defined.
function myFunction0(a, b) {
    return a * b;
}


//* The code inside a function is executed when the function is invoked.
function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2); 

// invoke a function না বলে আমরা "call a function" , "call upon a function", "start a function", or "execute a function". বলে থাকি
// In this tutorial, we will use invoke, because a JavaScript function can be invoked without being called.


// ! Invoking a Function as a Function
function myFunction1(a, b) {
    return a * b;
}
console.log(myFunction1(10, 2)); // 20
// console.log(window.myFunction1(10, 2)); // 20

// myFunction() and window.myFunction() is the same function:

/* 
This is a common way to invoke a JavaScript function, but not a very good practice.
Global variables, methods, or functions can easily create name conflicts and bugs in the global object.
*/


// ! What is this?
/* 
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:
*/

/* 


In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/

function a() {
    console.log(this);
}
a();
/* 
Window {window: Window,
     self: Window, 
     document: document,
      name: '', 
      location: Location, …}
*/


// object
const y = {
    a: function () {
        console.log(this); //{a: ƒ}
    }
}
y.a();

//! The Global Object
/* When a function is called without an owner object, the value of this becomes the global object.

In a web browser the global object is the browser window.

This example returns the window object as the value of this: */
let x = myFunction5();            // x will be the window object

function myFunction5() {
    return this;
}

// ! Invoking a Function as a Method
/* 
In JavaScript you can define functions as object methods.

The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):
*/
const myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName();         // Will return "John Doe"

/* 
The fullName method is a function. The function belongs to the object. myObject is the owner of the function.

The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject.

Test it! Change the fullName method to return the value of this:
*/
const myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this;
    }
}

// This will return [object Object] (the owner object)
myObject.fullName();



// ! Invoking a Function with a Function Constructor
/* 
If a function invocation is preceded with the new keyword, it is a constructor invocation.
It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:

*/

// This is a function constructor:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}

// This creates a new object
const myObj = new myFunction("John", "Doe");

// This will return "John"
console.log(myObj.firstName);

// A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.
/* 
The this keyword in the constructor does not have a value.
The value of this will be the new object created when the function is invoked.
*/