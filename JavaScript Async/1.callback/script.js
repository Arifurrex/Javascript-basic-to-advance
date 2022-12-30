/* 
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished
*/

// ! Function Sequence
/*  
JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
This example will end up displaying "Goodbye":

javascript function execute হয় sequence of called । function define অনুসারে sequnce হয় না 

*/

function first(){
    console.log('1st');
}
function second(){
    console.log('2nd');
}

second(); // 2nd
first(); // 1st

//  * প্রথমে 2nd than 1st show করবে । 


// ! Sequence Control
/* 
Sometimes you would like to have better control over when to execute a function.
Suppose you want to do a calculation, and then display the result.
You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:
*/
function myDisplayer(result) {
    console.log(result); // 10 eta show korbe
  }
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  let result = myCalculator(5, 5); // eta prothome execute hobe
  myDisplayer(result); // eta pore execute hobe



// ! অন্যভাবে 
/* 
  Or, you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer):
*/

function Displayer(result) {
    console.log(result);  // 10
  }
  
  function Calculator(num1, num2) {
    let sum = num1 + num2;
    Displayer(sum);
  }
  
  Calculator(5, 5);

/* 
The problem with the first example above, is that you have to call two functions to display the result.
The problem with the second example, is that you cannot prevent the calculator function from displaying the result.
Now it is time to bring in a callback.
*/

// ! JavaScript Callbacks
/* 
A callback is a function passed as an argument to another function.
Using a callback, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished:
*/

function Disply(some) {
  console.log(some); // 10
  }
  
  function Cal(num1, num2, Callback) {
    let sum = num1 + num2;
    Callback(sum);
  }
  
  Cal(5, 5, Disply);

/* 
ekane Cal(5, 5, Disply) er disply call korchi na 
eta disply function defination


cla(5,5,function(some){
    console.log(some);
})

*/
/* 

In the example above, Disply is a called a callback function.
It is passed to Cal() as an argument.
*/

/* 
! Note
When you pass a function as an argument, remember not to use parenthesis.

Right: myCalculator(5, 5, myDisplayer);

Wrong: myCalculator(5, 5, myDisplayer());
*/

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
console.log(posNumbers) ; //(4) [4, 1, 5, 9]

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}




