/* Falsy Values:
- false
- 0
- "" or "" (Empty string)
- null
- undefined
- NaN
*/

/* Truthy Values:
- Everything else that is not falsy
- ture
- '0' (0 in a string)
- ' ' (space in a string)
- 'false' (false in a string)
- [] (empty arry)
- {} (empty object)
- function () {} (empty function)
*/


const email = 'test@test.com';


if (email) {
    console.log('You passed an email');
}
/* the Param of email is cohoshed as true in this example.
Because the Varible of email = a string of test@test.com*/

console.log(Boolean(email));// console returse true




const x = false;

/* Ohter valuse that will result in a falsy value are:
0, '' (empty string), null, undifined, NaN*/

if (x) {
    console.log(`This is truthey`);
} else {
    console.log(`This is Falsy`);
};

console.log(Boolean(x));


// Truthy and falsy caveats

        /* This is an example of an if stament asking how many children someone has*/

        const childeren = 0;

        if (childeren) {
            console.log(`you have ${childeren} children.`);
            } else {
                console.log('Please enter amount of childeren');
        }

        /* If i set the Varible of Children to 0 it will result in a falsy value.
        If I want the console to display that I have 0 children as if 0 were truthy.
        You can add the Parma of (children !== undifiend) or (!isNan(children)) */


    // How to check for check for empty Arrays

        const post = [Post1, Post2]
        /* If I were to set the Arry of Post to = [] the console will still return a truth value and return 'List Posts' in the console. */

        if (post.length) {
            console.log('List Posts');
            } else {
                console.log('No Posts to List');
            }

        /* If I want to check if the post Arry is empty to do this have the if statment Param set to (post.length > 0)
            so if the Array's length were to = 0 the this statment will be false */
    
    // How to check for check for empty Objects

        const user = {
            name: 'John'
        }

        /* The Same problem occurs with the Array example above, an Empty object is considered a truthy value. 
        But the solution to the empty Object problem is diffrent from the Arry one. The .length Methould does not work on Objests.*/

        if (user) {
            console.log('List User');
            } else {
                console.log('No User');
            }

        /* If I were to uses Object.keys() this would give me an Array of the keys in the objet with there now being an Array inside the objsect with all keys in side it.
        I can now add the .length methould to get the length of that array like so. (Object.keys(User).lingth) and set it to > 0*/
        /* Full Solution
        
        if (Object.keys(User).lingth > 0) {
            console.log('List User');
            } else {
                console.log('No User');
            }
        */

    // Using double == Equality opperatior 
    
    /* If I were to set a falsy values == to another falsy value the console will return true. 
    Because both valuse are falsy and are equal to one another*/

            console.log(false == 0);
            console.log('' == 0);
            console.log(null == undefined);
    /* This is why it's recommended as good practice to use === that == when wrigthing code.
        If I were to use === the === will check the type of both values and return false. */ 
        
        console.log(false === 0);
        console.log('' === 0);
        console.log(null === undefined);
    

