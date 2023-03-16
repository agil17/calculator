//const display = document.querySelector('#display');

let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperation = null;
let secondOperation = null;
let shouldResetDisplay = false;
let result = null;

function updateDisplay() {
    display.textContent = displayValue;
    if(displayValue.length > 9) {
        display.textContent = displayValue.substring(0, 9);
    }
}
  
updateDisplay();

function add(a, b) {
    a = Number(a);
    b = Number(b);
    return a + b;
}

function sub(a, b) {
    a = Number(a);
    b = Number(b);
    return a - b;
}

function mult(a, b) {
    a = Number(a);
    b = Number(b);
    return a * b;
}

function div(a, b) {
    a = Number(a);
    b = Number(b);
    
    return b === 0 ? 'Error' : a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return sub(a, b);
        case '*':
            return mult(a, b);
        case '/':
            return div(a,b);
    }
}

function addEventToDigits() {
    const digits = document.querySelectorAll('.digit');
    digits.forEach(digit => {
        digit.addEventListener('click', () => {
            inputDigit(digit.textContent);
            updateDisplay();
        });
    })
}
addEventToDigits();

function addEventToOperators() {
    const operators = document.querySelectorAll('.operator');  
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            inputOperator(operator.textContent)
            updateDisplay();
        });
    })
}
addEventToOperators();

function addEventToEquals() {
    const equals = document.querySelector('.equals');
    equals.addEventListener('click', () => {
        inputEquals();
        updateDisplay();
    })
}
addEventToEquals();

function addEventToDecimal() {
    const decimal = document.querySelector('.decimal');
    decimal.addEventListener('click', () => {
        inputDecimal('.');
        updateDisplay();
    })
}
addEventToDecimal();

function addEventToClear() {
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', () => {
        clearDisplay();
        updateDisplay();
    })
}
addEventToClear();

function addEventToBackspace() {
    const backspace = document.querySelector('.backspace');
    backspace.addEventListener('click', () => {
        backSpace();
        updateDisplay();
    })
}
addEventToBackspace();

const inputDigit = (digit) => {
    if(firstOperation === null) {
        if(displayValue === '0' || displayValue === 0 || displayValue === 'Error') {
            //1st click - handles first operand input
            displayValue = digit;
        } else if(displayValue === firstOperand) {
            //starts new operation after inputEquals()
            displayValue = digit;
        } else {
            displayValue += digit;
        }
    } else {
        //3rd/5th click - inputs to secondOperand
        if(displayValue === firstOperand) {
            displayValue = digit;
        } else {
            displayValue += digit;
        }
    }
}

function inputOperator(operator) {
    if(firstOperation === null) {
        firstOperation = operator;
        firstOperand = displayValue;
    }
    else {
        secondOperand = displayValue;
        result = operate(firstOperation, firstOperand, secondOperand);
        if(result === 'Error') {
            displayValue = result;
            firstOperation = null;
            secondOperand = null;
            return;
        }
        firstOperand = result;
        displayValue = firstOperand;
        firstOperation = operator;
    }
}

function inputEquals() {
    if(firstOperation === null) {
        return;
    }
    secondOperand = displayValue;
    result = operate(firstOperation, firstOperand, secondOperand);
    displayValue = result;
    firstOperand = displayValue;
    firstOperation = null;
    secondOperand = null;
}

function inputDecimal(dot) {
    if(displayValue === firstOperand || displayValue === secondOperand) {
        displayValue = '0';
        displayValue += dot;
    } else if(!displayValue.includes(dot)) {
        displayValue += dot;
    } 
}

function backSpace() {
    if(displayValue.length > 1) {
       displayValue = displayValue.slice(0, displayValue.length - 1);
    }
    else {
        displayValue = '0';
    }
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperation = null;
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
    if(displayValue.length > 9) {
        display.textContent = displayValue.substring(0, 9);
    }
}



//////////////////////////
