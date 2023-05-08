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
    }
    else{
        song.pause();
        isPlaying = true;
    }
}
