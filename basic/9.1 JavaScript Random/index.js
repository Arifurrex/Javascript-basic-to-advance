//! JavaScript Random

//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
console.log(Math.random()); //0.2891823607247923

//Math.random() always returns a number lower than 1.

//! JavaScript Random Integers


console.log(Math.floor(Math.random())); //0
console.log(Math.floor(Math.random() * 10)); // 7 /9/5/2


// ! A Proper Random Function
/* 
As you can see from the examples above, it might be a good idea to create a proper random function to use for all random integer purposes.

This JavaScript function always returns a random number between min (included) and max (excluded):
*/

/* function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
} */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRndInteger(1, 10)); // 1 থেকে ৯  পর্যন্ত random number generate করবে


// * This JavaScript function always returns a random number between min and max (both included):
function getRndInteger2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRndInteger2(1, 10));  // 1 থেকে 10  পর্যন্ত random number generate করবে