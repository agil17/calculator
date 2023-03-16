const buttons = document.querySelectorAll("button");

const display = document.querySelector("#display");

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetDisplay = false;

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if(b === 0) {
        return 'Error div by 0';
    }
    return a / b;
}

function inputDigit(digit) {
    if (shouldResetDisplay) {
      display.textContent = '';
      shouldResetDisplay = false;
    }
    display.textContent += digit;
}

function inputOperator(operator) {
    if (currentOperation !== null) {
      operate();
    }
    firstOperand = display.textContent;
    currentOperation = operator;
    shouldResetDisplay = true;
}

function clearCalculator() {
  display.textContent = '';
  firstOperand = '';
  secondOperand = '';
  currentOperation = null;
}

function backspace() {
  display.textContent = display.textContent.substring(0, display.textContent.length - 1);
}

function roundResult(result) {
  if (result == null) {
    return '';
  }
  return Math.round(result * 1000) / 1000;
}



function operate() {
  if (currentOperation === null) {
    return;
  }
  secondOperand = display.textContent;
  console.log(secondOperand);
  if (currentOperation === '/' && secondOperand === '0') {
    display.textContent = 'Error';
    return;
  }
  // console log why display div isnt printing here
  currentOperation = null;
}




buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('digit')) {
        inputDigit(button.textContent);
      } 
      else if (button.classList.contains('operator')) {
        inputOperator(button.textContent);
      }
      else if (button.classList.contains('clear')) {
        clearCalculator();
      }
      else if (button.classList.contains('equals')) {
        operate();
      }
      else if (button.classList.contains('backspace')) {
        backspace();
      }
      
      
      
    });
  });