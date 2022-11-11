// ! string method
let text0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text0.length;
console.log(length); // 26

// slice 
// Slice out a portion of a string from position 7 to position 13:

let text2 = "Apple, Banana, Kiwi";
console.log(text2.slice(7, 13)); // Banana
console.log(text2); // Apple, Banana, Kiwi

// If you omit the second parameter, the method will slice out the rest of the string:
let text3 = "Apple, Banana, Kiwi";
console.log(text3.slice(7)); //Banana, Kiwi
console.log(text3); // Apple, Banana, Kiwi

// If a parameter is negative, the position is counted from the end of the string:
let text4 = "Apple, Banana, Kiwi";
console.log(text4.slice(-12)); //Banana, Kiwi
console.log(text4);  // Apple, Banana, Kiwi

// This example slices out a portion of a string from position - 12 to position - 6:
let text5 = "Apple, Banana, Kiwi";
console.log(text5.slice(-12, -6)); // Banana
console.log(text5); // Apple, Banana, Kiwi

// ! JavaScript String substring()
/* 
substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring().
*/
// **substring() [slice abong subSting er modde differnt holo subString a reverse hoi na mane index er value negative hoi na ]
let str1 = "Apple, Banana, Kiwi";
console.log(str1.substring(7, 13)); // Banana
console.log(str1);  //Apple, Banana, Kiwi

// If you omit the second parameter, substring() will slice out the rest of the string.
let str2 = "Apple, Banana, Kiwi";
console.log(str2.substring(7)); // Banana, Kiwi
console.log(str2); // Apple, Banana, Kiwi

// JavaScript String substr()
/* 
substr() is similar to slice().
The difference is that the second parameter specifies the length of the extracted part.
 */

let str5 = "Apple, Banana, Kiwi";
console.log(str5.substr(7, 6)); // Banana
console.log(str5); // Apple, Banana, Kiwi

// If you omit the second parameter, substr() will slice out the rest of the string.
let str6 = "Apple, Banana, Kiwi";
console.log(str6.substr(7)); // Banana, Kiwi
console.log(str6);  // Apple, Banana, Kiwi

// If the first parameter is negative, the position counts from the end of the string.
let str7 = "Apple, Banana, Kiwi";
console.log(str7.substr(-4)); //Kiwi
console.log(str7);  // Apple, Banana, Kiwi