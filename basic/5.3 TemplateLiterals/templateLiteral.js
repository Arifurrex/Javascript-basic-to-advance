/* template literals
template String
string templates 
back-tick syntex */

//*back-ticks/quotes/multiline/interpolation/substitutions/expressin/html template


 //! Back-tiks syntex
 //template literal use backtiks (``) tather than the quotes("")to define string
 
let x = "hello world" // "" quotes
let y = `hello world`// `` back-tiks

// !keno back-tiks dorkar

//*problem
/* let z = 'let's go to dhaka';  // uncaught SyntaxError: Unexpected identifier (ei error ta dibe) */

// *solution
let z1 = 'let\'s go to dhaka'; //escape use kore 
console.log(z1);

let z = `let's go to dhaka`; //back-tiks use kore 
console.log(z); 
 
//*problem

//* backtick is best



//! multiline

//* problem
/* let a = "this is bangladesh and 
i love my country "; //error dekabe */

// *solution(multiline line er jonno back-tick syntex use kora easy)
let a = `this is bangladesh and 
i love my country `;


// !interpolation

// *interpolation kake bole?
// ` ${} ` eta k interpolation bole

let country = "bangladesh";

let p = `this is ${country} and 
i love my country `;

console.log(p);




// !Expression Substitution
// template literal allow expression in string

// *what is expression and statement;

let divison = "sylhet"; //this is a statement 
let s1 = 10; //this is statement
let s2 = 10; //this is statement

let about = `this is ${divison} and 
here live ${s1 + s2} million `;  // ${s1 + s2} is expression

console.log(about);

// *more about
let price = 10;
let vat = 0.25;

let total = `Total : ${ (price * (1+vat)).toFixed() }`;
console.log(total);



// ! HTML Templates 
let Header = "template Header";
let Tags = ['html', 'css', 'js', 'php'];

let html = `<h2> ${Header} </h2><ul>`;

for (const h of Tags) {
    html += `<li>${h}</li> `
}
html += `{</ul>}`;

console.log(html);


