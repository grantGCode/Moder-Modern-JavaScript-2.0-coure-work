// function showAnimationFrames() {
//     console.log('Frames loged');

//     requestAnimationFrame(requestAnimationFrame);// comment this lineand olny 1 frame will log
// }

// requestAnimationFrame(showAnimationFrames);


let start;// start condition
let done = false;// stop condition
const image = document.querySelector('image');

function moveBall(timestamp) {
   if (start === undefined) { 
    start = timestamp;
   }

   const elapsed = timestamp - start;

   if (elapsed > 10000) {
    done = true;//Stops animation
   }

   if (done) {
    return;
   }
   
   image.style.transform = `translateX(${elapsed / 10}px)`;// moving on X axis
   image.style.transform = `rotate(${elapsed / 10}deg)`;

    requestAnimationFrame(moveBall)
}

requestAnimationFrame(moveBall);