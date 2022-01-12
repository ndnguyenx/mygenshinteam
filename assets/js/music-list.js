const playBtn = document.querySelector('.playbtn');
const song = document.getElementById("song");
let isPlaying = true;
const musics = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3", "song5.mp3"];
let IndexSong = 0;

song.setAttribute("src", `./assets/music/${musics[IndexSong]}`);
song.addEventListener("ended",handleEndedSong);
function handleEndedSong(){
    changeSong(1);
}

playBtn.addEventListener("click",playPause);
function playPause(){
    if(isPlaying){
        song.play();
        isPlaying = false;
    } else {
        song.pause();
        isPlaying = true;
    }
}

function changeSong(dir){
    if (dir === 1 ){
        IndexSong++;
        if(IndexSong >= musics.length){
            IndexSong=0;
        }
        isPlaying = true;
    } else if (dir === -1){
        IndexSong--;
        if(IndexSong < 0){
            IndexSong = musics.length - 1;
        }
        isPlaying= True;
    }
    song.setAttribute("src", `./assets/music/${musics[IndexSong]}`);
    playPause();
}