// const message = {
//     id: 1,
//     text: 'Hello world',
// };


function capitalizeWords(str) {
    return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

function makeMoney(amount) {
    return `$${amount}`;
}

// I created an object containing 2 functions to export to and run in app.js

module.exports = {
    capitalizeWords,
    makeMoney,
}
