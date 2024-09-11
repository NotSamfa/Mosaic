import '../styles/normalize.css';
import '../styles/style.css';
import '../styles/landing-components/nav.css';
import '../styles/utils.css';
import '../styles/profile-components/nav.css';
import '../styles/profile-components/main.css';
import '../styles/landing-components/hero.css';

import { displaySongs, displayMovies, fetchSongsData, fetchMoviesData } from '../src/utils/profile/history.js';


document.addEventListener('DOMContentLoaded', async function () {
    const songsData = await fetchSongsData();
    const movieData = await fetchMoviesData();
    console.log(songsData.songs);

    if (songsData) {
        displaySongs(songsData);
    }

    if (movieData) {
        displayMovies(movieData);
    }
});

