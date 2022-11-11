// !!Converting Arrays to Strings
const fruits = ["banana", "mango", "apple", "lemon"];
console.log(fruits); // ['banana', 'mango', 'apple', 'lemon']
console.log(fruits.toString()); // banana,mango,apple,lemon

// !! join() method
// join method টা ও array কে  string এ রপান্তর করে ।
// ডিফারেন্টটা হল separator add করতে পারবে (" * ")

const fruiti = ["banana", "mango", "apple", "lemon"]; 
console.log(fruiti.join(" - ")); // banana - mango - apple - lemon

// ! Popping and Pushing
// array নিয়ে যখন কাজ করবে তখন array তে element add অথবা remove করতে হয়

// !JavaScript Array pop()
// * pop() method remove last element of an array 
const fruitPop = ["banana", "mango", "apple", "lemon"]; 
console.log(fruitPop.pop()); // lemon
console.log(fruitPop); //['banana', 'mango', 'apple']

//! JavaScript Array push()
// * push() method add last element of an array
const fruitPush = ["banana", "mango", "apple", "lemon"]; 
console.log(fruitPush.push('pineapple')); // 5
console.log(fruitPush); // ['banana', 'mango', 'apple', 'lemon', 'pineapple']


//! Shifting Elements স্থানান্তর
//* shift() method ta pop() method এর মতো  .
//* ডিফারেন্ট টা হল shift() method এ element first এ element remove  হবে

const fruitShift = ["banana", "mango", "apple", "lemon"];
console.log(fruitShift.shift()); // banana
console.log(fruitShift); // ['mango', 'apple', 'lemon']

// ! JavaScript Array unshift()
//* unshift() method ta push() method এর মতো  .
//* ডিফারেন্ট টা হল shift() method এ element first এ element add  হবে

const fruitUnshift = ["banana", "mango", "apple", "lemon"];
console.log(fruitUnshift.unshift("guava")); //5
console.log(fruitUnshift); // ['guava', 'banana', 'mango', 'apple', 'lemon']

// ! Changing Elements
//*Array elements are accessed using their index number

const fruitcngEle = ["banana", "mango", "apple", "lemon"];
console.log(fruitcngEle[0] = "pineapple"); //pineapple
console.log(fruitcngEle); //['pineapple', 'mango', 'apple', 'lemon']

// এখানে banana রিমুভ হয়ে গিয়েছে আর pineapple add হয়েছে


//! JavaScript Array length
const fruit3 = ["banana", "mango", "apple", "lemon"];
console.log(fruit3.length); //4
console.log(fruit3[fruit3.length]="kiwi");


//! Merging (Concatenating) Arrays
// * concat() এর মদ্যমে  array concate করে 

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren); //'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']

// * concat() এর মদ্যমে  যতটা ইচ্ছে array concate করে

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const ourChildren = arr1.concat(arr2, arr3);

console.log(ourChildren);//['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan']

//* The concat() method can also take strings as arguments:
const arr = ["Emil", "Tobias", "Linus"];
const Children = arr1.concat("Peter"); 
console.log(Children); //['Cecilie', 'Lone', 'Peter']


// ! Splicing and Slicing Arrays
//* The splice() method adds new items to an array.
//* The slice() method slices out a piece of an array.

//! JavaScript Array splice()
//* The splice() method can be used to add new items to an array:

const fruito = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruito.splice(2, 0, "Lemon", "Kiwi")); //
console.log(fruito); //['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']

// ১ম পেরামিটার define the position যেকানে নুতন element add হবে
// ২য়  পেরামিটার define করে কথগোল element remove হবে
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added হবে

//summary of splice: ২য় নম্বর element থেকে lemon এবং kiwi যোগ করব আর ০ element remove হবে
// এখানে banana হল 1 আর অরেঞ্জ হল ২ 



//* The splice() method returns an array with the deleted items:

const fruitis = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitis.splice(2, 2, "Lemon", "Kiwi")); //['Apple', 'Mango']
console.log(fruitis); //['Banana', 'Orange', 'Lemon', 'Kiwi']


// * Using splice() to Remove Elements

const fruitsrm = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitsrm.splice(0, 1)); //'Banana']
console.log(fruitsrm); // ['Orange', 'Apple', 'Mango']


// ! JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array.
// This example slices out a part of an array starting from array element 1 ("Orange"):

const fruitslice = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruitslice.slice(1)); // ['Orange', 'Lemon', 'Apple', 'Mango']
console.log(fruitslice); // ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']


// This example slices out a part of an array starting from array element 3 ("Apple"):
const fruitslice2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruitslice2.slice(3)); // ['Apple', 'Mango']
console.log(fruitslice2); // ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']




// note
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
//The slice() method can take two arguments like slice(1, 3).
//The method then selects elements from the start argument, and up to (but not including) the end argument.

// another example
const fruitsli = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruitsli.slice(1, 3)); // ['Orange', 'Lemon'];
console.log(fruitsli); //['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']


// note
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.

// another example
const fruitslian = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruitslian.slice(2)); // ['Lemon', 'Apple', 'Mango']
console.log(fruitslian); //['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']

// note
// If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.




