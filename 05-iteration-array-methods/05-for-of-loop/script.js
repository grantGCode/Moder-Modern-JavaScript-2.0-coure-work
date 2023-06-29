const myArray = ["apple", "banana", "cherry", "date"]

const usersList = [
    {name: "Alice"},
    {name: "Bob"},
    {name: "Charlie"}
]


/* traditional For loop */

// for (let i = 0; i < myArray.length; i++) {
//     console.log(items[i]);
// }

/* for Of loop (looping through Arrays) */

for (const items of myArray) {
    console.log(items);
}

    // With for Of loop you'll declare a Varible in the Param of the loop for it


/* for Of Loop (looping through Objects) */

for (const dataOfUsers of usersList) {
    console.log(dataOfUsers.name)
}


/* for Of loop (looping over strings) */
const str = "Hello World"

for (const letters of str) {
    console.log(letters);
}
    // This loop will display all the letters in the string in the console individule

/* for Of loops (looping over Maps) */

const map = new Map()
map.set('name', 'John')
map.set('age', 30);

for (const [key, value] of map) {
    console.log([key, value]);
}