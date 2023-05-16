const song =document.getElementById("song");
const playBtn =document.querySelector(".play-inner");
const nextBtn =document.querySelector(".play-forward");
const backBtn =document.querySelector(".play-back");
const durationTime =document.querySelector(".duration");
const remainingTime =document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");

let index =0;
const lists = ["holo.mp3", "summer.mp3", "spark.mp3", "home.mp3"];
let isPlaying = true;
playBtn.addEventListener("click",playPause);
nextBtn.addEventListener("click",function() {
    changeSong(1);
});
backBtn.addEventListener("click",function() {
    changeSong(-1);
});
function playPause(){
    if (isPlaying){
        song.play();
        isPlaying = false;
        playBtn.innerHTML=`<ion-icon name="pause-circle"></ion-icon>`;
    }
    else{
        song.pause();
        isPlaying = true;
        playBtn.innerHTML=`<ion-icon name="play"></ion-icon>`;
    }
}

function changeSong(dir){
    if(dir===1){
        // move to next song
        index ++;
        if (index >= lists.length){
            index=0;
        }
        song.setAttribute("src",`./musics/${lists[index]}`)   
    }else if(dir ===-1){
        index --;
        if (index < 0){
            index=lists.length-1;
        }
    }
    isPlaying = true;
    playPause();
   
}

function displayTimer() {
    const { duration, currentTime } = song;
    rangeBar.max = duration;
    rangeBar.value = currentTime;
    remainingTime.textContent = formatTimer(currentTime);
    if (!duration) {
      durationTime.textContent = "00:00";
    } else {
      durationTime.textContent = formatTimer(duration);
    }
  }
function formatTimer(number) {
const minutes = Math.floor(number / 60);
const seconds = Math.floor(number - minutes * 60);
return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
}`;
}
displayTimer()