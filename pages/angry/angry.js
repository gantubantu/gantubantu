// Breathing Timer
let breathingTimer = 60;
let breathingInterval;
let circle = document.getElementById('breathing-circle');
let timerDisplay = document.getElementById('breathing-timer');
let instructionText = document.getElementById('instruction-text');
let currentPhase = 0; // 0: inhale, 1: hold, 2: exhale

// Breathing phase durations
const inhaleDuration = 4; // seconds
const holdDuration = 5; // seconds
const exhaleDuration = 6; // seconds

// Change breathing circle animation based on current phase
function startBreathingExercise() {
    breathingInterval = setInterval(() => {
        if (breathingTimer > 0) {
            timerDisplay.textContent = breathingTimer;
            breathingTimer--;

            // Handle phases with specific animations and instructions
            if (currentPhase === 0) {
                instructionText.textContent = "Inhale...";
                circle.style.animation = `inhaleAnimation ${inhaleDuration}s ease-in-out forwards`;
            } else if (currentPhase === 1) {
                instructionText.textContent = "Hold...";
                circle.style.animation = `holdAnimation ${holdDuration}s ease-in-out forwards`;
            } else if (currentPhase === 2) {
                instructionText.textContent = "Exhale...";
                circle.style.animation = `exhaleAnimation ${exhaleDuration}s ease-in-out forwards`;
            }

            // Transition phases after respective durations
            if (breathingTimer === 60 - inhaleDuration) {
                currentPhase = 1; // Transition to hold
            } else if (breathingTimer === 60 - inhaleDuration - holdDuration) {
                currentPhase = 2; // Transition to exhale
            } else if (breathingTimer === 60 - inhaleDuration - holdDuration - exhaleDuration) {
                currentPhase = 0; // Restart inhale phase
                breathingTimer = 60; // Reset timer
            }
        } else {
            clearInterval(breathingInterval);
            timerDisplay.textContent = 'Done!';
        }
    }, 1000);
}

startBreathingExercise();

// Reset breathing exercise
function resetBreathingExercise() {
    breathingTimer = 60;
    currentPhase = 0; // Restart with inhale
    timerDisplay.textContent = breathingTimer;
    instructionText.textContent = "Inhale...";
    startBreathingExercise();
}

// Bubble Pop Game
let score = 0;
const totalBubbles = 15;
const bubbleContainer = document.getElementById('bubble-container');

// Game container dimensions
const containerWidth = bubbleContainer.offsetWidth;
const containerHeight = bubbleContainer.offsetHeight;

// Generate random position inside the container's boundaries
function generateRandomPosition() {
    const x = Math.random() * (containerWidth - 50); // Bubble width is 50px, so subtract it to avoid overflow
    const y = Math.random() * (containerHeight - 50); // Bubble height is 50px, so subtract it to avoid overflow
    return { x, y };
}

function createBubble() {
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Set the initial random position within container bounds
    const { x, y } = generateRandomPosition();
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    bubble.addEventListener('click', () => {
        score++;
        document.getElementById('score').textContent = `${score}/${totalBubbles} bubbles popped`;
        bubble.remove();

        if (score === totalBubbles) {
            document.getElementById('final-message').style.display = 'block';
        }
    });

    bubbleContainer.appendChild(bubble);
}

for (let i = 0; i < totalBubbles; i++) {
    createBubble();
}

document.getElementById('restart-game').addEventListener('click', () => {
    score = 0;
    document.getElementById('score').textContent = `0/${totalBubbles} bubbles popped`;
    document.getElementById('final-message').style.display = 'none';
    bubbleContainer.innerHTML = '';
    for (let i = 0; i < totalBubbles; i++) {
        createBubble();
    }
});
