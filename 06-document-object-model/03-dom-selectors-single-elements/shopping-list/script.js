/* All methods used are to select just one single elements */

// document.getElementById(); 
    /* Let you grab an elements by it's Id. */

    console.log(document.getElementById('app-title'));

    console.log(document.getElementById('app-title').id);// If you want to get a specific attribute adding the property of ID lets you 
    /* or */
    console.log(document.getElementById('app-title').getAttribute('id'));

// Set Attrabute

    /* document.getElementById('app-title').id = 'new-id'; */
    document.getElementById('app-title').title = 'Shopping List';
    document.getElementById('app-title').setAttribute('class', 'Title'); // Here I set the class Atteibute of app title and namded it title

    const title = document.getElementById('app-title');

    console.log(title);

// get/change content

    /* .textContent will get the content of an element like the the text inside <title></title>. */

    console.log(title.textContent);
    title.textContent = 'Hello World'; // Here I change the text content of title to "Hello World"

    title.innerText = 'Hello Again' // interText serves the same purpus of textContent and this line get a simaler result as line 24.

    title.innerHTML = '<strong>Shopping List</strong>';


// Changing styles (in CSS)

    title.style.color = 'red';
    title.style.backgroundColor = 'black';
    title.style.padding = '10px';
    title.style.borderRadius = '10px';

// document.querySelectior()

    console.log(document.querySelector('h1')); // Selects by h1 (only the first h1 if there are multiple on the page)
    console.log(document.querySelector('#app-title')); // Select by id
    console.log(document.querySelector('.container')); // Select by class
    console.log(document.querySelector('input[type=text]')); // Select by atteibute
    console.log(document.querySelector('li:nth-child(2)').innerText) // Selceting by list item (Here I'm selecting the second list item)

    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.innerText = 'Apple Juice';

    console.log('New second list item now = ', secondItem.innerText)