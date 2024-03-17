const display = document.getElementById("display");
const button0 = document.querySelector("#button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const buttonDivide = document.getElementById("buttonDivide");
const buttonMulti = document.getElementById("buttonMulti");
const buttonPlus = document.getElementById("buttonPlus");
const buttonMinus = document.getElementById("buttonMinus");
const buttonClear = document.getElementById("buttonClear");
const buttonDot = document.getElementById("buttonDot");
const buttontotal = document.getElementById("buttonTotal");

let firstNumber = 0;
let secondNumber;
let operator;
let isOperatorOn = false;

function numberClick(e) {
    if (isOperatorOn == false) {
        let element = e.currentTarget;
        display.value = display.value + element.value
        secondNumber = display.value;
    } else {
        isOperatorOn = false;
        let element = e.currentTarget;
        display.value = element.value;

    }
}

function numberClear() {
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    isOperatorOn = false;
    operator = "";
}

function operate(e) {
    isOperatorOn = true;
    secondNumber = firstNumber;
    firstNumber = display.value;
    console.log(firstNumber, secondNumber);
    
    if (operator == "sum") {
        display.value = sum(firstNumber, secondNumber);
        firstNumber = display.value;
    } else if (operator == "substract") {
        display.value = substract(secondNumber, firstNumber);
        firstNumber = display.value;
    } else if (operator == "divide") {
        display.value = divide(secondNumber, firstNumber);
        firstNumber = display.value;
    } else if (operator == "multiply") {
        display.value = multiply(secondNumber, firstNumber);
        firstNumber = display.value;
    } 

    let element = e.currentTarget;
    operator = element.name;
}

const sum = (firstNumber, secondNumber) => parseInt(firstNumber) + parseInt(secondNumber);
const substract = (firstNumber, secondNumber) => parseInt(firstNumber) - parseInt(secondNumber);
const divide = (firstNumber, secondNumber) => parseInt(firstNumber) / parseInt(secondNumber);
const multiply = (firstNumber, secondNumber) => parseInt(firstNumber) * parseInt(secondNumber);



button0.addEventListener("click", numberClick);
button1.addEventListener("click", numberClick);
button2.addEventListener("click", numberClick);
button3.addEventListener("click", numberClick);
button4.addEventListener("click", numberClick);
button5.addEventListener("click", numberClick);
button6.addEventListener("click", numberClick);
button7.addEventListener("click", numberClick);
button8.addEventListener("click", numberClick);
button9.addEventListener("click", numberClick);

buttonClear.addEventListener("click", numberClear);
buttontotal.addEventListener("click", operate);

buttonPlus.addEventListener("click", operate);
buttonMinus.addEventListener("click", operate);
buttonDivide.addEventListener("click", operate);
buttonMulti.addEventListener("click", operate);




