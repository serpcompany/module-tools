document.addEventListener("DOMContentLoaded", function () {

    function generateFunnyDjangoSecretKey() {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(-_=+)';
        const funnyWords = [
            'Wobbly_', 'DingleBerry_', 'Noodle_', 'PickleTickler_', 'ShmazzleTits_',
            'McJello_', 'Jiggle_', 'BananaDong_', 'McBloopy_', 'Giggle_', 'TurdBurgler_',
        ];

        let secretKey = '';

        // Add 2 funny words
        for (let i = 0; i < 2; i++) {
            const randomWordIndex = Math.floor(Math.random() * funnyWords.length);
            secretKey += funnyWords[randomWordIndex];
        }

        // Add 20 random characters for strength
        for (let i = 0; i < 25; i++) {
            const randomCharIndex = Math.floor(Math.random() * characters.length);
            secretKey += characters[randomCharIndex];
        }

        return secretKey;
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    const inputFieldWrapper = document.querySelector('.ml6 .text-wrapper');
    inputFieldWrapper.addEventListener('click', function () {
        const copiedText = Array.from(inputFieldWrapper.querySelectorAll('.letter')).map(el => el.textContent).join('');
        copyToClipboard(copiedText);
        alert('Copied to clipboard!');
    });

    document.getElementById("button-django-keygen").addEventListener("click", function () {
        const secretKey = generateFunnyDjangoSecretKey();

        const inputField = document.getElementById("field-django-keygen");
        inputField.innerHTML = secretKey.split('').map(char => `<span class='letter'>${char}</span>`).join('');

        // Anime.js animation for the letters
        anime.timeline({ loop: false })
            .add({
                targets: '.ml6 .letter',
                translateY: ["1.1em", 0],
                translateZ: 0,
                opacity: [0, 1],  // Start with 0 opacity
                duration: 750,
                delay: (el, i) => 50 * i
            });

        // Crazy Anime.js animation for the button
        anime({
            targets: '#button-django-keygen',
            backgroundColor: ['#3B82F6', '#9333EA', '#3B82F6', '#3B82F6'],
            translateX: [
                { value: 50, duration: 1000 },
                { value: -50, duration: 1000 },
                { value: 0, duration: 500 }
            ],
            translateY: [
                { value: -50, duration: 500 },
                { value: 50, duration: 1000 },
                { value: 0, duration: 500 }
            ],
            rotate: [
                { value: 45, duration: 500 },
                { value: -45, duration: 1000 },
                { value: 0, duration: 500 }
            ],
            scale: [
                { value: 1.1, duration: 500 },
                { value: 0.9, duration: 500 },
                { value: 1, duration: 500 }
            ],
            duration: 4500,
            loop: 5
        });
    });

});