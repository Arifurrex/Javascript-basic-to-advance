// ! JavaScript Object Accessors

/* 
JavaScript Accessors (Getters and Setters)
ECMAScript 5 (ES5 2009) introduced Getter and Setters.

Getters and setters allow you to define Object Accessors (Computed Properties).
*/

// !JavaScript Getter (The get Keyword)
// This example uses a lang property to get the value of the language property.

const person = {
    fname: "arifur",
    lname: "rahman",
    language: "en",
    get lang() {
        return this.language;
    }
};

console.log(person.lang); // en

// person.lang() bracket hobe na


// !JavaScript Setter(The set Keyword)
// This example uses a lang property to set the value of the language property.

const person1 = {
    fname: "abdul",
    lname: "alim",
    language:"",
    set lang(lang) {
        this.language = lang;
    }
}

// Set an object property using a setter:
person1.lang = "bn";

console.log(person1.language); // bn


// ! JavaScript Function or Getter?
// What is the differences between these two examples?

// *example 1 function
const person2 = {
    fname: "abdul",
    lname: "alim",
    fullName: function () {
        return `${this.fname} ${this.lname}`
    }
}
console.log(person2.fullName()); //abdul alim


//* example 2  get
const person3 = {
    fname: "abdul",
    lname: "alim",
    get fullName() {
        return `${this.fname} ${this.lname}`;
    } 
}

console.log(person3.fullName); // abdul alim



/* 
Example 1 access fullName as a function: person.fullName().
Example 2 access fullName as a property: person.fullName.
The second example provides a simpler syntax.
*/

// !Data Quality
/* 
JavaScript can secure better data quality when using getters and setters.
Using the lang property, in this example, returns the value of the language property in upper case:
*/

// Create an object: get
const person4 = {
    firstName: "John",
    lastName: "Doe",
    language: "english",
    get lang() {
        return this.language.toUpperCase();
    }
};
console.log(person4.lang); // ENGLISH
// Using the lang property, in this example, stores an upper case value in the language property:


//* example 2
// set
const person5 = {
    fname: "jahon",
    lname: "Doe",
    language:"",
    set lang(lang) {
        return this.language=lang.toUpperCase();
    }
}
person5.lang = "bangla";
console.log(person5.language); //BANGLA


//! Why Using Getters and Setters?
/* 
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes
*/


// *example 1 function
const person6 = {
    fname: "abdul",
    lname: "alim",
    fullName: function () {
        return `${this.fname} ${this.lname}`
    }
}
console.log(person6); 

/* 
{fname: 'abdul', lname: 'alim', fullName: ƒ}
fname:  "abdul"
*fullName:  ƒ ()
lname:  "alim"
*/



//* example 2  get
const person7 = {
    fname: "abdul",
    lname: "alim",
    get fullName() {
        return `${this.fname} ${this.lname}`;
    }
}

console.log(person7); // abdul alim

/* 
{fname: 'abdul', lname: 'alim'}
fname:  "abdul"
*fullName: "abdul alim"
lname: "alim"
get fullName: ƒ fullName()

*/


// ! Object.defineProperty()
// The Object.defineProperty() method can also be used to add Getters and Setters



















