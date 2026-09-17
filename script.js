let audioElement = new Audio();
let masterplay = document.getElementById('play');
let progressBar = document.getElementById('myProgressBar');
let songname = document.getElementById('masterSongName');
let backward = document.getElementById('backward');
let forward = document.getElementById('forward');
let next_and_prev = 0;
let for_gif = document.getElementById('gif');
let loop_button = document.getElementById('loop');
let lb = 0;
let n = -1;
let home = document.getElementById('home');
let about = document.getElementById('about');
let artists = document.getElementById('artists');
let container = document.querySelector('.container');
let navigation = document.querySelector('.navigation');


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
    if(lb === 1){
        playmusic(next_and_prev);
    }
    else if(next_and_prev + 1 > no_of_songs - 1){
        next_and_prev = 0;
        playmusic(next_and_prev);
    }
    else{
        next_and_prev = next_and_prev + 1
        playmusic(next_and_prev);
    }
})

loop_button.addEventListener('click',function(){
    lb = lb + (n * -1);
    n = n * -1;
    if(lb === 1){
        loop_button.classList.remove('fa-repeat');
        loop_button.classList.add('fa-infinity');
    }
    else{
        loop_button.classList.remove('fa-infinity');
        loop_button.classList.add('fa-repeat');
    }
});

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

