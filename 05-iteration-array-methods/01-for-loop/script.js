// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax


// Basic for loop

    for (let i = 0; i <= 10; i++) {
        console.log('Number' + i);
    }
    
    /* If I were to change the number value of the condition expression the loop would count till that number reached */

    /* 

// For loop with an if statment

    // for (let i = 0; i <= 10; i++) {
    //     if (i === 7) {
    //     console.log('7 is my lucky number');
    //     } else {
    //         console.log('Number' + i);
    //     }
    // }

// Nested for loops

    // for (let i = 0; i <= 10; i++) {
    //     console.log('Number ' + i);
        
    //     for (let j = 1; j <= 10; j++) {
    //     console.log(`${i} * ${j} = ${i * j}`);
    //     }
    // }

// Loop through an array

const namesArray = ["John", "Emily", "Michael", "Sophia", "William"];

    for (let i = 0; i < namesArray.length; i++) {
        if (namesArray[i] === "Michael") {
            console.log("Michael (is the BEST)");
            } else {
            console.log(namesArray[i]);
        } 
        
    }
/* The if statment is a challenge if there were no if statment the for loop stament would be a console log of namesArray[i] */
