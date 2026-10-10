const calculatorForm = document.getElementById("calculator-form");
const evenOddForm = document.getElementById("even-odd-form");
const maxNumberForm = document.getElementById("max-number-form");

function showInvalidInput(resultElement) {
  resultElement.textContent = "Please enter a valid number in every field.";
}

calculatorForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstInput = document.getElementById("first-number");
  const secondInput = document.getElementById("second-number");
  const operation = document.getElementById("operation").value;
  const resultElement = document.getElementById("calculator-result");

  if (firstInput.value.trim() === "" || secondInput.value.trim() === "") {
    showInvalidInput(resultElement);
    return;
  }

  const firstNumber = Number(firstInput.value);
  const secondNumber = Number(secondInput.value);
  let result;

  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    showInvalidInput(resultElement);
    return;
  }

  if (operation === "add") {
    result = firstNumber + secondNumber;
  } else if (operation === "subtract") {
    result = firstNumber - secondNumber;
  } else if (operation === "multiply") {
    result = firstNumber * secondNumber;
  } else if (operation === "divide") {
    if (secondNumber === 0) {
      resultElement.textContent = "Cannot divide by zero.";
      return;
    }
    result = firstNumber / secondNumber;
  }

  resultElement.textContent = "Result: " + result;
});

evenOddForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const numberInput = document.getElementById("even-odd-number");
  const resultElement = document.getElementById("even-odd-result");

  if (numberInput.value.trim() === "") {
    showInvalidInput(resultElement);
    return;
  }

  const number = Number(numberInput.value);

  if (!Number.isFinite(number) || !Number.isInteger(number)) {
    resultElement.textContent = "Please enter a valid whole number.";
    return;
  }

  if (number % 2 === 0) {
    resultElement.textContent = number + " is even.";
  } else {
    resultElement.textContent = number + " is odd.";
  }
});

const loopResult = document.getElementById("loop-result");
let numberList = "";

for (let number = 1; number <= 10; number++) {
  if (number % 2 === 0) {
    numberList = numberList + number + " is even";
  } else {
    numberList = numberList + number + " is odd";
  }

  if (number < 10) {
    numberList = numberList + " · ";
  }
}

loopResult.textContent = numberList;

maxNumberForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstInput = document.getElementById("max-first");
  const secondInput = document.getElementById("max-second");
  const thirdInput = document.getElementById("max-third");
  const resultElement = document.getElementById("max-number-result");

  if (
    firstInput.value.trim() === "" ||
    secondInput.value.trim() === "" ||
    thirdInput.value.trim() === ""
  ) {
    showInvalidInput(resultElement);
    return;
  }

  const firstNumber = Number(firstInput.value);
  const secondNumber = Number(secondInput.value);
  const thirdNumber = Number(thirdInput.value);

  if (
    !Number.isFinite(firstNumber) ||
    !Number.isFinite(secondNumber) ||
    !Number.isFinite(thirdNumber)
  ) {
    showInvalidInput(resultElement);
    return;
  }

  let largestNumber;

  if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
    largestNumber = firstNumber;
  } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
    largestNumber = secondNumber;
  } else {
    largestNumber = thirdNumber;
  }

  if (
    firstNumber === secondNumber &&
    secondNumber === thirdNumber
  ) {
    resultElement.textContent = "All three numbers are equal: " + largestNumber + ".";
  } else {
    resultElement.textContent = "Largest number: " + largestNumber;
  }
});
