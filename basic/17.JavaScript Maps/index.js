// object 
const persons = {
    fname: "arifur",
    lname: "rhaman",
}
/* ekane object এর key ta always string hoi."" na dile o eta string .karon eta onno kono data type hoi na
fname holo key r "arifur" holo value
r map er kettre key any data hoi 
*/

//! JavaScript Maps
/* 
A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.

map e key and value thake
*/

// ! Essential Map Methods
/* 
new map()  set() get()  delete()  has()  forEach() entries()  size
 */

// ! How to Create a Map
/* 
You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()
*/

const fruits = new Map([
    ["apple", 500],
    ["mango",300],
    ["orange", 200],
]);
//new Map er modde একবারে key and value set kora jai


//* another example:
/*map এ  key ta আমরা any data type dite pari.
kinto object এ ketrre আমরা string ছাড়া  অন্য কোন data টাইপ use করতে পারব না 
এটাই হল object এর সাথে map এর different । 
এই কারণে map এসেছে 
*/

const school = new Map([
    [4000, 5000],
    ['gamia', 5000],
    ['civil', 5000],
    ['ronkeli', 5000],
    
])
console.log(school); // Map(4) {4000 => 5000, 'gamia' => 5000, 'civil' => 5000, 'ronkeli' => 5000}


//! The set() Method
const cars = new Map();
cars.set('volvo', 2015);
cars.set('toyota', 2025);
cars.set('bmw', 2045);

console.log(cars); //  Map(3) {'volvo' => 2015, 'toyota' => 2025, 'bmw' => 2045}

//! The set() method can also be used to change existing Map values:
// value change korte set() use hoi
cars.set('bmw', 2005);
console.log(cars);// Map(3) {'volvo' => 2015, 'toyota' => 2025, 'bmw' => 2005}




// ! The get() Method
//*The get() method gets the value of a key in a Map:
// get() er maddome key এর value পাওয়া যায়

const student = new Map([
    ['rahim', 21],
    ['josim', 20],
    ['korim', 22],
    ['rahma', 19],
]);
console.log(student); // Map(4) {'rahim' => 21, 'josim' => 20, 'korim' => 22, 'rahma' => 19}
console.log(student.get('rahim')); //21

//!The size Property
console.log(student.size); // 4

//! The delete() Method
console.log(student.delete('rahim'));
console.log(student); //Map(3) {'josim' => 20, 'korim' => 22, 'rahma' => 19}

//! The has() Method
console.log(student.has("josim")); //true 
console.log(student.has("rahim")); //false

//! JavaScript Objects vs Maps
/* 
	             Object	                              Map
Iterable	 Not directly iterable	              Directly iterable
Size	     Do not have a size property	      Have a size property
Key Types	 Keys must be Strings (or Symbols)	  Keys can be any datatype
Key Order	 Keys are not well ordered	          Keys are ordered by insertion
Defaults	 Have default keys	                  Do not have default keys
*/

//! The forEach() Method

const schools = new Map([
    ['gamia', 1991],
    ['ms', 1951],
    ['scholarshome', 2000],
    ['modonMohon', 1901],
]);
console.log(schools); //Map(4) {'gamia' => 1991, 'ms' => 1951, 'scholarshome' => 2000, 'modonMohon' => 1901}

schools.forEach(myFunction);
function myFunction(value , key) {
    console.log(value); // 1991 1951 2000 1901 
    console.log(key); // gamis ms schorshome modonMohan
    
}

//! The entries() Method
const childrens = new Map([
    ['shahin', 24],
    ['ibrahim', 14],
    ['jolfiquer', 10],
    ['jasmin', 4],
]);
console.log(childrens); // Map(4) {'shahin' => 24, 'ibrahim' => 14, 'jolfiquer' => 10, 'jasmin' => 4}

console.log(childrens.entries()); // MapIterator {'shahin' => 24, 'ibrahim' => 14, 'jolfiquer' => 10, 'jasmin' => 4}


for (const x of childrens.entries()) {
    console.log(x);
}
/* 
['shahin', 24]
['ibrahim', 14]
['jolfiquer', 10]
['jasmin', 4]
*/