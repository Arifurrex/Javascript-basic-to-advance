//! The JavaScript this Keyword
// what is this ,what is binding

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// ! What is this?
/* 
javascript এ this keyword টা refer করে object কে । 
Which object depends on how this is being invoked(used or called).
The this keyword refers to different objects depending on how it is used:



In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.


this is not a variable. It is a keyword. You cannot change the value of this.

*/


// ! this in a Method
/* 
When used in an object method, this refers to the object.
In the example on top of this page, this refers to the person object.
Because the fullName method is a method of the person object.
*/

/* 
fullName: function() {
    return this.firstName + " " + this.lastName;
} 
*/


//! this Alone
/* 
When used alone, this refers to the global object.
Because this is running in the global scope.
In a browser window the global object is [object Window]:
*/

let x = this;


// ! this in a Function (Default)
/* 
In a function, the global object is the default binding for this.
In a browser window the global object is [object Window]:
funtion এর মদ্যে this keyword টা window অবজেক্ট কে define করছে । 
*/

function myFunction() {
    return this;
}


//! this in Event Handlers
// In HTML event handlers, this refers to the HTML element that received the event:

/* 
<button onclick="this.style.display='none'">
    Click to Remove Me!
</button>

 */



//! Object Method Bindingবাঁধাই

// Example
const person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function () {
        return this;
    }
};



// Example
const person3 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// i.e. this.firstName is the firstName property of this (the person object).

// Example
const person14 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    getFullName: function () {
        return this.fullName();
    }
};
console.log(person14.getFullName()); // John Doe


// ! Explicitস্পষ্ট Function Binding
// * The call() and apply() methods are predefined JavaScript methods.
// The call() and apply() methods are predefined JavaScript methods.
// They can both be used to call an object method with another object as argument.

/* 
The Function call() Method
The Function apply() Method
The Function bind() Method
*/

// The example below calls person1.fullName with person2 as an argument, this refers to person2, even if fullName is a method of person1:
// Example
const person4 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    age:21
}

const person5 = {
    firstName: "John",
    lastName: "Doe",
}

console.log(person4.fullName()); // undefined undefined 
person4.fullName.call(person5); // Return "John Doe":


// ! Function Borrowing ধার করা
/* 
With the bind() method, an object can borrow a method from another object.
This example creates 2 objects (person and member).
The member object borrows the fullname method from the person object:
*/

const person909 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName909 = person909.fullName.bind(member);
console.log(fullName909()); //Hege Nilsen


// !This Precedence অগ্রাধিকার
// To determine which object this refers to; use the following precedence of order.



/*
 Precedence	   Object
1	           bind()
2	           apply() and call()
3	           Object method
4	           Global scope

 */


/* 
Is this in a function being called using bind()?
Is this in a function being called using apply()?
Is this in a function being called using call()?
Is this in an object function (method)?
Is this in a function in the global scope
*/







// !JavaScript 'this' keyword .call(), .apply() and .bind()
//this keyword টা একটা function কে different context এ reuse করতে help করে ।
/* 
implicit binding অন্তর্নিহিত বাঁধাই
explicit binding স্পষ্ট বাঁধাই
new binding
window binding
*/

// *implicit binding
const person99 = {
    name: 'sakib',
    age: 35,
    playerNamePrint: function (name) {
        console.log(this.name); // sakib
    }
}

person99.playerNamePrint();
// এটাই হল implicit binding


// more implicit example 
var printPlayerFunction = function (obj) {
    obj.playerName = function () {
        return this.name;
    }
};

var sakib = {
    name: 'sakib',
    age: 35
};

var tamim = {
    name: 'tamim',
    age: 30
};

printPlayerFunction(sakib); // এটা ফাংশন কল করল আর  parameter হিসাবে object দিল 
printPlayerFunction(tamim);

console.log(sakib.playerName()); // sakib
console.log(tamim.playerName()); // tamim



// another example 
var person111 = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name); //titi
        }
    }

};

var titi = person111('titi', 35);
titi.printName();


// another example 
var personX = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name); //titi
        },
        father: {
            name: 'mr.xx',
            printName: function () {
                console.log(this.name);
            }
        }
    }

};
var rojo = personX('rojo', 22);
rojo.printName(); //rojo
rojo.father.printName();  // mr.xx


//another example
var rakib = {
    name: 'rakib',
    age: 36,
    printName: function () {
        console.log(this.name); //rakib
    }
}
rakib.printName();


//! explicit binding

// example
const person100 = {
    fullName: function (name) {
        return this.name;
    }
}

const person101 = {
    name: 'habiba',
}

console.log(person100.fullName.call(person101)); //habiba

// এটাই হল explicit binding


//another example call()
var printName = function() {
    console.log(this.name); //rakib
}

var rakib = {
    name: 'rakib',
    age: 36,     
} 

printName.call(rakib);
//call অনেকগুলো parameter recieve করে


// another example call() parameter
//call অনেকগুলো parameter recieve করে
var printName = function (v1,v2,v3) {
    console.log(this.name); //rakib
    console.log(`${this.name} is a ${v1}, ${v2}, ${v3}`); //rakib
// rakib is a good person, active, puntual
}

var rakib = {
    name: 'rakib',
    age: 36,
}
var v1 = "good person";
var v2 = "active";
var v3 = "puntual";

printName.call(rakib,v1,v2,v3);
//call অনেকগুলো parameter recieve করে


// ! apply() parameter
//apply() ও call() এর মতো কিন্তু apply() array recieve kore

var printName = function (v1, v2, v3) {
    console.log(`${this.name} is a ${v1}, ${v2}, ${v3}`); //rakib
    // rakib is a good person, active, puntual
}

var rakib = {
    name: 'rakib',
    age: 36,
}
var v1 = "good person";
var v2 = "active";
var v3 = "puntual";

var v = [v1, v2, v3];

printName.apply(rakib, v); 



//! bind()
/* 
bind() ও call() এর মতো কিন্তু bind() function কে direct call করে দেয় না । 
ও function instance return করে 
*/

var printName = function (v1, v2, v3) {
    console.log(`${this.name} is a ${v1}, ${v2}, ${v3}`); //rakib
    // rakib is a good person, active, puntual
}

var rakib = {
    name: 'rakib',
    age: 36,
}
var v1 = "good person";
var v2 = "active";
var v3 = "puntual";

var v = [v1, v2, v3];

var newFunc = printName.bind(rakib, v1, v2, v3); // এখানে different 
newFunc(); 

// ! new binding
function Person(name, age) {
    // let this = Object.create(null);
    this.name = name;
    this.age = age;
    // return this 
}

var sakib = new Person('sakib', 23);
console.log(sakib.name); //sakib
console.log(sakib.age); //23

// এটাকে construction function বলে


// ! window binding
// call() binding
var Nameprint = function () {
    console.log(this.name); //mow
};
var mow = {
    name: 'mow'
}; 

Nameprint.call(mow);


// window binding
var Nameprint = function () {
    console.log(this.name); // 
    console.log(this); // window k point korbe
};
var mow = {
    name: 'mow'
};

Nameprint();
