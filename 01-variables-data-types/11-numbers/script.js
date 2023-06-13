

const num = new Number(5);

//Changiing Numbres to Strings
a = num.toString();

b = num.toString().length;

console.log('a =', a, " length of a =", b);

//Decimal Numbers in JS

c = num.toFixed(2);

console.log(typeof(c));
// This will add a decimal to your Number. But decimals are considered Strings in JS as seen.

const num2 =new Number(5.4227);
const num3 =new Number(5.36759);

d =num3.toPrecision(3);
//The toPrecision() will round the nearest decimcla you specify 

console.log("Num3 =", num3, "With num3.toPrecision(3) metould num3 will =", d);

console.log("the typeOF 5.00 =", typeof(c));

//Exponentals of Numbers
e = num.toExponential(2);

console.log("the Exponentinal of num =", e);

//Internatinal representation of numbers are written in other laguges.

f = num.toLocaleString('ar-EG');
//Will convert font used in Egypt

console.log("toLocaleString() is set to show how 5 is represented in Egypt ", f);

//value of Number

g = num.valueOf(num);


// MAX and Min values

h = Number.MAX_VALUE;

i = Number.MIN_VALUE;

console.log("MAX_Value shows the Maximum Number we can use ", h,);
console.log("MIN_Value shows the Minimum Number we can use ", i,);

