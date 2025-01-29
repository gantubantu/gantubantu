// Quotes Array
const quotes = [
    "You are stronger than you think.",
    "Breathe in, breathe out. You’ve got this.",
    "It’s okay to not be okay.",
    "One step at a time, you’re doing great.",
    "This too shall pass.",
    "Take it one moment at a time.",
    "Believe in yourself, you’re capable of more than you know."
];

// Quote Generator
document.getElementById('new-quote').addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-text').textContent = `"${randomQuote}"`;
});

// Journal Submission
document.getElementById('submit-entry').addEventListener('click', () => {
    const journalText = document.getElementById('journal-input').value;
    if (journalText) {
        document.getElementById('journal-input').value = ''; // Clear the journal input
        alert("See? Worries? POOF!");
    }
});

// Virtual Flower Garden
let plantGrown = false;

document.getElementById('plant-seed').addEventListener('click', () => {
    document.getElementById('garden-status').textContent = "The seed is planted. It needs water and sunlight to grow!";
    document.getElementById('plant').style.height = '0'; // Reset plant height
    document.getElementById('garden').querySelector('.flower')?.remove(); // Remove any existing flower
    plantGrown = false;
});

document.getElementById('water-plant').addEventListener('click', () => {
    if (!plantGrown) {
        document.getElementById('garden-status').textContent = "The plant is watered! It needs sunlight now.";
        document.getElementById('plant').style.height = '100px'; // Plant starts to grow
    }
});

document.getElementById('give-sun').addEventListener('click', () => {
    if (document.getElementById('plant').style.height === '100px') {
        document.getElementById('garden-status').textContent = "The plant is blooming! Your flower is blooming!";
        let flower = document.createElement('div');
        flower.classList.add('flower');
        document.getElementById('garden').appendChild(flower);
        plantGrown = true;
    }
});

// Regrow Button
document.getElementById('regrow-plant').addEventListener('click', () => {
    document.getElementById('garden-status').textContent = "The plant has been reset. Plant the seed again!";
    document.getElementById('plant').style.height = '0'; // Reset the plant
    document.getElementById('garden').querySelector('.flower')?.remove(); // Remove any existing flower
    plantGrown = false;
});
