// Way to make a functions
/* 1. Key Word function */
function sayHello() {
    console.log("Hello World");
}   //Declairing the function

sayHello(); //Calling the function AKA running the function

/*adding poramitors to a function */

function add(num1, num2) {
    console.log(num1 + num2);
} //Here I added to poramitors to the () when I declaired the function to server a place holders for values I'll add when I call the function later.

add(5, 10); //Here 5 argument will be serve a the num1 paramidor and 10 argument will serve as num2 and the consle will display the awnser of 5 + 10.

function subtract(num1, num2) { // For paramitiors it's ok to use the same paramitors as before.
    return num1 - num2; // It's tipical when your wrighting a funtion you'll be retuning a value.

    console.log("After the return") //the console will not disply this string because we already retured and left the function so the console log will not be called when the function is ran. 
}

subtract(10, 2); // You won't see the awnser in the console because the awnser was no console loged but it is floting out there to see it you

// we return because we want to do something with that value we returned latter here we can assigne the result of 10 - 2 to a varibale.

const result = subtract(10, 2);

//Now we can also console log the result Varibale and run the function in the console log simultaneously

console.log(result, subtract(20, 5));