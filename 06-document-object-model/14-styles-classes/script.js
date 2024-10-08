document.querySelector('ul').className = "Item-List" // Line 3 would not grab the ul. Had to fix the class name for ul
const text = document.querySelector('p');
const itemList = document.querySelector(".Item-List");
const items = itemList.querySelectorAll('li');



function run() {
    /* className */
    // console.log(itemList.className); // Showing what I have select
    // text.className = 'card dark'; 
    /* 
        This will overwrite the previous class "card" it replaced
        with dark. to keep the "card" class pass in card as you
        see above on line: 11. 
    */

    /* classList property */
     console.log(itemList.classList); // return DOMToken list which is an array of class.

    itemList.classList.forEach((c) => console.log(c)); // return each class to console

        //text.classList.add('dark');
        //text.classList.remove('card');
        
        /* Best way of implementing a dark light mode switcher */
        // text.classList.toggle('dark');
        // text.classList.toggle('hidden');

        text.classList.replace('card', 'dark'); // Using replace to toggle and replace one class with another.

    /* Change Style */
    // itemList.style.lineHeight = '3';
    
    /* Looping through the <ul> */
    items.forEach((items, index) => {
    itemList.style.color = 'red';
        /* Targeting specific item with index */
        if (index === 2) {
            items.style.color = 'blue';
        };
    });
};


document.querySelector('button').onclick = run;