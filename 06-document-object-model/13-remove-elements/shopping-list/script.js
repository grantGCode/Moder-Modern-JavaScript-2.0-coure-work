/* Method 1 remove() */
function removeClearButton() {
    document.querySelector('#clear').remove()
    /* or
    const clearBtn = document.querySelector('#clear') // create a variable and call on that variable below wit remove()
    clearBtn.remove() 
    */
};

removeClearButton();

/* Method 2 removeChild() */
function removeFirstItem() {
    const ul = document.querySelector('ul'); // First select the parent element.
    const li = document.querySelector('li:first-child'); // Then select the child or item you want to remove
    ul.removeChild(li); // call the parent method here with the child passed in the Method.
};

removeFirstItem();


/* Using indexes to remove a <li> from an <ul> */
function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    /* or
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`).remove();
    */
    ul.RemoveChild(li); 
};

// removeItem(2);

/* Using node list array like structure to remove item. */
function removeItem2(itemNumber) {
    const ul = document.querySelector('ul')
    const li = document.querySelectorAll('li')[itemNumber - 1]; 
    /*
        Pass in a - 1 in to subtract from the index of itemNumber will
        allow me to bypass the array's zero based indexing when passing
        in a number value when I call removeItems2().
    */
    ul.removeChild(li);
}

// removeItem2(1); // will remove <li> 1 because I bypassed the 0 based index on line: 38.


/* Node list indexes */
function removeItem3(itemNumber) {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}

// removeItem3(1); // will remove <li> 1.

/* Short Version of removeItem3 */
const removeItem4 = (itemNumber) => 
document.querySelectorAll('li') [itemNumber - 1].remove();

// removeItem4(3); // will remove <li> 3.
