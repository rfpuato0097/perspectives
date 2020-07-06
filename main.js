var videoCode = "";
const inputField = document.querySelector("#input");
const videoList = document.querySelector("#videos");
const playAllBtn = document.querySelector("#playAll");
const pauseAllBtn = document.querySelector("#pauseAll");
const buttonField = document.querySelector("#buttons");

inputField.addEventListener("keydown", e => {
    if(e.keyCode === 13){
        //Check if correct input.
        videoCode = inputField.value.split("=").pop().toString();
        videoCode = "https://www.youtube.com/embed/" + videoCode + "?&mute=1&enablejsapi=1";
        videoList.innerHTML += `<iframe class="video" width="640" height="360" src="` + videoCode + `"allowscriptaccess="always" frameborder="0" allowfullscreen></iframe>`
    }
})

playAllBtn.addEventListener("click", e =>{
    for (let index = 0; document.querySelectorAll("iframe")[index] != undefined ; index++) {
        document.querySelectorAll("iframe")[index].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
})

pauseAllBtn.addEventListener("click", e =>{
    for (let index = 0; document.querySelectorAll("iframe")[index] != undefined ; index++) {
        document.querySelectorAll("iframe")[index].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
})