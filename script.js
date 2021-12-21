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

function squareRoot(num){
    return parseFloat(Number.parseFloat(Math.sqrt(num)).toFixed(3));
}

function operate(operator, num1, num2) {
    switch(operator){
        case "+": return add(num1, num2); break;
        case "-": return subtract(num1, num2); break;
        case "×": return multiply(num1, num2); break;
        case "÷": return divide(num1, num2); break;
    }
}

/*
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode === 8 && (charCode >= 48 || charcode <= 57) && (charCode >= 96 || charCode <= 105) && charCode === 110 && charCode === 190) {
        return true;
    }
    return false;
}
*/

var keycodes = {
    'backspace': 8,
    'leftArrow': 37,
    'rightArrow': 39,
    'number0': 48,
    'number9': 57,
    'keypad0': 96,
    'keypad9': 105,
    'decimal': 110,
    'period': 190
};

function noNumbers(e) {
    var charCode = e.which ? e.which : 
                 (e.charCode ? e.charCode : 
                   (e.keyCode ? e.keyCode : 0));
    console.log(charCode);
    if ((charCode < keycodes.number0 || charCode > keycodes.number9) &&
        (charCode < keycodes.keypad0 || charCode > keycodes.keypad9) &&
        charCode !== keycodes.backspace &&
        charCode !== keycodes.leftArrow &&
        charCode !== keycodes.rightArrow &&
        charCode !== keycodes.decimal &&
        charCode !== keycodes.period)
        e.preventDefault();
    else{
        if(textBox.value.includes(".") && (charCode === keycodes.decimal || charCode === keycodes.period)){
            e.preventDefault();
        }
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
let decimalButton = document.getElementById("decimalButton");
let squareRootButton = document.getElementById("squareRootButton");
let percentButton = document.getElementById("percentButton");
let negativeButton = document.getElementById("negativeButton");



function clearScreen() {
    if(operatorToggle){
        textBox.value = "";
        operatorToggle = false;
    }
}

textBox.addEventListener(
	'keydown', noNumbers
);

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

decimalButton.addEventListener("click", () => {
    if(!textBox.value.includes(".")){
        textBox.value += ".";
    }
});

squareRootButton.addEventListener("click", () => {
    textBox.value = squareRoot(textBox.value);
});

percentButton.addEventListener("click", () => {
    textBox.value = (textBox.value / 100);
});

negativeButton.addEventListener("click", () => {
    textBox.value = (textBox.value * -1);
});
