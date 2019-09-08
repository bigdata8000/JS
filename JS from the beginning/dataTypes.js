/*
6x Data Types:
- String
- Number
- Boolean
- Null
- Undefined
- Symbols (ES6)
*/



// PRIMITIVE


// String
const name2 = 'Mary J';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null or object ?!
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

console.log(typeof name2);
console.log(typeof age);
console.log(typeof hasKids);
console.log(typeof car);
console.log(typeof test);
console.log(typeof sym);


/* ---------------------------------------- */


// REFERNECE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
    city: 'Boston',
    state: 'MA'
}
// data
const today = new Date();

console.log(hobbies);
console.log(address);
console.log(today);
console.log(typeof today);



/* ---------------------------------------- */



// Type Conversion

let val;
val = String(555);
val = String(4+5);
val = String(true);             // Bool to string
val = String(new Date());       // Date to string
val = String([5,6,7,8,9]);      // array to string


// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');
val = Number([10,11,12,13,14,15]);
val = parseInt('200');
val = parseFloat('130.67');


// output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed);




/* ---------------------------------------- */



const val22 = 5;
const val23= 6;
const mysum = val22+ val23;

console.log(mysum);
console.log(typeof mysum);




/* ---------------------------------------- */
