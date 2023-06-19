
// This is an example of how we can assingne Variables to Objects propertys 

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
   /* Object property*/ firstName: firstName, /*Variable*/
                        lastName: lastName,
                        age: age,
}

console.log(person.firstName); // This will display the property firstName in person Object


// Destructuring (a way of extracting or pulling propertys out from an object using {})

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John',
    }
};

const {
    title,
    user: {name}} = todo; //Here i have Destrucutered the property of title, and thie name property from the user Object

console.log(name); // should display John


//If you want to assign a varibale via destruction this is how.

/* You can simply wright const myNewId = todo.id; But another way of doing the same can be done via Destruction. */

    const { id: myNewId } = todo;

    console.log(todo.id, myNewId); // Both todo.id and myNewId should = 1

    /* Nothing in the object was changed all we did was set the Varibal of myNewId = to the property of todo.id */


// Destructure an Array

    const numbers = [23, 67, 33, 49, 52];

    /* Instead of brakets to destructure the Array you'll use [] as the syntax. */
   
    const [first, second, ...rest] = numbers;
   
    /* If you wish to display the rest of the values in an Array you can use the rest opperatior
    similar to the spread opperator the rest opperatior uses the same ... syntax. */ 

    console.log(first, second, ...rest);

