//! JavaScript Date Objects

const d = new Date();
console.log(d); // Sun Oct 09 2022 21:47:25 GMT+0600 (Bangladesh Standard Time)

// ! Creating Date Objects
/* Date objects are created with the new Date() constructor.

There are 4 ways to create a new date object:
 */

console.log(new Date());
// console.log(new Date(year, month, day, hours, minutes, seconds, milliseconds));
// console.log(new Date(milliseconds));
// console.log(new Date(date string));

console.log(new Date(2012, 10)); // Thu Nov 01 2012 00:00:00 GMT+0600 (Bangladesh Standard Time)
console.log(new Date(200000)); // Thu Jan 01 1970 06:03:20 GMT+0600 (Bangladesh Standard Time)


// ! new Date()
// new Date() creates a new date object with the current date and time:

const dt = new Date();
console.log(dt); // Mon Oct 10 2022 00:22:13 GMT+0600 (Bangladesh Standard Time)

const dym = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(dym); // Mon Dec 24 2018 10:33:30 GMT+0600 (Bangladesh Standard Time)


