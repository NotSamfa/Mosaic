export async function fetchMoviesData() {
    try {
        const response = await fetch('/movies.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movies data:', error);
    }
}

export function displayMovies(moviesData) {
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = '';

    moviesData.movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie__card');

        movieCard.innerHTML = `
        <div class="movie__title">${movie.title}</div>
        <img src="${movie.poster}" alt="${movie.title}" class="movie__poster">
        <div class="movie__info">
            <strong>Genre:</strong> ${movie.genre} <br>
            <strong>Year:</strong> ${movie.release_year} <br>
            <strong>Director:</strong> ${movie.director} <br>
        `;
        moviesContainer.appendChild(movieCard);
    });
}
