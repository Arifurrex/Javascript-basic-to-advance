/*  In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object 
and has no methods or properties. There are 7 primitive data types:

string
number
bigint
boolean
undefined
symbol
null


JavaScript Primitive vs. Reference Values

JavaScript has two different types of values:

Primitive values
Reference values

*Primitive values (null, undefined, boolean, number, string, symbol, and BigInt)
*Reference values that refer to objects.


*/

// ** javascript number method
/* 
!! toString(), toExponential() ,toFixed() , toPrecision() , valuOf(),Number(), parseInt(), parseFloat() 
 */

/* number holo primative value . ai primative value te method and property thake na . jokon number k object a 
porinito kora hoi new Number er maddome tokon i number abong property pakbe */

// !! toString

let x = 123;
let p = x.toString();
console.log(typeof p); //string

let m = (123).toString();
console.log(typeof m); //string

// !toExponential()
let n = 9.656;
let o = n.toExponential(4);
console.log(o); //9.6560e+0
console.log(typeof (o)); //string

// The toExponential() method returns a string, with the number rounded and written using exponential notation


// !toFixed() Method
let c = 9.56564;
let d=c.toFixed(2);
console.log(d); //return 9.57 দশমিক এর পর 2 ঘর নিবে

let e = 1.232344;
let f=e.toFixed(4);
console.log(f); // return 1.2323 দশমিক এর পর 4 ঘর নিবে

// **দশমিক এর পর কয় ঘর নিবে toFixed() method এর মদ্যমে বলে দিতে পারবে
// ** toFixed(2) is perfect for working with money.
// ** toFixed() returns a string

// !! toPrecision() Method

let g = 8.98765;
let h = g.toPrecision(2); // return 9.0 টোটাল 2 টা ঘর নিবে 
console.log(h);

let i = g.toPrecision(4);
console.log(i); // return 8.988 টোটাল 4 টা ঘর নিবে

let j = g.toPrecision(6);
console.log(j); // return টোটাল 6 টা ঘর নিবে

//** টোটাল কয়টা ঘর নিবে টা toPrecision() method এর মদ্যমে বলে দিতে পারব
// ** toPrecision() returns a string

// !valueOf() Method

let k = 123;
k.valueOf();
console.log(k); //123
console.log(typeof k); //number

let kk = (123).valueOf();
console.log(kk); //123 

let ll=(100 + 23).valueOf();
console.log(ll); //123

// !! Converting Variables to Numbers
/* There are 3 JavaScript methods that can be used to convert variables to numbers:

The Number() method
The parseInt() method
The parseFloat() method */

// !Number() Method

let nn = Number(true);
console.log(nn); //return 1

let mm = Number(false);
console.log(mm); //return 0

let num = Number("10");
console.log(num); // return 10 string কে number এ কনভার্ট করতে পারবে

let num1 = Number("  10");
console.log(num1); //return 10 সামনের space ইগ্নোর করবে 

let num2  = Number("10   ");
console.log(num1); //return 10 শেষের  space ইগ্নোর করবে

let point = Number("10.33");
console.log(point); //return 10.33 দশমিক string কে ও নম্বর এ কনভার্ট করতে পারবে

let coma = Number("10,33");
console.log(coma); //return NaN (not a number) এটা নম্বর না

let space = Number("10 33");
console.log(space); //return NaN (not a number ) এটা নম্বর না

let string = Number("John");
console.log(string); //return NaN (not a number ) এটা নম্বর না

// **If the number cannot be converted, NaN (Not a Number) is returned.


// !! Number() Method Used on Dates
Date();
console.log(Date()); //return Mon Jul 18 2022 08:25:10 GMT+0600 (Bangladesh Standard Time)
console.log(new Date()); //retrun Mon Jul 18 2022 08:25:10 GMT+0600 (Bangladesh Standard Time)

console.log(new Date("1970-01-02")); // return Fri Jan 02 1970 06:00:00 GMT+0600 (Bangladesh Standard Time)
console.log((new Date("2017-09-30"))); //Sat Sep 30 2017 06:00:00 GMT+0600 (Bangladesh Standard Time)
console.log(Number(new Date("2017-09-30")));//1506729600000
// **The Number() method can convert a date to a number.milisecond এ কনভার্ট করে


// !!parseInt() Method
//** parseInt() parses a string (মানে string কে parse করে ) 
// **and returns a whole number.Spaces are allowed. (return করবে number )
// **Only the first number is returned:

let parse = parseInt(" -10");
console.log(parse); //-10

let parsei = parseInt("-10.33");
console.log(parsei); //-10 
console.log(typeof (parsei)); // number

let parse1 = parseInt("10");
console.log(parse1); //10

let parsei1 = parseInt("10.33");
console.log(parsei1); //10

let pa = parseInt("10 20 30");
console.log(pa); //10 Only the first number is returned

let paya = parseInt("10 years");;
console.log(paya); //10 শুদুমাত্র  first নম্বর রিটার্ন করবে

let paya1 = parseInt("years 10");
console.log(paya1); //NaN If the number cannot be converted, NaN (Not a Number) is returned.

// !!parseFloat() Method
// **parses a string  (মানে string কে parse করে )
// **and returns a number.Spaces are allowed.(return করবে number )
// **Only the first number is returned:

let p1=parseFloat("10");
console.log(p1); //10

let p2 = parseFloat("10.33");
console.log(p2); //10.33

let p3 = parseFloat("10 20 30");
console.log(p3); // 10 শুদুমাত্র  first নম্বর রিটার্ন করবে

let p4 = parseFloat("10 years");
console.log(p4); //10 শুদুমাত্র  first নম্বর রিটার্ন করবে

// let p5 = parseFloat("years 10");
// console.log(p5);

// !! Number Properties
/* MAX_VALUE	Returns the largest number possible in JavaScript
MIN_VALUE	Returns the smallest number possible in JavaScript
POSITIVE_INFINITY	Represents infinity (returned on overflow)
NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
NaN 	Represents a "Not-a-Number" value */

// !! MAX_VALUE / MIN_VALUE
//MAX_VALUE holo property MAX_VALUE() mole hoto method ba function


let x0 = Number.MAX_VALUE;
console.log(x0); //1.7976931348623157e+308

let x1 = [1, 2, 3, 4];
console.log(x1.MAX_VALUE); //undefined eta tik nai .expriment only

let x2 = Number.MIN_VALUE;
console.log(x2); //5e-324 lowest value

// !! Number Properties Cannot be Used on Variables
let x3 = 6;
let x4 = x3.MAX_VALUE;
console.log(x4); //undefined
