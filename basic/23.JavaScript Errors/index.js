// ! JavaScript Errors

//! Errors Will Happen!
/* Errors Will Happen!
যখন জাভাস্ক্রীপ্ট কোড execute হয় , তখন বিভিন্ন error হতে পারে 
Error হতে পারে programmer এর কারণে ,error হতে পারে wrong output এর জন্যে । 
Unforeseeable বা অপ্রত্যাশিত কারেনে ও error হতে পারে । 
 */

// syntex 
try {
    //regular code
} catch (err) {
    //try e kono error thakle ta catch dore felbe
    // throw catch er modde hoe 
    // if (val < 10) throw "less than ten";
    // catch (x) ekta parameter nibe
} finally {
    //sob code er sese a finally hobe
}




// !try catch finally
/* যখন error হবে ,javascript normally stop hobe আর error দিবে 
 এটাকে  throw an exception (throw an error) বলে 
*/

/* 
The throw statement allows you to create a custom error.
Technically you can throw an exception (throw an error).
The exception can be a JavaScript String, a Number, a Boolean or an Object: */


let button = document.getElementById('demo');
let input = document.getElementById('input');
let message = document.getElementById('message');

button.addEventListener('click', function () {
    let val = input.value;

    try {
        if (isNaN(val)) throw "not a Number"; //not a Number যদি নম্বর না হয় 
        if (val < 10) throw "less than ten";
        if (val > 10) throw "greater than ten"; 
    } catch (err) {
        message.innerHTML = err;

    } finally {
        console.log('this is finally');
    }
});






















