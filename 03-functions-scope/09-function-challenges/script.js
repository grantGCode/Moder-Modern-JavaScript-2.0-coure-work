// Chalange 1

function getCelsius(F) {
    return (F-32)*5/9 + " \xB0C";
}

console.log(`The temperture is ${getCelsius(32)}`);

// Chalange 2


const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        min: min,
        max: max,
    }
}

console.log(minMax([1, 2, 3, 4, 5]));