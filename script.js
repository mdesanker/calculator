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

// function operate(a, b, operator) {
//     return operator(a, b);
// }

// Operate function using switch statement
function operate(a, b, operator) {
    switch (operator) {
        case 'add': return add(a, b);
        case 'subtract': return subtract(a, b);
        case 'multiply': return multiply(a, b);
        case 'divide': return divide(a, b);
    }
}

function clear() {
    display.textContent = '';
    // equationDisplay.textContent = '';
}

function addToDisplay(val) {
    let current = display.textContent;
    let update = current + val;
    display.textContent = update;
}

const display = document.querySelector('#display');
const equationDisplay = document.querySelector('#calculation')

// Clear button functionality
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);

// Check for number button press and get textContent of respective button
const numButtons = document.querySelectorAll('button.num');
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        addToDisplay(button.textContent);
        console.log(button.textContent);  // Just output to console for now
    })
});

let entry1
let operation
let entry2

// Check for operator button press and get id of respective button
const operButtons = document.querySelectorAll('button.operator');
operButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent) {
            entry1 = parseInt(display.textContent);
            operation = button.id;
            console.log(entry1, operation);
            clear();
        }
    })
})

// Check for equals button press and output answer
const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', () => {
    if (display.textContent) { // Check whether there has been any input since an operator button pressed
        entry2 = parseInt(display.textContent);
        display.textContent = operate(entry1, entry2, operation);
    }
})