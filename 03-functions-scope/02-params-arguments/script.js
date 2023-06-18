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

