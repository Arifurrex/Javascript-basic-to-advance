/* /* String.indexOf()
String.lastIndexOf()
string.search()
String.match()
String.include()
String.startsWith()
String.endsWith() */

//!String.indexOf()
let x = "arifur rahman";
console.log(x.indexOf('rahman')); //7 rahman 7 number index a ace


// !String.lastIndexOf()
let y = "arifur rahman";
console.log(y.lastIndexOf("rahman")); //7
console.log(y.lastIndexOf("rahmani")); // -1 mane pai nai

console.log(y.lastIndexOf("arifur", 7));// 0

//!String.search()
let search = "please search where i sylhet is";
console.log(search.search('sylhet')); //22 string index a sylhet ace 
console.log(search.search('where'));//14 no position a where ta ace


//* indexOf() and search()
/* search() method cannot take a second start positon argument
indexOf() method cannot take powerful seach values (regular expression) */

// !String.match()
let textMatch = "you should not belive in 3w that is women weather and work"
console.log(textMatch.match(/not/)); //['not', index: 11, input: 'you should not belive in 3w that is women weather and work', groups: undefined]
console.log(textMatch.match(/in/)); //['in', index: 22, input: 'you should not belive in 3w that is women weather and work', groups: undefined]

// match() match agnist regular expression .return korbe array akare

//!String.include()
let textInclude = "hello bangladesh ,wellcome to padma bridge"
console.log(textInclude.includes("bangladesh")); //true return korbe

 //*include() method true return kore


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

