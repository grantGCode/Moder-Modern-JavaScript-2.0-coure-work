
// square root a Number
    a = Math.sqrt(9);
    console.log(a)
// abbsolute Number
    b = Math.abs(-5);
    console.log(b)
//roundiong using Math Object

    // .round will round Number given.
    c = Math.round(4.6); //answer should = 5
    console.log(c)
    // to round up a number use .ceil
    d = Math.ceil(4.2); //answer should = 5
    console.log(d)
    // to round down a number use .floor

    e = Math.floor(4.2);
    console.log(e)
// To get value of a Number to a specific power.

    f = Math.pow(2, 3); //2 raised to 3 will = 8
    console.log(f)

// getting the Min and Max of a given set of Numbers inc JS

    g = Math.min(5, 4, 3); // Min should = 3

    h = Math.max(5, 4, 3); // Max should = 5

    console.log("of Numbers 5, 4, 3 the Min will = ", g,  " and the Max will = ", h);

// genorating randome Numbers

    /* The function below will genorate a randome Number on the HTML page when a button is clicked. 
    Using the math.randome() methould. 
    */
    
    function generateRandomNumber() {
        // Generate a random number between 0 and 1
        var randomNumber = Math.random();
        
        // Scale the random number to a desired range, such as between 1 and 100
        var scaledNumber = Math.floor(randomNumber * 100) + 1;
        
        // Display the random number on the HTML page
        document.getElementById("result").textContent = "Random Number: " + scaledNumber;
    }



