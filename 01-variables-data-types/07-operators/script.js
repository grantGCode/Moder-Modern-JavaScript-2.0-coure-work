// 1. Arithmetic Operators

    let a = 5
    let b = 5
    let c = 5
    let d = 5


    a = 5 + 5;
    b = 5 - 5;
    c = 5 * 5;
    d = 5 / 5;
    e = 5 % 5;

    Arithmetic = [a, b, c, d, e]

        // - Concatination

        Greeting = "Hello" + " World";
        //second method same out come
        GreetingII = "Hello" + " " + "world";
        
        // - Exponent
            ex = 2 ** 3;

        // - Incrament
        let Value = 1;
        Inc = Value + 1;
        
        //second method same out come
        let ValueII = 1;

        IncII = ++ValueII;

        Incrament = [Inc, IncII];

        // - Decrement
        let ValueIII= 3;

        Dec = ValueIII - 1;
        
        //second method same out come
        let ValueIV = 3;
        
        let DecII = --ValueIV;
        





        Decrement = [Dec, DecII];


// 2. Assignment Operators

    f = 10;
    g = 20;
    h = 5;
    i = 30;
    j = 135;
    k = 15;

    f += 5;
    g -= 5;
    h *= 3;
    i /= 2;
    j %= 20;
    k **= 1;

    // all values should equal 15 in console

    Assignment = [f, g, h, i, j, k]

    // 3. Comparison Operators
        
        // operatiors that a value is equal too
    
        l = 2 == "2" //operator does not care if value is a Number or String
    
        m = 2 === "2" // to be ture value must be a number
    
        // l should be true , m should be false

        // operatiors that a value is not equal too
    
        n = 2 != "2"

        o = 2 !== "2"

        // n should be false, o should be True

        // operatiors where a value is >, <, or Equal too
        
        p = 10 > 5;
        
        q = 5 < 10;

        r = 10 <= 10;

        s = 10 >= 10

        // all valuse should be ture

        Comparison = [l, m, n, o, p, q, r, s]

console.log (Arithmetic) 
console.log(ex) 
console.log(Incrament)
console.log(Decrement)
console.log(Assignment) 
console.log(Comparison)

console.log(DecII)