//! Sorting an Array
// The sort() method sorts an array alphabetically:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort()); // ['Apple', 'Banana', 'Mango', 'Orange']

// ! Reversing an Array
// he reverse() method reverses the elements in an array.
// You can use it to sort an array in descending order:

const fruitsr = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitsr.reverse()); //['Mango', 'Apple', 'Orange', 'Banana']
console.log(fruitsr.sort()); //['Apple', 'Banana', 'Mango', 'Orange']
console.log(fruitsr.reverse()); //['Orange', 'Mango', 'Banana', 'Apple']

// ! Numeric Sort
//By default, the sort() function sorts values as strings.
//This works well for strings ("Apple" comes before "Banana").

//However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort()); // [1, 10, 100, 25, 40, 5] এটা প্রবলেম

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:
//compare function এর মদ্যমে এই problem এর solution করা যাবে

const point = [40, 100, 1, 5, 25, 10];
console.log(point.sort(function (a, b) { return a - b })); //[1, 5, 10, 25, 40, 100]

//compare function এর মদ্যমে এই problem এর solution করা যায়
// একই ভাবে sort an array descending

const pointd = [40, 100, 1, 5, 25, 10];
console.log(pointd.sort(function (a, b) { return b - a })); //[100, 40, 25, 10, 5, 1]

// ! The Compare Function

// The purpose of the compare function is to define an alternative sort order.
// The compare function should return a negative, zero, or positive value, depending on the arguments:

// *function(a, b){return a - b}
var numbers = [1, 5, 3.14];
function compare(a, b) {
    return a - b;
}
console.log(numbers.sort(compare)); //[1, 3.14, 5]
console.log(compare(1, 5)); // -4 , a is less than b
console.log(compare(1, 3.14)); // -2.14 , a is less than b
console.log(compare(5, 3.14)); // 1.86 , a is gater than b

// !Sorting an Array in Random Order
const poins = [40, 100, 1, 5, 25, 10];
console.log(poins.sort(function () { return Math.random() }));
// [40, 100, 1, 5, 25, 10]  এভাবে randomly change হয় না 

console.log(poins.sort(function () { return 0.5 - Math.random() }));
//  [10, 5, 40, 1, 25, 100]  এটা randomly change hocce 

console.log(poins.sort(function () { return 0.2  - Math.random() }));
//  [5, 10, 40, 100, 25, 1]  এটা randomly change hocce 

// ! Fisher Yates Method


// ! Find the Highest (or Lowest) Array Value

// There are no built-in functions for finding the max or min value in an array.
// However, after you have sorted an array, you can use the index to obtain the highest and lowest values.

const pointm = [40, 100, 1, 5, 25, 10];
console.log(pointm.sort(function (a, b) { return a - b })); // [1, 5, 10, 25, 40, 100]

console.log(pointm); // [1, 5, 10, 25, 40, 100]
console.log(pointm[0]); // 1 এভাবে lowest number বের করতে পারবে


//* তাহলে highest vlaue কিভাবে বের করব 

const pointmx = [40, 100, 1, 5, 25, 10];
console.log(pointmx.sort(function (a, b) { return b - a })); //  [100, 40, 25, 10, 5, 1]

console.log(pointmx); //  [100, 40, 25, 10, 5, 1]
console.log(pointmx[0]); // 100 এভাবে lowest number বের করতে পারবে


// ! Sorting Object Arrays
// JavaScript arrays often contain objects:

const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

console.log(cars.sort(function (a, b) { return a.year - b.year }));

// { type: 'Saab', year: 2001 }
// { type: 'BMW', year: 2010 }
// { type: 'Volvo', year: 2016 }




