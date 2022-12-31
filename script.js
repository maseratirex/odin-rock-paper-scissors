let beats = new Map();
beats.set("rock", "scissors");
beats.set("paper", "rock");
beats.set("scissors", "paper");

let netScore = 0;

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
        return "Tied! You both chose " + playerSelection;
    } else if(beats.get(playerSelection) === computerSelection){
        netScore++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        netScore--;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game(){
    for (let round = 0; round < 5; round++) {
        console.log(`Round ${round + 1}...`)
        let playerSelection = prompt("Rock, paper, or scissors?")
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
    if(netScore === 0){
        console.log("You both tied!")
    } else if(netScore < 0){
        console.log("You lost!")
    } else {
        console.log("You won!")
    }
}

game();