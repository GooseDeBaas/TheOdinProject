const increment = document.getElementById("incrButton");
const decrement = document.getElementById("decrButton");
const reset = document.getElementById("resetButton");
const countLabel = document.getElementById("myHeader");
let count = 0;

increment.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decrement.onclick = function(){
    count--;
    countLabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}