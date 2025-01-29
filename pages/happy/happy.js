// Confetti Effect
document.getElementById('celebrate-btn').addEventListener('click', () => {
    for (let i = 0; i < 150; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = Math.random() * window.innerHeight + 'px';
        confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 2000);
    }
});

// Fortune Cookie Animation
function openFortune() {
    let fortuneCookie = document.querySelector('.fortune-cookie');
    let fortuneText = document.getElementById('fortune-text');

    if (!fortuneCookie.classList.contains('opened')) {
        fortuneCookie.classList.add('opened');

        const fortunes = [
            "You will have a wonderful day!",
            "Good vibes are coming your way!",
            "Something amazing is about to happen!",
            "Happiness is already yours!"
        ];
        fortuneText.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];
    }
}
