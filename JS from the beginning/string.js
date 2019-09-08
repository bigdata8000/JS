const firstName = 'Michael';
const lastName = 'Johnson';
const age = 21;
const str = 'Hello there my name is Henry';
const tags = 'web design,web development, programming';

let val;

val_20 = firstName + lastName;

// concatenation
val_21 = firstName + ' ' + lastName

val_22 = 'Hello, my name is ' + firstName + ' and I  am ' + age;


// escaping
val_23 = 'That\'s awesome, I can\'t wait';


// length
val_24 = firstName.length;


// change case
val_25 = firstName.toUpperCase();
val_26 = firstName.toLowerCase();

val_27 = firstName[2];      // return THIRD character of this var


// indexOf()
val_28 = firstName.charAt('3');
val_29 = firstName.charAt(firstName.length -1);


// substring()
val_30 = firstName.substring(0, 4);


// slice()
val_31 = firstName.slice(0,5);  // return characters from 0-5
val_32 = firstName.slice(-3);   // return characters from end going back


// split()
val_33 = str.split(' ');
val_34 = tags.split(',');


// repalce
val_35 = str.replace('Henry', 'Brad');


console.log(val_20);
console.log(val_21);
console.log(val_22);
console.log(val_23);
console.log(val_24);
console.log(val_25);
console.log(val_26);
console.log(val_27);
console.log(val_28);
console.log(val_29);
console.log(val_30);
console.log(val_31);
console.log(val_32);
console.log(val_33);
console.log(val_34);
console.log(val_35);



/* ---------------------------------------- */