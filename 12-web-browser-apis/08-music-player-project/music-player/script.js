const musicContaniner = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

console.log(prevBtn);
// song titles
const songs = ['hey', 'summer', 'ukulele'];


// Keep track of songs
let songIndex = 2;

//Initailly load song details
loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

function playSong () {
    musicContaniner.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
};

function pauseSong () {
    musicContaniner.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
};

function prevSong() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);

    playSong();
    console.log('ran function')
};

function nextSong() {
    songIndex++;

    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
};

function updateprogress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContaniner.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});


prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateprogress);
progressContainer.addEventListener('click', setProgress)