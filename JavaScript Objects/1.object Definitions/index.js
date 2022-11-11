// ! JavaScript Objects
// In JavaScript, objects are king. If you understand objects, you understand JavaScript.

/* 
In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.

*/

// ! JavaScript Primitives
/* 
A primitive value is a value that has no properties or methods.
3.14 is a primitive value
A primitive data type is data that has a primitive value.
JavaScript defines 7 types of primitive data types:
*/

/* 
Examples
string
number
boolean
null
undefined
symbol
bigint
*/


// ! Mutableপরিবর্তনীয় and Immutable অপরিবর্তনীয়
 /*
 Primitive values are immutable (they are hardcoded and cannot be changed).
 if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.
 Mutable is a type of variable that can be changed.
 In JavaScript, only objects and arrays are mutable, not primitive values.

 A mutable object is an object whose state can be modified after it is created.

Immutables are the objects whose state cannot be changed once the object is created.
 
 */
/* 

Value	    Type	   Comment
"Hello"	    string	   "Hello" is always "Hello"
3.14	    number	    3.14 is always 3.14
true	    boolean	    true is always true
false	    boolean	    false is always false
null	    null (object)	null is always null
undefined	undefined	undefined is always undefined

*/

let m = 10;
m = 11;

console.log(m);

// ! Objects are Variables
// JavaScript variables can contain single values:

let person = "John Doe";

/* 
JavaScript variables can also contain many values.
Objects are variables too. But objects can contain many values.
Object values are written as name : value pairs (name and value separated by a colon).

*/

let person1 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
// A JavaScript object is a collection of named values

// ! It is a common practice to declare objects with the const keyword.
const person2 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };


// ! Object Properties
// The named values, in JavaScript objects, are called properties.

/* 

Property	Value
firstName	John
lastName	Doe
age     	50
eyeColor	blue
*/


/* 
Objects written as name value pairs are similar to:

Associative arrays in PHP
Dictionaries in Python
Hash tables in C
Hash maps in Java
Hashes in Ruby and Perl
*/

// ! Object Methods
/* 
Methods are actions that can be performed on objects.
Object properties can be both primitive values, other objects, and functions.
An object method is an object property containing a function definition.
*/

/* 

Property	Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() {return this.firstName + " " + this.lastName;}

*/

// JavaScript objects are containers for named values, called properties and methods.

// ! Creating a JavaScript Object
/* 
With JavaScript, you can define and create your own objects.

There are different ways to create new objects:

Create a single object, using an object literal.
Create a single object, with the keyword new.
Define an object constructor, and then create objects of the constructed type.
Create an object using Object.create().
*/


// ! Using an Object Literal
/* 
This is the easiest way to create a JavaScript Object.
Using an object literal, you both define and create an object in one statement.
An object literal is a list of name:value pairs (like age:50) inside curly braces {}.
The following example creates a new JavaScript object with four properties
*/

const person3 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// * Spaces and line breaks are not important. An object definition can span multiple lines:
const person4 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// * This example creates an empty JavaScript object, and then adds 4 properties:
const person5 = {};
person5.firstName = "John";
person5.lastName = "Doe";
person5.age = 50;
person5.eyeColor = "blue";


// ! Using the JavaScript Keyword new
// The following example create a new JavaScript object using new Object(), and then adds 4 properties:

const person6 = new Object();
person6.firstName = "John";
person6.lastName = "Doe";
person6.age = 50;
person6.eyeColor = "blue";

/* 
The examples above do exactly the same.
But there is no need to use new Object().
For readability, simplicity and execution speed, use the object literal method.
*/

// ! JavaScript Objects are Mutable
// Objects are mutable: They are addressed by reference, not by value.
// If person is an object, the following statement will not create a copy of person:

const x = person;  // Will not create a copy of person.

/* 
The object x is not a copy of person. It is person. Both x and person are the same object.
Any changes to x will also change person, because x and person are the same object.
*/

const perso7 = {
    firstName: "John",
    lastName: "Doe",
    age: 50, eyeColor: "blue"
}

const y = person7;
y.age = 10;      // Will change both x.age and person.age

