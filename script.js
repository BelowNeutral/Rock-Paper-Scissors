function getComputerChoice() {
    const rockPaperScissors = [
        "rock",
        "paper",
        "scissors"
    ];

    const randomChoice = rockPaperScissors[Math.floor(Math.random()* rockPaperScissors.length)];
    console.log(randomChoice);
}

// getComputerChoice();

function playRound(playerSelection, computerSelection) {
    // let userInput = prompt("Rock, Paper, Scissors...Shoot!");
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


    // userInput.toLowerCase();
    // alert("You win! Paper beats Rock!");
    // alert("You win! Scissors beats Paper!");
    // alert("You win! Rock beats Scissors!");
    // alert("You tied! Rock and Rock!");
    // alert("You tied! Paper and Paper!");
    // alert("You tied! Scissors and Scissors!");
    
    
    
    // alert("You lose! Paper beats Rock!");
    // alert("You lose! Scissors beat Paper!");
    // alert("You lose! Rock beats Scissors!");


startRound();