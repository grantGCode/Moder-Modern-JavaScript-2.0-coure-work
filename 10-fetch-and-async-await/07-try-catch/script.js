// try {
// console.log(x); // refrance error because X is not defined
// } catch (error) {
//     console.log('Error: ' + error);
// }


function double(number) {
    if (isNaN(number)) {
        throw new Error(number + ' is not a number');
    }
}

try {
    const y = double('hello'); // add value to () if there is an issue the catch on line 17 will run the error
    console.log(y);
} catch (error) {
    console.log(error);
}