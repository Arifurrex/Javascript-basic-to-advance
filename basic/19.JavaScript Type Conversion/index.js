//! JavaScript Type Conversion
/* 
Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans
*/

//!JavaScript Type Conversion
/* আমরা চাইলে ১টা datatype থেকে অন্য data type এ convert হতে পরি 
  ১. JavaScript function use করে 
  2.Automatically by JavaScript itself
 */

 //! Converting Strings to Numbers
 /*
 The global method Number() converts a variable (or a value) into a number.
 A numeric string (like "3.14") converts to a number (like 3.14).
 An empty string (like "") converts to 0.
 A non numeric string (like "John") converts to NaN (Not a Number)
 */

console.log(Number('3.2')); // 3.2
console.log(Number(" ")); // 0
console.log(Number("")); // 0

// * These will not convert:
console.log(Number('11 18')); // NaN
console.log(Number("jhon")); // NaN

// ! Number Methods
/* 

Method	          Description
Number()	      Returns a number, converted from its argument
parseFloat()	 Parses a string and returns a floating point number
parseInt()	     Parses a string and returns an integer
*/


//! The Unary + Operator

//! Converting Numbers to Strings
//The global method String() can convert numbers to strings.
let x = 2;
console.log(String(x)); //2
console.log(String(123)); //123
console.log(String(120-23)); //97

//*The Number method toString() does the same.
console.log(x.toString()); // 2
console.log((123).toString()); // 123
console.log((99 + 1).toString()); // 100

//! More Methods
/* 
Method	             Description
toExponential()	     Returns a string, with a number rounded and written using exponential notation.
toFixed()	         Returns a string, with a number rounded and written with a specified number of decimals.
toPrecision()	     Returns a string, with a number written with a specified length
 
*/


//! Converting Dates to Numbers
//The global method Number() can be used to convert dates to numbers.
const d = new Date();
console.log(Number(d)); // 1666373677315

//! Converting Dates to Strings
const dat = new Date();
console.log(String(dat)); //Fri Oct 21 2022 23:35:53 GMT+0600 (Bangladesh Standard Time)

//* The Date method toString() does the same.
console.log(dat.toString()); // Fri Oct 21 2022 23:36:28 GMT+0600 (Bangladesh Standard Time)

//! Converting Booleans to Numbers
console.log(Number(true)); // 1
console.log(Number(false)); // 2

//! Converting Booleans to Strings
console.log(String(true)); //true 
console.log(String(false)); //false

//* The Boolean method toString() does the same.
console.log(true.toString()); //true 
console.log(false.toString()); //false


//!Automatic Type Conversion
console.log(5 + null); // 5
console.log("6" + null); // 6null
console.log("3" + 4); // 34
console.log("7" - 4); // 3
console.log("7" * 4); //28
console.log("7" * "4"); // 28


//! Automatic String Conversion














