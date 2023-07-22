// function showAnimationFrames() {
//     console.log('Frames loged');

//     requestAnimationFrame(showAnimationFrames);// comment this lineand olny 1 frame will log
// }

// requestAnimationFrame(showAnimationFrames);


let start;// start condition
let done = false;// stop condition
const image = document.querySelector('img');



function moveBall(timestamp) {
   if (start === undefined) { 
    start = timestamp;
   }

   const elapsed = timestamp - start;

   if (elapsed > 6000) {
    done = true;//Stops animation
   }

   if (done) {
    return;
   }
   
   image.style.transform = `translateX(${elapsed / 10}px) rotate(${elapsed / 10}deg)`; // .transform have to be in same `` or else last .transform will run. (comment out this line and uncomment lines 32 & 33 to see)
   //image.style.transform = `translateX(${elapsed / 10}px)`; 
   //image.style.transform = `rotate(${elapsed / 10}deg)`;

   requestAnimationFrame(moveBall);
}

requestAnimationFrame(moveBall);