//! JavaScript Object Prototypes
/* 
javascript হল prototype base language. java হল object orientet base language 
java তে কোন object বা class concept নয় কিন্তু javascript এ object বা class আছে বা 
prototype আছে । javascript প্রথম থেকে prototype আছে । prototype এর উপর base 
kore javascript এর সবগলো concept আসছে । 
*/

// All JavaScript objects inherit properties and methods from a prototype.

// In the previous chapter we learned how to use an object constructor:

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

const jhon = new Person("John", "Doe", 50, "blue");
console.log(jhon); //Person {firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue'}
const sally = new Person("Sally", "Rally", 48, "green");
console.log(sally);// Person {firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue'}

//* We also learned that you can not add a new property to an existing object constructor:
Person.nationality = "English";
console.log(Person);
/* 
ƒ Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
*/
console.log(Person.nationality); // English

const sally2 = new Person("Sally", "Rally", 48, "green","banglaLanuage");
console.log(sally2);
/* 
Person {
    firstName: 'Sally',
     lastName: 'Rally',
      age: 48, 
      eyeColor: 'green'}
*/





// !To add a new property to a constructor, you must add it to the constructor function:
function Person2(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}


// ! Prototype Inheritance উত্তরাধিকার
/* 
All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.
*/


//! Adding Properties and Methods to Objects
/* Sometimes you want to add new properties(or methods) to all existing objects of a given type.

Sometimes you want to add new properties(or methods) to an object constructor. */

// !Using the prototype Property
// The JavaScript prototype property allows you to add new properties to object constructors:
function Person3(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person3.prototype.nationality = "English";

const sally3 = new Person("Sally", "Rally", 48, "green");
console.log(sally3); 
// Person {firstName: 'Sally', lastName: 'Rally', age: 48, eyeColor: 'green'}
/*
constructor: ƒ Person(first, last, age, eyecolor)
nationality : "English"
 */


// ! The JavaScript prototype property also allows you to add new methods to objects constructors:
function Person4(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
};

const sally4 = new Person("Sally", "Rally", 48, "green");
console.log(sally4); // Person {firstName: 'Sally', lastName: 'Rally', age: 48, eyeColor: 'green'}
console.log(sally4.name()); // Sally Rally


// * Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.


// extra 
const jon = "jon";
console.log(jon); // jon

const jony = new String('jhon'); 
console.log(jony);// String {'jhon'}    Sting object return kore

// !  buliding function String er bethore nijeder method implement system.dont do it
String.prototype.doingFun = function () {
    return 'I am doing fun!';
}
const x = "Bangladesh";
console.log(x.doingFun()); // I am doing fun!





