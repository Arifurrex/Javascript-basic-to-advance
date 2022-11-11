//! What Is a Regular Expression?
/* 
javascript এ regular Expression কে বেশি complex মনে করা হয় than other language। 

sequence of characters that forms a search pattern.
যখন তুমি একটা text থেকে data search করবে । তখন তুমি search pattern ইউজ করতে পার । 
A regular expression can be a single character, or a more complicated pattern.
text search অথবা text repplace এর জন্যে Regular expressions use হয় 

Syntax:

/pattern/modifiers;

*/

let x = "hello bangladesh"
// console.log(x./ bangladesh /); এভাবে হবে না ।
// solution : string method : search()  repalce() বা match() use করতে হবে

console.log(x.search('bangladesh')); // 6 no. index এ bangladesh আছে 
console.log(x);

console.log(x.search(/bangladesh/)); // 6
console.log(x.search(/bangladesh/i)); // 6


// ! String Methods use করে
/* 
In JavaScript, regular expressions are often used with the two string methods: search() and replace()
search() method use করা হয় search করার জন্যে । এবং return করে postion of the match 
replace() method use করা হয় replace এর জন্যে এবং retun modified string

*/

//!  search() string method use করে 
//The search() method searches a string for a specified value and returns the position of the match:

let sentence = "i love Bangladesh";
console.log(sentence.search('love')); // 2 no position


//! Regular Expression এর সাতে String search() use করে 

let text = "i love Bangladesh";
console.log(text.search(/love/)); // 2 no position

console.log(text.search(/bangladesh/i)); // 7 no position এখানে i হল modifier
console.log(text.search(/bangladesh/)); // i মনে case insensitive so -1 will return



//! Using String replace() With a String
// The replace() method replaces a specified value with another value in a string:

let stringSentence = "i live in Dhaka";
console.log(stringSentence.replace('Dhaka', 'sylhet')); // i live in sylhet



//! Use String replace() With a Regular Expression
let stringtext= "i live in Dhaka";
console.log(stringtext.replace(/Dhaka/i, 'sylhet')); // i live in sylhet


//! Regular Expression Modifiers
//Modifiers can be used to perform case-insensitive more global searches:

/* 
Modifier	           Description	   
 i	                Perform case-insensitive matching	
 g	                Perform a global match (find all matches rather than stopping after the first match)	
 m	                Perform multiline matching

*/

// * i case insensitive 
let txt = "i love Bangladesh.In 1971 Bangladesh independence";
console.log(txt.search(/bangladesh/)); //-1 কারণ Bangladesh বড় হাতের  
console.log(txt.search(/bangladesh/i)); // 18

console.log(txt.search(/bangladesh/ig)); //18 g not work properly

//* g global
// match() array return korbe. g হল global কয়টা word আছে তা বের করবে 
console.log(txt.match(/bangladesh/ig)); // ['Bangladesh', 'Bangladesh']

//* m multiline
let txt2 = `this is bangladesh.
i love my country bangladesh`;

console.log(txt2);
console.log(txt2.match(/bangladesh/m)); // 8
console.log(txt2.match(/^this/m)); // 0



// ^ হল starting
// php তে preg_match() method use hoi.js a match() method use hoi


//! Regular Expression Patterns
// [] bracket হল range of character এর জন্যে
/* 
Expression	     Description	
[abc]	         Find any of the characters between the brackets	
[0-9]	         Find any of the digits between the brackets	
(x|y)	         Find any of the alternatives separated with 

*/

// * [abc] bracket এর ভেতরের chetecter বের করতে হবে 
let text3 = 'hello bangladesh! people of bangladesh everyone so polite and hospitality';
console.log(text3.match(/[h]/i)); // 'h' index 6
console.log(text3.match(/[h]/ig)); // ['h', 'h', 'h', 'h']

//* [0-9]
let numText = '123456789';
console.log(numText.match(/[1-5]/)); //'1', index: 0,
console.log(numText.match(/[1-5]/g)); // ['1', '2', '3', '4', '5']

/* let num = 123456789;
console.log(num.match(/[1-5]/g)); 

কাজ করবে না । কারণ সদুমাত্র string এ কাজ করবে 
 */


//* (x|y)	 কয়টা green blue আছে তা array আকারে বের করে দিবে 
let txt4 = "re, green, red, green, gren, gr, blue, yellow";
console.log(txt4.match(/(green|blue)/g)); // ['green', 'green', 'blue']



//! Metacharacters are characters with a special meaning:
/* 

Metacharacter	       Description	
\d	                 Find a digit	
\s	                 Find a whitespace character	
\b	                 Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
\uxxxx	             Find the Unicode character specified by the hexadecimal number xxxx

*/

//* \d	Find a digit
let digit = "Give 100%!";
console.log(digit.match(/\d/g)); // (3) ['1', '0', '0']


//* \s	                 Find a whitespace character
let text6 = "Is this all there is?";
console.log(text6.match(/\s/g)); //(4) [' ', ' ', ' ', ' ']


//* \b	                 Find a match at the beginning of a word like this: \bWORD,
let text7 = "HELLO, LOOK AT YOU!?";
console.log(text7.search(/\bLO/)); // 7

//* \b	                 Find a match at the end of a word like this: \bWORD,
let text8 = "HELLO, LOOK AT YOU!?";
console.log(text8.search(/LO\b/)); // 3



//! Quantifiers define quantities:
/* 
Quantifier	          Description	
n+	                  Matches any string that contains at least one n
n*	                  Matches any string that contains zero or more occurrences of n
n?	                  Matches any string that contains zero or one occurrences of n

*/

//*n+	   Do a global search for at least one "n" in a string:
let tex7 = "Hellooo World! Hello W3Schools!";
console.log(tex7.match(/o+/)); //'ooo', index: 4
console.log(tex7.match(/w+/i)); //'W', index: 8,


//* n*   Do a global search for an "l", followed by zero or more "o" characters:
let tex8 = "Hellooo World! Hello W3Schools!";
console.log(tex8.match(/lo*/g)); //['l', 'looo', 'l', 'l', 'lo', 'l']
console.log(tex8.match(/he*/g)); // ['h']

//* n?   Do a global search for a "1", followed by zero or one "0" characters:
let texNum = "1,100 or 1000";
console.log(texNum.match(/1000?/g)); // (2) ['100', '1000']
console.log(texNum.match(/100?/g)); // (2) ['100', '100']
console.log(texNum.match(/10?/g)); // (3) ['1','10','1000']


//! Using test()
/* 
The test() method is a RegExp expression method.
It searches a string for a pattern, and returns true or false, depending on the result.
The following example searches a string for the character "e":
*/

const pattern = /e/;
const pa=pattern.test("The best things in life are free!");
console.log(pa); //true

//* You don't have to put the regular expression in a variable first. The two lines above can be shortened to one:
const pa2 = /e/.test("The best things in life are free!");
console.log(pa2); // true


//! Using exec()
/* 
The exec() method is a RegExp expression method.
It searches a string for a specified pattern, and returns the found text as an object.
If no match is found, it returns an empty (null) object.
The following example searches a string for the character "e":
*/

const p3 = /e/.exec("The best things in life are free!");
console.log(p3); //e', index: 2,




