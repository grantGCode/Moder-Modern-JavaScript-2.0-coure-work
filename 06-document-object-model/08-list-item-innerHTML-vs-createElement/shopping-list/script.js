const div = document.createElement('div');
/* Creating list item innerHTML vs createElement */

// Quick and Dirty way innerHTML

    function createListItem(item) {
        const li = document.createElement('li');// create new <li> element.


        li.innerHTML = `${item}
        <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
        </button>`
        /*
            Above on Lines 10 - 13:
             I'm using innerHTML to insert the new <li> element 
            and add the <button> and <i> to so it appear also.
        */ 
        document.querySelector('.items').appendChild(li);
    }

    /* 
        As mentioned in the last Module using interHTML is not the best way of
        inserting new elements. Because this will cause the web-browser to re-parse below is a much cleaner and better way of doing so.
    */ 

// Clean & Performant way createElement

    function createNewItem(item) {
        const li = document.createElement('li'); // First we start by creating a new element.
        li.appendChild(document.createTextNode(item)) // the add a text node to our newly created <li>.
        
        const button = document.createElement('button'); // Then will add the button by creating one here.
        button.className = "remove-item btn-link text-red"; // That button will have a class so I'll add it here.

        const icon = document.createElement('i'); // Then I will add the icon element by creating it here.
        icon.className = "fa-solid fa-xmark"; // Here I will add the font awesome class here for the icon. 

        button.appendChild(icon); // Then I will append the icon to the button using appendChild() method.
        li.appendChild(button); // Then I will append the button to the <li>.

        document.querySelector('.items').appendChild(li); // Then lastly I will append everything to the DOM.
    };

createListItem('Eggs'); // here I am adding our dirty element to the shopping list.
createNewItem('Cheese'); // here I'm adding the cleaner element to the shopping list.