// * JavaScript Array Iteration পুনরাবৃত্তি

/*  forEach(), map(), filter(), reduce(), every(), some(),
 indexOf(), lastIndexOf(), includes(), find(), findIndex(),
 key()   */  
    
const numbers = [45, 4, 9, 16, 25];

function myFunction(value,index,array) {
    console.log(value);
    console.log(index); // 4
    console.log(array); // [45, 4, 9, 16, 25]
    console.log('===');
}
numbers.forEach(myFunction);
//array method

/* Note that the function takes 3 arguments:

The item value
The item index
The array itself */


// ! JavaScript Array forEach()
// The forEach() method calls a function (a callback function) once for each array element.

const number = [45, 4, 9, 16, 25];
const NumforEach=number.forEach(myFunc); 

function myFunc(value, index, array) {
    console.log(value);  // 45 4 9 16 25
}
console.log(NumforEach); // undefined
console.log(number); //  [45, 4, 9, 16, 25]
 

//  ! JavaScript Array map()
// map() method forEach() এর মতো argument হিসাবে একটি callback() ফাংশন call করবে

// The map() method creates a new array by performing a function on each array element.

// The map() method values ছাড়া  function execute করবে না  for array elements  .

// The map() method original array change করবে না .

const nums = [2, 6, 8, 9];
const numMap=nums.map(myFuncMap); 
function myFuncMap(value) {
    return 2 * value
}
console.log(numMap); // [4, 12, 16, 18]
console.log(nums);// [2, 6, 8, 9]

/* forEach এর মতো ৩ টা argument নেয় 
The item value
The item index
The array itself */

// * Differences between forEach() and map() methods:
/* The forEach() method does not create a new array based on the given array.
The map() method creates an entirely new array.The forEach() method returns “undefined“.
 The map() method returns the newly created array according to the provided callback function */


// ! JavaScript Array filter()
// The filter() method creates a new array with array elements that pass a test.

const numbersFilter = [45, 4, 9, 16, 25];
const over18 = numbersFilter.filter(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(over18); //[45, 25]
console.log(numbersFilter); // [45, 4, 9, 16, 25]


/* Note that the function takes 3 arguments:

The item value
The item index
The array itself
 */


//! JavaScript Array reduce()
//The reduce() method runs a function on each array element to produce (reduce it to) a single value.
//The reduce() method does not reduce the original array.

const numbersRe = [45, 4, 9, 16, 25];
let sum = numbersRe.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}

console.log(sum); // 99
console.log(numbersRe); // [45, 4, 9, 16, 25]

// * reduce() method
/* 
Note that the function takes 4 arguments:

The total (the initial value / previously returned value) এখানে initial value ০ 
The item value
The item index
The array itself
*/

// * The reduce() method can accept an initial value:

const numbersInre = [45, 4, 9, 16, 25];
let sumInre = numbersInre.reduce(myFunction, 100);

function myFunction(total, value) {
    return total + value;
}

console.log(sumInre); // 199
console.log(numbersInre); // [45, 4, 9, 16, 25]




// ! JavaScript Array reduceRight()



// ! JavaScript Array every()
/* every() method check করবে যদি all array value larger than 18 হয় 
তবে true হবে নথএবা  false হবে 

every() method a সবগলো value true হলে true return করবে 
*/

const numbersEv = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunctionEv);

function myFunctionEv(value, index, array) {
    return value > 18;
}
console.log(allOver18); // false

/* Note that the function takes 3 arguments:

The item value
The item index
The array itself
 */

// ! JavaScript Array some()
// The some() method checks if some array values pass a test.
/* some() method check করবে যদি some array value larger than 18 হয় 
তবে true হবে নথএবা  false হবে 

every() method a some  value true হলে true return করবে 
*/

const numbersom = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunctions);

function myFunctions(value, index, array) {
    return value > 18;
}

console.log(someOver18); // true

/* Note that the function takes 3 arguments:

The item value
The item index
The array itself */


// ! JavaScript Array indexOf()
//The indexOf() method searches an array for an element value and returns its position.

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log(position); // 1

// ! JavaScript Array lastIndexOf()

const fruitsl = ["Apple", "Orange", "Apple", "Mango"];
let positionl = fruitsl.lastIndexOf("Apple") + 1;
console.log(positionl); //3



// ! JavaScript Array find()
//The find() method returns the value of the first array element that passes a test function.

const numbersF = [4, 9, 16, 25, 29];
let first = numbersF.find(myFunctionF);

function myFunctionF(value, index, array) {
    return value > 18;
}
console.log(first); //25


// ! JavaScript Array findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.

const numbersi = [4, 9, 16, 25, 29];
let firsti = numbersi.findIndex(myFunctioni);

function myFunctioni(value, index, array) {
    return value > 18;
}

console.log(firsti); //3

//! JavaScript Array.from()
// The Array.from() method returns an Array object from any object with a length property or any iterable object.

const arr = Array.from("ABCDEFG");
console.log(arr); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']

//! JavaScript Array Keys()

//! Array entries()

// !JavaScript Array includes()
// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

const fruitsin = ["Banana", "Orange", "Apple", "Mango"];

const incu = fruitsin.includes("Mango"); 
console.log(incu); // // is true