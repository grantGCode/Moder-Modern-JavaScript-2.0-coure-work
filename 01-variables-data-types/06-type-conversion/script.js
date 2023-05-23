let amount1 = '100';
let amount2 = '200';
let amount3 = '300';

// Change String to Number
amount1 = parseInt(amount1);
amount2 = +amount2;
amount3 = Number(amount3);


values = [amount1, amount2, amount3]

//This Function will list out all the items in the console and what type they are.
function showAll(){
console.log( values);
for(let i= values.length - 1; i >= 0; i++){
    console.log(typeof values[i]);
    }
}

showAll();
