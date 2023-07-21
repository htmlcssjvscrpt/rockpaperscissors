
function playGame () {

    // List of items
    const my_items = ['rock', 'paper', 'scissors'];
    
    // Get computer's selction
    const compSelection = my_items[Math.floor(Math.random() * my_items.length)];
    console.log(`\nThe computer's object is ${compSelection}`); 

    // Prompt user for object
    const playerSelection = prompt("Select an object: ", '').toLowerCase();
    console.log(`Your object is ${playerSelection}`);

    // Compare objects and declare winner
    if (compSelection === playerSelection) {
        console.log("We have a draw!")
    } else if ((compSelection === 'rock' && playerSelection === 'paper') || 
               (compSelection === 'scissors' && playerSelection === 'rock') ||
               (compSelection === 'paper' && playerSelection === 'scissors')) {
        console.log(`You win! ${playerSelection} beats ${compSelection}!`)
    } else {
        console.log(`Computer wins! ${compSelection} beats ${playerSelection}!`)
    }
}

// Play five games
for (let i = 0; i < 6; i++) {
    playGame()
}