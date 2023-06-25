// while loops
    /* while loops leave out the conditin statment in the syntax so i'll create the condition on line 4 */

    let i = 0;

        while (i <= 20) {
            console.log(i);
            i++; // Make sure to put the incraments statment in side the {} of the while loop
        }

        /* Best pracuse to use a for loop when you know the amout of time you want the code to run. 
            Use a while loop when the amout of time a loop will run is unknown. */

    // Useing while loops over Arrays

        // const arr = [10, 20, 30, 40];

        // while (i < arr.length) {
        //      console.log(arr[i]);
        //      i++; 
        // }

    // Nesting while loops

    // while (i <= 5){
    //     console.log('Number ' + i);
    //     let j = 0;
    //     while (j <= 5){
    //         console.log(`${i} *${j} = ${i * j}`)
    //         j++;
    //     }
    // i++;
    // }

// do while loops (will run one even if condition is false)

let k = 21;

do {
    console.log('Number ' + k);
    k++;
} while (k <= 20); // This line is false

/* the code on lines 39 - 41 will run only once even tho 42 is false. */