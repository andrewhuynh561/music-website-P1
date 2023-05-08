const song =document.getElementById("song");
const playBtn =document.querySelector(".play-inner");
const nextBtn =document.querySelector(".play-forward");
const backBtn =document.querySelector(".play-back");

let isPlaying = true;
playBtn.addEventListener("click",playPause);
function playPause(){
    if (isPlaying){
        song.play();
        isPlaying = false;
        song.innerHTML=`<ion-icon name="pause-circle"></ion-icon>`;
    }
    else{
        song.pause();
        isPlaying = true;
    }
}
