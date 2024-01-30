let displayValue = '0';
let operator = '';
let firstOperand = null;
let waitingForSecondOperand = false;

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function appendNumber(number) {
  if (displayValue === '0' || waitingForSecondOperand) {
    displayValue = number;
    waitingForSecondOperand = false;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function setOperator(newOperator) {
  if (operator !== '') {
    calculate();
  }
  firstOperand = parseFloat(displayValue);
  operator = newOperator;
  waitingForSecondOperand = true;
}

function calculate() {
  const secondOperand = parseFloat(displayValue);
  let result = 0;

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      break;
  }

  displayValue = result.toString();
  operator = '';
  firstOperand = null;
  waitingForSecondOperand = false;

  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  operator = '';
  firstOperand = null;
  waitingForSecondOperand = false;

  updateDisplay();
}

updateDisplay();
