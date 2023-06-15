const arr= [34, 55, 95, 20, 15];

// Manipualing the Array

    // arr.push(100); //Adds a value to the end of the Array [34, 55, 95, 20, 15, 100];

    // arr.pop() // by default will pop off what is on the end of an Array [34, 55, 95, 20, 15];

    // arr.unshift(99) //will add vauler to the start of the Array [99, 34, 55, 95, 20, 15];

// Checking the array values

    d = arr. includes(95); // will retun true because 95 is pressent in Array
    console.log(d);
    e= arr.includes(346), // will return faulse because 346 is NOT present in Array
    console.log(e);
    // indexOF() will show where a values index is in the array

    f = arr.indexOf(55);// will return 1

    console.log(f);

    g = arr.indexOf(346); //If you put a value that is not present in Array you will get a -1

    console.log(g);
        /* The slice and Splice metould will return a value with only one diffrence. */

        dimoArr = [34, 55, 95, 20, 15];
        dimoArr2 = [34, 55, 95, 20, 15];
        // the slice methould will not change the array.

        h = dimoArr.slice(1); // if you pass in jus on index in () you'll get the rest of the length of the array. [55, 95, 20, 15];
        console.log(h);
        // the splace methould will remover sections of the Array
        console.log(i);
        i = dimoArr2.splice(1); // puting one index in () will change the Array, and continue show the rest of the Array to past that index.
        // I you  put a start and ending index in the () you will log this: dimoArr2.splice(1, 4) = [34]; taking out the rest
        // If you just want to remove one value in type this: dimoArr2.splice(3, 1) =  [20] [34, 55, 95, 15];



