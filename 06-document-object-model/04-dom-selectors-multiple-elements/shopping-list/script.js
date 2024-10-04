// querySelectorAll()

/* .querySelectorAll() selects all <li> elements. */

const listItems = document.querySelectorAll('.item') 
console.log(listItems)
/* Logging the listItems to the console will return a Node list.
A Node list is an array like structure and this Node list is 
returning an array structure of <li> in the app's HTML page. */

 console.log(listItems[1].innerText); // Here I'm retuning the second <li>.

listItems[1].style.color = 'red';// Here I'm changing the second <li> to red.

listItems.forEach((items) => {
    items.style.color = 'red';
}); 
/* Now I'm using a forEach() to changing all the <li> to red
on lines 15 - 17. */
/* commented out lines 21 -34 */
// listItems.forEach((items, index) => {
//     items.style.color = 'red';

//     if (index === 1) {
//         items.remove();
//     } 
    /* removes second list item */

//     if (index === 0) {
//         items.innerHTML = `Oranges <button class="remove-item btn-link text-red">
//         <i class="fa-solid fa-xmark"></i>
//       </button>`; 
//     } 
// });
    /* Here I am changing the first <li> to Oranges on Lines: 29 -34.
        NOTE:
            In the first <li> there is a <button> in the <li> changing the <li> text content to "Oranges" removed the <button>
            to prevent this and add back the <button> instead of using innerText.
            Use innerHTML and a template strings and past the button element in. 
            to prevent the DOM from removing the element after changing it.
    */

// Selecting all elements by className

const listItems2 = document.getElementsByClassName('item');

console.log(listItems2);
/* Logging with getElementsByClassName() to the console will 
return an HTMLCollection array list than a Node list array.
 */
console.log(listItems2[2]); // I can still us indexes to grab individual elements.
console.log(listItems2[2].innerText);// This will return the text content of <li> 3.


/* listItems2.forEach((item) => {
    console.log(item.innerText);
    });*/ 
    /* Lines: 56 - 58. Will Return an error because listItems2 is
    not a function because it's not and array it's an HTML collection */
    
const listItemsArray = Array.from(listItems2);
/* Changing listItems2 to an Array with Array.from 
will get it the .forEach() to work. */ 


listItemsArray.forEach((item) => {
    console.log(item.innerText);
}); 

const listItems3 = document.getElementsByTagName('li');
/* .getElementsByTagName() will select elements by tag name*/

console.log(listItems3); // Returns another HTML Collection
console.log(listItems3[0]);// Retuning one of multiple elements using indexes.
console.log(listItems3[0].innerText); // This will return the text content of <li> 0.

// Gist for most cases it generally best to stick with querySelectorAll()