


const chuckJokes = document.getElementById('joke');
const nextJoke = document.getElementById('joke-btn');

function newJoke(){
    const chuck = new XMLHttpRequest();
    
    chuck.open('GET', 'https://api.chucknorris.io/jokes/random');

    chuck.onreadystatechange = function () {
    //console.log(this.readyState);
        //console.log(this.status); //checking the state and status to the joke api

        if (this.readyState === 4 && this.status === 200) {
            chuckJokes.innerHTML = JSON.parse(this.responseText).value        
        } else {
            chuckJokes.innerHTML = 'Somthing went wrong';
            chuckJokes.style.textFormat = 'italic';
            chuckJokes.style.textColor = 'red';
        }
    }
    chuck.send();
}


nextJoke.addEventListener('click', newJoke);

