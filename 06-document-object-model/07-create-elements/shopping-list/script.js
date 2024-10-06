
/*adding an id, Class, & attribute to my new div*/
const div = document.createElement('div')
div.className = 'my-element';
div.id = 'my-elements';
div.setAttribute('title', 'My Element');

// div.innerText = 'Hello World'; 

/*
You can use innerText to create a text element but it's recommended as best practice
to not use innerText when creating a new element.
It is better to us innerText to edit an already existing elements than a newly created elements. 

To add text to a newly created element it better to create a text node with the createTextNode() method.
Then append the node to the new element. 
*/

const text = document.createTextNode('Hello World'); // This is our new text node.

div.appendChild(text); // Now I am appending or text node: text to the div element with appendChild() method. 

/* appendChild() inserts the text node in to the Div elements or any other element. */

console.log(div)

// document.body.appendChild(div); // 
/* 
    Now on line 27 I will insert the div into the bottom of the HTML body using appendChild()
*/
document.querySelector('ul').appendChild(div); 
/* 
    Here on Line 29 I inserted the div into the <ul> element 
    and now the Hello World <div can be seen in at the bottom <ul> of the <ul>.
*/ 
