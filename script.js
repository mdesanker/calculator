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

function clear() {
    display.textContent = '';
    // equationDisplay.textContent = '';
}

function addToDisplay(val) {
    let current = display.textContent;
    let update = current + val;
    display.textContent = update;
}

// Function to update the equation output
function addToEquationDisplay(val) {
    let currentDisplay = document.querySelector('#calculation').textContent
    let newDisplay = currentDisplay + val;
    equationDisplay.textContent = newDisplay;
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

// Check for operator button press and get textContent of respective button
const operButtons = document.querySelectorAll('button.operator');
console.log(operButtons);

// displayOutput('blah blah')
equationDisplay.textContent = ''
