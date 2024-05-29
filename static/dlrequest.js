let ogContent = null;
let content = document.getElementById("dynamic");
ogContent = content.innerHTML;

async function downloadRequest(){
    content.style.opacity = 0;

    const resp = await fetch(fetchURL);
    console.log(resp)
    const read = await resp.json();

    setTimeout(()=>{
        content.innerHTML = read.res + '<br><br><button onclick="goBack()" class="btn-primary">Go Back</button>';
        content.style.opacity = '1';
        
    }, 500)
}


function goBack() {
    content.style.opacity = "0";
    setTimeout(()=>{
    content.innerHTML = ogContent;
    console.log("test");
    let dlbtn = document.getElementById("dlbtn");
    dlbtn.addEventListener("click", downloadRequest);
    }, 500);
    
}


let dlbtn = document.getElementById("dlbtn");
dlbtn.addEventListener("click", downloadRequest);