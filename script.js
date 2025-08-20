const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => handleInput(button.dataset.key));
});

document.addEventListener('keydown', (e) => {
  const key = e.key;
  const validKeys = '0123456789+-*/.=EnterBackspaceEscapecC';
  if (validKeys.includes(key)) {
    handleInput(key);
  }
});

function handleInput(key) {
  switch (key) {
    case 'Enter':
    case '=':
      calculate();
      break;
    case 'Backspace':
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
      break;
    case 'C':
    case 'c':
    case 'Escape':
      currentInput = '';
      updateDisplay();
      break;
    default:
      if ('0123456789+-*/.'.includes(key)) {
        currentInput += key;
        updateDisplay();
      }
  }
}

function updateDisplay() {
  display.value = currentInput;
}

function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch {
    display.value = 'Error';
    currentInput = '';
  }
}