artists.addEventListener('click',function(){

    artists.classList.add('active');
    home.classList.remove('active');
    about.classList.remove('active');

    container.classList.add('artistspage');

    container.classList.remove('aboutpage');
    
    container.innerHTML = `
    <h1>Artists</h1>
    <button id = "A1">
        <img src="artist_covers/A1.jpg"
        <br>
        NCS 1
    </button>
    <button id = "A2">
        <img src="artist_covers/A2.jpg"
        <br>
        NCS 2
    </button>
    <button id = "A3">
        <img src="artist_covers/A3.jpg"
        <br>
        NCS 3
    </button>
    `;

    A1 = document.getElementById('A1');
    A2 = document.getElementById('A2');
    A3 = document.getElementById('A3');

    A1.addEventListener('click',function(){
    container.innerHTML = `
    <div class="songList">
            <button id="backToArtists">← Back</button>
            <h1>Artist-1 Songs(NCS)</h1>
            <div class="SongItemContainer">

                <div class="songItem">
                            <img src="artists/covers/A1/one.jpg" alt="1">
                            <span class="songName">Dreamer</span>
                            <span class="songlistplay"><span class="timestamp">3:34 <i id="0" class="songItemPlay fa-solid fa-play"></i> </span></span>
                </div>

                <div class="songItem">
                            <img src="artists/covers/A1/two.jpg" alt="2">
                            <span class="songName">Limitless</span>
                            <span class="songlistplay"><span class="timestamp">4:05 <i id="1" class="songItemPlay fa-solid fa-play"></i> </span></span>
                </div>

                <div class="songItem">
                            <img src="artists/covers/A1/three.jpg" alt="3">
                            <span class="songName">Sky High</span>
                            <span class="songlistplay"><span class="timestamp">3:56 <i id="2" class="songItemPlay fa-solid fa-play"></i> </span></span>
                </div>

            </div>
        </div>
    `
    
    backbutton = document.getElementById('backToArtists');
    backbutton.addEventListener('click',function(){
        artists.click();
    });

    songs = [
    {
        name: 'Dreamer',
        coverpath: 'artists/covers/A1/one.jpg',
        filepath: 'artists/songs/A1songs/Dreamer.mp3',
        duration : '3:34' 
    },
    {
        name: 'Limitless',
        coverpath: 'artists/covers/A1/two.jpg',
        filepath: 'artists/songs/A1songs/Limitless.mp3',
        duration : '4:05' 
    },
    {
        name: 'Sky High',
        coverpath: 'artists/covers/A1/three.jpg',
        filepath: 'artists/songs/A1songs/Sky High.mp3',
        duration : '3:56' 
    }]

    songitems = document.querySelectorAll('.songItemPlay');

        for (i=0; i<songitems.length; i++){
            songitems[i].addEventListener('click',function(event){
            var songid = Number(event.target.id);
            next_and_prev = songid;
            if(audioElement.paused || audioElement.currentTime<=0){
                masterplay.classList.remove('fa-play');
                masterplay.classList.add('fa-pause');
            }
            playmusic(songid);
    });
}
});

    A2.addEventListener('click',function(){
        container.innerHTML = `
    <div class="songList">
            <button id="backToArtists">← Back</button>
            <h1>Artist-2 Songs(NCS)</h1>
            <div class="SongItemContainer">

                <div class="songItem">
                            <img src="artists/covers/A2/one.jpg" alt="1">
                            <span class="songName">Feel Good</span>
                            <span class="songlistplay"><span class="timestamp">3:01 <i id="0" class="songItemPlay fa-solid fa-play"></i> </span></span>
                </div>

                <div class="songItem">
                            <img src="artists/covers/A2/two.jpg" alt="2">
                            <span class="songName">Invincible</span>
                            <span class="songlistplay"><span class="timestamp">4:39 <i id="1" class="songItemPlay fa-solid fa-play"></i> </span></span>
                </div>

                <div class="songItem">
                            <img src="artists/covers/A2/three.jpg" alt="3">
                            <span class="songName">On & On</span>
                            <span class="songlistplay"><span class="timestamp">3:26 <i id="2" class="songItemPlay fa-solid fa-play"></i> </span></span>
                </div>

            </div>
        </div>
    `

    backbutton = document.getElementById('backToArtists');
    backbutton.addEventListener('click',function(){
        artists.click();
});

    songs = [
    {
        name: 'Feel Good',
        coverpath: 'artists/covers/A2/one.jpg',
        filepath: 'artists/songs/A2songs/Feel Good.mp3',
        duration : '3:01' 
    },
    {
        name: 'Invincible',
        coverpath: 'artists/covers/A2/two.jpg',
        filepath: 'artists/songs/A2songs/Invincible.mp3',
        duration : '4:39' 
    },
    {
        name: 'On & On',
        coverpath: 'artists/covers/A2/three.jpg',
        filepath: 'artists/songs/A2songs/On & On.mp3',
        duration : '3:26' 
    }]

    songitems = document.querySelectorAll('.songItemPlay');

        for (i=0; i<songitems.length; i++){
            songitems[i].addEventListener('click',function(event){
            var songid = Number(event.target.id);
            next_and_prev = songid;
            if(audioElement.paused || audioElement.currentTime<=0){
                masterplay.classList.remove('fa-play');
                masterplay.classList.add('fa-pause');
            }
            playmusic(songid);
            });
        }
    });

    A3.addEventListener('click',function(){
        container.innerHTML = `
    <div class="songList">
            <button id="backToArtists">← Back</button>
            <h1>Artist-3 Songs(NCS)</h1>
            <div class="SongItemContainer">

                <div class="songItem">
                            <img src="artists/covers/A3/one.jpg" alt="1">
                            <span class="songName">Everything [Instrumental]</span>
                            <span class="songlistplay"><span class="timestamp">4:27 <i id="0" class="songItemPlay fa-solid fa-play"></i> </span></span>
                </div>

                <div class="songItem">
                            <img src="artists/covers/A3/two.jpg" alt="2">
                            <span class="songName">Heroes Tonight</span>
                            <span class="songlistplay"><span class="timestamp">3:28 <i id="1" class="songItemPlay fa-solid fa-play"></i> </span></span>
                </div>

                <div class="songItem">
                            <img src="artists/covers/A3/three.jpg" alt="3">
                            <span class="songName">Mortals</span>
                            <span class="songlistplay"><span class="timestamp">3:48 <i id="2" class="songItemPlay fa-solid fa-play"></i> </span></span>
                </div>

            </div>
        </div>
    `

    backbutton = document.getElementById('backToArtists');
    backbutton.addEventListener('click',function(){
        artists.click();
});
    songs = [
    {
        name: 'Everything [Instrumental]',
        coverpath: 'artists/covers/A3/one.jpg',
        filepath: 'artists/songs/A3songs/Everything [Instrumental].mp3',
        duration : '4:27' 
    },
    {
        name: 'Heroes Tonight',
        coverpath: 'artists/covers/A3/two.jpg',
        filepath: 'artists/songs/A3songs/Heroes Tonight.mp3',
        duration : '3:28' 
    },
    {
        name: 'Mortals',
        coverpath: 'artists/covers/A3/three.jpg',
        filepath: 'artists/songs/A3songs/Mortals.mp3',
        duration : '3:48' 
    }]

    songitems = document.querySelectorAll('.songItemPlay');

        for (i=0; i<songitems.length; i++){
            songitems[i].addEventListener('click',function(event){
            var songid = Number(event.target.id);
            next_and_prev = songid;
            if(audioElement.paused || audioElement.currentTime<=0){
                masterplay.classList.remove('fa-play');
                masterplay.classList.add('fa-pause');
            }
            playmusic(songid);
            });
        }
    });

});

