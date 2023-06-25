// ||= assigns the right side value only if the left is a falsy value.

    let a = false;// if a was set to any other falsy value a will still = 10.

    // if (!a) {
    //     a = 10;
    // }   /* If stamment means a = a || 10; (If a is false set a to = 10)

        /* !a means (if a is false) */

     a = a || 10;//return 10 to console
     
     
     console.log(a);
     
     // uncomment out the if staitment and comment all of line 11 and line 14 will display same result of 10 in console. Line 11 is the same as the if stament on 5 - 7.



// &&= assined the right side value only if the left is a truthy value.

let b = 10;

// if (b) {
//     b = 20;
// }   

/* the console will return 20 because b is a truthy value */


b = b && 20;

// uncomment out the if staitment and comment all of line 31 and line 36 will display same result of 20 in console. Line 31 is the same as the if stament on 24 - 26.


console.log(b);

// ??= assigns the right side value only if the left is null or undefiened.

let c = null; // If c = any other falsy value except for null or undifined c = will not equal 30


// if ( c === null || c === undefined) {
//     c = 30;
// }  


c = c ?? 30;
/* or
c ??= 20; */

// uncomment out the if staitment and comment all of line 48 or 50 and line 54 will display same result of 30 in console. Line 41 and 50 is the same as the if stament on 43 - 45.

console.log(c);

console.log(c);