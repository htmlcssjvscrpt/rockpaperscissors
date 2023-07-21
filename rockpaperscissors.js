
let comp_score = 0;
let player_score = 0;

function playRound (playerSelection) {
    // Clear results before every game
    clearResults();

    // List of items
    const my_items = ['rock', 'paper', 'scissors'];
    
    // Get computer's selction
    const compSelection = my_items[Math.floor(Math.random() * my_items.length)];
 
    // Display computer and player object
    objects(compSelection, playerSelection);

    // Compare objects and declare winner
    if (compSelection === playerSelection) {
        winner('Draw', compSelection, playerSelection);
    } else if ((compSelection === 'rock' && playerSelection === 'paper') || 
               (compSelection === 'scissors' && playerSelection === 'rock') ||
               (compSelection === 'paper' && playerSelection === 'scissors')) {
        player_score += 1;
        winner('You', compSelection, playerSelection);
        
    } else {
        comp_score += 1;
        winner('Computer', playerSelection, compSelection);
    }
}

// Display computer and player object
function objects(compSelection, playerSelection) {

    const container = document.querySelector('#results');
    const para1 = document.createElement('p');
    para1.textContent = `\nThe computer's object is ${compSelection}\n`;
    container.append(para1);

    const para2 = document.createElement('p');
    para2.textContent = `Your object is ${playerSelection}`;
    container.append(para2)
}

// Declare draw or winner
function winner(who, compSelection, playerSelection) {
    const container = document.querySelector('#results');
    const para1 = document.createElement('p');
    if (compSelection === playerSelection) {
       para1.textContent = 'We have a draw!';
       container.append(para1);
    } else {
        para1.textContent = `${who} win! ${playerSelection} beats ${compSelection}!`;
        container.append(para1);
    }

    const para2 = document.createElement('p');
    para2.textContent = `Computer score: ${comp_score}. player score ${player_score}`;
    container.append(para2);

    const para3 = document.createElement('p');
    if (comp_score === 5) {
        para3.textContent = 'COMPUTER is the ULTIMATE WINNER!!';
        container.append(para3);
    } else if (player_score === 5) {
        para3.textContent = 'YOU are the ULTIMATE WINNER!!';
        container.append(para3);
    }
}

// Clear the results
function clearResults() {
    const container = document.querySelector('#results');
    container.innerHTML='';
}

let rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    playRound('rock');
});

let paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    playRound('paper');
});

let buttonScissors = document.querySelector('#scissors');
buttonScissors.addEventListener('click', () => {
    playRound('scissors');
});