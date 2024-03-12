const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");



function getComputerChoise() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0){
        return "rock";
    } else if (randomNumber == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

rock.addEventListener("click", () => {
    const computerChoise = getComputerChoise();
    console.log(computerChoise);
    if (computerChoise == "rock") {
        result.textContent = "It's a tie"
    } else if (computerChoise == "paper") {
        result.textContent = "Paper beats rock, you lose!"
    } else {
        result.textContent = "Rock beats scissors, you win!"
    }
})

paper.addEventListener("click", () => {
    const computerChoise = getComputerChoise();
    console.log(computerChoise);
    if (computerChoise == "rock") {
        result.textContent = "Paper beats rock, you win!"
    } else if (computerChoise == "paper") {
        result.textContent = "It's a tie!"
    } else {
        result.textContent = "Scissors beat paper, you lose!"
    }
})

scissors.addEventListener("click", () => {
    const computerChoise = getComputerChoise();
    console.log(computerChoise);
    if (computerChoise == "rock") {
        result.textContent = "Rock beats scissors, you lose!"
    } else if (computerChoise == "paper") {
        result.textContent = "Scissors beat paper, you win!"
    } else {
        result.textContent = "It's a tie!"
    }
})