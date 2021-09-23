// script.js //

// Functions for basic math operators
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    return operator(a, b);
}

// Create calculator object
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

// Function to update calculator display
function updateDisplay() {
    const display = document.querySelector('#display');
    display.textContent = calculator.displayValue;
}

function inputDigit(digit) {
    // Update calculator display with new number
    calculator.displayValue = (calculator.displayValue === '0' ? digit : calculator.displayValue + digit);
}

function inputDecimal() {
    // Check that there is a non-zero first number and not already a decimal in the number
    if (calculator.displayValue !== '0' && !calculator.displayValue.includes('.')) {
        calculator.displayValue += '.';
    }
}

// Respond to different types of buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('num')) {
            inputDigit(button.textContent);
            updateDisplay();
        }
        if (button.classList.contains('operator')) {
            console.log(button.id);
        }
        if (button.id === 'decimal') {
            inputDecimal();
            updateDisplay();
        }
        if (button.id === 'equals') {
            console.log(button.textContent);
        }
        if (button.id === 'clear') {
            console.log(button.id);
        }
    })
})
