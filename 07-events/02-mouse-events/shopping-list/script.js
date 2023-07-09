const  logo = document.querySelector('img');
const onClick = () => console.log('click event');
const onDubbleClick = () => console.log('Dubble click event');
const onRightClick = () => console.log('Right click event');
const onMouseDown = () => console.log('Mouse Down event');
const onMouseUp = () => console.log('Mouse Up event');
const onMousWheel = () => console.log('"Whell in the sky keeps on turning"');
const onMouseOver = () => console.log('Mouse Over event');
const onMouseOut = () => console.log('Mouse Out event');
const onDragStart = () => console.log('Mouse Start event');
const onDragStop = () => console.log('Mouse Stop event');
const onDrag = () => console.log('Drag event');
const onDragEnd = () => console.log('Drag End event');


// Dark Mode
const header = document.querySelector('header');

const darkButton = document.createElement('button');
darkButton.textContent = 'Dark Mode'
darkButton.setAttribute('type', 'button');
darkButton.Id = 'Dark-Mode-Button';
darkButton.style.backgroundColor = 'Gray'
darkButton.style.color = 'white';

document.body.appendChild(darkButton);

const darkMode = () => {
    if(document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor = 'Black';
        document.body.style.color = 'White';
    } else {
        document.body.style.backgroundColor = 'White';
        document.body.style.color = 'Black';
    }

}


//Event Liseriners

logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDubbleClick);
darkButton.addEventListener('click', darkMode);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseUp', onMouseUp);
logo.addEventListener('wheel', onMousWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('dragstop', onDragStop);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