home.addEventListener('click',function(){

    container.classList.remove('artistspage');
    container.classList.remove('aboutpage');

    home.classList.add('active');
    artists.classList.remove('active');
    about.classList.remove('active');

    container.innerHTML = `
        <div class="songList">
            <h1>Best Songs</h1>
            <div class="SongItemContainer">

                <div class="songItem">
                            <img src="covers/1.jpg" alt="1">
                            <span class="songName">Back To Black</span>
                            <span class="songlistplay"><span class="timestamp">04:00 <i id="0" class="songItemPlay fa-solid fa-play"></i> </span></span>
                </div>

                <div class="songItem">
                            <img src="covers/2.jpg" alt="2">
                            <span class="songName">Godfather theme version-2</span>
                            <span class="songlistplay"><span class="timestamp">03:45 <i id="1" class="songItemPlay fa-solid fa-play"></i> </span></span>
                </div>

                <div class="songItem">
                            <img src="covers/3.jpg" alt="3">
                            <span class="songName">Write This Down - Remix</span>
                            <span class="songlistplay"><span class="timestamp">04:45 <i id="2" class="songItemPlay fa-solid fa-play"></i> </span></span>
                </div>

                <div class="songItem">
                            <img src="covers/4.jpg" alt="4">
                            <span class="songName">God of War</span>
                            <span class="songlistplay"><span class="timestamp">04:06 <i id="3" class="songItemPlay fa-solid fa-play"></i> </span></span>
                </div>

                <div class="songItem">
                            <img src="covers/5.jpg" alt="5">
                            <span class="songName">Paparazzi</span>
                            <span class="songlistplay"><span class="timestamp">03:56 <i id="4" class="songItemPlay fa-solid fa-play"></i> </span></span>
                </div>

            </div>
        </div>
        <div class="songBanner"></div>
  

    `

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
    ];


    songitems = document.querySelectorAll('.songItemPlay');

        for (i=0; i<songitems.length; i++){
            songitems[i].addEventListener('click',function(event){
            var songid = Number(event.target.id);
            next_and_prev = songid;
            if(audioElement.paused || audioElement.currentTime<=0){
                masterplay.classList.remove('fa-play');
                masterplay.classList.add('fa-pause');
            }
            playmusic(songid);
            });
        }
    
});

about.addEventListener('click',function(){

    container.classList.add('aboutpage');

    container.classList.remove('artistspage');

    about.classList.add('active');
    home.classList.remove('active');
    artists.classList.remove('active');

    container.innerHTML = `
    <h2>About ECHO</h2>

    <p><strong>ECHO</strong> is a music player website built as a personal web development project.
    The goal of the project was to create a simple and visually appealing music player while learning and practicing <strong>HTML, CSS, and JavaScript.</strong> </p>

    <p>The website includes features such as music playback, play/pause controls, previous and next song controls,
    a progress bar, looping, animated visuals, and different pages for artists and their songs.</p>

    <p><strong>ECHO</strong> was created by <strong>Aniketh Damle</strong> as a project to practice web development and experiment with building an interactive music player from scratch.</p>

    <p><strong>Technologies:</strong> HTML • CSS • JavaScript</p>

    `
});

