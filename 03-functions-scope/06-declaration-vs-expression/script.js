//Function Decloration
function addDollarSign(value){
    return "$" + value;
}

console.log(addDollarSign(200))


//Funtion Expression
/* A function expression is a function assined to a Varibale */
const addPlusSign = function (value) {
    return '+' + value;
};

console.log(addPlusSign(200));

/* Note if I wer to move the console log above the lines the 2 functions declotation and Expression.
Only the Function Decloration will run and the Expression will return an error thanks to hoasting */