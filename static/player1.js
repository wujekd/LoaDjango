document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById("player");
    const playBtn = document.getElementById("play-btn");
    const backBtn = document.getElementById("back-btn");
    const fwdBtn = document.getElementById("fwd-btn");
    const audio = document.getElementById("audioAPI");
    const progress = document.getElementById("progress");
    const progressContainer = document.getElementById("progress-container");
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const cover = document.getElementById("cover");
    const volCont = document.getElementById("volume-container");
    const vol = document.getElementById("volume");

    let currentPlayingButton = null;
    let timeOnPause = null;
    const tunes = [1];
    let index = 0;
    let playing = false;

    function play(url){
        playBtn.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c8c8c8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#ffffff"></path> <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#ffffff"></path> </g></svg>`
        audio.src = url;
        playing = true;

        audio.play();
    }

    function playBtnClick() {
        if (playing == true){
            audio.pause();
            playing = false;
            timeOnPause = audio.currentTime;
            console.log(timeOnPause)
            playBtn.innerHTML = `<svg width="19" height="19" viewBox="-3 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-419.000000, -571.000000)" fill="#ffffff"> <path d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554" id="play" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`
            
        } else {
            if (currentPlayingButton){
                playing = true;
                currentPlayingButton.textContent = "⏸";
                playBtn.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c8c8c8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#ffffff"></path> <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#ffffff"></path> </g></svg>`;
                audio.play()
 
            }
        }
    }


        var playButtons = document.querySelectorAll('.pick-btn');
        playButtons.forEach(function(button) {
            button.addEventListener('click', function() {

                var audioUrl = this.getAttribute('data-audio-url');

                if (currentPlayingButton && currentPlayingButton !== this) {
                    currentPlayingButton.textContent = "▶";
                }
                if (audio.src == new URL(audioUrl, window.location.href).href) {
                    if (playing == true) {
                    audio.pause();
                    playing = false
                    playBtn.innerHTML = `<svg width="19" height="19" viewBox="-3 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-419.000000, -571.000000)" fill="#ffffff"> <path d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554" id="play" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`
                } else if (playing == false) {
                    this.textContent = "⏸";
                    playing = true;
                    playBtn.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c8c8c8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#ffffff"></path> <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#ffffff"></path> </g></svg>`;
                    audio.play()
                }
                } else {
                    play(audioUrl);
                    playing = true;
                    currentPlayingButton = this;
                    title.textContent = this.getAttribute("audio-name");
                    author.textContent = this.getAttribute('author');
                    cover.src = this.getAttribute('pic-url');
                    this.textContent = "⏸";
                }

                // button.textContent = "⏸"
                // audio.pause();

                // currentPlayingButton = this;
                
                // play(audioUrl)
            });
        });

    playBtn.addEventListener('click', playBtnClick)

    audio.addEventListener("pause", ()=>{
        currentPlayingButton.textContent = "▶"
    })

    audio.addEventListener('timeupdate', updateProgress);
    function updateProgress(e) {
        // console.log(e.srcElement.currentTime)
        const {duration, currentTime} = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`
    }

    progressContainer.addEventListener('click', setProgress);
    function setProgress(e) {
        const width = this.clientWidth
        // console.log(width)
        const clickX = e.offsetX
        const duration = audio.duration;
    
        audio.currentTime = (clickX / width) * duration;
    }



var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var gainNode = audioContext.createGain();
var source = audioContext.createMediaElementSource(audio);
source.connect(gainNode);
gainNode.connect(audioContext.destination);


volCont.addEventListener("click", setVolume)
function setVolume(e) {
    const height = this.clientHeight;
    const rect = this.getBoundingClientRect(); // Get the bounding rectangle of the element
    const mouseY = e.clientY - rect.top; // Calculate the vertical distance from the top of the element to the mouse pointer
    let value = (1 - (mouseY / height)) * 100; // Calculate the percentage and invert it
    value = Math.max(0, Math.min(100, value)); // Ensure value is within 0 to 100 range
    console.log(value)
    vol.style.height = `${value}%`;
    gainNode.gain.value = value / 100;
}




    });

