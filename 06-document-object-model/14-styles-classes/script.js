document.querySelector('ul').className = "Item-List" // Line 3 would not grab the ul. Had to fix the class name for ul
const text = document.querySelector('p');
const itemList = document.querySelector(".Item-List");
const items = itemList.querySelectorAll('li');



function run() {
    //calls Name
    // console.log(itemList.className); // Showing what I have select
    // text.className = 'card dark';

    //classList
    // console.log(itemList.classList); 

    itemList.classList.forEach((c) => console.log(c));

        //text.classList.add('dark');
        //text.classList.remove('card');
        
        
        // text.classList.toggle('dark');
        // text.classList.toggle('hidden');

        text.classList.replace('card', 'dark');

    // Change Style
    // itemList.style.lineHeight = '3';
    
    items.forEach((items, index) => {
    itemList.style.color = 'red';

        if (index === 2) {
            items.style.color = 'blue';
        }
    });
}


document.querySelector('button').onclick = run;