//! JavaScript Function Parameters
// A JavaScript function does not perform any checking on parameter values (arguments).
/* 
javascript এর parameter value  কে  javaScript function নিজে থেকে কোন 
check করে না 

*/

//! Function Parameters and Arguments

function functionName(parameter1, parameter2, parameter3) {
    // code to be executed
}

/* 
Function parameters are the names listed in the function definition.
Function arguments are the real values passed to (and received by) the function.
*/

// !argument
sleep('jasim', 11) //funtion call er value golo holo argument

//!perameter
function sleep(a, b) { //funtion create er referance holo perameter
    console.log(a + " and" + b);
}

//! Parameter Rules
/* 
JavaScript function definitions do not specify data types for parameters.
JavaScript functions do not perform type checking on the passed arguments.
JavaScript functions do not check the number of arguments received.
*/

//* any data types for parameters


function sleep0(a, b) { 
    console.log(a + " and" + b); // jasim and11
}

sleep0('jasim', 11) // any datatype can send in argument. ekane string and number



// *JavaScript functions do not perform type checking on the passed arguments
function sleep1(a, b) { // a and b ki hobe ta check kora hobe na .
    console.log(a + " and" + b); // jasim and11
}

sleep1('jasim', 11); // any datatype can send in argument


// * JavaScript functions do not check the number of arguments received.

// onekgolo argument recive korte pare 
function sleep2(a, b,c,d,f) { // onekgolo argument recive korte pare .
    console.log(a + " and" + b);  //jasim and11
}

sleep2('jasim', 11); // any datatype can send in argument



// onekgolo argument patate parbo
function sleep3(a, b) { 
    console.log(a + " and" + b); // jasim and 11
}

sleep3('jasim', 11, 56, 'korim'); // onekgolo argument patate parbo .

// !Default Parameters
/* 
If a function is called with missing arguments(less than declared), the missing values are set to undefined.
Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:
 */

function myFunction(x, y) {
    if (y === undefined) {
        y = 2;  // default parameter
    }
    return x * y;
}
console.log(myFunction(8)); //16


// ! Default Parameter Values
// ES6 allows function parameters to have default values.


function p(x, y) {
    return x * y;
}
console.log(p(3)); //NaN

/* 
apni x er value argument a 3 patalen এবং y er value dilen na argument e.
sekane return NaN dekacce
*/

// If y is not passed or undefined, then y = 5
function p1(x, y = 5) {
    return x * y;
}
console.log(p1(3)); //15
/* 
apni x er value argument a 3 patalen এবং y er value dilen na argument e.
y er default value amra function define er parameter a assaign korte pari y = 5
*/


// default value ignore korbe jodi argument e value den
function p1(x, y = 5) {
    return x * y;
}
console.log(p1(3,7)); //21
/* 
remember: parameter a argument check kore na y == 5 hobe na 

function p2(x, y == 5 ) {
    return x * y;
}
console.log(p2(3)); 

*/




// ! Function Rest Parameter
// The rest parameter(...) allows a function to treat an indefinite number of arguments as an array:


// !The Arguments Object
/* 
JavaScript functions have a built -in object called the arguments object.
The argument object contains an array of the arguments used when the function was called(invoked).
This way you can simply use a function to find(for instance) the highest value in a list of numbers:
 
*/

// * javascript er একটি build -in object ace তার নাম হল arguments object 
function ar(x,y) {
    console.log(arguments); // Arguments(2) [3, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
console.log(ar(3,6));
/* 

Arguments(2) [3, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ]
0: 3
1: 6
callee: ƒ ar(x,y)
length: 2
Symbol(Symbol.iterator): ƒ values()
[[Prototype]]: Object

*/

// * array of the arguments 
/*
 Arguments(2)[3, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ]
0:3
1:6

 */







