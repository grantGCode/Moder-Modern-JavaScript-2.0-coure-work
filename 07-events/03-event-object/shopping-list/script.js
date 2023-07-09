const  logo = document.querySelector('img');

function events (ent) {
    // console.log(ent.target);
    // console.log(ent.curentTarget);
    // console.log(ent.type);
    // console.log('x ', ent.clientX, ' y ', ent.clientY);
    //console.log('x ', ent.offsetX, ' y ', ent.offsetY);
    // console.log('x ', ent.pageX, ' y ', ent.pageY);
    // console.log('x ', ent.screenX, ' y ', ent.screenY);
    // console.log(ent.timeStamp);
}

function onDrag(ent) {
    document.querySelector('h1').textContent = `x ${ent.clientX} Y ${ent.clientY}`;
}

console.log(document.querySelector('h1'));

logo.addEventListener('click', events);
logo.addEventListener('drag', onDrag)

// logo.addEventListener('click', function (ent) {
//     console.log(ent);
// });

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/