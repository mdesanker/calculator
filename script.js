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

// Use switch statement to call function from a string
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
    return b; // If the operator is = 
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
        calculator.displayValue = digit; // Clear the firstOperand if an operator has been chosen
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = (calculator.displayValue === '0' ? digit : calculator.displayValue + digit);
    }
}

function inputDecimal() {
    if (calculator.waitingForSecondOperand === true) { // If waiting on second operand to start, set value to '0.'
        calculator.displayValue = '0.';
        calculator.waitingForSecondOperand = false;
        return;
    }
    if (!calculator.displayValue.includes('.')) { // Do not add a decimal if already is one
        calculator.displayValue += '.';
    }
}

// Reset all values in the calculator object
function clearCalulator() {
    calculator.displayValue = '';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

function handleOperator(nextOperator) {
    // Allow the operator to be changed if secondOperand has not been started
    if (calculator.operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }
    // Set firstOperand to display value and operator to button pressed
    if (calculator.operator === null && calculator.displayValue !== '0') {
        calculator.firstOperand = parseFloat(calculator.displayValue);
        calculator.operator = nextOperator;
        calculator.waitingForSecondOperand = true;

        // If an operator has already been pressed, then display the answer
    } else if (calculator.operator) {
        const result = operate(parseFloat(calculator.firstOperand), parseFloat(calculator.displayValue), calculator.operator);
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`; // Limit result to 7 decimal places and then round with parseFloat
        calculator.firstOperand = result; // Result of previous calc becomes firstOperand for next calculation
    }

    // Set operator to the specified button and tell calc to wait for secondOperand
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

updateDisplay();

// Respond to different types of buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('num')) { // 0123456789
            inputDigit(button.textContent);
            console.log(calculator);
            updateDisplay();
        }
        if (button.classList.contains('operator')) { // +-*/=
            handleOperator(button.id);
            console.log(calculator);
            updateDisplay();
        }
        if (button.id === 'decimal') {
            inputDecimal();
            updateDisplay();
        }
        if (button.id === 'clear') {
            clearCalulator();
            updateDisplay();
            console.log(calculator);
        }
    })
})
