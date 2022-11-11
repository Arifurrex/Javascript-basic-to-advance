// ! How to Display JavaScript Objects?
// Displaying a JavaScript object will output [object Object].
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person);  // {name: 'John', age: 30, city: 'New York'}

/* 
Some common solutions to display JavaScript objects are:

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify()
*/

// ! Displaying Object Properties
const person1 = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(`${person1.name} age is ${person1.age} and he live in ${person1.city}`);
// John age is 30 and he live in New York



// ! Displaying the Object in a Loop
//  The properties of an object can be collected in a loop:

const person3 = {
    name: "arifur",
    age: 32,
    city: "sylhet"
};

let text = " ";
for (let x in person3) {
    text += person3[x] + " ";
};
document.getElementById("demo").innerHTML = text;
console.log(text); //  arifur 32 sylhet

/* 
You must use person[x] in the loop.
person.x will not work (Because x is a variable).
*/


// ! Using Object.values()
// Any JavaScript object can be converted to an array using Object.values():
// object কে array te convert করা যায় Object.values() এর মাধ্যমে । 

const person5 = {
    name: "abdur",
    age: 35,
    city: "sylhet"
}
const myArray = Object.values(person5);
console.log(myArray); //  ['abdur', 35, 'sylhet']

// myArray is now a JavaScript array, ready to be displayed:

const person6 = {
    name: "abdur",
    age: 35,
    city: "sylhet"
}
const myArray1 = Object.values(person6);

document.getElementById('demo5').innerHTML = myArray; // abdur,35,sylhet


// ! Using JSON.stringify()
// Any JavaScript object can be stringified(converted to a string) with the JavaScript function JSON.stringify():
// object কে string এ convert করবে 

const person7 = {
    name: "rownok",
    age: 24,
    city: "new york"
}
let myString = JSON.stringify(person7);
console.log(myString); //{"name":"rownok","age":24,"city":"new york"}

document.getElementById("demo6").innerHTML = myString;
// {"name":"rownok","age":24,"city":"new york"}


// !Stringify Dates
// JSON.stringify converts dates into strings:
const person8 = {
    name: "raisa",
    today: new Date()
};

let myString2 = JSON.stringify(person8);
console.log(myString2); // {"name":"raisa","today":"2022-10-29T19:46:48.786Z"}



// ! Stringify Functions
// JSON.stringify will not stringify functions:

const person9 = {
    name: "jasmin",
    age: function () {
        return 18;
    }
};

let myString9 = JSON.stringify(person9);
console.log(myString9); // {"name":"jasmin"}
// কিন্তু age method show করে নাই ।

//* This can be "fixed" if you convert the functions into strings before stringifying.
const person10 = {
    name: "karim",
    age: function () {
        return 45;
    }
};
console.log(person10.age()); // 45
let stringAge = person10.age().toString(); // 45

let myString10 = JSON.stringify(stringAge);
console.log(myString10); //"45"


//! Stringify Arrays
// It is also possible to stringify JavaScript arrays:

const arr = ["arif", "rahman", "raisa", "razzak"];
let mySting11 = JSON.stringify(arr);
console.log(mySting11); //["arif","rahman","raisa","razzak"]




