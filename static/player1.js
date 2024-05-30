console.log("testy testy")


    


document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById("player");
    const playBtn = document.getElementById("play-btn");
    const backBtn = document.getElementById("back-btn");
    const fwdBtn = document.getElementById("fwd-btn");
    const audio = document.getElementById("audioAPI");
    const progress = document.getElementById("progress");
    const progressContainer = document.getElementById("progress-container");
    const title = document.getElementById("title");



    const tunes = [1];
    let index = 0;

    function play(url){
        audio.src = url;
        audio.play();
    }




        var playButtons = document.querySelectorAll('.pick-btn');
        playButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                var audioUrl = this.getAttribute('data-audio-url');
                // Pass audioUrl to your player
                console.log('Playing:', audioUrl);
                play(audioUrl)
            });
        });
    });

