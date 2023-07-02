
let outPut

/* document.all */

outPut = document.all; // retuns an HTMLAllCollection (like an Array with all the HTML elements in side)

outPut = document.all[11]; // Keys can be used on .all to access a spasific element

outPut = document.all.length; // .length can work because HTMLAllCollection is like an Array


/* document.documentelement */

outPut = document.documentElement;

/* Accesssing HTML elements */

outPut = document.head;
    outPut = document.head.children // children will let me acces anything in the head



outPut = document.body;
    outPut = document.body.children;

outPut = document.doctype; // returns the doctype of the document

outPut = document.image; // access all images on HTML
outPut = document.image[0]; // acsses image 0

outPut = document.forms; // returns the document forms
outPut = document.forms[0]; // returns the document forms with a key value of 0 / the first form on the HTML
outPut = document.forms[0].id; //returns an elements with an id
outPut = document.forms[0].method; //returns an elements with an method
outPut = document.forms[0].action; //returns an elements with an action
outPut = document.classList // lets you access all classes


    /*If the attached HTML had links this is how to access them
outPut = document.links;
outPut = document.links[0]; // access a spasific link with key value
outPut = document.links[0].href; // accessing the href attrabute
*/

/* Changing elements atrabutes */

// outPut = document.forms[0].id = 'new-Id';// changes and sets new id
// outPut = document.link[0].id = 'google link'; // sets a new id to the link elements
// outPut = document.links[0].href = www.facebook.com; // changing the href link to new link
// outPut = document.links[0].className = 'googleClass'; // changing a claas name requires you to add the sytax of className

console.log(outPut);
