let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

function getComputerSelection() {
    const choice = Math.floor(Math.random() * 3);
    computerSelection = (choice == 0) ? "rock" : (choice == 1) ? "paper" : "scissor";
    console.log("computer : " + computerSelection);
}