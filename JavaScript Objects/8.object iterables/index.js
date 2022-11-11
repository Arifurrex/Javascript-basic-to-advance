// ! JavaScript Iterables পুনরাবৃত্তিযোগ্য
/* 
Iterable পুনরাবৃত্তিযোগ্য objects are objects that can be iterated পুনরাবৃত্তি করা over with for..of.
Technically, iterables must implement the Symbol.iterator method
*/

//! Iterating Over a String
// You can use a for..of loop to iterate over the elements of a string:

for (const x of "arifur") {
    console.log(x);   // a r i f u r
}


// ! Iterating Over an Array
// You can use a for..of loop to iterate over the elements of an Array:
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]); // 1 2 3 4 5
}
/*
সে এই loop টা করতে পারতেছে কারণ array iterable.array te order ache. 
আর সে একটার পর আর একটা তে যেতে পারছে 
*/

// numbers[i] এভাবে যদি না করি তবে for of use korte pari 
let arr = [1, 2, 3, 4, 5];
for (const x of arr) {
    console.log(x); // 1 2 3 4 5 
}

// object er ketre for of loop
const obj = {
    one: 1,
    two: 2,
    three: 3
};
for (let n of obj) {
    console.log(n); //Uncaught TypeError: obj is not iterable
}
// bolbe object iterable na

// ! javascript কিভাবে বুজবে object iterabe না
const obj1 = {
    one: 1,
    two: 2,
    three: 3
};
console.dir(obj1); // object
/*  console e array object er ভেতরে prototype আছে .আর এই
 prototype এর ভেতরে Symbol(Symbol.iterator) আছে । যদি Symbol(Symbol.iterator)
থাকে মানে এটা iterable করা যাবে । object এ Symbol(Symbol.iterator)
এটা পাবেন না তাই object iterable করা যায় না 
*/


// ! javascript কিভাবে বুজবে array iterabe না 
const arr2 = [2, 3, 4, 5];
console.dir(arr2); // array(4)

 /*  console e array object er ভেতরে prototype আছে .আর এই
 prototype এর ভেতরে Symbol(Symbol.iterator) আছে । যদি Symbol(Symbol.iterator)
থাকে মানে এটা iterable করা যাবে । object এ Symbol(Symbol.iterator)
এটা পাবেন না তাই object iterable করা যায় না 
*/

console.dir(arr2[Symbol.iterator]()); // Array Iterator এটাই হল iterator
/* 
Array Iterator এর মদ্যে prototype আছে । তার মদ্যে next() নামের function 
আছে  । এটাই হল iterable এর বৈশিষ্ট 
 */


// ! JavaScript Iterators পুনরাবৃত্তিকারী

/* 
The iterator protocol defines how to produce a sequence of values from an object.
An object becomes an iterator when it implements a next() method.
The next() method must return an object with two properties:
value (the next value)
done (true or false)


value	The value returned by the iterator
        (Can be omitted if done is true)

done	true if the iterator has completed
        false if the iterator has produced a new value
*/

// magic
const arr3 = [2, 3, 4, 5];
const arr3Iterator = arr3[Symbol.iterator]();
console.log(arr3Iterator.next()); // { value: 2, done: false }
console.log(arr3Iterator.next()); // {value: 3, done: false}
console.log(arr3Iterator.next()); // {value: 4, done: false}
console.log(arr3Iterator.next()); // {value: 5, done: false}
console.log(arr3Iterator.next()); // {value: undefined, done: true}

// *summary
/* 
iterable কি ?
iterable হল সেই জিনিস টা যা যেটার মদ্যে symbol.iterable property আছে । 
symbol.iterable thakle jabascript বুজবে এটা একটা itarable 
symbol.iterable কে call করলে আমরা একটা itarator পাই jar মদ্যে next() fuction  আছে 
next() কল করে করে আমরা loop করতে পারি । 

*/

//! Home Made Iterable
// This iterable returns never ending: 10, 20, 30, 40,.... Everytime next() is called:

// * কোন একটা object কে iterable কিভাবে করব ?

const myNum = {};

// make it iterable 
myNum[Symbol.iterator] = function () {
    let n = 0;
    let done = false;
    return {
        next() {
            n += 10;
            if (n == 100) { done = true }
            return {
                value: n,
                done :done
            }
        }
    }
}

for (let num of myNum) {
    console.log(num); // 10 20 30 40 50
}

// এখন আমরা for of loop টা use করতে পারছি object এ 
// মানে object কে আমরা iterable করে নিয়েছি 
