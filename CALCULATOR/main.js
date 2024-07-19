let num1 = Number(document.getElementById("one").textContent);
let num2 = Number(document.getElementById("two").textContent);
let num3 = Number(document.getElementById("three").textContent);
let num4 = Number(document.getElementById("four").textContent);
let num5 = Number(document.getElementById("five").textContent);
let num6 = Number(document.getElementById("six").textContent);
let num7 = Number(document.getElementById("seven").textContent);
let num8 = Number(document.getElementById("eight").textContent);
let num9 = Number(document.getElementById("nine").textContent);
let num0 = Number(document.getElementById("zero").textContent);

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