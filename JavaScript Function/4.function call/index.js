// ! JavaScript Function call()
// !Method Reuse
/* 
With the call() method, you can write a method that can be used on different objects.
*/

// !All Functions are Methods
/* 
In JavaScript all functions are object methods.
If a function is not a method of a JavaScript object, it is a function of the global object (see previous chapter).
The example below creates an object with 3 properties, firstName, lastName, fullName.
*/
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

// This will return "John Doe":
console.log(person.fullName());  

// !The JavaScript call() Method
// example 1
const persn = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const persn1 = {
    firstName: "John",
    lastName: "Doe"
}
const persn2 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "John Doe":
console.log(persn.fullName.call(persn2)); //Mary doe


//! The call() Method with Arguments
// The call() method can accept arguments:

const persons = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const persons1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(persons.fullName.call(persons1, "Dhaka", "Bnagladesh")); //Jhon Doe,Dhaka,Bangladesh



