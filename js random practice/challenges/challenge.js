// ! Challenge # 1 — how to check is there repeted charecter in string
let str = "adsjfdsfsf";
for (i = 0; i <= str.length; i++){
    for (j = i+1; j <= str.length; j++){
        if (str[i] == str[j]) {
            console.log(true);
        } 
    }
}


//! find the duplicate characters in a string
let txt1 = "arifur rahman";
let count;
for (let i = 0; i < txt1.length; i++){
    count = 1;
    for (let j = i+1; j < txt1.length; j++) {
        if (txt1[i] == txt1[j] && txt1[i] != '') {
            count++;
            txt1[j] = '0';
            
        }
    }
    if (count > 1 && txt1[i] != '0') {
        console.log(txt1[i]); // a r a
    }
}

/* 
To find the duplicate character from the string, 
we count the occurrence of each character in the string. 
If count is greater than 1, 
it implies that a character has a duplicate entry in the string. 
In above example, the characters highlighted in green are duplicate characters.

Algorithm
Define a string.
Two loops will be used to find the duplicate characters. Outer loop will be used to select a character and initialize variable count by 1.
Inner loop will compare the selected character with rest of the characters present in the string.
If a match found, it increases the count by 1 and set the duplicates of selected character by '0' to mark them as visited.
After inner loop, if count of character is greater than 1, then it has duplicates in the string.
*/


// ! Challenge # 1 — Counting duplicate characters

let str2 ="adsjfdsfsfjsdjfhacabcsbajda";
const duplicateCar = function (str2) {
    var arr = {};
    for (let i = 0; i < str2.length; i++){
        if (Object.keys(arr).includes(str2[i])) {
            arr[str[i]] = arr[str[i]] + i;
            continue;
        }
        arr[str[i]] = 1;
    }
    return arr;
}
console.log(duplicateCar(str2));;
// {a: 1, d: 6, s: 15, j: 1, f: 17, …}

// ! Challenge # 2— Finding the first non-repeated character


// ! Challenge # 3 — Reversing letters and words
//  I love you so much!

let sentence = "I evol uoy os !hcum";
const reverse = function (sentence) {
    return sentence.split(' ').map(function myFunciton(x) {
        return x.split('').reverse().join('');     
    }).join(' ');
}
console.log(reverse(sentence));
// I love you so much!


// ! Challenge # 4 — Generating all permutations


// ! Coding challenge #1: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++){
    console.log(i); // 1 2 3 4 5 6 7 8 9 10
}

// ! Coding challenge #2: Print the odd(বিয়োগ) numbers less than 10
for (let i = 0; i < 10; i++){

    if (i % 2 !== 0) {
        console.log(i); // 1, 3, 5, 7, 9
    }
}

// another way 
for (let i = 1; i <= 10; i += 2){
    console.log(i); // 1, 3, 5, 7, 9
}

// ! Coding challenge #3: Print the multiplication table with 7 (৭ এর নামতা )
for (let i = 1; i <= 10; i++){
    console.log(7 * i); // 7, 14, 21, 28, 35, 42, 49, 56, 63, 70
}

// !Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

function multiplication(x, y) {
    let result = '\n'
    for (let i = x; i <= 10; i++) {
        for (let j = y; j <= 10; j++) {
            result += (i * j) + '';
        }
    }
    return result += '\n';
}
console.log(multiplication(2, 1));
console.log(multiplication(3, 1));

// হয় নাই আবার ডেকবে

// ! Coding challenge #5: Calculate the sum of numbers from 1 to 10
function sum() {
    let sum =0;
    for (let i = 0; i <= 10; i++) {
        sum += i;
        console.log(i);
    }
    return sum;
}
console.log(sum()); // 55

// !Coding challenge #6: Calculate 10!
function multiple() {
    let multiple = 1;
    for (let i = 1; i <= 10; i++) {
        multiple *= i;
        console.log(i);
    }
    return multiple;
}
console.log(multiple()); // 3628800


// ! Coding challenge #7: find of odd numbers greater than 10 and less than 30

function greaterLaser() {
    let result =0;
    for (i = 0; i <= 30; i++){
        if (i % 2 !== 0) {
            if (i > 10 && i < 30) {
                console.log(i);
                result = i;
            }
          
        }
    }
    return result;
}
console.log(greaterLaser());

// return stop loop
function greaterLaser2(laser,greater) {
    for (i = laser; i <= greater; i++) {
        console.log(i);
        return i;
    }
}
console.log(greaterLaser2(11, 30));


//! is retrun stop loop
function returnMe() {
    for (var i = 0; i < 2; i++) {
        if (i === 1) return i;
    }
}

console.log(returnMe());


// with array 
function greaterLaser2(laser, greater) {
    let values = [];
    for (i = laser; i <= greater; i++) {
        console.log(i);
        values.push(i);
    }
    return values;
}
console.log(greaterLaser2(11, 30));

// while its return array amake it string again 
function greaterLaser3(laser, greater) {
    let values = [];
    for (i = laser; i <= greater; i++) {
        console.log(i);
        values.push(i)
    }
    return values.toString();
}
console.log(greaterLaser3(11, 30));

// ! LeetCode #9 - Palindrome Number

var isPalindrome = function (x) {
    // Base condition
    if (x < 0) {
        return false;
    }
    // Store the number in a variable
    let number = x;
    // This will store the reverse of the number
    let reverse = 0;
    while (number > 0) {
        reverse = reverse * 10 + number % 10;
        number = parseInt(number / 10);
    }
    return x === reverse;
};
console.log(isPalindrome(-123));


// !Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

var romanToInt = function (s) {
    switch (s) {
        case 'I':
            console.log('one');
            break;
        case 'II':
            console.log('two'); 
            break;
        case 'III':
            console.log('three');
            break;
        case 'V':
            console.log('five');
            break;
        case 'VI':
            console.log('six');
            break;
        case 'VII':
            console.log('seven');
            break;
        case 'X':
            console.log('ten');
            break;
    }
}

romanToInt('II');


//! another way
var romanToInt2 = function (s) {
    const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let res = 0;
    console.log(s.split(''));
    s.split('').forEach((x,y)=> {
        if (obj[x] < obj[s[y + 1]]) {
            res -= obj[x];
        } else {
            res += obj[x]
     }        
    });
    return res;
}
         
console.log(romanToInt2("VIII"));

//! leetcode 14. Longest Common Prefix

let strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
    let longestCommonPrefix = "";
    if (strs == null && strs.length == 0) {
        return longestCommonPrefix;
    }

    let minimumLength = strs[0].length;
    console.log(minimumLength);
    
    strs.forEach((x, y) => {
        console.log(x.split(''));
    });
   

};
longestCommonPrefix(strs);