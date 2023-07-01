/* Basic syntax for reduce method

    const array1 = [1, 2, 3, 4]; // example Array

    const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
    );

    - accumulator/prevus value (equals the intital prevus value of the Array or the prevus run of the function)
    - CurrentValue (equals the curent element  your on)
    - initialValue (and additional argument you can pass in that you want the prevus value to be)
    */


    // Examole of reduce method in lon form

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const sum = numbers.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;        
    }/*, 0 */ );

    /* accumulator will serve as the prevus value and the currentValue will retun it's name sake. 
    The commented 0 sereves as to where the initialValue would go if we wanted to add one.
    
    The functontion will return accumulator value pluse the currentValue. */

    /* If initialValue was present it would:
        1. start at 0, 
        2. run a function for eache elemet
        3. will add the prevus value to the curent value 
*/
    console.log(sum); // retuns 55



// Short vertion example (Same result)

    const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);

    console.log(sum2);

// Useing a for loop instead of reduce

    const sum3 = () => {
        let acc = 0;
        for (const cur of numbers) {
            acc = acc + cur;
        // or acc += cur;
        }
        return acc;
    }

    console.log(sum3());


// Shoping cart chalange

const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 175 },
];

const myCart = cart.reduce((Prev, itemPrice) => Prev + itemPrice.price, 0);

console.log(myCart);