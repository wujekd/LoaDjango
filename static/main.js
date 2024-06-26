
const uploadForm = document.getElementById('upload-form')
const input = document.getElementById('id_image')

const alertBox = document.getElementById('alert-box')
const imageBox = document.getElementById('image-box')
const progressBox = document.getElementById('progress-box')
const cancelBox = document.getElementById('cancel-box')

const cancelBtn = document.getElementById('cancel-btn')
const csrf = document.getElementsByName('csrfmiddlewaretoken')

input.addEventListener('change', ()=>{
    progressBox.classList.remove('not-visible')
    cancelBox.classList.remove('not-visible')

    const img_data = input.files[0]
    const url = URL.createObjectURL(img_data)
    
    const fd = new FormData()
    fd.append('csrfmiddlewaretoken', csrf[0].value)
    fd.append('image', img_data)

    $.ajax({
        type: 'POST',
        url: uploadForm.action,
        enctype: 'multipart/form-data',
        data: fd,
        beforeSend: function(){
            console.log("before")
            alertBox.innerHTML = ""
            imageBox.innerHTML = ""
        },
        xhr: function(response){
            const xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener('progress', e=>{
                // console.log(e)
                if (e.lengthComputable){
                    const percent = e.loaded / e.total * 100
                    console.log(percent)
                    progressBox.innerHTML =`<div class="progress">
                                               <div class="progress-bar" role="progressbar" style="width: ${percent}%" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div><p>${percent.toFixed(1)}%</p>`
                }
            })
            cancelBtn.addEventListener('click', ()=>{
                xhr.abort()
                setTimeout()
                cancelBox.classList.add('not-visible')
            })
            return xhr
        },
        success: function(response){
            console.log(response)
            imageBox.innerHTML = `<img src="${url}" width="300px">`
            alertBox.innerHTML = `<p>it worked</p>`
            cancelBox.classList.add('not-visible')
        },
        error: function(error){
            console.log(error)
        },
        cache: false,
        contentType: false,
        processData: false,
    })
})
