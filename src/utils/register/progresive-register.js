const progresiveRegister = () => {
    const terminalText = document.getElementById('terminal-text');
    const form = document.querySelector('.register__form');
    const usernameContainer = document.querySelector('.form__username');
    const emailContainer = document.querySelector('.form__email');
    const passwordFields = document.querySelector('.password-fields');
    const confirmPasswordContainer = document.getElementById('form__confirm-password');
    const registerButton = document.querySelector('.register__btn');

    const messages = {
        initial: "Has seleccionado registrarte",
        username: "Comienza eligiendo un nombre de usuario...",
        email: "Ahora ingresa tu correo electrónico...",
        password: "Por último, crea una contraseña segura"
    };

    const messageDelays = {
        initial: 1000,
    };

    let currentCharIndex = 0;
    let typingTimer;
    const typingDelay = 850;


    function typeWriter(messageKey, callback) {
        const message = messages[messageKey];
        terminalText.textContent = '';
        currentCharIndex = 0;

        function typeChar() {
            if (currentCharIndex < message.length) {
                terminalText.textContent += message.charAt(currentCharIndex);
                currentCharIndex++;

                setTimeout(typeChar, 35);
            } else {

                // Se espera realizar una acción posterior a que se escriba el mensaje.
                setTimeout(() => { if (callback) callback(); }, messageDelays[messageKey]);

            }
        }

        typeChar();
    }

    function showUsernameField() {
        form.classList.remove('hidden');
        usernameContainer.classList.add('show-element');
        usernameContainer.querySelector('input').focus();

        typeWriter('username', () => { });
    }

    function handleTyping(inputElement, nextElement, nextMessageKey) {
        clearTimeout(typingTimer);

        typingTimer = setTimeout(() => {

            if (inputElement.value.length > 3) {
                nextElement.classList.remove('hidden');
                nextElement.classList.add('show-element');

                if (nextElement.querySelector('input')) {
                    nextElement.querySelector('input').focus();
                }


                if (nextMessageKey) {
                    typeWriter(nextMessageKey, () => { });
                }
            }
        }, typingDelay);
    }

    usernameContainer.querySelector('input').addEventListener('input', function () {
        handleTyping(this, emailContainer, 'email');
    });

    emailContainer.querySelector('input').addEventListener('input', function () {
        handleTyping(this, passwordFields, 'password');
    });

    confirmPasswordContainer.querySelector('input').addEventListener('input', function () {
        handleTyping(this, registerButton, null);
    });


    typeWriter('initial', () => showUsernameField());
};

export default progresiveRegister;
