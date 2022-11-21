// !Global Variables
// A function can access all variables defined inside the function, like this:
function myFunction() {
    let a = 4;
    return a * a;
}
console.log(myFunction()); //16

// But a function can also access variables defined outside the function, like this:

let a = 4;
function myFunction1() {
    return a * a;
}

console.log(myFunction1()); // 16


// ! A Counter Dilemma
let counter = 0;
function add() {
    counter += 1;
    return counter;
}
console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3
console.log(counter); // 3


// There is a problem with the solution above: Any code on the page can change the counter, without calling add().
//The counter should be local to the add() function, to prevent other code from changing it:
// let Counter = 0;
function Aadd() {
    let Counter = 0;
    Counter += 1;
    console.log(Counter);
    return Counter;
}
console.log(Aadd()); // 1
console.log(Aadd()); // 1
console.log(Aadd()); // 1
// console.log(Counter); // 0

///The counter should now be 3. But it is 0

/* 
It did not work because we display the global counter instead of the local counter.
We can remove the global counter and access the local counter by letting the function return it:
*/
function Add() {
    let counter3 = 0;
    counter3 += 1;
    console.log(counter3);
    return counter3;
}
console.log(Add()); // 1
console.log(Add()); // 1
console.log(Add()); // 1


// ! JavaScript Nested Functions

function add3() {
    let counter = 0;
    function plus () {
        counter += 1;
    }
    plus();
    plus();
    plus();
    return counter;
}
console.log(add3()); // 3
// This could have solved the counter dilemma, if we could reach the plus() function from the outside.

// We also need to find a way to execute counter = 0 only once.
// !We need a closure.

//! JavaScript Closures
// Remember self - invoking functions ? What does this function do?

const addition = (function () {
    let counter = 0;
    return function() {
        counter += 1;
        return counter;
    }
})();  
console.log(addition()); //1
console.log(addition()); //2
console.log(addition()); //3


// ! JavaScript Closures
/* 
In this tutorial, you will learn about JavaScript closures with the help of examples.

Before you learn about closures, you need to understand two concepts:

Nested Function
Returning a function
*/

// ! JavaScript Nested Function
// In JavaScript, a function can also contain another function. This is called a nested function. For example,


// nested function example

// outer function
function greet(name) {

    // inner function
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // calling inner function
    displayName();
}

// calling outer function
greet('John'); // Hi John


    
let name = 'John';

function greeting() {
    let message = 'Hi';
    console.log(message + ' ' + name);
}
// console.log(massage);
greeting();

let name1 = 'John';

function greeting1() {
    let message = 'Hi';
    
    function sayHi() {
        console.log(message);
    }
    sayHi();
}
// console.log(massage);
greeting1();

// ! JavaScript closures
function greeting2 () {
    let message = "hi";
    function sayHi () {
        console.log(message);
    }
    return sayHi;
}
// greeting2(); kaj kore na
let hi = greeting2();
hi(); // message varible a access korte pacci

// javascript clouser more 
function greeting3 (message) {
    return function (name) {
        return message + ' ' + name
    }
}
// console.log(greeting3('hemml')); 

let sayHi = greeting3('hi');
let sayHello = greeting3('hello');

console.log(sayHi('arif')); // hi arif
console.log(sayHi('alim')); // hi alim
console.log(sayHello('alim')); //hello alim


//! another example lexical scope
function makeFunc () {
    const name = 'mozilla';
    function displayName () {
        console.log(name); // mozilla
    }
    displayName();
}
makeFunc();

//! another example of closour
function makeFunc1() {
    const name = 'mozilla';
    function displayName() {
        console.log(name); // mozilla
    }
     return displayName;
}
const myFunc = makeFunc1();
myFunc();
console.log(myFunc());

//! slightly interesting way clouser
function makeAdder (x) {
    return function (y) {
        return x + y;
    };
}
const add5 = makeAdder(5);
const add15 = makeAdder(15);
console.log(add5(2)); // 7
console.log(add15(5)); // 20


// more example in clouser
function Banking(x) {
    return function(y) {
        return x + y;
    }

}
let p = Banking(220);
console.log(p(10));

//! nested function 
//outer function
function greet(name) {
    
    //inner function 
    function displayName () {
        console.log('hi' + ' ' + name);
    }
    // call inner function 
    displayName();
}
greet('arifur');

//! Returning a Function

function greet(name) {
    function displayName() {
        console.log('hi' + ' ' + name);
    }
    return displayName;
}
let n = greet('arifur');
console.log(n());





