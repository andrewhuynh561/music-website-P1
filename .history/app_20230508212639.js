const song =document.getElementById("song");
const playBtn =document.querySelector(".play-inner");
const nextBtn =document.querySelector(".play-forward");
const backBtn =document.querySelector(".play-back");

playBtn.addEventListener("click",playPause);
function playPause(){
    song.play();
}
