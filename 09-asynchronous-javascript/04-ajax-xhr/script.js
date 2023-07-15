const xhr = new XMLHttpRequest(); 
const githubData = new XMLHttpRequest();
xhr.open('GET', './movies.json');

githubData.open('GET', 'https://api.github.com/users/grantGCode/repos'); // pulling my git hub repository list from githup api

/* readyState has 5 posible values 

 0: request not initialized
 1: server connection estalished 
 2: request recived
 3: processing request
 4: request finished and resonse is ready
*/

xhr.onreadystatechange = function checkStateAndStatus() {
    console.log(this.readyState); // Checking the state
    console.log(this.status); // checking the status
}

xhr.onreadystatechange = function parseMyMovieData() {
    if (this.readyState === 4 && this.status === 200) {
        
        const movieHeader = document.createElement('h2');
        movieHeader.innerHTML = `<h2>MOB Movies</h2>`;
        movieHeader.style.fontSize = 'small';
        document.querySelector('#mainTitle').appendChild(movieHeader);
        
        const data = JSON.parse(this.responseText); // This is the data from movies.json
        
        data.forEach((movie) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
        document.querySelector('#results').appendChild(li);
    });
}
}

githubData.onreadystatechange = function myRepoData() {
    if (this.readyState === 4 && this.status === 200) {
        
        const repoHeader = document.createElement('h2');
        repoHeader.innerHTML = `<h2>My Git-Hub Repositories</h2>`;
        repoHeader.style.fontSize = 'small';
        document.querySelector('#mainTitle').appendChild(repoHeader);
        
        const data = JSON.parse(this.responseText); // This is the data from github
        
        data.forEach((repo) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
        document.querySelector('#results').appendChild('li:nth-child(1)');
    });
}
}

xhr.send();

githubData.send();