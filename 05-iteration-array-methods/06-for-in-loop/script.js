// for In loop with Objects

const colors = {
    color1: 'blue',
    color2: 'red',
    color3: 'green',
    color4: 'yellow'
};


for (const key in colors) {
    console.log(key, colors[key]); // key will display the Objects keys and the colors[key] will display the values of the object.
}

// for In loop with Arrays

const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArr) {
    console.log(colorArr[key]);
}