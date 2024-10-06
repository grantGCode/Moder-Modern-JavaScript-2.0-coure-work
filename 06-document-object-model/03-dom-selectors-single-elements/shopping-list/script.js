/* All methods used are to select just one single elements */

// document.getElementById(); 
    /* Let you grab an elements by it's Id. */

    console.log(document.getElementById('app-title'));

    console.log(document.getElementById('app-title').id);
    /* Line 8: If you want to get a specific attribute adding the property of .id
    lets you select an element by it's ID.*/
   
    console.log(document.getElementById('app-title').className);
    /* As seen on Line 12 you can also select an element by it's class using the .className property.*/
   
    console.log(document.getElementById('app-title').getAttribute('id'));
    /* Also as an alterative you can use the DOMs .getAttribute() method to select an attribute seen on Line 15.*/

// Set Attribute

    // document.getElementById('app-title').id = 'new-id'; 
    
    /* after setting the new name of the id on Line: 20 
    to selecting the element again I must use it's new name moving forward.*/

    document.getElementById('app-title').title = 'Shopping List';
    document.getElementById('app-title').setAttribute('class', 'Title'); 
    /* I can use the .setAttribute() method from the DOM. 
    Select the attribute you want to set like the class attribute
    and what you want to set the attribute to.

    For example on Line 26: set class to 'Title')*/

    const listTitle = document.getElementById('app-title');
    /* Setting this element to a variable can help me not have to type out
    document.getElementById() again and again if I need to access it more than once.*/  

    console.log(listTitle);


// Get or change a single element's content

    /* .textContent will get the content of an element like the the text inside <h1></h1>. */

    console.log(listTitle.textContent);
    listTitle.textContent = 'Hello World'; 
    // On Line 45: I changed the text content of listTitle to "Hello World"

    listTitle.innerText = 'Hello Again' 
    /* interText serves the same purpose of textContent and this line get a
     similar result as textContent. */

    listTitle.innerHTML = '<strong>Shopping List</strong>';
    /* innerHTML property lets you use HTML tags. */


// Changing styles (in CSS)

    /* IMPORTANT
    If you style property has 2 words in CSS you would use a hyphen -
    to separate them but in JavaScript you need you use camel case*/

    listTitle.style.color = 'red'; // setting color
    listTitle.style.backgroundColor = 'black'; // setting background color
    listTitle.style.padding = '10px'; // edit padding
    listTitle.style.borderRadius = '10px'; // edit border radius



// document.querySelector()

    console.log(document.querySelector('h1')); 
    /* Selects by h1 and only the first h1 if there are multiple on the page*/

    console.log(document.querySelector('#app-title')); // Select by id
    console.log(document.querySelector('.container')); // Select by class
    console.log(document.querySelector('input[type=text]')); // Select by attribute
    console.log(document.querySelector('li:nth-child(2)').innerText) // Using css pseudo selectors
    /* On Line 77 I am Selecting by <li> (Here I'm selecting the second <li>) */

    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.innerText = 'Apple Juice';

    /* On line 80 I use css pseudo selectors to select <li> 2 and change it
    from 'Orange Juice' to 'Apple Juice' on line 82. */

    secondItem.style.color = 'red';
    /* I will highlight the <li> i changed it red to show what was changed 
    on the shopping list. */

    console.log('New second list item now = ', secondItem.innerText)