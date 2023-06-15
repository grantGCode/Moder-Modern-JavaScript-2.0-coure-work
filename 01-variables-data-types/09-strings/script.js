let a;
let b;

const name = "Grant";
const age = "26";

a = "Hello my name is " + name + " and I am " + age + " years old.";

//Template Literals

b = "Hello my name is ${name} and I am ${age} years old.";

console.log("Concatination", a,'vs Template Literals', b);


//String Properties and metoulds

const myString = "Hello World"

console.log("mystring =", myString);

c = typeof myString;

console.log("typeof will show Value of myString =", c);

d = myString.length;

console.log("length will show overall lingth of characters in myString they =", d);

// Accessing valuse of a String

e = myString[2];

console.log("Using the [] I was able to pull value 2 from my string seen here =", e);


f = myString.__proto__;

// To change the case of the String

g = myString.toUpperCase();

h = myString.toLowerCase();


i = myString.charAt(0);

j = myString.indexOf('d');

k = myString.substring(0, 4);

l = myString.substring(7);

m = myString.slice(-11, -6);

let myString2 = "         Hello World";
//Triming Strings white space
n = myString2.trim();

console.log(n);

//replacing words in Strings

o = myString.replace("World", "Grant");

// includes() methote will return True or False 

    p = myString.includes(Hello); // will return true
    console.log('Hello = ', p)

    q = myString.includes(Helli); // will return false
    console.log('Helli = ', q);



