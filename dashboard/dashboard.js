import '../styles/normalize.css'
import '../styles/style.css'
import '../styles/utils.css'
import '../styles/client-components/sidebar.css'
import '../styles/client-components/nav.css'
import '../styles/client-components/main.css'
import '../styles/landing-components/hero.css'
import '../styles/landing-components/nav.css'

const sideLinks = document.querySelectorAll('.sidebar .side__menu li a:not(logout)')

sideLinks.forEach(link => {
    const li = link.parentElement
    li.addEventListener('click', () => {
        sideLinks.forEach(i => i.parentElement.classList.remove('active'))
        li.classList.add('active')
    })
})

const menuBar = document.querySelector('.content nav .arrow')
const sideBar = document.querySelector('.sidebar')

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close')
})


const searchBtn = document.querySelector('.content nav form .form__input button')
const img = document.getElementById('searchIcon')
const searchForm = document.querySelector('.content nav form')

searchBtn.addEventListener('click', () => {       
    searchForm.classList.toggle('show')
    if (window.innerWidth < 576) {
        if (searchForm.classList.contains('show')) {
            img.src = '/src/assets/x-icon.svg'
        }else {
            img.src = '/src/assets/search.svg'
        }
    }
    
})

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close')
    } else {
        sideBar.classList.remove('close')
    }

    if (window.innerWidth > 576) {
        img.src = '/src/assets/search.svg'
        searchForm.classList.remove('show')
    }
})

async function fetchMoviesData() {
    try {
        const response = await fetch('../src/utils/movies.json')
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching movies data:', error)
    }
}

function displayMovies(moviesData) {
    const moviesContainer = document.getElementById('movies')
    moviesContainer.innerHTML = '' // Limpiar el contenedor antes de agregar nuevas películas

    moviesData.movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie__card')
        
        movieCard.innerHTML = `
        <div class="movie__title">${movie.title}</div>
        <img src="${movie.poster}" alt="${movie.title}" class="movie__poster">
        <div class="movie__info">
            <strong>Genre:</strong> ${movie.genre} <br>
            <strong>Year:</strong> ${movie.release_year} <br>
            <strong>Director:</strong> ${movie.director} <br>
        `
        moviesContainer.appendChild(movieCard)
    });
}

const containerNetflix = document.querySelector('.container__netflix')
const showNetflixBtn = document.getElementById('showNetflix')

showNetflixBtn.addEventListener('click', async function() {
    containerNetflix.classList.add('show')
    const moviesData = await fetchMoviesData()

    if (moviesData) {
        displayMovies(moviesData)
    }
});
