const volumeSlider = document.getElementById("id_volumeOffset");
const infoThing = document.getElementById("info");


function updateInfo(){
    infoThing.textContent = volumeSlider.value
    console.log("testy")
}

volumeSlider.addEventListener("input", updateInfo)