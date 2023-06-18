

//the diffrence between const, let and var

if (true) {
    const a = 500;// Block scoped
    let b = 600;// Block scoped
    var c = 700;// not Block scoped
}

// console.log(a); /* returns error */
// console.log(b); /* returns error */
console.log(c); /*  returns 700 */


/* var is function scoped here is an example */

function run() {
    var d = 100;
    console.log(d);
}

run(); // returns 100

// console.log(d); /* returns error */
