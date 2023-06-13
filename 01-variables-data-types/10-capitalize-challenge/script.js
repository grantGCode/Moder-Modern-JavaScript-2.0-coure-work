// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

let myNewString = myString.charAt(0).toUpperCase(0) + myString.substring(1, 9);

/*How I did it
Step 1: Isolate the value of d in myString I did this using charAt() method.
Step 2: Change D to Uppercase using toUpperCase() method.
Step 3: Concatinate the rest of myString back into the String using substring() method on values 1 through 9

Result shouls equal that of a string = 'Developer'*/


console.log(myNewString);