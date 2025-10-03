let num1 = "";
let num2 = "";
let operator = "";
let isSecondNumber = false;
let display = document.getElementById("display");

function appendToDisplay(input) {
    if (!isSecondNumber && operator!=="+"&& operator!=="-"&& operator!=="*"&& operator!=="/" ) {
        num1 += input;
    }else if (operator==="+"||operator==="-"||operator==="*"||operator==="/") {
        operator = input;
        isSecondNumber=true
    }else if (isSecondNumber&& operator!=="+"&& operator!=="-"&& operator!=="*"&& operator!=="/") {
        num2 += input;
    }
  display.value += input;

//   if (["+", "-", "*", "/"].includes(input)) {
//     operator = input;
//     num1 = display.value.slice(0, -1);
//   }
}
// function clearDisplay() {
//     // display.value=""



function calculate() {
    // let operatorIndex = display.value.indexOf(operator);
    // num2 = display.value.slice(operatorIndex + 1);
num1 = Number(num1);
num2  = Number(num2);
  let result = "";
  if (operator === "+") {
    result = n1 + n2;
  } else if (operator === "-") {
    result = n1 - n2;
  } else if (operator === "*") {
    result = n1 * n2;
  } else if (operator === "/") {
    result = n1 / n2;
  }
  display.value = result;
  // num2 = display.value
  // try {
  //      display.value=eval(display.value)
  // } catch (error) {
  //      display.value="Error"
  // }
  num2=""
  num1=result
}
function clearDisplay() {
    display.value = "";
    num1 = "";
    num2 = "";
    operator = "";
  }