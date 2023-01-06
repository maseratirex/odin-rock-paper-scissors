let beats = new Map();
beats.set("rock", "scissors");
beats.set("paper", "rock");
beats.set("scissors", "paper");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3); //Returns 0, 1, 2 uniformly
    switch (randomChoice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return 0;
    } else if(beats.get(playerSelection) === computerSelection){
        return 1;
    } else {
        return -1;
    }
}

let game = function(){
    let playerSelection = this.getAttribute("data-selection");
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult < 0) {
        computer.classList.add("won");
        setTimeout(() => {
            computer.classList.remove("won");
        }, 1000);
        computer.textContent = `${++computerScore}`;

        if (computerScore > 4) {
            const computerVictoryDiv = document.createElement("div");
            computerVictoryDiv.textContent = "You lost."
            body.appendChild(computerVictoryDiv);
            
            buttons.forEach((btn) => {
                btn.removeEventListener("click", game);
            })
        }
    } else if (roundResult > 0) {
        player.classList.add("won");
        setTimeout(() => {
            player.classList.remove("won");
        }, 1000);
        player.textContent = `${++playerScore}`;

        if (playerScore > 4) {
            const playerVictoryDiv = document.createElement("div");
            playerVictoryDiv.textContent = "You won!"
            body.appendChild(playerVictoryDiv);
            
            buttons.forEach((btn) => {
                btn.removeEventListener("click", game);
            })
        }
    }
}

const buttons = document.querySelectorAll("button");
const player = document.querySelector(".player-score");
const computer = document.querySelector(".computer-score");
const body = document.querySelector("body");
buttons.forEach((btn) => {
    btn.addEventListener("click", game);
})
