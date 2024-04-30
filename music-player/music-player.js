let progress = document.querySelector('#progress');
let song = document.querySelector('#song');
let ctrlIcon = document.querySelector('#ctrl-icon');

song.addEventListener('loadedmetadata', () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
});

ctrlIcon.addEventListener('click', () => {
    if (ctrlIcon.classList.contains('fa-pause')) {
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');

    } else {
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');

    }
})
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 1)
}
progress.addEventListener('change', () => {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
})