const volumeSlider = document.getElementById("id_volumeOffset");
const infoThing = document.getElementById("info");
const playBtn = document.getElementById("play");
const audioBacking = document.getElementById("backing");
const audioSub = document.getElementById("submitted");
const progSlider = document.getElementById("progress");
let playing = false;


function updateInfo(){
    infoThing.textContent = volumeSlider.value
    console.log("testy")
}

volumeSlider.addEventListener("input", updateInfo)

playBtn.addEventListener("click", function(){
    if (playing == false){
        playing = true;
        audioBacking.play();
        audioSub.play();
        playBtn.textContent = "STOP";
    } else if (playing == true) {
        playing = false;
        audioBacking.pause();
        audioSub.pause();
        playBtn.textContent = "PLAY"
    }
})


audioBacking.addEventListener("timeupdate", updateProgress);

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    // console.log(duration)
    // console.log(currentTime)
    const progress = (currentTime / duration);
    console.log(progress)
    progSlider.value = progress;
}

progSlider.addEventListener("input", ()=>{
        
    duration = audioBacking.duration;
    const timeVal = duration * progSlider.value;
    audioBacking.currentTime = timeVal
    audioSub.currentTime = timeVal
})


const audioContext = new AudioContext();
const subGain = audioContext.createGain();
const source = audioContext.createMediaElementSource(audioSub);
source.connect(subGain);
subGain.connect(audioContext.destination);

volumeSlider.addEventListener('input', function(){
    subGain.gain.value = volumeSlider.value;
})