let num1 = 0;
let num2 = 0;
let operator = "";
let operatorToggle = false;

function add(num1, num2) {
    return parseFloat(Number.parseFloat(num1 + num2).toFixed(3));
}

function subtract(num1, num2) {
    return parseFloat(Number.parseFloat(num1 - num2).toFixed(3));
}

function multiply(num1, num2) {
    return parseFloat(Number.parseFloat(num1 * num2).toFixed(3));
}

function divide(num1, num2) {
    return parseFloat(Number.parseFloat(num1 / num2).toFixed(3));
}

function operate(operator, num1, num2) {
    switch(operator){
        case "+": return add(num1, num2); break;
        case "-": return subtract(num1, num2); break;
        case "×": return multiply(num1, num2); break;
        case "÷": return divide(num1, num2); break;
    }
}

let textBox = document.getElementById("screenText");

let zeroButton = document.getElementById("zeroButton");
let oneButton = document.getElementById("oneButton");
let twoButton = document.getElementById("twoButton");
let threeButton = document.getElementById("threeButton");
let fourButton = document.getElementById("fourButton");
let fiveButton = document.getElementById("fiveButton");
let sixButton = document.getElementById("sixButton");
let sevenButton = document.getElementById("sevenButton");
let eightButton = document.getElementById("eightButton");
let nineButton = document.getElementById("nineButton");
let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButton");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton");
let equalsButton = document.getElementById("equalsButton");
let clearButton = document.getElementById("clearButton");

function clearScreen() {
    if(operatorToggle){
        textBox.value = "";
        operatorToggle = false;
    }
}

zeroButton.addEventListener("click", () => {
    clearScreen();
    textBox.value += "0";
});

oneButton.addEventListener("click", () => {
    clearScreen();
    textBox.value += "1";
});

twoButton.addEventListener("click", () => {
    clearScreen();
    textBox.value += "2";
});

threeButton.addEventListener("click", () => {
    clearScreen();
    textBox.value += "3";
});

fourButton.addEventListener("click", () => {
    clearScreen();
    textBox.value += "4";
});

fiveButton.addEventListener("click", () => {
    clearScreen();
    textBox.value += "5";
});

sixButton.addEventListener("click", () => {
    clearScreen();
    textBox.value += "6";
});

sevenButton.addEventListener("click", () => {
    clearScreen();
    textBox.value += "7";
});

eightButton.addEventListener("click", () => {
    clearScreen();
    textBox.value += "8";
});

nineButton.addEventListener("click", () => {
    clearScreen();
    textBox.value += "9";
});

addButton.addEventListener("click", () => {
    operatorToggle = true;
    if(num1 !== 0){
        num2 = parseFloat(textBox.value);
        textBox.value = operate(operator, num1, num2);
        operator = "+";
        num1 = parseFloat(textBox.value);
    } else {
        num1 = parseFloat(textBox.value);
        operator = "+";
    }
});

subtractButton.addEventListener("click", () => {
    operatorToggle = true;
    if(num1 !== 0){
        num2 = parseFloat(textBox.value);
        textBox.value = operate(operator, num1, num2);
        operator = "-";
        num1 = parseFloat(textBox.value);
    } else {
        num1 = parseFloat(textBox.value);
        operator = "-";
    }
});

multiplyButton.addEventListener("click", () => {
    operatorToggle = true;
    if(num1 !== 0){
        num2 = parseFloat(textBox.value);
        textBox.value = operate(operator, num1, num2);
        operator = "×";
        num1 = parseFloat(textBox.value);
    } else {
        num1 = parseFloat(textBox.value);
        operator = "×";
    }
});

divideButton.addEventListener("click", () => {;
    operatorToggle = true;
    if(num1 !== 0){
        num2 = parseFloat(textBox.value);
        textBox.value = operate(operator, num1, num2);
        operator = "÷";
        num1 = parseFloat(textBox.value);
    } else {
        num1 = parseFloat(textBox.value);
        operator = "÷";
    }
});

equalsButton.addEventListener("click", () => {
    if(textBox.value != "" && num1 != 0){
        num2 = parseFloat(textBox.value);
        console.log(`num1 is ${num1}, num2 is ${num2}, operator is ${operator}`);
        textBox.value = operate(operator, num1, num2);
        num1 = 0;
    }
});

clearButton.addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    operator = "";
    textBox.value = "";
});
