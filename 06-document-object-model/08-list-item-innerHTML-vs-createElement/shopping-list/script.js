const div = document.createElement('div');
/* Creating list item innerHTML vs createElement */

// Quick and Dirty way innerHTML

function createListItem(item) {
    const li = document.createElement('li');


    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
    </button>`

    document.querySelector('.items').appendChild(li);
}

// Clean & Performant way createElement

function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('item'))
    
    const button = document.createElement('button');
    button.className = "remove-item btn-link text-red";

    const icon = document.createElement('i');
    icon.className = "fa-solid fa-xmark";

    button.appendChild(icon);

    document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');
createNewItem('Cheese');