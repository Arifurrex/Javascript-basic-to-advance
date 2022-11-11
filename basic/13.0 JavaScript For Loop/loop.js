//! concept of loop 

/* 
text += cars[i] + "<br>"; এটা আমি ১০ বার কিভাবে লিখব 
তার জন্য আমরা লুপ use করব 

*/

const text = ["a", "b", "c", "d", "e", "f"];

for (let i = 0; i < 5; i++){
    console.log(text[i]);
}

// ==========
const cars = ['volvo', 'bmw', 'toyota', 'marsedis'];
for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}


// ! Different Kinds of Loops
/* 

 for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

*/


//  ! The For Loop

// * The for statement creates a loop with 3 optional expressions:

/* 
  for (expression 1; expression 2; expression 3) {
    code block to be executed
} 

*/

// Expression 1 is executed(one time) before the execution of the code block.

// Expression 2 defines the condition for executing the code block.

// Expression 3 is executed(every time) after the code block has been executed.


for (let i = 0; i < 5; i++) {
    console.log(i);;
}

/* 
উপরের example এ :
  Expression 1 - loop শুরু হওয়ার পূর্বে variable set করা হয় (let i = 0)
  Expression 2 - এ কন্ডিশন দেয় হয় 
  Expression 3 - প্রতেকবার code block executed.হওয়ার পর increment বা decrement করা হয় 

*/

//* Expression 1
/* 
Expression 1 is optional.
You can initiate many values in expression 1 (separated by comma):
*/
let letter = ['a', 'b', 'c', 'd'];
for (let i = 0, j = 2; i<letter.length;i++) {
    console.log(letter[i]);
}


/* 
And you can omitবর্জন করা expression 1  (like when your values are set before the loop starts):
 */
let nums = ['a', 'r', 'i', 'f'];
let i = 0;
let len = nums.length;
for (; i < len; i++) {
    console.log(nums[i]);
}



// * Expression 2
/* 
Expression 2 is also optional.
If you omitবর্জন করা expression 2, you must provide a break inside the loop
Otherwise the loop will never end
*/
let num = ['a', 'r', 'i', 'f'];
let m = 0;

for (; ; m++) {
    if (m > 10) {
        break; /* jodi m er man 10 er boro hoi tokon block theke ber hoye jabe */
    } else {
        console.log(m); /* 1 theke 10 print korbe */
    }
    
}

//!  Expression 3
/* Expression 3 is optional.*/




//! Loop Scope
//*Using var in a loop:

var ii = 5;

for (var ii = 0; ii < 10; ii++) {
    // some code
}
console.log(ii); //10



//*Using let in a loop:
let il = 5;

for (let il = 0; il < 10; il++) {
    // some code
}

console.log(il); //5
