function getComputerChoice() {
    const rockPaperScissors = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    const randomChoice = rockPaperScissors[Math.floor(Math.random()* rockPaperScissors.length)];
    console.log(randomChoice);
}

// getComputerChoice();