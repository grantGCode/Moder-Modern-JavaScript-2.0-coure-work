if (true) {
    console.log('This is true');
}// This code will run because the code is true

if (false) {
    console.log('This is NOT true');
}// This code will not run because the code is not false


// Example of an if statment with a Param with Opperatiors

const x =10;
const y = 5;

if (x > y) {
    console.log(`${x} is grater than ${y}`);
}

if (x === y) {
    console.log(`${x} is equal than ${y}`);
}

// This code will not run because the code is not false

// But if I put in an else statment I can get the code to run if the conddition were to end up being faulse
if (x === y) {
    console.log(`${x} is equal than ${y}`);
} else {
    console.log(`${x} is NOT equal to ${y}`);
}

/* if Staments also have their own scope like functions */

 if (x !== y) {
    const Z = 20; 
console.log(`${z} is 20`);
}

/* console.log(z); */

/* I can not accesee z because it is in the local scope of the if statment */


// Shhort way of wirighting if statment with out {}

if (x >= y) console.log(`${x} is greater than or equal to ${y}`),
        console.log('this is true');    
    else console.log(`${x} is NOT greater than or true to ${y}`);