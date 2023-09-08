let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

function getComputerSelection() {
    const choice = Math.floor(Math.random() * 3);
    computerSelection = (choice == 0) ? "rock" : (choice == 1) ? "paper" : "scissor";
    console.log("computer : " + computerSelection);
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "rock" && computerSelection == "paper" 
        || playerSelection == "paper" && computerSelection == "scissor" 
        || playerSelection == "scissor" && computerSelection == "rock") {
        console.log("You lost the round");
        computerScore++;
    }else if(playerSelection == computerSelection) {
        console.log("Draw");
    }else {
        console.log("You win the round");
        playerScore++;
    }
}
