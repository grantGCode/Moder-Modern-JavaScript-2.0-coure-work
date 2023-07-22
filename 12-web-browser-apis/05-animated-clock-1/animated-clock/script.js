function clock() {
    const now = new Date();
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');

    console.log(canvas)

    // Set up canvas
    ctx.save(); // save the default state
    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(250, 250); // Put 0, 0 (X, Y) in the middle
    ctx.rotate(-Math.PI / 2) // Rotate clock -90deg



    ctx.restore(); // restore default state
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#f4f4f4'
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';

    // Draw clock face/border
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#800000'
    ctx.arc(0, 0, 142, 0, Math.PI *2, true);
    ctx.stroke();
    ctx.fill();
    ctx.restore();


    ctx.restore();// restore defualt state
}

clock();