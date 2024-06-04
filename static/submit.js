document.addEventListener('DOMContentLoaded', () => {
    const userAudioInput = document.getElementById('userAudio');
    const responseAudio = document.getElementById('response');


    userAudioInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const objectURL = URL.createObjectURL(file);
            responseAudio.src = objectURL;
            responseAudio.load();
        }
    });


    responseAudio.addEventListener('loadedmetadata', () => {
        console.log('Metadata loaded:');
        console.log('Duration:', responseAudio.duration);
  
    });


    responseAudio.addEventListener('error', (e) => {
        console.error('Error loading audio:', e);
    });
});
