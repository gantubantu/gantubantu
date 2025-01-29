// Random Fun Facts Generator
const facts = [
    "Octopuses have three hearts!",
    "Bananas are berries, but strawberries aren't!",
    "A day on Venus is longer than a year on Venus.",
    "Honey never spoils.",
    "There are more stars in the universe than grains of sand on Earth.",
    "Wombat poop is cube-shaped!"
];

function generateFact() {
    let factIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact-text").textContent = facts[factIndex];
}

// Trivia Quiz
const quizData = [
    { question: "What is the tallest mountain in the world?", options: ["Everest", "K2", "Kilimanjaro"], answer: "Everest" },
    { question: "Which planet is closest to the Sun?", options: ["Earth", "Venus", "Mercury"], answer: "Mercury" },
    { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe"], answer: "Blue Whale" }
];

let currentQuiz = 0;

function loadQuiz() {
    const quiz = quizData[currentQuiz];
    document.getElementById("quiz-question").textContent = quiz.question;

    let optionsHTML = "";
    quiz.options.forEach(option => {
        optionsHTML += `<button class="quiz-option" onclick="checkAnswer('${option}')">${option}</button> `;
    });

    document.getElementById("quiz-options").innerHTML = optionsHTML;
    document.getElementById("quiz-feedback").textContent = "";

    currentQuiz = (currentQuiz + 1) % quizData.length; // Loop back to start
}

function checkAnswer(selected) {
    const correctAnswer = quizData[currentQuiz - 1].answer;
    let feedback = selected === correctAnswer ? "Correct! ✅" : `Wrong ❌ The correct answer is ${correctAnswer}.`;
    document.getElementById("quiz-feedback").textContent = feedback;
}

// Personality Quiz - Now Displays One Question at a Time
const personalityQuestions = [
    { question: "Do you prefer planning or being spontaneous?", options: ["Planning", "Spontaneous"] },
    { question: "Do you like working alone or in a team?", options: ["Alone", "Team"] },
    { question: "Would you rather read a book or watch a movie?", options: ["Book", "Movie"] },
    { question: "Are you more logical or emotional?", options: ["Logical", "Emotional"] },
    { question: "Do you prefer mornings or nights?", options: ["Morning", "Night"] },
    { question: "Would you rather explore space or the deep sea?", options: ["Space", "Deep Sea"] }
];

let currentPersonalityQuestion = 0;
let personalityAnswers = [];

function loadPersonalityQuestion() {
    if (currentPersonalityQuestion < personalityQuestions.length) {
        const q = personalityQuestions[currentPersonalityQuestion];
        document.getElementById("quiz-container").innerHTML = `
            <p>${q.question}</p>
            <button class="personality-option" onclick="selectPersonalityAnswer('${q.options[0]}')">${q.options[0]}</button>
            <button class="personality-option" onclick="selectPersonalityAnswer('${q.options[1]}')">${q.options[1]}</button>
        `;
    } else {
        calculatePersonality(); // Show result when all questions are answered
    }
}

function selectPersonalityAnswer(answer) {
    personalityAnswers.push(answer);
    currentPersonalityQuestion++;
    loadPersonalityQuestion();
}

function calculatePersonality() {
    let introvert = personalityAnswers.includes("Alone") ? 1 : 0;
    let planner = personalityAnswers.includes("Planning") ? 1 : 0;
    let reader = personalityAnswers.includes("Book") ? 1 : 0;
    let logical = personalityAnswers.includes("Logical") ? 1 : 0;
    let nightOwl = personalityAnswers.includes("Night") ? 1 : 0;
    let explorer = personalityAnswers.includes("Space") ? 1 : 0;

    let result = "";

    if (introvert && planner && reader && logical && nightOwl && explorer) {
        result = "You are an Analytical Thinker! 🧠";
    } else if (!introvert && !planner && !reader && !logical && !nightOwl && !explorer) {
        result = "You are a Free Spirit! 🌍";
    } else if (logical && explorer) {
        result = "You are a Curious Explorer! 🚀";
    } else {
        result = "You have a Balanced Personality! ⚖️";
    }

    document.getElementById("quiz-container").innerHTML = `<p id="personality-result">${result}</p>`;
}

// Curiosity Challenge - Start Challenge
function startCuriosityChallenge() {
    alert("Starting the curiosity challenge... Time to explore!");
    generateFact();
    loadQuiz();
    loadPersonalityQuestion();
}

// Start loading the first personality question on page load
window.onload = () => {
    loadQuiz();
    loadPersonalityQuestion();  // Ensure the first question loads properly
};
