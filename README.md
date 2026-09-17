# ECHO 🎵

ECHO is a Spotify-inspired music player website built using **HTML, CSS and JavaScript**.

The project was created to practice and demonstrate frontend web development concepts such as DOM manipulation, event listeners, JavaScript arrays and objects, audio controls, dynamic page navigation, and UI design.

## Features

- Play / Pause
- Previous / Next song
- Song progress bar
- Loop control
- Animated music player
- Home page
- Artist pages
- About page
- Dynamic song lists
- Interactive navigation

## Project Structure

```text
ECHO/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
├── songs/
│   ├── song1.mp3
│   ├── song2.mp3
│   └── song3.mp3
│
└── artists/
    ├── covers/
    │
    └── songs/
        ├── A1/
        │   ├── song1.mp3
        │   ├── song2.mp3
        │   └── song3.mp3
        │
        ├── A2/
        │   ├── song1.mp3
        │   ├── song2.mp3
        │   └── song3.mp3
        │
        └── A3/
            ├── song1.mp3
            ├── song2.mp3
            └── song3.mp3
```

## Adding Your Own Audio

The audio files are intentionally **not included in this repository**.

If you want to run the complete music-player version locally, add your own properly licensed audio files using the following naming convention.

### Main Songs

Place the files inside:

```text
songs/
```

and name them:

```text
song1.mp3
song2.mp3
song3.mp3
```

### Artist Songs

Artist-specific songs are stored inside:

```text
artists/songs/
```

There are three artist folders:

```text
A1/
A2/
A3/
```

Each folder should contain:

```text
song1.mp3
song2.mp3
song3.mp3
```

The JavaScript files are set up so that:

- `A1/song1.mp3` → first song
- `A1/song2.mp3` → second song
- `A1/song3.mp3` → third song

and the same naming pattern applies to A2 and A3.

## Why Are The Audio Files Not Included?

The original development version used music files for demonstration purposes. Those audio files are not included in this public repository because distributing the actual recordings requires appropriate rights or licensing.

The current NCS usage policy, for example, allows NCS music for qualifying independent creator content but specifically states that standalone music-player content is not currently allowed under its standard creator usage policy. :contentReference[oaicite:0]{index=0}

Therefore, the audio files have been excluded from the public repository while the **source code and project implementation remain available for viewing and learning**.

To run the complete version locally, use audio files that you have the appropriate rights or permission to use.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- HTML5 Audio API
- DOM Manipulation
- Event Listeners

## Author

**Aniketh Damle**
