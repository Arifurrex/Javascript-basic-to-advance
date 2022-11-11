// ! JavaScript Get Date Methods

// *Get the Current Time
const date = Date.now();
console.log(date); // 1665341173625
// Return the current date / time in milliseconds since January 1, 1970:

/* getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getDay()	Get the weekday as a number (0-6)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970) */

//!The getFullYear() Method

const d = new Date();
console.log(d.getFullYear()); // 2022

const dmy = new Date("2001-03-25");
console.log(dmy.getFullYear()); // 2001

//!The getMonth() Method
// * The getMonth() method returns the month of a date as a number (0-11):

const dm = new Date();
console.log(dm.getMonth()); //9

//* You can use an array of names, and getMonth() to return the month as a name:
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dmM = new Date();
let month = months[d.getMonth()];
console.log(month); //October


//! The getDate() Method
//The getDate() method returns the day of a date as a number (1-31)

const dd = new Date();
console.log(dd.getDate()); //10

//! The getHours() Method
// The getHours() method returns the hours of a date as a number (0-23):

const dh = new Date();
console.log(dh.getHours()); // 12


// ! The getMinutes() Method

const dmin = new Date();
console.log(dmin.getMinutes()); //58


//! The getSeconds() Method

const ds = new Date();
console.log(ds.getSeconds()); //15


// ! The getMilliseconds() Method

const dms = new Date();
console.log(dms.getMilliseconds()); //524


// ! The getDay() Method

const dgd = new Date();
console.log(dgd.getDay()); // 1

/* Note
In JavaScript, 
the first day of the week (0) means "Sunday",
even if some countries in the world consider 
the first day of the week to be "Monday" 
*/

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dys = new Date();
let day = days[d.getDay()];

console.log(day); // Monday

//! The getTime() Method
const dt = new Date();
console.log(dt.getTime()); //1665342234826