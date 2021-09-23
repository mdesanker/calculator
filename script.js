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
    switch (operator) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            if (b === 0) {
                return 'nah.';
            } else {
                return divide(a, b);
            }
    }
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
    if (calculator.waitingForSecondOperand) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = (calculator.displayValue === '0' ? digit : calculator.displayValue + digit);
    }
}

function inputDecimal() {
    // Check that there is a non-zero first number and not already a decimal in the number
    if (calculator.displayValue !== '0' && !calculator.displayValue.includes('.')) {
        calculator.displayValue += '.';
    }
}

function clearCalulator() {
    calculator.displayValue = '';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

function handleOperator(nextOperator) {
    if (calculator.operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }
    if (calculator.operator === null && calculator.displayValue !== '0') {
        calculator.firstOperand = parseFloat(calculator.displayValue);
        calculator.displayValue = '';
        calculator.operator = nextOperator;
        calculator.waitingForSecondOperand = true;
    } else if (calculator.operator) {
        const result = operate(parseFloat(calculator.firstOperand), calculator.displayValue, calculator.operator);
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }
}

updateDisplay();

// Respond to different types of buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('num')) {
            inputDigit(button.textContent);
            console.log(calculator);
            updateDisplay();
        }
        if (button.classList.contains('operator')) {
            handleOperator(button.id);
            console.log(calculator);
            updateDisplay();
        }
        if (button.id === 'decimal') {
            inputDecimal();
            updateDisplay();
        }
        if (button.id === 'equals') {
            console.log(button.textContent);
        }
        if (button.id === 'clear') {
            clearCalulator();
            updateDisplay();
            console.log(calculator);
        }
    })
})
