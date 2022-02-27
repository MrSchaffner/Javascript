console.log('anything2');

const Calculator = {
    DisplayValue: '0', // a string
    firstOperand: null,
    waitSecondOperand: false,
    operator: null,
};

function InputDigit(digit) {
    console.log('inputDIgit');
    //MOST IMPORTANT LINE: -------------------------------------------------------------------------------------------------------
    const { DisplayValue, waitSecondOperand } = Calculator; 
    if (waitSecondOperand === true) {
        // if a operation key was pressed
        Calculator.DisplayValue = digit;
        Calculator.waitSecondOperand = false;
    } else {
        Calculator.DisplayValue = DisplayValue === '0' ? digit : DisplayValue + digit; //just adding strings, not Math.
    }
}

function InputDecimal(dot) {
    console.log('decimal');
    if (Calculator.waitSecondOperand === true)return; 
    // consolidated into one statement
    // if (Calculator.waitSecondOperand == true && !Calculator.DisplayValue.includes(dot)) {
    //     Calculator.DisplayValue += dot;
    // }
    if (!Calculator.DisplayValue.includes('.')) {
            Calculator.DisplayValue += ".";
        }
}


function handleOperator(NextOperator) {
    console.log('handleOperator');
    const { firstOperand, DisplayValue, operator } = Calculator;

    const valueOfInput = parseFloat(DisplayValue);

    if (operator && Calculator.waitSecondOperand) {
        Calculator.operator = NextOperator;
        return;
    }

    if (firstOperand == null) {
        Calculator.firstOperand = valueOfInput;

    } else if (operator) {
        const ValueNow = firstOperand || 0; // if firstOperand has a value, assign to it, else assign to 0
        let result = PerformCalculation[operator](ValueNow, valueOfInput);

        result = Number(result).toFixed(9) // limits length shown
        result = (result * 1) // removes trailing 0s
        result = result.toString(); // converts to string
        Calculator.DisplayValue = parseFloat(result);
        Calculator.firstOperand = parseFloat(result)

    }
    Calculator.waitSecondOperand = true;
    Calculator.operator = NextOperator;
}

const PerformCalculation = { //these are accesible with PerformCalculation['/'](fo,so)
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (f, s) => f * s,
    '+': (f, s) => f + s,
    '-': (f, s) => f - s,
    '=': (f, s) => s,
}

function CalculatorReset() {
    Calculator.DisplayValue = '0';
    Calculator.firstOperand = null;
    Calculator.waitSecondOperand = false;
    Calculator.operator = null;
}

function updateDisplay() {
    const display = document.querySelector('.screen');
    display.value = Calculator.DisplayValue;
}

updateDisplay();

const keys = document.querySelector('.keys');
//EVENT LISTENER
keys.addEventListener('click', (event) => {
    //target var is an object that represents element.
    const { target } = event;
    if (!target.matches('button')) { return }
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        InputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('all-clear')) {
        CalculatorReset();
        updateDisplay();
        return;
    }

    InputDigit(target.value);
    updateDisplay();


}) //END EVENT LISTENER

console.log('anything1');