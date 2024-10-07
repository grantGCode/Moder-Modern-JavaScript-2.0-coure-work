// insertAdjacentElement Example
  /*
    This will insert an adjacent Element.
  
    I want to insert this element before the Filter items text on the shopping list.
  */
function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1') // creating a new <h1> to add
  h1.textContent = 'insertAdjacentElement';
  h1.style.color = 'red';
  h1.style.fontSize = 'small';
  h1.style.margin = 'small';

  filter.insertAdjacentElement('beforebegin', h1); // inserting new <h1> beforebegin.
};

// insertAdjacentText Example
  /* 
    This will insert new adjacent text.

    I want to insert this new text after the first <li>.
  */
function insertText() {
  const item = document.querySelector('li:first-child'); // Selecting the first <li> in the shopping list.

  item.insertAdjacentText('afterend', 'insertAdjacentText') // inserting new text afterend.
};

// insertAdjacentHTML example
  /* 
    This will insert new HTML.

    I want to insert this new HTML after the clear all <button> as an <h2>.
  */
function insertHTML() {
  const clearBtn = document.querySelector('#clear'); // Selecting clear id for the Clear all <button>

  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>'); // inserting new HTML afterend.

};
/* NOTE: insertHTML() or insertAdjacentHTML() works just like innerHTML() */

/* All 3 methods above work the same way it just depends what your inserting */

// insertBefore Example

/* 
  Note: This function is similar to append child.
  But you bring in or define a parent and bring in that parent 
  and choose the item inside the parent you want to insert your new item before. 
*/
/*
  I want to insert a new <li> before the third <li> in the <ul> shopping list.
*/
function insertBeforeItem() {

  const ul = document.querySelector('ul'); // Selecting the already existing parent.

  const li = document.createElement('li'); // The new <li> to be inserted.
  li.textContent = 'insertBefore'; // adding text of the new <li>.

  const thirdItem = document.querySelector('li:nth-child(3)'); // Selecting the third <li> where I want to insert the new <li> before.

  /* adding button to the new <li> as extra */

  // const button = createButton('remove-item btn-link text-red');
  // li.appendChild(button); 
  
  /* NOTE: To use the insertBefore() it must be called on the parent element. */
  ul.insertBefore(li, thirdItem); //  For this example I will call the <ul> of the shopping list to insert the new <li>. 
};



insertElement(); // insert beforebegin.
insertText(); // insert afterend.
insertHTML(); // insert afterend.
insertBeforeItem(); // insert beforeBegin.


/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
