// querySelectorAll()

const listItems = document.querySelectorAll('.item') // Selects all list items
 console.log(listItems[1].innerText); // retuning second li

listItems[1].style.color = 'red';// Changing the second li to red

listItems.forEach((items) => {
    items.style.color = 'red';
}); // Changing all li to red


// listItems.forEach((items, index) => {
//     items.style.color = 'red';

//     if (index === 1) {
//         items.remove();
//     } // removes second list item

//     if (index === 0) {
//         items.innerHTML = `Oranges <button class="remove-item btn-link text-red">
//         <i class="fa-solid fa-xmark"></i>
//       </button>`; 
//     } // Changes first li list item to Oranges 
//     /* In the first li there is a button element in the content changing the list item to Oranges removed he buttion
//     to add back the buttion us change innerText to innerHTML and a templet string and past the button element in. */
// });

const listItems2 = document.getElementsByClassName('item');

console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);

/* listItems2.forEach((item) => {
    console.log(item.innerText);
});*/ // Will Return an error because list items 2 is not a function it is an HTML collection

listItemsArray.forEach((item) => {
    console.log(item.innerText);
}); // I had to change listItems2 to an Array to get it to work with Array.from

const listItems3 = document.getElementsByTagName('li');

console.log(listItems3[0].innerText);