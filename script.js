// Initialize first number, second number, and operator to be used
let firstValue = '';
let secondValue = '';
let operate = '';

// Store first and second number for display
let firstNumber = document.querySelector(".first");
let SecondNumber = document.querySelector(".second");

// Get operator and assign click event on each of them and store the value for later use
let operator = document.querySelectorAll(".operator");
operator.forEach((eachOperator) => eachOperator.addEventListener('click', (event) => {
    storeOpt(event.target.textContent);
    operator.textContent = operate;
}))
    
// Get reset and delete buttons
let clear = document.querySelector(".reset");
let deleteOne = document.querySelector(".delete");
    
// Get equal and decimal buttons
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");
    
// Get all the numbers, assign click event on each of the numbers, store the value for later use
let containNumbers = document.querySelectorAll(".number");
containNumbers.forEach((eachNumber) => eachNumber.addEventListener('click', (event) =>{
    storeNum(event.target.textContent);
    firstNumber.textContent = firstValue;
}))

// Store the value taken from the event listener
let storeNum = (value) => {
    // Limit the length of the numbers that will be displayed to less than 10
    if (firstValue.length < 10) {
        firstValue += value;
    }
}

// Function for operator
let storeOpt = (opr) => {
    
}
