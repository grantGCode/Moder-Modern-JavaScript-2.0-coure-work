/* 
  Code from Lines 5 - 19 is the clean function copied over from last Module.
  This function is a single function that does one thing / action.
  This function Creates all 3 elements for the shopping list.
*/
function createNewItemV1(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item))
  
  const button = document.createElement('button');
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement('i');
  icon.className = "fa-solid fa-xmark";

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
};

/* 
  Below I created 3 septate functions that do the same as the function above.
  Each function has on action and will call another function to create and append an element to it's new element.
  
  This format it optional and ether element is up to developer preference as to which to uses.
*/

function createNewItemV2(item) {
  const li = document.createElement('li'); // create <li> element.
  li.appendChild(document.createTextNode(item)); // appending textNode to <li>

  const button = createButton('remove-item btn-link text-red');// calling createButton() function on line 29 - 37.
  li.appendChild(button); // Appending the <button> to the <li>.
  
  document.querySelector('.items').appendChild(li); // appending <li> to the <ul> / Shopping list.
}
// This 

// This function will create a <button> and append the <i> to the button. 
function createButton(classes) {
  const button = document.createElement('button'); // create <button> element.  
  button.className = classes; // add class to <button>
  
  const icon = createIcon('fa-solid fa-xmark'); // calling createIcon() function on line 53 - 57.
  button.appendChild(icon); // Appending the <i> to the button.
  
  return button; // retuning the new <button>.

}; 

// This function will create an <i> element.
function createIcon(classes) {
  const icon = document.createElement('i'); // create <i> element.  
  icon.className = classes;// add class to <i>
  return icon; // Returning new <i> element.
};

createNewItemV1('Cheese');
createNewItemV2('Sauce');