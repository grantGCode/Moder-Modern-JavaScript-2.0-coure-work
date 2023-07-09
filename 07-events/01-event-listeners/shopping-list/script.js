/* Puting events in elements in the HTML can be done but is not recomended because it poses a security risk" */

const clearBtn = document.querySelector('#clear');

    function onClear() {
        alert('Clear Items');
    }
    
function removeAllItems() {  
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');
    items.forEach((item) => item.remove());    
}
//clearBtn.onclick = () => alert('Clear Items');


// Java Script event Listener

// clearBtn.onclick = function () {
//     alert('Clear Items');
// }

// clearBtn.onclick = function () {
//     console.log('Clear Items');
// }

/* if both fuctions are uncommented only the console log function will run */

// addEventListener()
//clearBtn.addEventListener('click', () => alert('Clear Items'));

//clearBtn.addEventListener('click', () => console.log('Clear Items'));

/* addEventListener() will run both functions if the is more than 1 addEventListener() */

//clearBtn.addEventListener('click', onClear);

//setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000); // removes clearBtn addEventListener() 5 sec after page loads

// setTimeout(() => clearBtn.click(), 5000); // this auto clicks via the script and not the user after 5 sec when page loads


