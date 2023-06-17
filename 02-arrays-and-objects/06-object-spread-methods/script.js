//Ways to make an object

/* 1.object litteral
     Connst todo = {}; 
    
2. Object constructer */
    const todo = new Object();

    todo.id = 1;
    todo.name = 'Buy Milk';
    todo.compleated = false;

    console.log(todo);

// object nesting example
const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232,
        },
    },
};

a = person.address.coords.lat;

console.log(person);


// This is an example of using spread opperatior to the to display all values of two objects nested in one single object in that one object.

    const obj1 = {a: 1, b: 2 };
    const obj2 = {c: 3, d: 4 };

    const obj3 = {...obj1, ...obj2};
    
/* 3. assign methould */
    const obj4 = Object.assign({}/*emptyobject*/, obj1);// will pass in whatever I add in ();


    console.log(obj3); // should show in console {a: 1, b: 2, c: 3, d: 4 };


// Expample of an Array full of Objects

    const todos = [ 
        {id: 1, name: 'Buy Milk'},
        {id: 2, name: 'Pick up kids from school'},
        {id: 3, name: 'Take out Trash'},
    ]

    b = todos[0].name; // Accessing property of the Object in the Array 

    console.log(b); 


 // more examples of Methoulds used with Objects
 
    Object.keys(todo); //Displays an Array with all the Keys of an Object
    
    Object.keys(todo).length; // If you want the length of an object this is how you do that.
    // Typing Object.lenght will return Undifined and will not work

    Object.values(todo); //Displays an Array with values of an Object

    Object.entries(todo); //Will display and Array full of Arrays with the Key Value pairs

    todo.hasOwnProperty('name'); // Will return a Boolan value




