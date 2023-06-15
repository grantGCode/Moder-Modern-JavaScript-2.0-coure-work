
const Fruits = ['apple', 'pear', 'orange'];
const berries = ['blueberries', 'strawberries', 'rasberry'];

//Fruits.push(berries); // pushing the berries Array into the Fruists Array


const allFruits = [Fruits, berries];
console.log(allFruits);


a = allFruits[1][0]; // to access a spisific value of the 2 Arrays nested togther put a key index of the Array you want to acess then follow up with a second key index of the value inside you want.

console.log(a); // = blueberries

// concat Arrays

    b =Fruits.concat(berries);

    console.log(b);

// spead Operatior (...)

c = [...Fruits, ...berries];

//Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
c = arr.flat();

// Static Methods on Array Object

d = Array.isArray(Fruits); // will = true

console.log('d = ', d)

e = Array.isArray('Hello'); // will = faulse

console.log('e = ', e);


f = Array.from('12345'); // will create an Array from the string

console.log(f);

const g = 1;
const h = 2;
const i = 3;

j = Array.of(g, h, i); // will create an Array from a set of values

console.log(j)
