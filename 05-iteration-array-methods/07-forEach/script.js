
const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

/* Basice for each syintax */

        //Example line 7
            /*socials.forEach(element => console.log(element)) */
            // element represents each item in the Array

    socials.forEach((item, index, arr) => console.log(`${index} - ${item}`));

    
    /* Pramitors use in forEach
    
        - Call back function (A function to execute for each element in the array.)
        
        - element (The current element being processed in the array.)
        
        - index (The index of the current element being processed in the array.)
        
        - array (The array forEach() was called upon.)
    
    
    //You can use standard function syentax as the call back funtion in the forEach param.
        
    /* socials.forEach( function (item) {
        console.log(item);
    }); */

/* Named Function usingf forEach */

   /* function logSocials (socials) {
        console.log(socials);
    }

    socials.forEach(logSocials); */ // retuns all items in Array


/* ForEach with objects */

const socialObjs = [
    {name: 'Facebook', url: 'https://www.facebook.com'},
    {name: 'Twitter', url: 'https://www.twitter.com'},
    {name: 'Instagram', url: 'https://www.instagram.com'},
    {name: 'LinkedIn', url: 'https://www.linkedin.com'},
    {name: 'YouTube', url: 'https://www.youtube.com'}
];

socialObjs.forEach((item) => console.log(item.name, item.url)); 