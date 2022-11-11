// ! JavaScript While Loop

// * The While Loop
// while loop আর for loop একই কাজ করে
// আমরা জানি for loop এর খেততরে প্রতেকটা expression হল optional
// while loop এর খেততরে ১ম ও last expression optional হয় তবে while loop use করবেন

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++
// }
// যতকন i এর মান ১০ এর ছোট হবে ততক্ষণ পর্যন্ত loop চলবে



// ! The Do While Loop
//The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

let j = 0;
let text = "";
do {
  text += "The number is " + j;
  j++;
  console.log(j);
}
while (j < 10);

console.log(`text ${j}`);
