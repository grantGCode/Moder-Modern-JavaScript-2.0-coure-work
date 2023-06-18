//symple explination of functions nested in other functions

function func1() { //Parent function
   const x = 100;

    function func2() { // Child function
        const y = 200;
        console.log(y+x);
    }

    // in order for func2 to run func1 my run first
    /* If I were to try to access y in the Parent It would result in an error.
    console.log(y)// returns error 
       Because just like Globale and funtion scope there is scope beteween parent and nested child functions  */

    func2();
}

func1();


//The same applys for if statments

if (true) { 
    const x = 100;

    if (x === 100) { 
        const y = 200;
        console.log(y+x);
    }

    // console.log(y) /* returns error */    
}