const song =document.getElementById("song");
const playBtn =document.querySelector(".play-inner");
const nextBtn =document.querySelector(".play-forward");
const backBtn =document.querySelector(".play-back");

let index =0;
let lists =["holo.mp3,home.mp3,spark.mp3,summer.mp3"];
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