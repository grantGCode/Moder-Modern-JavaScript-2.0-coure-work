let amount1 = '100';
let amount2 = '200';
let amount3 = '300';
let amount4 = 400;
let amount5 = 500;
let amount6 = 600;
let amount7 = 'number';

// Change String to Number
amount1 = parseInt(amount1);
amount2 = +amount2;
amount3 = Number(amount3);

// convert number to string
amount4 = amount4.toString()
amount5= String(amount5);

//convert number to boolean
amount6 = Boolean(amount6);

// this will return a number of NaN (NaN type = a Number)
amount7 = parseInt(amount7);



values = [amount1, amount2, amount3, amount4, amount5, amount6, amount7]

// if correct console should show 4 Numbers 2 Strings, and 1 Boolen.

//This Function will list out all the items in the console and what type they are.
function showAll(){
console.log( values);
for(let i= values.length - 1; i >= 0; i--){
    console.log(typeof values[i]);
    }
}

showAll();
