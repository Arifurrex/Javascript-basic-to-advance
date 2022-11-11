// !JavaScript Object Constructors

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// *Notes
// *It is considered good practice to name constructor functions with an upper-case first letter

/* 
About this
In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.
*/

// ! Object Types (Blueprints) (Classes)
/* 
The examples from the previous chapters are limited. They only create single objects.
Sometimes we need a "blueprint" for creating many objects of the same "type".
The way to create an "object type", is to use an object constructor function.
In the example above, function Person() is an object constructor function.
Objects of the same type are created by calling the constructor function with the new keyword:
*/

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// ! Adding a Property to an Object
// Adding a new property to an existing object is easy:
myFather.nationality = "English";
// The property will be added to myFather. Not to myMother. (Not to any other person objects).
console.log(myFather.nationality); // English

// ! Adding a Method to an Object
myFather.name = function () {
    return this.firstName + " " + this.lastName;
};




// !Adding a Property to a Constructor
// You cannot add a new property to an object constructor the same way you add a new property to an existing object:
function Person8(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Person8.nationality = "English";
const PersonArif=new Person8("arif","rahman",32,"black")
console.log(PersonArif);
console.log(PersonArif.nationality); // undefine


// To add a new property to a constructor, you must add it to the constructor function:

function Person2(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}
// This way object properties can have default values.


//! Adding a Method to a Constructor
// Your constructor function can also define methods:
function Person3(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.name = function () {
        return this.firstName + " " + this.lastName;
    };
}
console.log(Person3);


/* 
You cannot add a new method to an object constructor the same way you add a new method to an existing object.

Adding methods to an object constructor must be done inside the constructor function:
*/

function Person4(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    };
}
console.log(Person4);

//! Built -in JavaScript Constructors
// JavaScript has built -in constructors for native objects:
/* 
new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object

*/


// The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.

/* 
Did You Know?
As you can see above, JavaScript has object versions of the primitive data types String, Number, and Boolean. But there is no reason to create complex objects. Primitive values are much faster:

Use string literals "" instead of new String().

Use number literals 50 instead of new Number().

Use boolean literals true / false instead of new Boolean().

Use object literals {} instead of new Object().

Use array literals [] instead of new Array().

Use pattern literals /()/ instead of new RegExp().

Use function expressions () {} instead of new Function().
*/

/* 
let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean

const x4 = {};           // new Object object
const x5 = [];           // new Array object
const x6 = /()/          // new RegExp object
const x7 = function(){}; // new function

*/

/* 
!String Objects
Normally, strings are created as primitives: firstName = "John"

But strings can also be created as objects using the new keyword:
firstName = new String("John")
 */

/* 
!Number Objects
Normally, numbers are created as primitives: x = 30

But numbers can also be created as objects using the new keyword:
x = new Number(30)
*/

/* 
!Boolean Objects
Normally, booleans are created as primitives: x = false

But booleans can also be created as objects using the new keyword:
x = new Boolean(false)
*/