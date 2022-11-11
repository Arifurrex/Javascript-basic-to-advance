// forEach() just loop through the elements.It's throws away return values and always returns undefined.The result of this method does not give us an output .

// map() loop through the elements allocates memory and stores return values by iterating main array

// Example:

var numbers6 = [2, 3, 5, 7];

var forEachNum = numbers6.forEach(function (number) {
    return number
})
console.log(forEachNum) // undefine
//output undefined

var mapNum = numbers6.map(function (number) {
    return number
})
console.log(mapNum) // (4) [2, 3, 5, 7]                         
//output [2,3,5,7]
// map() is faster than forEach()