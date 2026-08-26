let audioElement = new Audio();
let masterplay = document.getElementById('play');
let progressBar = document.getElementById('myProgressBar');
let songname = document.getElementById('masterSongName');
let backward = document.getElementById('backward');
let forward = document.getElementById('forward');
let next_and_prev = 0;
let for_gif = document.getElementById('gif');


songs = [
    {
        name: 'Back to Black',
        coverpath: 'covers/1.jpg',
        filepath: 'songs/song1.mp3',
        duration : '4:00' 
    },
    {
        name: 'Godfather theme',
        coverpath: 'covers/2.jpg',
        filepath: 'songs/song2.mp3',
        duration : '3:45' 
    },
    {
        name: 'Write this down remix',
        coverpath: 'covers/3.jpg',
        filepath: 'songs/song3.mp3',
        duration : '4:45' 
    },
    {
        name: 'God of War',
        coverpath: 'covers/4.jpg',
        filepath: 'songs/song4.mp3',
        duration: '4:06'
    },
    {
        name: 'Paparazzi',
        coverpath: 'covers/5.jpg',
        filepath: 'songs/song5.mp3',
        duration: '3:56'
    }

]

let songitems = document.querySelectorAll('.songItemPlay');
let no_of_songs = songitems.length;

for (i=0; i<songitems.length; i++){
    songitems[i].addEventListener('click',function(event){
        var songid = Number(event.target.id);
        next_and_prev = songid;
        if(audioElement.paused || audioElement.currentTime<=0){
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
        }
        playmusic(songid);
    })
}

function playmusic(songid){  
    audioElement.src = songs[songid]['filepath'];
    audioElement.play(); 
    for_gif.style.opacity = 1;
    songname.innerText = "Playing" + " " + songs[songid]['name'];
}

  audioElement.addEventListener('timeupdate', function(){
    duration_percentage = (audioElement.currentTime/audioElement.duration)*100;
    progressBar.value = duration_percentage;
  });


  progressBar.addEventListener('change', function () {

    audioElement.currentTime =
        (progressBar.value / 100) * audioElement.duration;

});

backward.addEventListener('click', function(){
    if(next_and_prev-1 < 0){
        next_and_prev = no_of_songs - 1;
        playmusic(next_and_prev);
    }
    else{
        next_and_prev = next_and_prev - 1;
        playmusic(next_and_prev);
    }
});


forward.addEventListener('click',function(){
    if(next_and_prev + 1 > no_of_songs - 1){
        next_and_prev = 0;
        playmusic(next_and_prev);
    }
    else{
        next_and_prev = next_and_prev + 1
        playmusic(next_and_prev);
    }
});

audioElement.addEventListener('ended',function(){
    if(next_and_prev + 1 > no_of_songs - 1){
        next_and_prev = 0;
        playmusic(next_and_prev);
    }
    else{
        next_and_prev = next_and_prev + 1
        playmusic(next_and_prev);
    }
})


masterplay.addEventListener('click',function(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        for_gif.style.opacity = 1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else if(audioElement.currentTime>0){
        audioElement.pause();
        for_gif.style.opacity = 0;
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }

})

