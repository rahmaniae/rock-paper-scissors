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

function game() {
    for(i = 1; i <= 5; i++){
        playerSelection = prompt("choose rock, paper, scissor?", "").toLowerCase();
        while(!(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor")) {
            alert('Please choose \"rock\", \"paper\", or \"scissor\"! ');
            playerSelection = prompt("choose rock, paper, scissor?", "").toLowerCase();
        }
        getComputerSelection();
        playRound(playerSelection, computerSelection);
    }
    return (playerScore < computerScore) ? "You lost the game" : (playerScore === computerScore) ? "Draw ! " : "You won the game! " + playerScore + " vs " + computerScore;

}