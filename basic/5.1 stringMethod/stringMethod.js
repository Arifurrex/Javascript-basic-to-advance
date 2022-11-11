//!srting method
/* ai tutorial a am string method niye alochona korbo
prevoisuly amra javascript object method niye alochona korlam.
object er betore property hisabe je function thake ta holo object method

here we will discuss about string metod */

var x = "arifur" //literal syntex
var x = new String("arifur") //eta object

/* jokon e akti string k new String dile lika hoi tokon ta bisha object a porinoto hoi.r ei string onekgol
method thake .segolo niye amra discuss korbo */

const a = {
    name: "SYLHET",
    thana: 'goloapgong',
    no:2
}
//! javascript kibabe boje eta object
const s = "bangladesh" //eta premative value .adi value

console.log(s.length); //jokon s dot lika hoi javascript tokon e string ta new String a mone kore

/* premitive values, like "jhon doe", cannot have properties or methods(because they are not object)

but with javascript, methods and property are also available to primitive values, because javascript
treats primitive values as objects when executing and properies */

// **ekane s.length er length ta ki property or method?ans-eta property
/* example
const S = {
    name: "string",
    length: "stringLength"
    slice: function () {
        console.log('this is slice method');
    },
    subString:function(){
       console.log('this is subString method');
    }
}  */

// !string Method
// object betore property function ace take method bole

// !!string er bibinno part kibabe extract korbo
// 1.slice(start, end)
// 2.substring(start, end)
// 3.substr(start,end)

//*slice()
let b = "bangladesh";
console.log(b.slice(0, 3)); //return bar

let str = "Apple, Banana, kiwi";
console.log(str.slice(0, 5)); //return Apple

//function er return ki?retunr er vlaue chole ase function caller er cache.
// Functioncaller() replace hote retrn value bosbe
 
// reverse slice 
console.log(str.slice(-12,-6)); //return banana

// **substring() [slice abong subSting er modde differnt holo subString a reverse hoi na mane index er value negative hoi na ]
let substring = "Apple, Banana, kiwi";
console.log(substring.substring(7, 13));

//*substrn()
// let substr = "Apple, Banana, kiwi";
// console.log(substring.substr(7, 13));

// !string content kibabe replace korbo
let text = "i want to go to canada";
console.log(text.replace('canada', 'korea')); //i want to go to korea
console.log(text);//i want to go to canada


// **by default replace method replace first match 
let text1 = "i want to go to canada and canada";
console.log(text1); //i want to go to canada and canada
console.log(text1.replace('canada', 'korea')); //i want to go to korea and canada

// *replace method case sensetive
let text6 = "Please visit Microsoft!";
console.log(text6.replace(/MICROSOFT/i, "W3Schools")); //Please visit W3Schools!
console.log(text6); //Please visit Microsoft!


let text7 = "Please visit Microsoft and Microsoft!";
console.log(text7.replace(/Microsoft/g, "W3Schools")); //Please visit W3Schools and W3Schools!
console.log(text7); //Please visit Microsoft and Microsoft!

// replaceAll()
let text8 = "I love cats. Cats are very easy to love. Cats are very popular";
console.log(text8.replaceAll("Cats", "Dogs"));
// I love cats. Dogs are very easy to love. Dogs are very popular

console.log(text8.replaceAll("cats", "dogs"));
// I love dogs.Cats are very easy to love.Cats are very popular

// regular expression on replaceAll()
let text9 = "I love cats. Cats are very easy to love. Cats are very popular";
console.log(text9.replaceAll(/Cats/g, "Dogs"));
// I love cats.Dogs are very easy to love.Dogs are very popular

console.log(text9.replaceAll(/cats/g, "dogs"));
// I love dogs. Cats are very easy to love. Cats are very popular
// ! converting string uperCase or lowerCase
let sentence = "this is a string need to check upper case and lower case"
console.log(sentence.toUpperCase());  //THIS IS A STRING NEED TO CHECK UPPER CASE AND LOWER CASE
console.log(sentence.toLowerCase()); //this is a string need to check upper case and lower case

// !concate() method er maddome 2 ta string jog kora hoi 
let s1 = "hello";
let s2 = "world";
console.log(s1.concat(s2)); //helloworld

//*concat er poriborte apni + use korben
console.log(s1 + s2);

// !remember : all string method return a new string. they dont modify the original string
//! strings are immutable .string cannot be changed .only replace

// ! string.trim() method replace white space both side of string
let whiteSpace = "    space   ";
console.log(whiteSpace); //    space   
console.log(whiteSpace.trim()); //space

//trimStart()
let text19 = "     Hello World!     ";
console.log(text19.trimStart()); //Hello World!

//trimEnd()
let text11 = "     Hello World!     ";
console.log(text11.trimEnd());//     Hello World!


// !JavaScript String padStart()

let text44 = "5";
console.log(text44.padStart(4, "x")); //xxx5

let text55 = "5";
console.log(text55.padStart(4, "0")); // 0005


// example
let numb = 5;
let text66 = numb.toString();
let padded = text66.padStart(4, "0");
console.log(padded); //0005


// padEnd()
let text77 = "7";
console.log(text77.padEnd(7, "x")); //7xxxxxx


let numb5 = 5;
let text5 = numb5.toString();
let padded5 = text5.padEnd(4, "0");
console.log(padded5); //5000


// ! avaScript String charAt()
let txt11 = "HELLO WORLD";
console.log(txt11.charAt(0)); //H

let txt12 = "HELLO WORLD";
console.log(txt12.charCodeAt(0)); //72


// ! property accces
let access = "hello";
console.log(access[0]);  //h

// ERROR 
let access2 = "HELLO WORLD";
access2[0] = "A";
console.log(access2);   // Gives no error, but does not work

// ! string k array te kibabe convert korbo
let mkArray = "hello world ,bngladesh";
console.log(mkArray.split());  // ['hello world ,bngladesh'] eta string k array te convert korche
console.log(mkArray.split(",")); // ['hello world ', 'bngladesh'] eta array te convert korche abong jekane comma ace sekane index alada korche 
console.log(mkArray.split(" ")); // ['hello', 'world', ',bngladesh'] eta jekane space paiche sekane index alada korche

// s.split("") split in character 
console.log(mkArray.split("")); //['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', ' ', ',', 'b', 'n', 'g', 'l', 'a', 'd', 'e', 's', 'h']



