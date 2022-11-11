//! JavaScript typeof

// * javascript a ৫ ধরনের data type আছে যা value contain করতে পারে
/* 
string
number
boolean
object
function
*/

// * there are 6 type of object
/* 
Object
Date
Array
String
Number
Boolean
*/

// *  ধরনের data type আছে যা value contain করতে পারে
/* 
null
undefined
 */

// ! The typeof Operator
// typeof holo operator
// typeof operaretor er maddome data টা কি type এর তা বের করতে পারে

console.log(typeof "jhon"); // string
console.log(typeof 12); //Number
console.log(typeof NaN); // number
console.log(typeof true); // boolean
console.log(typeof ['a','b','c',2]); // object
console.log(typeof {name:'arifur',lname:'rahman'}); // object
console.log(typeof new Date()); // object 
console.log(typeof function(){}); // function 
console.log(typeof cars); // undefine
console.log(typeof null); // object


//! Primitiveআদিম  Data
// primitive data holo jegolor single data value thake.kono property o method takbe name
/* 
string
number
boolean
undefined
*/

//! Complex Data
/* 
function
object 
*/

//The typeof operator returns "object" for objects, arrays, and null.
//The typeof operator does not return "object" for functions.

/* function এর জন্যে typeof function return করবে function .
karon javascript function কে function data type হিসাবে count করে 

array এর জন্যে typeof array return করবে object.
karon javascript array  কে object  data type হিসাবে count করে 
*/


// ! The Data Type of typeof

console.log(typeof { fname: 'arifur', lname: 'rahman' }); // object

// typeof এর মদ্যে typeof দিলে কি হয় : object কে ও string দেখাবে কারণ object word টা হল string 
console.log(typeof typeof { fname: 'arifur', lname: 'rahman' }); // string



// ! constructor কেন দরকার 

var student1 = {
    name: "arifur",
    age: 30,
    lang: ["bangali", "english", "hindi"],
}
var student2 = {
    name: "shahin",
    age: 30,
    lang: ["bangali", "malaya", "hindi"],
}
var student3 = {
    name: "rahim",
    age: 29,
    lang: ["bangali", "hibro", "hindi"],
}
/*  student এর details এভাবে single object এর মদ্যমে লিখলে অনেক বড় হয়ে যাবে 
এই problem এর solution হল constructor 
*/

//! constructor
 /* constructor দিয়ে আমরা একটা template create করব। 
 আর এই template দিয়ে আমরা multiple object create করতে পারব । 
  */
function Student(name, age, lang) {
    this.name = name; 
    this.age = age;
    this.lang = lang;
}

var student1 = new Student('arifur', 31, ['bangla','english']);
console.log(student1); // student {name: 'arifur', age: 31, lang: Array(2)}
console.log(typeof student1); // object

// another
var student1 = new Student('shahin', 31, ['bangla', 'malaya']);
console.log(student1); // student {name: 'shahin', age: 31, lang: Array(2)}
console.log(typeof student1); // object

/* constructor হল যে function টা কোন  একটা  জিনিস create করে তাকে constructor বলে ।  
কোন function কে বড় হাতের লিখলে তা constructor function । যেমন 
function String();
function Student();
*/

//!The constructor Property
//The constructor property returns করে constructor function সব JavaScript variables এর জন্যে .

console.log("jhon".constructor); // ƒ String() { [native code] }
console.log((9).constructor);  // ƒ Number() { [native code] }
console.log(false.constructor); // ƒ Boolean() { [native code] }
console.log([1, 2, 4].constructor); // ƒ Array() { [native code] }
console.log({ fname: "arifur", lname: "rahman" }.constructor); // ƒ Object() { [native code] }
console.log(new Date().constructor); // ƒ Date() { [native code] }
console.log(function () { }.constructor); //ƒ Function() { [native code] }

//! Undefined
let car;    // Value is undefined, type is undefined

// *Any variable can be emptied, by setting the value to undefined. The type will also be undefined.
car = undefined;    // Value is undefined, type is undefined

/* ধর car এর মদ্যে বড় কোন অবজেক্ট আছে । 
এখন you want empty the car variable.
than just assain undefine in car.
তাহলে car এর মদ্যে ja আছে চলে যাবে আর undefine দেখাবে 
 */

//! Empty Values
/* 
undefine আর empty value '' এক না 
*/
let i = '';
console.log(i); // কিছুই show করে না // The value is "", the typeof is "string"

//! Null
/* 
In JavaScript null is "nothing". It is supposed to be something that doesn't exist.

Unfortunately, in JavaScript, the data type of null is an object.
*/
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null;    // Now value is null, but type is still an object

//! Difference Between Undefined and Null
//undefined and null are equal in value but different in type:

console.log(typeof undefine); // undefine
console.log(typeof null); // object

console.log(null === undefined); // false
console.log(null == undefined); // true