// Values that are stored on the Stack
const name = 'John';
const age =  30;

// Reference values that are stored in the heap

const person = {
    name: 'Brad',
    age: 40,
};

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'Bradley';


console.log(name, newName);
console.log(person, newPerson);