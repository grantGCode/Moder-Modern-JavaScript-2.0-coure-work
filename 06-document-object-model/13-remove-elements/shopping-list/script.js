function removeClearButton() {
    document.querySelector('#clear').remove()
};

removeClearButton();

function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');
    ul.removeChild(li);
}

// removeFirstItem();


function removeItem(itemNumber) {
    const ul = document.querySelector('ul')
    const li = document.querySelector(`li:nth-child(${itemNumber})`).remove();

    /* or
    
    const ul = document.querySelector('ul')
    const li = document.querySelector(`li:nth-child(${itemNumber})`)
    
    ulremoveChild(li); */



}

removeItem(2);

function removeItem2(itemNumber) {
    const ul = document.querySelector('ul')
    const li = document.querySelectorAll('li')[itemNumber - 1];

    ul.removeChild(li);
}

// removeItem2(1);


function removeItem3(itemNumber) {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}

removeItem3(1);

/* Short Vertion of removeItem3 */
const removeItem4 = (itemNumber) => 
document.querySelectorAll('li') [itemNumber - 1].remove();

// removeItem4(3);