const  logo = document.querySelector('img');
const onClick = () => console.log('click event');



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


//Event Liseriner

logo.addEventListener('click', onClick);
// logo.addEventListener('dblclick', onDubbleClick);
darkButton.addEventListener('click', darkMode)






