// Declaring functions and variables
function createPlayer() { 
    let selection = [];
    function addSelection(box) {
        selection.push(box);
    }
    function clearSelection() {
        return selection = [];
    }
    function getSelection() {
        return selection;
    }
    let score = 0;
    function incrementScore() {
        score++;
    }
    function getScore() {
        return score;
    }
    function resetScore() {
        return score = 0;
    }
    return {selection, addSelection, clearSelection, getSelection, incrementScore, getScore, resetScore}
}

const game = (function() {
    const winSelection = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["1", "5", "9"],
        ["3", "5", "7"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"]
    ];
    let checkSubset = (parentArray, subsetArray) => {
        return subsetArray.every((el) => {
            return parentArray.includes(el)
        })
    }
    function checkWin(playerSelection, winSelection) {
        for (let i = 0; i < winSelection.length; i++) {
            if (checkSubset(playerSelection, winSelection[i]) == true) {
                return true;
            }
        }
    }
    let whosTurn = "player1";
    function getWhosTurn() {
        return whosTurn;
    }
    function toggleTurn(){
        if (whosTurn == "player2") {
            return whosTurn = "player1";
        } else {
            return whosTurn = "player2";
        }}
    function clearBoard(gridArray) {
        for (let i = 0; i < 9; i++) {
            gridArray[i].textContent = "";
        }
    }
    return {winSelection, checkWin, getWhosTurn, toggleTurn, clearBoard}
    })()

// Declaring DOM Objects
const display = document.getElementById("display");
const firstPlayerName = document.getElementById("first-player");
const firstScore = document.getElementById("first-score");
const secondPlayerName = document.getElementById("second-player");
const secondScore = document.getElementById("second-score");
const box = document.getElementsByClassName("box");
const boxArray = [...box];
const dialog = document.querySelector("dialog")
const addPlayer = document.getElementById("add-player");
const resetButton = document.getElementById("reset");
// Declaring Modal Objects
const enterplayer1 = document.getElementById("enterplayer1");
const enterplayer2 = document.getElementById("enterplayer2");
const form = document.getElementById("form");

const player1 = createPlayer();
const player2 = createPlayer();

// Add Eventlisteners
form.addEventListener("submit", (event) => {
    event.preventDefault();
    firstPlayerName.textContent = enterplayer1.value;
    secondPlayerName.textContent = enterplayer2.value;
    dialog.close();
})

addPlayer.addEventListener("click", () => {
    dialog.showModal();
})

resetButton.addEventListener("click", () => {
    player1.clearSelection();
    player2.clearSelection();
    firstScore.textContent = player1.resetScore();
    secondScore.textContent = player2.resetScore();
    game.clearBoard(boxArray);
    display.textContent = "The game was reset!"
})

// Start Game 
// Make sure game only starts when names were inserted

boxArray.forEach((item) => {
    item.addEventListener("click", function (e) {
    let element = e.currentTarget;
    if (firstPlayerName.textContent == "Player 1" && secondPlayerName.textContent == "Player 2"){
        display.style.color = "red"
    } else {
        display.style.color = "black"
        if ((player1.getSelection().includes(element.value)) || (player2.getSelection().includes(element.value))) {
            return;
        } else {
            if (game.getWhosTurn() == "player1") {
                player1.getSelection().push(element.value);
                element.textContent = "X";
                display.textContent = `${enterplayer2.value}'s Turn!`;  
                game.toggleTurn();
            } else {
                player2.getSelection().push(element.value);
                element.textContent = "O";
                display.textContent = `${enterplayer1.value}'s Turn!`;  
                game.toggleTurn();
            }
            }
        if (game.checkWin(player1.getSelection(), game.winSelection) == true) {
            display.textContent = `${enterplayer1.value} wins, ${enterplayer2.value} is up next!`; 
            player1.incrementScore();
            firstScore.textContent = player1.getScore();
            player1.clearSelection();
            player2.clearSelection();
            game.clearBoard(boxArray);
            }
        if (game.checkWin(player2.getSelection(), game.winSelection) == true) {
            display.textContent = `${enterplayer2.value} wins, ${enterplayer1.value} is up next!`; 
            player2.incrementScore();
            secondScore.textContent = player2.getScore();
            player1.clearSelection();
            player2.clearSelection();
            game.clearBoard(boxArray);
        }
        if (player1.getSelection().length + player2.getSelection().length > 8) {
            display.textContent = "It's a tie!";
            player1.clearSelection();
            player2.clearSelection();
            game.clearBoard(boxArray);
        }   
    };
    }
   
)})

// How to close the modal on click
dialog.addEventListener("click", e => {
const dialogDimensions = dialog.getBoundingClientRect()
if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
) {
    dialog.close()
}
})