
a = 5 + '5'; //console should return a as a sring of 55 type because it concatinatted number 5 to a string.

b = 5 + Number('5'); // to prevent JavaScript from changing the outcome to a string. put '5' in a Number() to have JS coerce and add the two values.

c = 5 * '5'; // Java Script will atomaticly coerciose the string of 5 to a number because strings can not be multiplied.

d = 5 + null; // If we add null to 5 it will rezult in a value of 5 as a number because the value of null is equal to a number of 0.

// Boolan values are also equal to a value of a number as seen below 
True = Number(true); // true === 1
False = Number(false); // false === 0
console.log("Boolan values of true and false", True, False); // shows valuses of these two boolan values

e = 5 + true; // the consle will retun e as 6 because we are adding 1 to 5

f = 5 + false; //the consle will retun e as 5 because we are adding 0 to 5

g = 5 + undefined; // if we add any number with the valuse of undefined it will retun as a number of NaN and it remains a number because NaN is considered to be a typeof a number.

 Values = [a, b, c, d, e, f, g];

function showAll(){
    
    for(let i= Values.length - 1; i >= 0; i--){
        console.log(Values[i], typeof Values[i]);
        }
    }

showAll()