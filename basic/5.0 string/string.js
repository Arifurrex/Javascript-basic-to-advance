/* what is String
string length
escape character 
string as object */

//**  a javascript string is zero or more characters writter indside quote.
//you can use single or double quotes:
/* bahire single qoute use korle betore double quotes use korte hobe 
otoba bahire double quote use korle betore single qoute use korte hobe */

//!string length */
let x = "arifur rahman"
console.log(x.length); //13


// !escape character
//* \ backshlap use korle javascipt bojte parbe eta javascript er quote na
// let text = "we love our country "bangladesh" and we live in our country"; error asbe
let text = "we love our country \"bangladesh\" and we live in our country"; //\ use

let text2 = " double quote er betore 'single' qoute";
let text3 = ' single quote er betore "double" qoute';


// escape \ \ k jodi output show korate 
let text4 = "we love our country \\bangladesh\\ and we live in our country"; //escape \ use jorte hobe
console.log(text4);

// !aro 6 ta escape sequence are valid in javascript
/*

\b  backspace
\f from feed
\n new line
\t carriage return
\v vertical Tabulator 

 */

var y = "we love our country bangladesh and we live in our country"; //correct
/* var y = "we love our country bangladesh 
and we live in our country"; */

// uporer sring erro dekabe 
// *\ 
var y = "we love our country bangladesh \
and we live in our country"; //\slash dile er maddome aki line niche newa jai
console.log(y);

// !string is also be object
var s = "jhon"; //literal syntex holo value diye kicho dewa
console.log(typeof s);//string

// sting k object a ropantor
var s = new String('jhon'); //eta literal syntex na 
console.log(typeof s); //object


// ! ==
var p = "arifur";
var q = new String("arifur");
console.log(p == q); //true 

// value ak tai true return korche

//! ===
var p = "arifur";
var q = new String("arifur");
console.log(p === q); //false

// dataType ak na tai false return korche

//**  exception:object cannot be compaire
var p = new String('arifur');
var q = new String('rahman');
console.log(p == q); //false return korbe









