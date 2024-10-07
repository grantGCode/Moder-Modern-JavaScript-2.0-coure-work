// insertAdjacentElement Example

function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1')
  h1.textContent = 'insertAdjacentElement';
  h1.style.color = 'red';
  h1.style.fontSize = 'small';
  h1.style.margin = 'small';

  filter.insertAdjacentElement('beforebegin', h1);
}
// insertAdjacentText Example

function insertText() {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('afterend', 'insertAdjacentText')
}

// insertAdjacentHTML example

function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');

}

// insertBefore Example

function insertBeforeItem() {

  const ul = document.querySelector('ul'); // Parent

  const li = document.createElement('li'); // The list item to inset
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');// Item adjacent to where I want to insert the list item

  /* adding button */
  // const button = createButton('remove-item btn-link text-red');
  // li.appendChild(button); 
  
  ul.insertBefore(li, thirdItem); 
}


insertElement();
insertText();
insertHTML();
insertBeforeItem();
/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
