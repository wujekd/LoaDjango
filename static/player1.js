document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById("player");
    const playBtn = document.getElementById("play-btn");
    const backBtn = document.getElementById("back-btn");
    const fwdBtn = document.getElementById("fwd-btn");
    const audio = document.getElementById("audioAPI");
    const progress = document.getElementById("progress");
    const progressContainer = document.getElementById("progress-container");
    const title = document.getElementById("title");

    let currentPlayingButton = null;
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
            playBtn.innerHTML = `<svg width="19" height="19" viewBox="-3 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-419.000000, -571.000000)" fill="#ffffff"> <path d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554" id="play" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`
            
        } else {
            if (currentPlayingButton){
                let url = currentPlayingButton.getAttribute("data-audio-url");
                currentPlayingButton.textContent = "⏸";
                play(url);
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
                if (audio.src == new URL(audioUrl, window.location.href).href && playing == true) {
                    audio.pause();
                    playing = false
                    playBtn.innerHTML = `<svg width="19" height="19" viewBox="-3 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-419.000000, -571.000000)" fill="#ffffff"> <path d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554" id="play" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`

                } else {
                    play(audioUrl);
                    playing = true;
                    currentPlayingButton = this;
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

    });

