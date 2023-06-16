const person = {
    name: 'John Doe', // String
    age: 26, // Number
    isAdnmin : true, // boolan
    address: { //Object with in object
        stree: '123 Main st',
        city: 'Houston',
        state: 'TX'
    },

    hobbies: ['Movies', 'Fitness'],

    
} // Values seperated with an , in side object
        console.log(person);

// Sintax to access propertys in an object

    a = person.name; // dot sintax
    b = person['age']; // []
    c = person.address.state; // can access an object and the value in the object
    d = person.hobbies[0];// can access an Array and the value in the Array

    console.log('a = ', a, 'b = ', b, 'c = ', c, 'd = ', d);

 // Update objects
    person2 = {
        name: 'John Doe', // String
        age: 26, // Number
        isAdnmin : true, // boolan
        address: { //Object with in object
            stree: '123 Main st',
            city: 'Houston',
            state: 'TX'
        },
    }

    person2.name = 'Jane Doe' // dot sintax
    person2['isAdmin'] = false // []
    
    delete person2.age // deleting propertys

    person.hasChildren = true; // adding propertys to objects

    console.log(person2);

// functons useing objects
    person.great = function () {
        console.log(`Hello, my name is ${this.name}`) // this key work can also access propertys.

    }

    person2.great();




    const person3 = {
        'first name': 'Grant', // you can create key with more than one word (but not recommended)
        'lastName': 'Bentley',

    };

    console.log(person3);



