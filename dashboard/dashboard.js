import '../styles/normalize.css';
import '../styles/style.css';
import '../styles/client-components/sidebar.css';
import '../styles/client-components/nav.css';
import '../styles/client-components/main.css';
import '../styles/landing-components/hero.css';
import '../styles/landing-components/nav.css';
import '../styles/utils.css';

import { initializeSidebar } from '../src/utils/dashboard/sidebar';
import { initializeSearch } from '../src/utils/dashboard/search';
import { fetchMoviesData, displayMovies } from '../src/utils/dashboard/movie';

initializeSidebar();
initializeSearch();

const containerNetflix = document.querySelector('.container__netflix');
const showNetflixBtn = document.getElementById('showNetflix');

showNetflixBtn.addEventListener('click', async function () {
    containerNetflix.classList.add('show');
    const moviesData = await fetchMoviesData();

    if (moviesData) {
        displayMovies(moviesData);
    }
});
