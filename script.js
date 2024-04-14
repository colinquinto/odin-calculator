let firstValue = '';
let secondValue = '';
let operate = '';

// Method for calculation
const calculation = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
}

const firstNumber = document.querySelector(".first");
const secondNumber = document.querySelector(".second");

// Compute the given values based on the operator used when called
const performCalculation = () => {
    if (operate === '/' && firstValue === '0' || secondValue === '0'){
        resetValues();
        firstNumber.textContent = "Error! Cannot Divide by 0"
    }
    else{
        secondNumber.textContent = '';
        let newValue = Number(calculation[operate](Number(secondValue), Number(firstValue)));
        // Check if the new value is decimal,then limit it to 2 decimal places if true
        newValue % 1 != 0 ? newValue.toFixed(2) : newValue;
        firstNumber.textContent = newValue;
        firstValue = newValue;
        secondValue = '';
        // Convert the number to its exponential form when its length is over 15
        if (firstNumber.textContent.length > 15) {
            firstNumber.textContent = newValue.toExponential(8) // Set number of digits after decimal point to 8
        }
    }
}

// Reset all the values and operator when called
const resetValues = () => {
    firstValue = '';
    firstNumber.textContent = '0';
    secondValue = '';
    secondNumber.textContent = '';
    operate = '';
    operate.textContent = '';
}

// Transfer the first value to second value, then reset first value and text content when called
const transferValue = () => {
            secondNumber.textContent = firstNumber.textContent + ' ' + operate;
            secondValue = firstValue;
            firstNumber.textContent = '';
            firstValue = '';
}

const containNumbers = document.querySelectorAll(".number");
    containNumbers.forEach((eachNumber) => eachNumber.addEventListener('click', (event) =>{
        if (firstNumber.textContent.length < 10) {
            firstValue += event.target.textContent;
            firstNumber.textContent = firstValue;
        }
    }))
    // Add keyboard support for numbers
    window.addEventListener('keydown', (event) => {
        let getOpt = Number(event.key);
        // Check if the key pressed is a number using regex
        if (event.key.match(/^\d+$/)) {
            if (firstNumber.textContent.length < 10) {
            firstValue += getOpt;
            firstNumber.textContent = firstValue;
         }}
    })

const operator = document.querySelectorAll(".operator");
    operator.forEach((eachOperator) => eachOperator.addEventListener('click', (event) => {
        if (firstValue === '' && secondValue === '') {
            // Do nothing
        }
        else if (secondValue !== '') {
            // Allow the user to change the operator they are using while the first value is empty
            if (firstValue === '') {
              operate = event.target.textContent;
              secondNumber.textContent = secondValue + ' ' + operate;
            }
            // Perform calculation first when the user clicks another operator if the first and second numbers has a value
            else {
              performCalculation();
              operate = event.target.textContent;
              transferValue();
            }
        }
        else { 
            operate = event.target.textContent;
            transferValue();
        }
    }))

const clear = document.querySelector(".reset");
clear.addEventListener('click', () => {
    resetValues();
})
    
const deleteOne = document.querySelector(".delete");
    let deleteFunc = () => {
    // Slice a single character when the Delete button is clicked
    if (firstNumber.textContent !== ''){
         firstNumber.textContent = firstNumber.textContent.slice(0, -1);
        firstValue = firstNumber.textContent;
    }
    else {
        firstNumber.textContent = secondValue;
        firstValue = firstNumber.textContent;
        secondNumber.textContent = '';
        secondValue = '';
        operate = '';
    }}
    deleteOne.addEventListener('click', () => deleteFunc())
    // Add backspace keyboard support
    window.addEventListener('keydown', (event) => {
        if (event.code === 'Backspace'){
            deleteFunc();
        }
    })

const posneg = document.querySelector(".posneg");
    posneg.addEventListener('click', () => {
        // Convert value to positive or negative
        if (firstNumber.textContent[0] === '-' && firstNumber.textContent !== '') {
            firstNumber.textContent = firstNumber.textContent.substring(1);
            firstValue = firstNumber.textContent;
        }
        else if (!firstNumber.textContent.includes('%') && firstNumber.textContent !== '0'){
            firstNumber.textContent = '-' + firstNumber.textContent;
            firstValue = firstNumber.textContent;
          }  
    })

const percentage = document.querySelector(".percentage")
    percentage.addEventListener('click', () => {
        if(firstNumber.textContent.includes('%') || firstNumber.textContent === ''){
            // If a percent symbol already exists or the display text is empty, do nothing
          }
          else {
           firstValue = Number(firstNumber.textContent / 100).toFixed(2); // Divide the number by 100 to convert it from percentage
           firstNumber.textContent = firstNumber.textContent + '%';
          }
    })

const equal = document.querySelector(".equal");
    equal.addEventListener('click', (event) => {
        if(firstValue === '' ||  secondValue === '' || operate === ''){
            // If one of the values are empty, do nothing
        }
        else{
            performCalculation();
        }})

    window.addEventListener('keydown', (event) => {
        event.preventDefault();
        if (event.key === 'Enter') {
            if (firstValue === '' ||  secondValue === '' || operate === '') {
                // Do nothing
            }
            else {
                performCalculation();
            }
        }
    })

const decimal = document.querySelector(".decimal");
    decimal.addEventListener('click', () => {
       if(firstNumber.textContent.includes('.')){
         // If a decimal point already exists, do nothing
       }
       else {
        firstNumber.textContent = firstNumber.textContent + '.';
        firstValue = firstNumber.textContent;
       }
    })

