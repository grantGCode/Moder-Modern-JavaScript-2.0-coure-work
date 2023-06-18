function registerUser(user = 'Bot') { 
    
    return user + ' is registered'
}
/* the Param of bot is added to give a defalt value if no argument is given when the funcion is ran.
Without the defualt value it would return undefined.
You can also achive the same result of setting up a defualt value with an if statement. */


console.log(registerUser('John'));

console.log(user) // trying to console log wser will not work because the Param user exists in the funcion's socpe.


// Rest Param

function sum(...numbers) {
    return numbers;
}
/*with the rest Param ... we can have the function return an Array of values it returns. */
console.log(sum(1, 2, 3));

// Object as params
function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is loged in`;
}

const user = {
    id: 1,
    name: 'John',
}; 



loginUser(user); // Reminder I'm adding the argument of Varibale User not the Param in the function


// Arrays as Params

function getRandom (arr) {
    const randomeIndex = Math.floor(Math.random() * arr.length);

    const item = arr [randomeIndex];

    console.log(item);
}// function will cosole log any number in the Array I in () as a agument when funtion is run.

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);