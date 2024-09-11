const mobileNav = () => {
    const navBtn = document.querySelector('.nav__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    const qryMedia = window.matchMedia('(min-width: 768px)');

    let isMobileMenuOpen = false;

    navBtn.addEventListener('click', () => {
        isMobileMenuOpen = !isMobileMenuOpen;

        if (isMobileMenuOpen) {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        } else {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }

    });

    mobileLinks.forEach(link => {

        link.addEventListener('click', () => {
            isMobileMenuOpen = false;

            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });


    qryMedia.addListener(e => {
        if (e.matches) {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

}

export default mobileNav;