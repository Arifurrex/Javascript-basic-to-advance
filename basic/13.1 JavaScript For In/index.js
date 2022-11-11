//! The For In Loop
// for in loop in over array

//*The JavaScript for in statement loops through the properties of an Object:
// for in loop object এর জন্য

/* for (key in object) {
    code block to be executed
} */


const person = { name: "arifur", lname:"rahman", age:"32" }

for (let x in person) {
    console.log(x);
    console.log(person[x]);/* arifur
                            rahman
                            32 */
}

//*Example Explained
/* 
 The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]
*/


//!For In Over Arrays
/* for (variable in array) {
  code
} */

const numbers = [45, 4, 9, 16, 25];
for (let x in numbers) {
    console.log(numbers[x]); // 45  4  9  16  25
}
//*Do not use for in over an Array if the index order is important.
//*It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
//for in array te use korbe na.


//* Array.forEach()
const numberss = [45, 4, 9, 16, 25];
numberss.forEach(myfunction);

function myfunction(value,index,array) {
    console.log(value);// 45  4  9  16  25
}