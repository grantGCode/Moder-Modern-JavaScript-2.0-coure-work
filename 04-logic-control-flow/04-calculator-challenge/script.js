function calculator(num1, num2, operator) {
   let awnser
        switch (operator) {
        case '+':
            awnser =  num1 + num2;
            break;
        case '-':
            awnser = num1 - num2;
            break;
        case '*':
            awnser = num1 * num2;
            break;
        case '/':
            awnser = num1 / num2;
            break;
        default: 'error not correct syntax'
    }
        
    console.log(awnser);
}

calculator(5, 2, '+');
