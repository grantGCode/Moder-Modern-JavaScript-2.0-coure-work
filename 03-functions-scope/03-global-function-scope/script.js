// Here is a varibal of 100 

const x = 100;

/* The varibale of 100 exists in the global scope and we can see X in the console when we connsole log it*/

console.log(x, 'from Global scope' ); // = 100

//This is a randome function this function will console log the value of x

function func1() {
    console.log(x, 'from Global scope (in func1())');
 
}

func1()

// Here is a second funtion in it I declaired the varibale of y = 50

function func2() {
    const y = 50;
    console.log(y, 'from function scope')//Here if we console log y the console will return 50 'from function scope'
    console.log(x, 'from Global scope (in func2())');
};

func2();



/* If i were to add a function of func3 and console log y in func3(). It to will produce an error because it dose not exist in the scope of func3().
But if I add a console log of x to func() it will produce the value of x in the console because it existes in the global scope. */


function func3() {

    console.log(x, 'from Global scope (in func3())');
    console.log(y, 'from function scope (in func3())')//Here if we console log y the console will return 50 'from function scope'
};

func3();

console.log(y, 'from function scope'); // if we consolog ouside the funtion will get a error becuase y exists in the funtion scope of func2()