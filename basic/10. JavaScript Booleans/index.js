// ! JavaScript Booleans
// * A JavaScript Boolean represents one of two values: true or false.

//! Boolean Values
/* 
YES / NO
ON / OFF
TRUE / FALSE
*/

//! The Boolean() Function

console.log(Boolean(10 > 9)); //true

// * Or even easier:

console.log((10 > 9)); //true
console.log(10 > 9); //true

// ! Comparisons and Conditions

//! Everything With a "Value" is True

//! Everything Without a "Value" is False

//* The Boolean value of 0 (zero) is false:
let x = 0;
console.log(Boolean(x)); // false 
console.log(x); // 0

//* The Boolean value of -0 (minus zero) is false:
let y = -0;
console.log(Boolean(y)); // false

//* The Boolean value of "" (empty string) is false:
let z = "";
console.log(Boolean(z)); // false

//* The Boolean value of undefined is false:
let a;
console.log(Boolean(a)); // false

//* The Boolean value of null is false:
let b = null;
console.log(Boolean(b)); // false

//* The Boolean value of NaN is false:
let c = 10 / "Hallo";
console.log(Boolean(c)); // false


// ! JavaScript Booleans as Objects
