function getComputerChoice() {
    const rockPaperScissors = [
        "rock",
        "paper",
        "scissors"
    ];

    const randomChoice = rockPaperScissors[Math.floor(Math.random()* rockPaperScissors.length)];
    console.log(randomChoice);

    return randomChoice;
}


function game() {
// The playRound function below was created with the help of ChatGPT!
    function playRound(playerSelection, computerSelection) {
        playerSelection = prompt("Rock, Paper, Scissors...Shoot!").toLowerCase();

        computerSelection = getComputerChoice();

        console.log("Computer choice: " + computerSelection);

        // The if-statements below were written by me!
        if (playerSelection === computerSelection) {
            alert("It's a tie! Play again.");
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            alert("You lost! Paper beats Rock!");
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            alert("You lost! Scissors beat paper!");
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            alert("You lost! Rock beats scissors!");
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            alert("You win! Rock beats scissors!");
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            alert("You win! Paper beats Rock!");
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            alert("You win! Scissors beat paper!");
        } else {
            alert("You must type something!");
        }
        console.log("Player choice: " + playerSelection);
        // The if-statements above were written by me!
    }
    playRound();
}

// The playRound function above was created with the help of ChatGPT!

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

game();