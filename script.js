// Initialize first number, second number, and operator to be used
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

// Store first and second number for display
const firstNumber = document.querySelector(".first");
const secondNumber = document.querySelector(".second");

// Compute the given values based on the operator used when called
const performCalculation = () => {
    if (operate === '/' && firstValue === '0' || secondValue === '0'){
        resetValues()
        firstNumber.textContent = "Error! Cannot Divide by 0"
    }
    else{
        secondNumber.textContent = '';
        // Store the calculated value
        let newValue = calculation[operate](Number(secondValue), Number(firstValue));
        // Check if the new value is decimal, then limit it to 3 decimal places if true
        newValue % 1 != 0
        ? firstNumber.textContent = newValue.toFixed(3) 
        : firstNumber.textContent = newValue
        firstValue = Number(newValue.toFixed(3));
        secondValue = '';
        // Convert the number to its exponential form when its length is over 15
        if (firstNumber.textContent.length > 15) {
            firstNumber.textContent = Number(newValue).toExponential(8) // Set number of digits after decimal point to 8
        }
    }
}

// Reset all the values and operator when called
const resetValues = () => {
    firstValue = '';
    firstNumber.textContent = '';
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
    
// Assing click event on all of the number buttons
const containNumbers = document.querySelectorAll(".number");
    containNumbers.forEach((eachNumber) => eachNumber.addEventListener('click', (event) =>{
        const getNum = event.target.textContent
        if (firstValue.length < 10) {
            firstValue += getNum;
        }
        firstNumber.textContent = firstValue;
    }))

// Assign click event on all of the operator buttons
const operator = document.querySelectorAll(".operator");
    operator.forEach((eachOperator) => eachOperator.addEventListener('click', (event) => {
        if (firstValue === '' && secondValue === '') {
         // If the values are empty, do nothing
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

// Reset values and operator when reset button is clicked
const clear = document.querySelector(".reset");
clear.addEventListener('click', () => {
    resetValues()
})
    

const deleteOne = document.querySelector(".delete");
    deleteOne.addEventListener('click', () => {
        // Slice a single character when the Delete button is clicked
        if (firstValue !== ''){
            firstNumber.textContent = firstNumber.textContent.slice(0, -1);
            firstValue = firstNumber.textContent;
        }
    })

const posneg = document.querySelector(".posneg");
    posneg.addEventListener('click', () => {
        // Convert value to positive or negative
        if (firstNumber.textContent[0] === '-') {
            firstNumber.textContent = firstNumber.textContent.substring(1);
            firstValue = firstNumber.textContent;
        }
         else {
             firstNumber.textContent = '-' + firstNumber.textContent
             firstValue = firstNumber.textContent;
          }  
    })
    

const equal = document.querySelector(".equal");
    // Compute the values of the two numbers when equal button is clicked
    equal.addEventListener('click', () => {
        if(firstValue === '' ||  secondValue === '' || operate === ''){
            // If one of the values are empty, do nothing
        }
        else{
            performCalculation();
        }})


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


