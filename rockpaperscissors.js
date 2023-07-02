
function game () {

    // list of items
    const my_items = ['rock', 'paper', 'scissors'];

    // Computer selects random object and returns the object
    function computerSelection() {
        const selection = Math.floor(Math.random() * my_items.length);
        return selection;
    }

    let compSelection = computerSelection();

    // change compChoice from number to object
    switch (compSelection) {
        case 0:
            compSelection = 'rock';
            break;
        case 1:
            compSelection = 'paper';
            break;
        case 2:
            compSelection = 'scissors'
            break;
        default:
            console.log("you've chosen a strange object!");
    }

    console.log(compSelection); 

    // Prompt user for object
    let userObject;
    let playerSelection = prompt("Select an object: ", userObject);
    console.log(playerSelection);

    // possible combinations
    // r, r : p, p: s, s
    // r, p / p, r
    // r, s / s, r
    // p, s / s, p

    // computer user choice and computer choice and declare winner
    if ((compSelection === 'rock' && playerSelection === 'rock') ||  (compSelection === 'paper' && playerSelection === 'paper') || (compSelection === 'scissors' && playerSelection === 'scissors')) {
        console.log("We have a draw!");
    } else if (compSelection === 'rock' && playerSelection === 'paper') {
        console.log(`You wins! ${playerSelection} beats ${compSelection}`)
    } else if (compSelection === 'paper' && playerSelection === 'rock') {
        console.log(`Computer wins! ${compSelection} beats ${playerSelection}`)
    } else if (compSelection === 'rock' && playerSelection === 'scissors') {
        console.log(`Computer wins! ${compSelection} beats ${playerSelection}`)
    } else if (compSelection === 'scissors' && playerSelection === 'rock') {
        console.log(`You win! ${playerSelection} beats ${compSelection}`)
    } else if (compSelection === 'paper' && playerSelection === 'scissors') {
        console.log(`You win! ${playerSelection} beats ${compSelection}`)
    } else if (compSelection === 'scissors' && playerSelection === 'paper') {
        console.log(`Computer win!s ${compSelection} beats ${playerSelection}`)
    }

}

for (let i = 0; i < 6; i++) {
    game()
}


