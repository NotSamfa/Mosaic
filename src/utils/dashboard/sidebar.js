export function initializeSidebar() {
    const sideLinks = document.querySelectorAll('.sidebar .side__menu li a:not(logout)');

    sideLinks.forEach(link => {
        const li = link.parentElement;
        li.addEventListener('click', () => {
            sideLinks.forEach(i => i.parentElement.classList.remove('active'));
            li.classList.add('active');
        });
    });

    const menuBar = document.querySelector('.content nav .arrow');
    const sideBar = document.querySelector('.sidebar');

    menuBar.addEventListener('click', () => {
        sideBar.classList.toggle('close');
    });
}
