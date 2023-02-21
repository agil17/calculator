const buttons = document.querySelectorAll('li');
const inputDisplay = document.querySelector('#display');

function calculate() {
    let total = eval(inputDisplay.value);
    inputDisplay.value = total;
}

function clearText() {
    inputDisplay.value = "";
}

function backspace() {
    let str = inputDisplay.value;
    let newStr = str.substring(0, str.length - 1);
    inputDisplay.value = newStr;
}

buttons.forEach(button => {
    if(button.id === 'equal-sign') {
        button.addEventListener('click', calculate);
    }
    else if(button.textContent  === 'CE') {
        button.addEventListener('click', clearText);
    }
    else if(button.textContent  === 'DE') {
        button.addEventListener('click', backspace);
    }
    else {
        button.addEventListener('click', function(e) {
            inputDisplay.value += button.textContent;
        })
    }
})