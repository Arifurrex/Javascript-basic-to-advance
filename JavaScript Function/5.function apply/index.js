// ! JavaScript Function apply()
// !Method Reuse
/* 
With the call() method, you can write a method that can be used on different objects.
*/


// !The JavaScript apply() Method
/* 
The apply() method is similar to the call() method (previous chapter).
In this example the fullName method of person is applied on person1:
*/
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
console.log(persn.fullName.apply(persn2)); //Mary doe

/* 
The Difference Between call() and apply()
The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.


*/
//! The apply() Method with Arguments
// The apply() method accepts arguments in an array:

const persons = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const persons1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(persons.fullName.apply(persons1, ["Dhaka", "Bnagladesh"]));
 //Jhon Doe,Dhaka,Bangladesh
console.log(persons.fullName.call(persons1, ["Dhaka", "Bnagladesh"]));
 //Jhon Doe,Dhaka,Bangladesh,undefine


// ! Compared with the call() method:
const prsons = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const prsons1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(prsons.fullName.call(prsons1, "Dhaka", "Bnagladesh"));
 //Jhon Doe,Dhaka,Bangladesh
