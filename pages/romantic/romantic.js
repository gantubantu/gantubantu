// Love Notes
const loveNotes = [
    "You are my everything.",
    "Together, we are unstoppable.",
    "My heart is yours forever.",
    "I’m lost in you.",
    "Every moment with you counts."
];

document.getElementById("loveNoteBtn").addEventListener("click", function() {
    const randomNote = loveNotes[Math.floor(Math.random() * loveNotes.length)];
    document.getElementById("loveNote").textContent = randomNote;
});

// Virtual Date Idea Trivia Game
let triviaAnswers = [];
let questionIndex = 0;

const questions = [
    "How do you feel right now?",
    "What type of activity do you prefer?",
    "Are you in the mood for something cozy or exciting?",
    "Do you want something interactive or relaxed?",
    "Do you prefer talking or watching something together?"
];

const options = [
    ['happy', 'relaxed', 'adventurous'],
    ['cozy', 'exciting', 'intimate'],
    ['cozy', 'fun', 'chill'],
    ['interactive', 'relaxed'],
    ['talking', 'watching']
];

// This function handles answering a trivia question
function answerTrivia(answer) {
    triviaAnswers.push(answer);

    if (questionIndex < questions.length - 1) {
        questionIndex++;
        updateQuestion();
    } else {
        suggestDateIdea();
        document.getElementById("optionsContainer").style.display = 'none'; // Hide options after answering
    }
}

// Update the question displayed on the page
function updateQuestion() {
    document.getElementById("question").textContent = questions[questionIndex];
    const buttons = document.getElementById("optionsContainer");
    buttons.innerHTML = ''; // Clear previous buttons

    options[questionIndex].forEach(option => {
        const button = document.createElement('button');
        button.className = 'dateBtn';
        button.onclick = () => answerTrivia(option);
        button.textContent = option.charAt(0).toUpperCase() + option.slice(1);
        buttons.appendChild(button);
    });

    document.getElementById("dateMessage").textContent = "Select an option above to continue!";
}

// This function suggests a virtual date idea based on trivia answers
function suggestDateIdea() {
    let suggestion = "";
    
    // Custom date ideas based on answers
    if (triviaAnswers.includes('happy') && triviaAnswers.includes('cozy')) {
        suggestion = "How about a virtual movie night together? Pick a movie and watch it simultaneously!";
    } else if (triviaAnswers.includes('adventurous') && triviaAnswers.includes('interactive')) {
        suggestion = "Let’s have a virtual treasure hunt! I’ll hide clues, and you’ll have to find them!";
    } else if (triviaAnswers.includes('relaxed') && triviaAnswers.includes('talking')) {
        suggestion = "How about a long, relaxing video call with your favorite drink? Just talk and enjoy each other's company.";
    } else if (triviaAnswers.includes('intimate') && triviaAnswers.includes('watching')) {
        suggestion = "A virtual dinner date over a video call, where we cook and eat together while chatting!";
    } else if (triviaAnswers.includes('fun') && triviaAnswers.includes('exciting')) {
        suggestion = "How about a virtual karaoke session? We can sing our favorite songs together!";
    } else {
        suggestion = "How about a virtual stargazing session? We can talk while looking at the stars.";
    }

    // Display the result in the result box
    document.getElementById("dateIdea").textContent = suggestion;
}
