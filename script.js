let displayValue = "0";

function appendToDisplay(value) {
    if (displayValue === "0") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById("result");
    display.textContent = displayValue;
}