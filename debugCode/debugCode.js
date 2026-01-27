function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let operation = document.getElementById("operation").value;

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        let result;
        if (operation === "mult") {
            result = multiply(num1, num2);
        } else if (operation === "add") {
            result = num1 + num2;
        } else if (operation === "div") {
            if (num2==0) {
                displayResult('Cannot divide by 0')
            } else {
                result = num1 / num2;
            }
        }
        
        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a,b) {
    // Intorduce a debugger statement to pause execution
    debugger;
    
    // Multiply the numbers
    return a*b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}