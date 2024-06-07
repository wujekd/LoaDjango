document.addEventListener('DOMContentLoaded', () => {
    const userAudioInput = document.getElementById('userAudio');
    const responseAudio = document.getElementById('response');
    const backingAudio = document.getElementById("backing");
    const playButton = document.getElementById("play");
    const progSlider = document.getElementById("progress");
    let playing = false;
    const vol = document.getElementById("volume");
    const volumeOffsetField = document.getElementById("volumeOffset");
    const responseBox = document.getElementById("respBox");

    let fileLoaded = false

    const audioContext = new AudioContext();
    const gainNode = audioContext.createGain();
    const source = audioContext.createMediaElementSource(responseAudio);
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);

    const submitBtn = document.getElementById("submit-btn");

//  FORM SUBMISSION 
    const submissionForm = document.getElementById("submissionForm");
    const songId = submissionForm.getAttribute("data-song-id");

    submissionForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(submissionForm);
    
        try {
            const response = await axios.post(`/submit/${songId}`, formData, {
                onUploadProgress: function(progressEvent) {
                    if (progressEvent.lengthComputable) {
                        const percentComplete = (progressEvent.loaded / progressEvent.total) * 100;
                        // progressBar.value = percentComplete;
                        submitBtn.textContent = `${Math.round(percentComplete)}%`; // Update text content
                    console.log(percentComplete);
                    }
                }
            });
    
            if (response.status === 200) {
                submitBtn.replaceWith(createSuccessMessage());
                // Optionally reset the form
                submissionForm.reset();
            } else {
                // Handle error
                alert("Submission failed!");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Submission failed!");
        }
    });


    vol.addEventListener("input", function() {
        gainNode.gain.value = vol.value;
        volumeOffsetField.value = vol.value;
    })



    playButton.addEventListener("click", (e) => {

        e.preventDefault();
        if (fileLoaded){
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
        }
    });


    function createSuccessMessage() {
        const successButton = document.createElement("button");
        successButton.classList.add("p-3", "bg-green-900", "border", "border-green-400", "rounded", "px-4", "py-2", "mt-4", "hover:bg-green-700");
        successButton.textContent = "Submission successful! Click to continue";
        successButton.addEventListener("click", () => {
            window.location.href = successUrl;
        });
    
        return successButton;
    }
    


    userAudioInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const objectURL = URL.createObjectURL(file);
            responseAudio.src = objectURL;
            responseAudio.load();
            backingAudio.currentTime = 0;
            progSlider.value = 0;
            fileLoaded = true;
            submitBtn.style.backgroundColor = 'green'


        }
    });



    responseAudio.addEventListener('loadedmetadata', () => {
        console.log('Metadata loaded:');
        console.log('Duration:', responseAudio.duration);

        submitBtn.textContent = "SUBMIT"
        submitBtn.classList.add("bg-green-900")
        submitBtn.classList.add("hover:bg-green-800")
        playButton.textContent = "PLAY";

        responseAudio.addEventListener('error', (e) => {
            console.error('Error loading audio:', e);
        });
    

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
