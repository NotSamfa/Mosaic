import '../styles/normalize.css'
import '../styles/style.css'
import '../styles/register-components/register.css'
import '../styles/utils.css'

import progresiveRegister from '../src/utils/register/progresive-register'

document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.querySelector('.register__btn');

    if (registerButton) {
        registerButton.addEventListener('click', (event) => {
            event.preventDefault();

            window.location.href = '/dashboard/index.html';
        });
    }
});

progresiveRegister();