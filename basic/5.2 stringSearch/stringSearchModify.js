/*
String.indexOf()
String.lastIndexOf()
string.search()
String.match()
String.include()
String.startsWith()
String.endsWith() 

*/

//!String.indexOf()
// The indexOf() method returns the index of(position of) the first occurrence of a string in a string:
let x = "arifur rahman abdur rahman arifur";
console.log(x.indexOf('rahman')); //7
// rahman 7 number index a ace

// !String.lastIndexOf()
// count position from zoro 
// আর string এর last এর ১ম  occarance টা return করে 
var y = "arifur rahman abdur rahman arifur";
console.log(y.lastIndexOf("rahman")); //20

// *Both indexOf(), and lastIndexOf() return -1 if the text is not found:
var y = "arifur rahman abdur rahman arifur";
console.log(y.indexOf("rahmani")); // -1 mane pai nai
console.log(y.lastIndexOf("rahmani")); // -1 mane pai nai

// Both methods accept a second parameter as the starting position for the search:
var text = "Please locate where 'locate' occurs!";
console.log(text.indexOf("locate", 15)); // 21

/* 
The lastIndexOf() methods searches backwards (from the end to the beginning),
meaning: if the second parameter is 15, the search starts at position 15, 
and searches to the beginning of the string.
*/
var text = "Please locate where 'locate' occurs!";
console.log(text.lastIndexOf("locate", 15)); // 7

//!String.search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
var str = "Please locate where 'locate' occurs";
console.log(str.search('locate')); //7 string index a locate ace

// * regular express in search()
var str = "Please locate where 'locate' occurs";
console.log(str.search(/locate/)); //7 string index a locate ace

/* 
Did You Notice?
The two methods, indexOf() and search(), are equal?
They accept the same arguments (parameters), and return the same value?
The two methods are NOT equal. These are the differences:
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/
var str = "Please locate where 'locate' occurs";
console.log(str.indexOf(/locate/))  // -1 (regular express indexOf() e kaj kore na)



//* indexOf() and search()
/* search() method cannot take a second start positon argument
indexOf() method cannot take powerful seach values (regular expression) */

// !String.match()
let textMatch = "Dark is black.Black luck is dark?";
console.log(textMatch.match(/dark/)); // ['dark', index: 28, input: 'Dark is black.Black luck is dark?', groups: undefined]
console.log(textMatch.match(/dark/i)); // ['Dark', index: 0, input: 'Dark is black.Black luck is dark?', groups: undefined]
console.log(textMatch.match(/dark/g)); // ['dark']
console.log(textMatch.match(/dark/ig)); // (2) ['Dark', 'dark']




// match() match agnist regular expression .return korbe array akare


// ! string.matchAll()
/* 
The matchAll() method returns an iterator containing 
the results of matching a string against a string (or a regular expression).
 */

let text22 = "I love cats. Cats are very easy to love. Cats are very popular."

const iterator = text22.matchAll("Cats");
console.log(iterator); // RegExpStringIterator {}
console.log(Array.from(iterator)); //
/* 
0: ['Cats', index: 13, input: 'I love cats. Cats are very easy to love. Cats are very popular.', groups: undefined]
1: ['  Cats', index: 41, input: 'I love cats. Cats are very easy to love. Cats are very popular.', groups: undefined]

*/

//* If the parameter is a regular expression, the global flag(g) must be set set, otherwise a TypeError is thrown.
let text23 = "I love cats. Cats are very easy to love. Cats are very popular."

const iterator1 = text23.matchAll(/Cats/g); // এখানে global g না দিলে error দেখাবে 
console.log(iterator1); // RegExpStringIterator {}
console.log(Array.from(iterator1)); //
/* 
0: ['Cats', index: 13, input: 'I love cats. Cats are very easy to love. Cats are very popular.', groups: undefined]
1: ['Cats', index: 41, input: 'I love cats. Cats are very easy to love. Cats are very popular.', groups: undefined]

*/

//* If you want to search case insensitive, the insensitive flag(i) must be set:
let text24 = "I love cats. Cats are very easy to love. Cats are very popular."

const iterator2 = text24.matchAll(/Cats/gi); // এখানে global g না দিলে error দেখাবে 
console.log(iterator2); // RegExpStringIterator {}
console.log(Array.from(iterator2)); //
/* 
0: ['cats', index: 7, input: 'I love cats. Cats are very easy to love. Cats are very popular.', groups: undefined]
1: ['Cats', index: 13, input: 'I love cats. Cats are very easy to love. Cats are very popular.', groups: undefined]
2: ['Cats', index: 41, input: 'I love cats. Cats are very easy to love. Cats are very popular.', groups: undefined]
*/







//!String.include()
let textInclude = "hello bangladesh ,wellcome to padma bridge"
console.log(textInclude.includes("bangladesh")); //true return korbe

 //*Check if a string includes "world". Start at position 12:
let textInclude2 = "hello bangladesh ,wellcome to padma bridge"
console.log(textInclude2.includes("bangladesh",15)); //false return korbe
// 15 index এর পর bangladesh নাই
// includes() is case sensitive.


//  !String.startWith()
let stringStartWith = "hello let check what is it";
console.log(stringStartWith.startsWith('hello')); // return true
//* string ta hello diye start korche so its true

console.log(stringStartWith.startsWith('let')); //return false
//* string ta let diye start hoi nai so false return korbe

console.log((stringStartWith.startsWith('let', 6)));  //return true
//*parameter 6 holo 6 er port count start hobe.


//  !String.endtWith()
let endWith = "hello let check what is it";
console.log(endWith.endsWith('it')); //return true
//*ses hoyche it diye so eta true return korlo

console.log(endWith.endsWith('let', 9)); //*true return korbe
//*hello let eta theke let check korbe

