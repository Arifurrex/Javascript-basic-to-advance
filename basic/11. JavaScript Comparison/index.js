// !JavaScript Comparison and Logical Operators
/* 
logical,conditional operation ,comparing type 
*/

//! Comparison Operators
var x = 5;
console.log(x == 8); //false
console.log(x == 5); //true
console.log(x == "5"); //true

console.log(x === 5); //true
console.log(x === "5"); //false

console.log(x != 8); //true

console.log(x !== 5); //false

console.log(x !== 5); //false
console.log(x !== "5"); //true
console.log(x !== 8); //true

console.log(x > 8); //false
console.log(x < 8); //true

console.log(x >= 8); //false

console.log(x <= 8); //true


//! Logical Operators
/* && and   || or     ! not  */

// !Conditional (Ternary) Operator
//  variablename = (condition) ? value1:value2
let age = 18;
let voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable); //Old enough

// another ternary example 
console.log((age > 19) ? (age < 21) ? "you can marry " : "you are kid" : "you are too young");




age = Number(age);
if (isNaN(age)) {
    voteable = "Input is not a number";
    console.log(voteable);
} else {
    voteable = (age < 18) ? "Too young" : "Old enough";
    console.log(voteable); // Old enough
}

