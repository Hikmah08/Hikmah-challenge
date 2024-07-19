

let inputArray = [];

function get(value) {
  console.log("you clicked", value);
  if (value === "=") {
    console.log("equals clicked, running calculation");
    return calculate();
  } else {
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
    if (["+", "-", "X", "/"].includes(char) || i === inputArray.length) {
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
  return result;
}