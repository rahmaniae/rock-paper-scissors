let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

function getComputerSelection() {
    const choice = Math.floor(Math.random() * 3);
    return (choice == 0) ? "rock" : (choice == 1) ? "paper" : "scissor";
    
}

function playRound(e) {
    const result = document.querySelector('#results')
    playerSelection = e.target.name;
    computerSelection = getComputerSelection();
    result.innerHTML = `You: ${playerSelection}` + "<br/>" + `Computer: ${computerSelection}` + "<br/>";
    if (playerSelection == "rock" && computerSelection == "paper" 
        || playerSelection == "paper" && computerSelection == "scissor" 
        || playerSelection == "scissor" && computerSelection == "rock") {
        result.innerHTML += 
             "You lost the round";
        computerScore++;
    }else if(playerSelection == computerSelection) {
        result.innerHTML += "It's a tie";
    }else {
        result.innerHTML += "You win the round";
        playerScore++;
    }
    result.innerHTML += "<br/>" + `Your score: ${playerScore} & computer score: ${computerScore}` + "<br/>" + `${playerScore} vs ${computerScore}`;
    if(playerScore === 5 || computerScore === 5){
        if (playerScore > computerScore) {
            result.innerHTML = 'You win' + '<br/>' + `${playerScore} vs ${computerScore}`;
        }else if (playerScore < computerScore) {
            result.innerHTML = 'You lost' + '<br/>' + `${playerScore} vs ${computerScore}`;
        }else{
            result.innerHTML = 'It\'s a tie' + '<br/>' + `${playerScore} vs ${computerScore}`;
        }
        reset();
        return;
    }
}


function reset() {
    computerScore = 0;
    playerScore = 0;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', playRound))