// !!Array
//* array  হল speicial variable যেটা ধরে রাকতে পারে more than one variable

const cars = ["Saab", "Volvo", "BMW"];

// !! কেন Array দরকার
/* 
If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
 */

// !It is a common practice to declare arrays with the const keyword.

const cars1 = ["Saab", "Volvo", "BMW"];

const cars2 = [
    "Saab",
    "Volvo",
    "BMW"
];

const cars3 = [];
cars3[0] = "Saab";
cars3[1] = "Volvo";
cars3[2] = "BMW";

// !! Using the JavaScript Keyword new

const cars4 = new Array("Saab", "Volvo", "BMW");
/* The two examples above do exactly the same.

There is no need to use new Array().

For simplicity, readability and execution speed, use the array literal method */


//  ! Accessing Array Elements
const cars5 = ["Saab", "Volvo", "BMW"];
let car = cars5[0];
console.log(car); //saab

/* Note: Array indexes start with 0.

[0] is the first element. [1] is the second element. */

// !Changing an Array Element

cars5[0] = "Opel";
console.log(cars5); //['Opel', 'Volvo', 'BMW']


// !Access the Full Array
const cars6 = ["Saab", "Volvo", "BMW"];
console.log(cars6); //['Saab', 'Volvo', 'BMW']


// !Arrays are Objects
// Arrays are a special type of objects.The typeof operator in JavaScript returns "object" for arrays.

const cars7 = ["Saab", "Volvo", "BMW"];
console.log(typeof cars7); //object

const person = ["John", "Doe", 46];

// Objects use names to access its "members". In this example, person.firstName returns John:

// *object
const person1 = { firstName: "John", lastName: "Doe", age: 46 };
console.log(person1.firstName); //john

// !Array Elements Can Be Objects

/* JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array: */

let myCars = ['car', 'bus'];
function myFunction() {
    return 5;
}

let myArray = [];
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
console.log(myArray);

/* (3) [ƒ, ƒ, Array(2)]
0: ƒ now()
1: ƒ myFunction()
2: (2) ['car', 'bus']
length: 3
[[Prototype]]: Array(0) */


// ! Array Properties and Methods
console.log(cars.sort());  // (3) ['BMW', 'Saab', 'Volvo']

// ! length
console.log(cars.length);  // Returns the number of elements 3


// ! Accessing the First Array Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
console.log(fruit); // Banana

// ! Accessing the Last Array Element
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
let frui = fruits[fruits.length - 1];
console.log(frui); // Mango


// ! Looping Array Elements

const items = ['apple', 'bmw', 'blackbarry', 'nokia'];
let itemsLenght = items.length;

for (i = 0; i <itemsLenght; i++){
    console.log(items[i]);  // apple bmw blackbarry nokia
};

// ! Array.forEach() function

const sons = ['rahim', 'karim', 'salma', 'jobbar'];
sons.forEach(myfunction);

function myfunction(a) {
    console.log(a); // rahim karim salma jobbar 
}

/* array একটি মেথড আছে  array.forEach()
forEach() মেথডটা parameter হিসাবে একটা callback function receive করে 
এবং forEach method টা array এর  every element এর মদ্যে যেয়ে যেয়ে myfunction টা কল করে দিবে। 
মনে হল forEach() টা ১ মে rahim এর কাছে গিয়ে myfunction() টা call korbe
 so forEach(rahim) call hobe
 function myfunction(a) {
    console.log(a); // rahim এভাবে কাজ করবে 
}
*/

//* array এর জন্যে forEach use kora better .karon eta eassy


//! Adding Array Elements
const son = ['rahim', 'karim', 'salma', 'jobbar'];
console.log(son.push('rokeya')); // 5
console.log(son[4]); //rokeya

//* আর একটা way তে এলিমেন্ট push করা 
const so = ['rahim', 'karim', 'salma', 'jobbar'];
console.log(so[so.length] = 'korima'); // korima




// ! Associative Arrays
/* Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.

example:

এটা অনবজেক্ট:
const person={
    fname:'arifur',
    lname:'rahman',
    age:'32'
}

এটা array :
const fruits=['banana','apple','orange'];

আপনি চাইলে object এর মতো করে array বানাতে পারেন  । যেমন:
const person=[];
person[0]="arifur";
person[1]="rahman";
person[2]="32";
In JavaScript, arrays always use numbered indexes.

If you use named indexes, JavaScript will redefine the array to an object.

const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];  
*/




//! The Difference Between Arrays and Objects
/* In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes. */
// * Arrays are a special kind of objects, with numbered indexes.

const nums = [1, 2, 3];
console.log(nums); // console korle prototype paba


//! When to Use Arrays. When to use Objects.
/* JavaScript does not support associative arrays.(name and value holo associative array)
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers. */


//! JavaScript new Array()
/* 
const points = new Array(); এটা use না করা ভাল 
const points = []; এটা গুড ফর ইউজ 
*/


//! How to Recognize an Array
/* 
typeof() দিলে array কে object দেখাবে 
তাহলে কিভাবে বুজবেন কোনটা array আর কোনটা object 
Array.isArray এর মদ্যমে বুজতে পারবেন 
instanceof Array এর মদ্যমে বুজতে পারবেন 
*/
const fruito = ["Banana", "Orange", "Apple"];
console.log(typeof fruito);  // object
console.log(Array.isArray(fruito)); //true
console.log(fruito instanceof Array); //true


