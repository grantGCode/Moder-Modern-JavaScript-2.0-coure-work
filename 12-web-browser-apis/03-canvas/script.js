const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');// Context

// Draw a Rectangle

    ctx.fillStyle = 'green';// Rectangle styleing
    ctx.fillRect(100, 100, 150, 100); // the Rectangle 

// Draw a circle
    ctx.fillStyle = 'red';
    ctx.arc(300, 300, 150, 100, Math.PI * 2 ); /*.acr is used to create a circle, 100 = 'circle size', 0 = 'start angle', PI = 'PIE', 
    and we multiply by 2 because Math.PI give only half a circle. */

    ctx.fill();// If I don't set a fill style .fill will use the last used fill style.


// Draw a line
    ctx.beginPath();
    ctx.strokeStyle = 'orange'
    ctx.moveTo(10, 10);
    ctx.fillStyle(300, 300);
    ctx.stroke();//Draws the line on page

// Draw Text on page

    ctx.font = '30px Arial';
    ctx.fillStyle = 'blue';
    ctx.fillText('Hello World', 300, 100, 300);
    ctx.lineWidth = 1;// Stroke text style on line 30
    ctx.strokeText('Hello World', 300, 100, 300);// will use the last used strokeStyle
