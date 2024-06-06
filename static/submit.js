document.addEventListener('DOMContentLoaded', () => {
    const userAudioInput = document.getElementById('userAudio');
    const responseAudio = document.getElementById('response');
    const backingAudio = document.getElementById("backing");
    const playButton = document.getElementById("play");
    const progSlider = document.getElementById("progress");
    let playing = false;
    const vol = document.getElementById("volume");

    
    const audioContext = new AudioContext();
    const gainNode = audioContext.createGain();
    const source = audioContext.createMediaElementSource(responseAudio);
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);


    vol.addEventListener("input", function() {
        gainNode.gain.value = vol.value;
    })


    
    playButton.addEventListener("click", () => {
        if (playing) {
            responseAudio.pause();
            backingAudio.pause();
            playButton.textContent = "PLAY";
            playing = false;
        } else {
            responseAudio.play();
            backingAudio.play();
            playButton.textContent = "PAUSE";
            playing = true;
        }
    });



    userAudioInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const objectURL = URL.createObjectURL(file);
            responseAudio.src = objectURL;
            responseAudio.load();
            backingAudio.currentTime = 0;
            progSlider.value = 0;
        }
    });



    responseAudio.addEventListener('loadedmetadata', () => {
        console.log('Metadata loaded:');
        console.log('Duration:', responseAudio.duration);
    });

    responseAudio.addEventListener('error', (e) => {
        console.error('Error loading audio:', e);
    });



    backingAudio.addEventListener('timeupdate', updateProgress);
    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progress = (currentTime / duration) || 0;
        progSlider.value = progress;

        const percentValue = progress * 100;
    }

    progSlider.addEventListener("input", () => {
        const duration = backingAudio.duration;
        const timeVal = duration * progSlider.value;
        responseAudio.currentTime = timeVal;
        backingAudio.currentTime = timeVal;
    });
});
