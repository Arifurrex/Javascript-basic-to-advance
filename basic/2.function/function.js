function sleep (a,b) {
    console.log(a +" is sleeping from "+ b );
}
sleep('jasim', 10); 
sleep('karim',1);
sleep('lahim',3);
sleep('anam',4);
// function create korlam and function call korlam

// !argument
sleep('jasim', 11) //funtion call er value golo holo argument

//!perameter
function sleep (a,b) { //funtion create er referance holo perameter
    console.log(a + " and" + b);
}



//! function invocation

const wake = function (a) {
    console.log(a);
}
wake(10)
wake(11); //eta funtion invocation bole

// !!funtion invocation  kokon kokon hote pare
/* 1.when an event occar
2.when it is invoke from javascript code 
3.automatically call */


//!function Return
// jokon javascript return statement porjonto jai tokon function stop executing .return holo last jinis
 function retrurnExample (a) {
     console.log(a +' this is return  example');
     return 4;
}
retrurnExample('arifur');

$x = retrurnExample(); //return ta returnExample() k replace kore bose porbe.so $x=4; hobe
console.log($x);

// !!function return more
function myFunction(a,b) {
    return (a * b);
} 
console.log(myFunction(3, 4));


// !undefine example 
function myUndefine (a) {
    console.log('hello');    
    // return undefined;  kono kicho return na korle javasciprt automatically undefine return kore
}
myUndefine(); 
console.log(myUndefine()); //result asbe undefined.

/* ekane myUndefine() k console log korle undefine dekabe karon function body te return korle ta
 caller k replace kore tate return vlaue ta bosabe  */


//  !!() parantasis na dile ki hoi callerName a 
function callerName (a) {
    console.log('hello');
};
console.log(callerName);  
//result nicher eta asbe jodi function call korrar somoi () na dewa hoi.
//function object ta return korbe instate of result
/* ƒ callerName (a) {
    console.log('hello');
} */


// !function use as variable value 
const wakey = function (a) {
    console.log(a);
}
wakey(10)


//!local variable

let x = 30; //ei x ta r function er x same na
var y = 55;//ei y var r betorer vaar ak na
function localVar () {
    let x = 20;
    var y = 99;
    console.log(x,y);
};
localVar();
console.log(x);
console.log(y);

// function er boter er doniya r bahirer doniya ak na . 
