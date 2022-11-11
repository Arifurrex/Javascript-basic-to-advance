let time = 9;
if (time < 10) {
    console.log(greeting = "Good morning");
} else if (time < 20) {
    console.log(greeting = "Good day");
} else {
    console.log(greeting = "Good evening");
}

// ! JavaScript Switch Statement
// switch holo if else er updated version

/* 
switch(expression) {
  case x:
     code block
    break;
  case y:
     code block
    break;
  default:
     code block
}
*/

switch (age = 15) {
    case 15:
        console.log("you are still young .wait one year for vote");
        break;
    case 18:
        console.log("you are perfect for vote");
        break;
    case 19:
        console.log("you are a adult person for vote for your county");
        
}

// another example

console.log(new Date().getDay()); //3

switch (new Date().getDay()) {
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thrusday";
        break;
    case 5:
        day = "friday";
        break;
    case 7:
        day = "saturday";
    
}
console.log(day); // wednesday

// ! The default Keyword
// The default Keyword অনেকটা last এর else এর মতো
// The default keyword specifies the code to run if there is no case match:

switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}
console.log(text); // Looking forward to the Weekend


//! Common Code Blocks
/* Sometimes you will want different switch cases to use the same code.

In this example case 4 and 5 share the same code block, and 0 and 6 share another code block: */


switch (new Date().getDay()) {
    case 3:
    case 5:
        text1 = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text1 = "It is Weekend";
        break;
    default:
        text1 = "Looking forward to the Weekend";
}

console.log(text1); //Soon it is Weekend

// নিচের মতো না লাইক উপরের মত লিকতে পার
/* 
switch (new Date().getDay()) {
    case 3:
        text1 = "Soon it is Weekend";
        break;
    case 5:
        text1 = "Soon it is Weekend";
        break;
    case 0:
        text1 = "It is Weekend";
        break;
    case 6:
        text1 = "It is Weekend";
        break;
    default:
        text1 = "Looking forward to the Weekend";
}

console.log(text1); //Soon it is Weekend */


//! Strict Comparison
// data type check korbe
