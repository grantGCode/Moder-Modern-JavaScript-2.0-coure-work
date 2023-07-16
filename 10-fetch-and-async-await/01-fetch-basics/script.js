// Feching a Json file
fetch('./movies.json')
.then((responce) => responce.json())
.then((data) => console.log(data));


// Feching a text file
fetch('./text.txt')
.then((responce) => responce.text())
.then((data) => console.log(data));

// Fetching from an API

fetch('https://api.github.com/users/grantGCode/repos')
.then((responce) => responce.json())
.then((data) => console.log(data))
