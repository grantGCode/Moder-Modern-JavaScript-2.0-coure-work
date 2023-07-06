
/*adding an id, Class, & attribute to my new div*/

div.className = 'my-element';
div.id = 'my elements';
div.setAttribute('title, MyElemnet');

const text = document.createTextNode('Hello World');
div.appendChild('text'); // AppendChild inserts the text node in to the Div elements or any other element

/* div.innerText = 'Hello World'; */ 
/* You can use innertext to create a text element it's recommended as best coding practice
 to not use inner text becasue innerText is best use when editing Text elemnts that creating them. */


document.body.appendChild(div); // will inset the div into the bottom of the HTML body

document.querySelector('ul').appendChild(div); // Here I inserted the div into the ul element
