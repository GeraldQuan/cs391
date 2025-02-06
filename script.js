function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (operation === '+') result = num1 + num2;
    else if (operation === '-') result = num1 - num2;
    else if (operation === '*') result = num1 * num2;
    else if (operation === '/') result = num2 !== 0 ? num1 / num2 : 'Error: Division by 0';
    else if (operation === '**') result = Math.pow(num1, num2);

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Result: ${result}`;

    if (result < 0) {
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'black';
    }
}

function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    const resultElement = document.getElementById('result');
    resultElement.innerText = '';
}