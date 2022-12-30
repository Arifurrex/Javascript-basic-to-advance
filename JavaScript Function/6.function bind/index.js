/* 
Bind() = Borrows a function,& create a copy.
         “this” keyword replace with the object passed in as argument 

*/

let dog = {
    name: "dog",
    bark: function () {
        console.log(this.name, "is barking");
    }
}
let parrot = {
    name: "parrot",
    chirp: function () {
        console.log(this.name,'is chirping');
    }
}

let speak = dog.bark.bind(parrot);
console.log(speak());

// another example:

speak = function (sound) {
    console.log(this.name, "is" , sound);
}
let dog2 = {
    name: "dog",
}
let parrot2 = {
    name:"parrot",
}

bark = speak.bind(dog2, "barking");
chirp = speak.bind(parrot2, "chirping");

bark();
chirp();



