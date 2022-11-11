// ! JavaScript Arrow Function
/* Arrow functions were introduced in ES6.
Arrow functions allow us to write shorter function syntax: */

let myFunction = (a, b) => a * b;

//! normal function / Before Arrow
hello = function () {
    return "hello world";
}

console.log(hello()); // helo world

//! with Arrow Function 
hello = () => {
    return "hello bangladesh";
}

console.log(hello()); // helo bangladesh

//! remove the brackets and the return keyword
/* 
It gets shorter! If the function has only one statement, and the statement returns a value, 
you can remove the brackets and the return keyword:
*/
hello = () => "hello sylhet";
console.log(hello()); // hello sylhet

// Note: This works only if the function has only one statement.


// ! Arrow Function With Parameters:

hello = (val) => {
    return val;
}
console.log(hello(5)); // 5


// * without bracket and return
hello = (val) => val;
console.log(hello(5)); // 5


//! Arrow Function Without Parentheses:
// In fact, if you have only one parameter, you can skip the parentheses as well:
hello = val => val;
console.log(hello(7)); // 7


// ! What About this?
/* 
The handling of this is also different in arrow functions compared to regular functions.
In short, with arrow functions there are no binding of this.
In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
With arrow functions the this keyword always represents the object that defined the arrow function.
Let us take a look at two examples to understand the difference.
Both examples call a method twice, first when the page loads, and once again when the user clicks a button.
The first example uses a regular function, and the second example uses an arrow function.
The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.
*/

//! Regular Function:
hello = function () {
    document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);



// Example
// With an arrow function this represents the owner of the function:

//! Arrow Function:
    hello = () => {
        document.getElementById("demo").innerHTML += this;
    }

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);



/* 
Remember these differences when you are working with functions. Sometimes the behavior of regular functions is what you want,
 if not, use arrow functions.
*/

