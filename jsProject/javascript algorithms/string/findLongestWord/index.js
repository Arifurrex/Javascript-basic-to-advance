//! find longest word from this string 
//? non functional way 

let str = "this is bangladesh one of most beautiful country in the world";

let stringSpit = str.split(' ');
let sortedArray = stringSpit.sort(function (a, b) {
    return b.length - a.length;
});

console.log(sortedArray[0]);



//? functional way

const longWord = function (x) {
    let strSplit = x.split(" ");
    let arrSort = strSplit.sort(function (a, b) {
        return b.length - a.length;
    });
    console.log(arrSort);
    return arrSort[0];

}
let largestWord = longWord("this is bangladesh one of most beautiful country in the world");
console.log(largestWord); // bangladesh