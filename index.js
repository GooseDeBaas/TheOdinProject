function getComputerChoise(){
    let x = Math.floor(Math.random()*3);
    if (x == 0){
        return "rock";
    } else if (x == 1) {
        return "scissors";
    } else {
        return "paper";
    }
}

function playRound(computerSelection, playerSelection){
    if (computerSelection == playerSelection){
        return "Tie";
    } else if (computerSelection == "rock") {
        if (playerSelection == "scissors") {
            computerCount++;
            return "Rock beats scissors, you lose!";
        } else if (playerSelection === "paper") {
            playerCount++;
            return "Scissors beat paper, you win!";
        }
    } else if (computerSelection == "scissors") {
        if (playerSelection == "paper") {
            computerCount++;
            return "Scissors beat paper, you lose!";
        } else if (playerSelection == "rock") {
            playerCount++;
            return "Rock beat scissors, you win!";
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "scissors") {
            playerCount++;
            return "Scissors beat paper, you win!";
        } else if (playerSelection == "rock") {
            computerCount++;
            return "Paper beats rock, you lose!";
        }
    }
}   


let computerSelection = getComputerChoise();
let playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
let playerCount = 0;
let computerCount = 0;
console.log(`Computer: ${computerSelection}, Player: ${playerSelection}`);
console.log(`Computer: ${computerCount}, Player: ${playerCount}`);


console.log(playRound(computerSelection, playerSelection));
console.log(playRound(computerSelection, playerSelection));
console.log(playRound(computerSelection, playerSelection));
console.log(playRound(computerSelection, playerSelection));
console.log(playRound(computerSelection, playerSelection));