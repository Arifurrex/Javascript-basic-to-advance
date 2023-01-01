// sychronous js .bydefault js sychronous

console.log('line 1'); // line 1
console.log('line 2'); // line 2
console.log('line 3'); // line 3
console.log('line 4'); // line 4

/* 
"I will finish later!"
Functions running in parallel with other functions are called asynchronous
A good example is JavaScript setTimeout()
*/

/* 
javascript er building function holo setTimeout
setTimeout() function 2ta parameter nei 

*/

console.log('line1');

setTimeout(() => {
    console.log('line 2');
}, 3000);

console.log('line 3');

/* 
line1
line 3
line 2
*/
 // * setTimeout() holo asyncronous js function 

// ! Waiting for a Timeout
/* 
When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out
*/

setTimeout(myFunction, 3000);

function myFunction() {
    console.log("i love u");
}

// 3000 milisecond পর i love u show করবে 

/* 
In the example above, myFunction is used as a callback.
myFunction is passed to setTimeout() as an argument.
3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.
*/
/* 
Note
When you pass a function as an argument, remember not to use parenthesis.
Right: setTimeout(myFunction, 3000);
Wrong: setTimeout(myFunction(), 3000);
Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:
*/

setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  console.log(value);
}


// 3000 milisecond পর i love u show করবে 

/* 
In the example above, function(){ myFunction("I love You !!!"); } is used as a callback. It is a complete function. The complete function is passed to setTimeout() as an argument.
3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.
*/



// ! Waiting for Intervals:
// setInterval টা countdown করে 
/* 
When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
*/
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
 console.log(
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds()
 );
  
}
 // 1000 milisecond পর পর  myfunction টা run হবে । এটা বার বার countdown হবে 

 /* 
 In the example above, myFunction is used as a callback.
myFunction is passed to setInterval() as an argument.
1000 is the number of milliseconds between intervals, so myFunction() will be called every second.
 */

/* 
Callback Alternatives
With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallell.

But, asynchronus programmes are difficult to write and difficult to debug.

Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.
 */













