export async function fetchSongsData() {
    try {
        const response = await fetch('../src/utils/songs.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching songs data:', error);
    }
}

export async function fetchMoviesData() {
    try {
        const response = await fetch('../src/utils/movies.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movies data:', error);
    }
}

export function displaySongs(songsData) {
    const historyContent = document.querySelector('.history__content');
    historyContent.innerHTML = '';

    songsData.songs.forEach(song => {
        const historyItem = document.createElement('div');
        historyItem.classList.add('history__item');

        historyItem.innerHTML = `
        <img src="${song.cover}" alt="${song.title}" class="history__cover">
        <p>${song.title} - ${song.artist}</p>
        `;

        historyContent.appendChild(historyItem);
    });
}


export function displayMovies(moviesData) {
    const historyContent = document.querySelector('.history__content');
    //historyContent.innerHTML = '';

    moviesData.movies.forEach(movie => {
        const historyItem = document.createElement('div');
        historyItem.classList.add('history__item');

        historyItem.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="history__cover">
        <p>${movie.title} - ${movie.director}</p>
        `;

        historyContent.appendChild(historyItem);
    });
}

