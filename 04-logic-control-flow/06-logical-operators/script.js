// && Operatior
    console.log (10 > 20 && 30 > 15 && 40 > 30); // console returns False
    // All valuse need to be true when using && or else the console will lable the false.

    console.log(10 < 20 && 30 > 15 && 40 > 30); // console returns True
    // Now the console will display true because all valuse are true.

// || Operatior
    console.log (10 > 20 || 30 > 15) // console returns True
    //All valuse don't have to be true with the || operatior to get a return of true in the console

    console.log (10 > 20 || 30 < 15)// console returns False
    // If both values are false with the || operatior the console will return false

// && - when use will return the first Falsy value or the last value

/* varibles a throught b have no falsy valuse so the && will return the last value in the console */
/* varibles c through d have a falsy value && will return the first falsy value to the console (dispiet them both being the center valuse in both.) */

a = 10 && 20;

b = 10 && 20 && 30 

c = 10 && 0 && 30;

d = 10 && '' && 0 && 30;

console.log(a);// returns 20
console.log(b);// returns 30
console.log(c);// returns 0
console.log(d);// returns (empty row for the '')

/* A way you use this in the field Imagent you have your getting a Array of blog post from a data base*/

    /* const posts = [Post1, Post2] */

    /* I wanted to show the first post on a webpage I'd use:
        consol.log(posts[0])
    */ 

    /* If I got back an empty Array from the data base \ 
    const posts = [] and use the same methoud I'd get a retun of undifined and you do not want to disply a value of unifined on a webpage.
    So I would a .length of post and set it to > 0 and add the && with the console log to the right if the Array is empty it would return and empty row than undifined */

    const post = [];

    post.length > 0 && consol.log(posts[0]);

    // || - Will return the First truthy value or the last value

    e = 10 || 20;
    f = 0 || 20;
    g = 0 || null || "" || undefined;


    console.log(e);// returns 10
    console.log(f);// returns 20
    console.log(g);// returns undefined

// ?? - Returns the right side operand when the left is null or undefined


h = 10 ?? 20;
i = null ?? 20;
j = undefined ?? 20;
k = 0 ?? 20;

console.log(h);// returns 10
console.log(i);// returns null
console.log(j);// returns undefined
console.log(k);// returns 0 (because ?? jus looking for null or undefined )