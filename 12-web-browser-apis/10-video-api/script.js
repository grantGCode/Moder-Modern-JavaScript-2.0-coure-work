const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const Stop = document.getElementById('stop');
const curentTime = document.getElementById('curent-time');

play.addEventListener('click', () => video.play());
pause.addEventListener('click', () => video.pause());
Stop.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
});

video.addEventListener('timeupdate', () => (curentTime.innerText = video.currentTime));