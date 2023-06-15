
//Array Literal

    const numbers = [12, 45, 33, 29, 39];

    const mixed = [12, 'Hello', true, null];

// Array Constructior

    const fruits = new Array('apple', 'grape', 'orange');

//calling values of an Array

    a = numbers[0]; // You can use Key Indexs to call a value in the Array. Here I'm calling the first value of Numbers using 0 Indexs.

    console.log(a);

    b = numbers[0] + numbers[3];

    console.log(b);

    c = `May favorite fruit is an ${fruits[0]}`; // you can also call values of an Array using template literals.

    console.log(c);

    d = numbers.length;

    //you can also change the length of the Array by putting
    
    /* fruts.length = 2; */

    console.log(d);

// Changing Array values

    const Animals = ['dog', 'bear', 'cat'];

    console.log('Before = ', Animals);

    e = Animals[1] = 'bird';

    console.log('After = ', e);

    f = fruits[3] = 'strawberry' //you can add to an Array using this methould or 

    console.log(f);

    g = fruits[fruits.length] = 'blueberry';

    console.log(g);
