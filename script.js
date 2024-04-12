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

// Function for calculating the values of first and second number based on the operator
const performCalculation = () => {
    if (operate === '/' && firstValue === '0' || secondValue === '0'){
        alert("Cannot Divide by 0")
        resetValues()
    }
    else{
        secondNumber.textContent = '';
        // Store the calculated value
        let newValue = calculation[operate](Number(secondValue), Number(firstValue));
        // Check if the new value is decimal, then limit it to 3 decimal places
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

// Function for resetting the values and operator
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

// Store first and second number for display
const firstNumber = document.querySelector(".first");
const secondNumber = document.querySelector(".second");

    
// Get all the numbers, assign click event on each of the numbers, store the value for later use
const containNumbers = document.querySelectorAll(".number");
    containNumbers.forEach((eachNumber) => eachNumber.addEventListener('click', (event) =>{
        const getNum = event.target.textContent
        if (firstValue.length < 10) {
            firstValue += getNum;
        }
        firstNumber.textContent = firstValue;
    }))

// Get operator and assign click event on each of them and store the value for later use
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
            // Perform calculation first when the user clicks another operator while the first and second numbers has a value
            else {
              performCalculation();
              operate = event.target.textContent;
              transferValue();
            }
        }

        else { 
            // If the second value is empty, transfer the first value to it after the user clicks an operator, then empty out the first value for another input
            operate = event.target.textContent;
            transferValue();
        }
    }))
    
// Slice a single character when the Delete button is clicked
const deleteOne = document.querySelector(".delete");
    deleteOne.addEventListener('click', () => {

        if (firstValue !== ''){
            firstNumber.textContent = firstNumber.textContent.slice(0, -1);
            firstValue = firstNumber.textContent;
        }
        else {
            firstNumber.textContent = secondValue;
            firstValue = firstNumber.textContent
            secondNumber.textContent = '';
            secondValue = '';
            operate = '';
        }})
    
// Get the equal button, add click event, then perform calculation if the Values are not empty
const equal = document.querySelector(".equal");
    equal.addEventListener('click', () => {
        if(firstValue === '' ||  secondValue === '' || operate === ''){
            // If the values are empty, do nothing
        }
        else{
            performCalculation();
        }})


const decimal = document.querySelector(".decimal");


// Reset values and operator when reset button is clicked
const clear = document.querySelector(".reset");
    clear.addEventListener('click', () => {
        resetValues()
    })
