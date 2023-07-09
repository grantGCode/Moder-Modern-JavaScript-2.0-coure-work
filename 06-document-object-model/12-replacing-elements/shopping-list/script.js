function replaceFirstItem() {
    const firstItem = document.querySelector('li:nth-child(1)');

    const li = document.createElement('li');
    li.textContent = 'Replaced First';

    /* adding buttion */
    
        // function createButtion(classes) {
        //     const button = document.createElement('button');
        //     button.className = classes;
            
        //     const icon = createIcon('fa-solid fa-xmark');
        //     button.appendChild(icon);
            
        //     return button;
            
        // }
        
        // const button = createButtion('remove-item btn-link text-red');
        // li.appendChild(button);
    
    
    firstItem.replaceWith(li);
}

replaceFirstItem();

function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replace second</li>';

}

replaceSecondItem();

function replaceAllItems() {
    const newLis = document.querySelectorAll('li');
    
    
    newLis.forEach((item, index) => {
        //item.outerHTML = '<li>Replaced All Elements</li>'; //outerHTML method
        
        // forEach mthold with 1 index = Second Item
            /* newLis.forEach((item, index) => {
                if( index === 1) {
                    item.innerHTML = 'Second Item';
                } else {
                    item.innerHTML = 'Replace All';
                } 
            }) */ 
        
        // Ternary method
        newLis.forEach(
            (item, index) => 
            (item.innerHTML = index === 1 ? 'Second item'  : 'item')
        );
    });
    
}

replaceAllItems();


function replaceChildHeading() {
    const header = document.querySelector('header'); // Selceing the parent element of <header></header>
    const h1 = document.querySelector('header h1'); // Selcet the child element of <h1>Shopping List</h1>

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.style.color = 'blue'
    h2.textContent = 'Shopping list';
    header.replaceChild(h2, h1);
}

replaceChildHeading();