//! JavaScript Set Date Methods
//* Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

/* 
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
*/

//!The setFullYear() Method
const d = new Date();
console.log(d.setFullYear(2020)); // 1602270446407

const dy = new Date();
console.log(dy.setFullYear(2020, 11, 3));  // 1606936101869

// ! The setMonth() Method
const dm = new Date();
console.log(dm.setMonth(11)); // 1670612944095

//! The setDate() Method
const dd = new Date();
console.log(dd.setDate(15));  // 1665774626946