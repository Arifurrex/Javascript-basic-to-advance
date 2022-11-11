// forEach() just loop through the elements.It's throws away return values and always returns undefined.The result of this method does not give us an output .

// map() loop through the elements allocates memory and stores return values by iterating main array

// Example:

var numbers7 = [2, 3, 5, 7];


// var mapNum = numbers7.filter(function (number) {
//     return number < 4;
// })
// console.log(mapNum) // [2, 3]
// console.log(numbers7) // [2, 3, 5, 7]

var mapNum = numbers7.map(function (number) {
    return number < 4;
})
console.log(mapNum) // [2, 3]
console.log(numbers7) // [true, true, false, false]

// map() is faster than forEach()                              