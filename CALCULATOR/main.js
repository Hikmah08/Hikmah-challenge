let inputArray = [];

function get(value) {
  console.log("you clicked", value);
  if (value === "AC") {
    clearDisplay();
  } else if (value === "⬅") {
    inputArray.pop();
    document.getElementById("display").innerText = inputArray.join("");
  } else if (value === "=") {
    console.log("equals clicked, running calculation");
    return calculate();
  } else if (value === "%") {
    handlePercentage();
  } else {
    document.getElementById("display").innerText += value;
    inputArray.push(value);
  }
}

function calculate() {
  let result = 0;
  let currentNumber = [];
  let operator = "+";

  function performOperation(num) {
    num = parseFloat(num.join(""));
    switch (operator) {
      case "+":
        result += num;
        break;
      case "-":
        result -= num;
        break;
      case "X":
        result *= num;
        break;
      case "/":
        result /= num;
        break;
    }
  }

  for (let i = 0; i <= inputArray.length; i++) {
    const char = inputArray[i];
    if (["+", "-", "X", "/", "%"].includes(char) || i === inputArray.length) {
      console.log(
        "Char:",
        char,
        "CurrentNumber:",
        currentNumber,
        "Operator:",
        operator
      );
      performOperation(currentNumber);
      currentNumber = [];
      operator = char;
    } else {
      currentNumber.push(char);
    }
  }

  inputArray = [];
  console.log("Result:", result);
  document.getElementById("result").innerText = result;
  return result;
}

function clearDisplay() {
  inputArray = [];
  document.getElementById("display").innerText = "";
  document.getElementById("result").innerText = "";
}

function handlePercentage() {
  if (inputArray.length === 0) return;

  let currentNumber = [];
  let operator = null;

  for (let i = inputArray.length - 1; i >= 0; i--) {
    const char = inputArray[i];
    if (["+", "-", "X", "/"].includes(char)) {
      operator = char;
      break;
    } else {
      currentNumber.unshift(char);
    }
  }

  if (currentNumber.length > 0) {
    let number = parseFloat(currentNumber.join(""));
    let percentageResult = number / 100;
    currentNumber = percentageResult.toString().split("");

    if (operator !== null) {
      inputArray = inputArray.slice(
        0,
        inputArray.length - currentNumber.length
      );
      inputArray.push(...currentNumber);
    } else {
      inputArray = currentNumber;
    }

    document.getElementById("display").innerText = inputArray.join("");
  }
}

/*let inputArray = [];


function get(value) {
  console.log("you clicked", value);
  if (value === 'AC') {
      clearDisplay();
  } else if (value === '⬅') {
      inputArray.pop();
      document.getElementById('display').innerText = inputArray.join('');
  } else if (value === '=') {
      console.log("equals clicked, running calculation");
      return calculate();
  } else {
      document.getElementById('display').innerText += value;
      inputArray.push(value);
  }
}

function calculate() {
  let result = 0;
  let currentNumber = [];
  let operator = "+";

  function performOperation(num) {
    num = parseFloat(num.join(""));
    switch (operator) {
      case "+":
        result += num;
        break;
      case "-":
        result -= num;
        break;
      case "X":
        result *= num;
        break;
      case "/":
        result /= num;
        break;
    }
  }

  for (let i = 0; i <= inputArray.length; i++) {
    const char = inputArray[i];
    if (["+", "-", "X", "/","%"].includes(char) || i === inputArray.length) {
      console.log(
        "Char:",
        char,
        "CurrentNumber:",
        currentNumber,
        "Operator:",
        operator
      );
      performOperation(currentNumber);
      currentNumber = [];
      operator = char;
    } else {
      currentNumber.push(char);
    }
  }
  inputArray = [];
  console.log("Result:", result);
  document.getElementById("result").innerText = result;
  return result;
}
function clearDisplay() {
  inputArray = [];
  document.getElementById('display').innerText = '';
  document.getElementById('result').innerText = '';
}
*/
