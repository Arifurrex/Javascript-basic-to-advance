//!! javascript variable
/* 3 ta upaye javascript variable declare kora jai 
1.var 2.let 3.const */

// **variable declare 
// x , y , z declare with var keyword 
var x; // x declare with var keyword
var y; //y declare with var keyword
var z; //z declare with var keyword

// **variable x assign korar system
var x = 2; //ekane varible x a assign korlam 2. remember ekane x equal to 2 na
console.log(x);


//!! let
// **let Redeclare kore jabe na

//**let x = "arifur";
//**let x = "rahman";
/* error dekabe -identifier 'x' has already been declared
koron var x already declaire hoye geche */

//** let a = "anwar";
//** let a = 2;

// let Redeclare kore jabe na

// !block scoop
/* scoop 3 type
1.global scoop 2.function scoop 3.block scoop  

2015 age mane es6 er age javascript a 2 ta scoop chilo 1.global scoop 2.function scoop

es6 introduce let and const .and these keyword provide block scoop
variable can be declare inside a {} block cannot be access from outside block
*/


{ var d = 5 }; 
console.log(d); //{} scoop er betore varible declare korle outside theke tar value pawa jai


//**{}scoop block cannot be access from outside the block
{
    let e = 3
    console.log(e); //ekane kaj korbe
};
/* console.log(e); //eakne kaj korbe na */

// **function scoop
let f = 5; //ekane f variable r function er f same na
function account () {
    let f = 4;
    console.log(f);
} 
account(); 
console.log(f);

let w;
w = 'arifur';
w='rham'
console.log(w);
// !!Redeclare 
var x = 3; //allow
// let x = 2; //not allow

{
    let x = 6; //allow
    // let x = 7; //not allow

}

{
    let x = 4; //allow
    // var x = 7; //not allow
}

// !!let hoisting  

carName = "toyota";
var carName;
console.log(carName);

/* se prothome programme ta akbar deke nei.se deke nei kothi kothi var declairation ace.se asole protheme 
hoist kore var declairation golo upore niye jai */

/* var carName;
carName=default */
carName = "toyota";
var carName;
console.log(carName);

// **let er ketree
/* busName = "toyota";
let busName;
console.log(busName); */
// Cannot access 'busName' before initialization.ei error ta asbe

// senario
// let busName;
// busName = "toyota";
// let busName;
// console.log(busName);


// !!const 
let m; //eta k declaration bole.let a redeclair korte parbo na.
m = 10; //ekane assing korlam. let a reassain korte parbo
m = 11;
m = 12;

// **const a reassign korte parbo na
const n = 112;
// const n = 113; Identifier 'n' has already been declared


// **when to use javascript const
/* 1 a new Array
2 a new object
3 a new function
4 a new RegExp */

// **const object and array
/* // it doesnot define constant Value,its define contant referance value 
ami jokon const a=5 likche tokon se bolte cacce a er je reference value a k define kore 5 k define kore na */
/* 
ai karone const value,const Array,const object k reassign korte paren na  */

// **kinto apni cons Array change korte parben 
const i = [2, 6, 8, 5, 9];
// const i = 2; //eta parben na .reassign korte parben na
// const i = [2, 6, 8, 65, 19]; //eta parben na .reassign korte parben na

// const i[0]=4; //eta parbo na 
i[0] = 4; // eta tik ace .value change korte parbo 


