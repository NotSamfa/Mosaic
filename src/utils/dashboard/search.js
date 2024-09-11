export function initializeSearch() {
    const searchBtn = document.querySelector('.content nav form .form__input button');
    const img = document.getElementById('searchIcon');
    const searchForm = document.querySelector('.content nav form');

    searchBtn.addEventListener('click', () => {
        searchForm.classList.toggle('show');
        if (window.innerWidth < 576) {
            if (searchForm.classList.contains('show')) {
                img.src = '/x-icon.svg';
            } else {
                img.src = '/search.svg';
            }
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            document.querySelector('.sidebar').classList.add('close');
        } else {
            document.querySelector('.sidebar').classList.remove('close');
        }

        if (window.innerWidth > 576) {
            img.src = '/src/assets/icons/search.svg';
            searchForm.classList.remove('show');
        }
    });
}
