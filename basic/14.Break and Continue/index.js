// ! JavaScript Break and Continue

//The break statement "jumps out" of a loop.

//The continue statement "jumps over" one iteration in the loop.

// ! The Break Statement
for (let i = 0; i < 10; i++){
  if (i === 3) {
    break;
  } else {
    console.log(i);
  }
};
console.log("--");

// 0 1 2 er por block theke ber hoye jabe

// ! The Continue Statement
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  } else {
    console.log(i);
  }
};
console.log("--");

// 0 1 2 4 5 6 7 8 9
// 3 print hoi nai