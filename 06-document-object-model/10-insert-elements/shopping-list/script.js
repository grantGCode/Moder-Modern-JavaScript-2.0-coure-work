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

  
}


insertElement();
insertText();
insertHTML();
/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
