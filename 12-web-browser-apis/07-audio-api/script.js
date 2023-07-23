const audio = document.querySelector('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const Stop = document.getElementById('stop');
const currenTime = document.getElementById('current-time');
const volume = document.getElementById('volume');
console.log(audio);

play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
Stop.addEventListener('click', () => { audio.pause(); audio.currentTime = 0}); // There is no stop methould for audio

audio.addEventListener('timeupdate', () => {currenTime.innerText = audio.currenTime});

volume.addEventListener('change', () => (audio.volume = volume.vaule));
