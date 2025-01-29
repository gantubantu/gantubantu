// Gratitude Tree
let gratitudeEntries = [];

function addGratitude() {
    const gratitudeInput = document.getElementById('gratitude-input');
    const gratitudeText = gratitudeInput.value.trim();

    if (gratitudeText) {
        gratitudeEntries.push(gratitudeText);
        gratitudeInput.value = ''; // Clear the input

        const treeLeaves = document.querySelector('.tree-leaves');
        const newGratitude = document.createElement('div');
        newGratitude.classList.add('gratitude-entry');
        newGratitude.textContent = gratitudeText;

        treeLeaves.appendChild(newGratitude); // Add new gratitude as a leaf

        // Apply dynamic pyramid effect
        adjustLeafPositions();
    }
}

// Adjust positions for pyramid effect
function adjustLeafPositions() {
    const leaves = document.querySelectorAll('.gratitude-entry');
    const numberOfLeaves = leaves.length;

    // Clear previous rows before setting new ones
    document.querySelector('.tree-leaves').innerHTML = '';

    // Define rows for pyramid structure
    const row1 = [];
    const row2 = [];
    const row3 = [];

    // Distribute leaves into the rows
    for (let i = 0; i < numberOfLeaves; i++) {
        if (i < 3) {
            row3.push(leaves[i]);
        } else if (i < 5) {
            row2.push(leaves[i]);
        } else {
            row1.push(leaves[i]);
        }
    }

    // Create HTML structure for each row
    const row1Container = document.createElement('div');
    row1Container.classList.add('tree-leaves-row');
    row1.forEach(leaf => row1Container.appendChild(leaf));

    const row2Container = document.createElement('div');
    row2Container.classList.add('tree-leaves-row');
    row2.forEach(leaf => row2Container.appendChild(leaf));

    const row3Container = document.createElement('div');
    row3Container.classList.add('tree-leaves-row');
    row3.forEach(leaf => row3Container.appendChild(leaf));

    // Add rows to the tree
    document.querySelector('.tree-leaves').appendChild(row1Container);
    document.querySelector('.tree-leaves').appendChild(row2Container);
    document.querySelector('.tree-leaves').appendChild(row3Container);
}

// Gratitude Affirmations Generator
const affirmations = [
    "I am enough, just as I am.",
    "Gratitude changes everything in my life.",
    "I am deserving of all the good things in my life.",
    "Today, I choose happiness and gratitude.",
    "I am a positive force in the world.",
    "I have the power to create positive change."
];

function generateAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmationText = document.getElementById('affirmation-text');
    affirmationText.textContent = `"${affirmations[randomIndex]}"`;
}
