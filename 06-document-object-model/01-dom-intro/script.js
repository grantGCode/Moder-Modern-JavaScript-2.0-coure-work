// Acessing propertys of the HTML with the DOM via the Window key word

console.log(window.document) // Returns the full HTML code in the console

// Acessing propertys of the HTML with the DOM via the document key word


    console.log(document.body) // Retuns the body element of the HTML

    console.log(document.body.innerText) // Returns the all text elements in the HTML

        /* document.body.innerText = 'Helo World' */ 
        // I can set document.body.innerText to = any value and it will change the HTML to equal that value

    console.log(document.links[0])// This would pull up any links in the HTML

// Metodas with document object

document.write('Hello World'); // with no tageting Hello World will be put at the end of the document

console.log(document.getElementById('main')); //getElementById can grab an element by an ID set to it (Here I grabe the div with the id of main) 

    // Here is some exaples of what I do with getElementById

    /*  document.getElementById('main') = 'Hello from Main'
    main.innerHTML = <h1>'Hello from Main'</h1> */

