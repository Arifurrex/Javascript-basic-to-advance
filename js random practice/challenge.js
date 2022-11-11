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









