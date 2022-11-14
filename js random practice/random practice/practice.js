//! sting

//! slice 
// syntax: string.slice(start [, stop])
console.log("Good news, everyone!".slice(5, 9));
// 'news'

//! substring 
// syntax: string.substring(start [, stop])
console.log("Good news, everyone!".substring(5, 9));
// 'news'

//! substr
// syntax: string.substr(start [, length])
console.log("Good news, everyone!".substr(5, 4));
// 'news'

/* All three of these methods take in a start index and an optional stop index (or length) parameter, but they differ in some important ways:

substr can give inconsistent results. Modern browers allow using a negative start index to indicate the number of characters from the end of the string, but IE8 and lower treat a negative start index as 0.
substring's parameters are reversible, as it will always use its smallest parameter value as the start index and largest value as the stop index. substring will treat a negative start index as 0.
slice extracts from the end of the string if the starting index is negative. */

// ! Negative start index

console.log("Good news, everyone!".substring(-4));
// "Good news, everyone!"

console.log("Good news, everyone!".substr(-4));
// "one!" modern browsers, including IE9
// "Good news, everyone!" IE8 and lower

console.log("Good news, everyone!".slice(-4));
// "one!"

function add(a, b, c, d) {
    console.log(a+b+c+d);
    return (a + b + c + d);
}
let x = add(2, 3, 4, 6);
console.log(x);
console.log(add(1, 2, 3, 4)); // 10




let num = [2, 3, 4, 5, 6];

function add(a,b,c,d,e) {
    return a + b + c + d + e;
}
console.log(add(num)); //2,3,4,5,6undefinedundefinedundefinedundefined


// array er prottek element add korte cacci
let num2 = [2, 3, 4, 5, 6];
let itaretion = num2.forEach(addition);
function addition(val) {
    let total = '';
    total = total + val;
    console.log(total);
}
//scoope practice
var m = 2;
if (true) {
    console.log(`this is ${m}`);
    var m1 = 3;
}
console.log(`this is ${m1}`);


var t = 15;
function a() {
    var t = 12;
    console.log(`this is function inside var ${t}`);
}
a();
console.log(`this is function outside var ${t}`); // et is not define


// let এর জন্যে 
{
    let i = 5;
    console.log(i); // 5
}
// console.log(i);  uncaught referanceError : i is not define

// another example function scoop
let carName = "this is car";
function car() {
    console.log(carName);
}
car(); // this is car

// another example of function scoop
let fname = 'arifu';
function fullName() {
    let lname = 'rahman';
    console.log(fname); // arifur
}
fullName();
// console.log(lname); // Uncaught ReferenceError: lname is not defined


// another exam of function scoop
var q = 3;
function examp() {
    console.log(q); // 3 ;
    var r = 4;
}
// console.log(r); // Uncaught ReferenceError: r is not defined 
examp();


// another example
carNames();
// console.log(d); // Uncaught ReferenceError: d is not defined
console.log(c); //hi there
function carNames() {
    let d = "inside";
    c="hi there"
}

// expriment 
let carNamei = "Volvo";
// code here can use carName

function myFunction7() {
    let carNamei="toyota"
    // code here can also use carName
    console.log(carNamei); //toyota
    console.log(carName); //Volvo
}
myFunction7()

// scope example 
let global = "this is global";
let exp1;
function myFunction99(){
    let local = "this is local";
    console.log(local);
    console.log(global);
    exp1 = "this is exception1";
    let x="rahman"
    if (true) {
        console.log(local);
        console.log(global);
        let x = "arifur";
        console.log(x);
    }
    console.log(x); //NaN
}
myFunction99();

console.log(exp1);

//! mutable(changeable) and unmutable(unchangeable)
var name = 'Maya';
console.log(name); // maya
var newName = name;
console.log(newName); //maya
name = 'Joe';
console.log(newName); //maya

// another example 
var myName = "arifur"; // arifur
console.log(myName);
myName = "rahman";
console.log(myName); // rahman

// another example
var myName = "arifur"; // arifur
console.log(myName);

var myNameReference = myName;
console.log(myNameReference); // arifur

myName = "rahman";
console.log(myNameReference); // arifur


// another example object
var person = { name: 'Maya', age: 29 };
console.log(person);
var newPerson = person;
console.log(newPerson);
person.name = 'Joe';
console.log(newPerson);


// another example object
var person33 = { name: "arifur", age: 32 };
console.log(person33); // {name: 'arifur', age: 32}

var newPerson = person33;
console.log(newPerson);  // {name: 'arifur', age: 32}

person33.name = "ali";
console.log(person33); // {name: 'ali', age: 32}



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


// ! closure : A Counter Dilemma

// Initiate counter
let counter = 0;

// Function to increment counter
function add2() {
    counter += 1;
}

// Call add() 3 times
add2();
add2();
add2();
console.log(counter); //3
// without call add2() i can change counter .this is problem
console.log(counter=4); // 4


// !solution is delima also

// Function to increment counter
function add3() {
    let counter3 = 0;
    counter3 += 1;
    return counter3;
}

// Call add() 3 times
add3();
add3();
add3();

console.log(add3());


//! still there is problem
function add4() {
    let counter = 0;
    function plus() {
        counter += 1;
    };
    plus();
    return counter;

}
console.log(add4()); // 1

 //! real solution function into function 

let add5=(function(){
    let counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
    })();

console.log(add5());
console.log(add5());
console.log(add5());


// ! solution
function temporary() {
    let counter = 0;
    return function () {
        counter += 1;
    }
}
let add7 = temporary(); // add7 is a function at the end
console.log(add7());
console.dir(add7());
console.log(add7());
// console.log(add7());

// ! scope clouser
let name1 = "arifuriii";
function name22() {
    console.log(name1);
}
name22();
name1 = "rahman"
name22();

// another example
function outerFunction(outerVariable) {
    const outer2 = "hi";
    return function innerFunction(innerVariable) {
        console.log(outerVariable);
        console.log(innerVariable);
        console.log(outer2);
    }
}
const newFunction = outerFunction('outside');
newFunction("inner");



//? const newFunction = outerFunction('outside');
// todo const newFunction = outerFunction('outside');
// ! const newFunction = outerFunction('outside');
// // const newFunction = outerFunction('outside');
// * const newFunction = outerFunction('outside');


// ! Object References vs Values
// * passed by value
nam1 = "arifur";
console.log(name1); //arifur

nam2 = nam1;
console.log(nam2);

nam2 = "rahman";
console.log(nam1 == nam2); //false


// * passed by reference
peson1 = {};
console.log(peson1); // {}

peson2 = peson1;
console.log(peson2); // {}

peson2.name = "arifur";
console.log(peson2);  // {name: 'arifur'}

console.log(peson2 == peson1); //true
/* 
 peson2.name = "arifur"; 
 যখন peson2 তে property and value add korchi
 তখনই peson1 , peson2  eksate update hoye geche
 */


//! nested object
myObj = {
    name: "arifur",
    age: 30,
    cars: {
        car1: 'volvo',
        car2: 'toyota', 
        car3: 'voxy'
    }
}
console.log(myObj.cars.car1);  //volvo
// console.log(myObj.[cars]car1);
console.log(myObj['cars'].car1); // volvo
// console.log(myObj[cars][car1]); // 
console.log(myObj['cars']['car1']);  //volvo
// console.log(myObj.cars.['car1']);
console.log(myObj.cars['car1']); //volvo
