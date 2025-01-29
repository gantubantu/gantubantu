function openGame(game) {
    const gameArea = document.getElementById('game-area');

    if (game === 'tic-tac-toe') {
        gameArea.innerHTML = `
            <h2 style="color:rgb(13, 1, 112);">Tic Tac Toe 🤖</h2>
            <div id="tic-tac-toe-board" class="tic-tac-toe"></div>
            <p id="tic-tac-toe-result"></p>
            <button onclick="startTicTacToe()">Restart 🔄</button>
        `;
        startTicTacToe();
        
    } else if (game === 'reaction-game') {
        gameArea.innerHTML = `
            <h2 style="color:rgb(13, 1, 112);">Reaction Test ⚡</h2>
            <button id="reaction-btn" onclick="testReaction()">Wait...</button>
            <p id="reaction-result" style="color: black;"></p>
            <button onclick="startReactionTest()">Restart 🔄</button>
        `;
        startReactionTest();
        
    } else if (game === 'memory-game') {
        gameArea.innerHTML = `
            <h2 style="color:rgb(13, 1, 112);">Memory Game 🧠</h2>
            <div id="memory-board"></div>
            <p id="memory-result"></p>
            <button onclick="startMemoryGame()">Restart 🔄</button>
        `;
        startMemoryGame();
    }
}

// ✅ **Tic-Tac-Toe (User vs AI)**
let board;
let gameActive;

function startTicTacToe() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;

    const ticTacToeBoard = document.getElementById("tic-tac-toe-board");
    ticTacToeBoard.innerHTML = "";

    for (let i = 0; i < 9; i++) {
        ticTacToeBoard.innerHTML += `<button class="tic-tac-toe-cell" onclick="makeMove(${i})"></button>`;
    }
}

function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = "X";
        document.querySelectorAll(".tic-tac-toe-cell")[index].textContent = "X";

        if (checkWinner("X")) {
            document.getElementById("tic-tac-toe-result").textContent = "You win! 🎉";
            gameActive = false;
            return;
        }

        if (!board.includes("")) {
            document.getElementById("tic-tac-toe-result").textContent = "It's a draw! 🤝";
            gameActive = false;
            return;
        }

        setTimeout(aiMove, 500); // AI moves after 0.5 sec
    }
}

function aiMove() {
    let emptySpots = board.map((val, idx) => val === "" ? idx : null).filter(v => v !== null);
    
    if (emptySpots.length > 0 && gameActive) {
        let aiChoice = emptySpots[Math.floor(Math.random() * emptySpots.length)];
        board[aiChoice] = "O";
        document.querySelectorAll(".tic-tac-toe-cell")[aiChoice].textContent = "O";

        if (checkWinner("O")) {
            document.getElementById("tic-tac-toe-result").textContent = "AI wins! 🤖";
            gameActive = false;
        }
    }
}

function checkWinner(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === player);
    });
}

// ✅ **Reaction Game**
let reactionTimeout;

function startReactionTest() {
    document.getElementById("reaction-btn").textContent = "Wait...";
    reactionTimeout = setTimeout(() => {
        document.getElementById("reaction-btn").textContent = "CLICK!";
        document.getElementById("reaction-btn").dataset.start = Date.now();
    }, Math.random() * (3000 - 1000) + 1000); // Random time between 1s and 3s
}

function testReaction() {
    if (document.getElementById("reaction-btn").dataset.start) {
        let time = Date.now() - document.getElementById("reaction-btn").dataset.start;
        document.getElementById("reaction-result").textContent = `Time: ${time}ms`;
        delete document.getElementById("reaction-btn").dataset.start;
    }
}

// ✅ **Memory Game (6x6 Grid)**
const emojis = ["🍎", "🍌", "🍓", "🍍", "🍉", "🍇", "🍒", "🍑", "🍊", "🥝", "🥥", "🍈"];
let shuffledCards = [], firstCard;

function startMemoryGame() {
    shuffledCards = [...emojis, ...emojis]; // 6x6 grid (12 unique pairs)
    shuffledCards.sort(() => Math.random() - Math.random());

    const board = document.getElementById("memory-board");
    board.innerHTML = "";
    board.style.gridTemplateColumns = "repeat(6, 60px)"; // Ensure 6x6 grid

    shuffledCards.forEach((emoji, index) => {
        board.innerHTML += `<button class="memory-card" onclick="flipCard(this, ${index})">?</button>`;
    });

    firstCard = null;
}

function flipCard(btn, index) {
    if (!firstCard) {
        btn.textContent = shuffledCards[index];
        firstCard = { btn, index };
    } else if (firstCard.index !== index) {
        btn.textContent = shuffledCards[index];

        if (shuffledCards[firstCard.index] === shuffledCards[index]) {
            firstCard.btn.disabled = true;
            btn.disabled = true;

            firstCard.btn.style.backgroundColor = "#4caf50";
            btn.style.backgroundColor = "#4caf50";

            firstCard = null;
            checkMemoryGameWin();
        } else {
            setTimeout(() => {
                firstCard.btn.textContent = "?";
                btn.textContent = "?";
                firstCard = null;
            }, 1000);
        }
    }
}

function checkMemoryGameWin() {
    const matchedCardsCount = Array.from(document.querySelectorAll('.memory-card')).filter(card => card.disabled).length;

    if (matchedCardsCount === shuffledCards.length) {
        const resultText = document.getElementById("memory-result");
        resultText.textContent = "You found all pairs! 🎉";
        resultText.style.color = "#00bcd4";
    }
}
