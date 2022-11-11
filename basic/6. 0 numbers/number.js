//! numbers

// javascript has only one type of numbers can be written with or without decimal

let x = 3.12; // a number with decimals
let y = 3; //a number without decimal

// *extra large and extra small number 
let z = 3e3;
console.log(z); // 3000

let a = 2e2;
console.log(a); //200

let b = 1e2;
console.log(b); //100

let c = 4e3;
console.log(c);

// !javascript er sobgolo number 64 bit floating point

// !precision 
// **(15 porjonto digit integer number accurate hobe jabascript e)
let d = 9999999999999999; //result 10000000000000000 hoi
let e = 999999999999999; // result 999999999999999 show korbe so its right:

// ** 2ta floating poin jog korle sobsomi tik dekai na
let m = 0.3 + 0.2; //result 0.5 tik ace 
let n = 0.2 + 0.1; //result 0.30000000000000004 dekabe so its wrong way


// **ai sommas solution holo 0.1 k 10 dara gon kora abong bag kore float theke integer a porinoto koro 
let o = (0.2 * 10 + 0.1 * 10) / 10; //result will be 0.3

// agolo holo basic concept of number in javascript


// ! adding number and string
// *** javascript use the + operator both addition and concatination
// ** numbers are added .String are concatinate

// if you add two number the result will be number 
let p = 10;
let q = 20;
console.log(p + q); //30

// if you add two string the result will be string concatenation 
let r = "arifur";
let s = "rahman";
console.log(r + s); //arifurrahman


let t = "20";
let u = "10";
console.log(t+u); //2010 it will be string

// if you add a number and a string,the result will be a string concatenation

let v = 10;
let w = "20";
console.log(v + w); //1020 it will be string

// if you add a string and a number,the result will be a string concatenation
let f = "10";
let g = 20;
console.log(f+g); //1020 it will be string


// **common mistake
let h = 20;
let i = 40;
let j = "the result will be" + h + i;
console.log(j); //the result will be2040

// javascript left theke right er dike code pare .prothome deke string ace so etak se string + number =string hobn


let k = 20;
let l = 40;
let res = h + i +" the result will be" ;
console.log(res); //60 the result will be

// abar ebake se pai number+number=number hobe than sting er sate concate hobe.


let h1 = 20;
let i1 = 40;
let j1 = "the result will be" +( h1 + i1);
console.log(j1); //the result will be60

//bracket dile ei problem er solution hobe

// !Numeric String

let x1 = "100";
let y1 = "10";
let z1 = x1 / y1;
console.log(z1); //10

let a1 = 500;
let a2 = "30";
let a3 = a1 / a2;
console.log(a3); //16.666666666666668

let b1 = 1500;
let b2 = "30";
let b3 = b1 * b2;
console.log(b3); //45000

// *kinto

let c1 = "hello";
let c2 = 500;
let c3 = c1 / c2;
console.log(c3); // NaN not a number asbe

// ** javascript will try to convert strings to numbers in all numeric operations
//division ba into er ketre onno rokom r + addition/concatenation er ketre string piority pabe

// ! NaN - not a number

let e1 = 100;
let e2 = "apple";
let e3 = e1 / e2;
console.log(e3); //NaN

// **isNaN() to find out value is a number 
let f1 = 10;
console.log(isNaN(f1)); //false mane eta akta number

let f2 = "20";
console.log(isNaN(f2)); //false mane eta k o  number bolche

let f3 = "hello";
console.log(isNaN(f3)); //true mane eta number na

// *NaN is a number:typeOf NaN returns number

// ! Infinity


//!Hexadecimal

/* 
decimal    base 10 
0123456789

example: 12  128  345

binary    base 2
0 1
on off 

example : 

octal base 8
01234567

hexadecimal base 16 (hexa mane 6 decimal mane 10 total 16)
0123456789ABCDEF
A mane 10
B mane 11
c mane 12
D mane 13
E mane 14
F mane 15

egolo holo number system er basic concept
*/

// !convertion

/* 
decimal to binary
348 
human brain doren chole decimal system a mane 348 k kibabe computer er mane binary te convert korbo
amra jani computer er binary base holo 2 .mane 0 and 1 

decimal e dos ujoo thake

*/
// **348 k kibabe binary ba computer er system a covert korbo
 /* akta algoritham ba niyom follow korbo .STEP BY STEP sucessesive divison follow korbo .successive divison holo
 por por bag kore jaw

 348 / 2 = 174  (reminder = 0 )
 124 / 2 = 87  (reminder = 0 )
 87 / 2 = 43  (reminder = 1 )
 43 / 2 = 21  (reminder = 1 )
 21 / 2 = 10  (reminder = 1 )
 10 / 2 = 5  (reminder = 0 )
 5 / 2 = 2  (reminder = 1 )
 2 / 2 = 1  (reminder = 0 )
 1 / 2 = 1  (reminder = 1 )

001110101 upor theke niche na 
101011100 nich theke upore holo binary 
 
 348 er binary holo 101011100
 ei process ta k bole successsive division
 */

//  **Decimal to octal
/* octal er base holo 8 .ei bar potibar 8 diye bag korbo 

348 / 8 =43.5 (reminder = 4)
43 / 8 =5.375 (reminder = 3)
5 / 8 =0.625 (reminder = 5)

nich teke upre 534 holo 348 er octal
348 er octal holo 534


*/

//**decimal to hexadecimal */
/*

348 / 16 =21.75 (reminder 12)
21 / 16 =1.3125 (reminder 5)
1 / 16 =0 (reminder 1)

nich theke upore 1512 
348 er hexadicimal holo 1512
hexa dicimal e 12 nai 0 1 2 3 4 5 6 7 8 9 A B C D E F 

348 ER HEXADECIMAL HOLO 15C


*/

// !! JavaScript Numbers as Objects


let num = 123;
console.log(typeof num); //eta number

let obj = new Number(123);
console.log(typeof obj); //eta object return kore 

 










