const car = {
    name: "toyota",
    model: "x-corolla",
    weight: "1200kg",
    color: "perl",
    start: function () {
        console.log("cat has started");
    },
    drive: function () {
        console.log("car has driven");
    }
};
// **two way we can access in object property 
// 1.objectName.property
console.log(car.name);
// 2.as like array 
console.log(car['name']);
// how to call function from object 
car.start();

// **when we use function as property in object is called method

//!! this keyword
// this key word refers owner of the function
// akta function er betore ar ekta function call kora jai 
const car2 = {
    name: "toyota",
    model: "x-corolla",
    weight: "1200kg",
    color: "perl",
    start: function () {
        this.drive();
        console.log("car2 has started");
    },
    drive: function () {
        console.log("car2 has driven");
    }
};
car2.start();

// !!literal syntex 
let x = "salmon"; //normal string
console.log(x);
console.log(typeof (x));

let x1 = new String("salmon"); //literal syntex 
console.log(x1); 
console.log(typeof (x1)); //eta akon object

let y = 2;
console.log(y);
console.log(typeof (y));

let y1 = new Number(2); //literal syntex of nymber
console.log(y1);  /* eta object return kore */
console.log(typeof(y1));

// do ot use literal syntex if not needed

// !!more about object
/* javascript a 2ta topic kobi essential 1.function 2.object
javascript e object janme apni 3 ta topic balobabe boje parben 1.json 2.nosql 3.rest apni */

// **** javascrip object
   /*  1.object ki ?
    2.instance ki ?
    3.object property ki ?
    4.object method ki? */

 /*
 * object
 object holo kono kichor boisisto
 * instance:
 instance holo object er value
 * value
 object er kicho property thake
 * value
 property er kicho value thake
* method:
object er betore je function thake tha holo method

*/

// !!4ta upaye method create kora jai
/* 
1.ojbect literal
2.new keyword
3.object.create(property)
4.new functionName(params) 
*/
// *object literal 
var a = {}; 
console.log(typeof (a));
/* 
variable a niye equl second bracket dile objcet create hoye jabe .
object create korar sobche sohoj abong sochecye besi baborar hoya object system
console.log(typeof (a)) dile dekabe aa variable akti objectFit: 
*/

// *new keyword
var b = new String("arif");  //ebabe o object create kora jai
console.log(typeof b); 

// *object.create(property)
/* var c = object.create(null);
console.log(typeof(c)); 
 */
// *new functionName(params)
function Man() {
    return 1;
}
var d = new Man();
console.log(d);

// akta function create korar por amra .function call new diye korle ta hoye jabe object.constructor function

// !!accessing object property 

var person = {
    name: 'arifur rahman',
    age: 33,
    skill:['js','html','css','php']
}

console.log(person);
// **2 way te property acces korte parben 
// way 1
console.log(person.name);
// way 2
console.log(person['name']);


// !! object a noton property kibabe add korben
var person2 = {
    name:'razzak'
}
person2.age = 50; // person2 object like dot notation diye property=value dite hobe
person2.professon = 'tecnatian';
console.log(person2);
