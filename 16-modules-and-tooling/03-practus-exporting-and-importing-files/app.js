const {capitalizeWords, makeMoney} = require('./utils');
const Person = require('./Person');

console.log(capitalizeWords('hello world'));
console.log(capitalizeWords('hello everyone'));
console.log(makeMoney(100));


const person1 = new Person('Grant', 27);
person1.greet();
