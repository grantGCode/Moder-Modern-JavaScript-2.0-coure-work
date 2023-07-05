// Get Children Elements
    let childOutPut;

    const parent =document.querySelector('.parent');
    // property of .children

        childOutPut = parent.children; // returns HTMLCollection(3) [div.child, div.child, div.child]
        childOutPut = parent.children[1]; // returns  <div class="child">Child 2</div>
            console.dir(childOutPut) // what childOutPut can Access

        parent.children[1].innerText = 'Child Two'; // Changes Text inside div child 2 to "Child Two"
        parent.children[1].style.color = 'red'; // Changes the text color of div child 2 to red.
    // property of .firstElementChild & .lastElementChild

        parent.firstElementChild.innerText = 'Child One';
        parent.lastElementChild.innerText = 'Child Three'

    // Get parent elements from a child

    const child = document.querySelector(' .child');

    childOutPut = child.parentElement; // returns <div class="parent">
    child.parentElement.style.border = '1px solid #ccc';
    child.parentElement.style.padding = '10px';

    // Sibling elements
    const secondItem = document.querySelector('.child:nth-child(2)'); // equals 2nd div child
    
    childOutPut = secondItem; // returns  <div class="child">Child 2</div>
    childOutPut = secondItem.nextElementSibling; // returns  <div class="child">Child 3</div>
    console.log(childOutPut)