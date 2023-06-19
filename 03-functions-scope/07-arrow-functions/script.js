//Regular Arrow function syntax

    const add = (a, b ) => {
        return a + b;
    }

    console.log(add(1, 2));

// Example of a faster way of wrighting an Arrow function with ow a return statement

//Impliceit Return
    const subtract = (a, b) => a - b;
    console.log(subtract(10, 5));
   
    /* if funtion has single Param wright it out in this syntax */
    const double = a => a * 2;
    /* only singlr Parma functions cal leave off () */

    /*If your retuning an object wright this syntax */

    const createObj = () => ({
        name: 'John',
    });

// Arrow function in a call back

const numbers = [1, 2, 3, 4, 5];

numbers.forEachn(n => console.log(n));