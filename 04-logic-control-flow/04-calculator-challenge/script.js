function calculator(num1, operator, num2) {
   let answer;
        switch (operator) {
        case '+':
            answer =  num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
        default: 'error not correct syntax'
    };
        
    console.log(answer);
}

calculator(5, '+', 2);
calculator(5, '-', 2);
calculator(5, '*', 2);
calculator(10, '/', 2);
