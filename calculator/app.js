var num1 =""
var num2=""
var operator =""
isSecondNum = false
var display = document.getElementById("display")

function appendToDisplay(input) {//function no1
  //operator
  if(["+","-","*","/","%"].includes(input)){
    if (operator&&num2) {
      calculate()
      return
    }
        if (operator !== "" && num2 === "") {
          
      return; // avoid double operator

    }
    operator = input
    isSecondNum =true
  }else{//num
    if (!isSecondNum) {
      num1 += input
      
    }else{
     num2+=input
    }
  }
  display.value += input
}
function calculate(){
  let result = 0
  if (operator=== "") {
    if (num1 !== "" ) {
      result=parseFloat(num1)**2
      display.value = result
      num1 += result.toString()
      return
    }
  }
  const n1 = parseFloat(num1)
  const n2 = parseFloat(num2)
  switch (operator) {
    case "+":
      result = n1 +n2
      break;
    case "-":
      result = n1 -n2
      break;
    case "*":
      result = n1 *n2
      break;
    case "/":
      if (n2!==0) {
        result = n1 /n2
      } else {
        result= "Error"
      }
      
      break;
    case "%":

         result = n1 %n2
      break;
  
    default:
      result = "Invalid"
      break;
  }
  display.value = result

  //reset
  num1 = result.toString()
  num2 = ""
  operator = ""
  isSecondNum=false
}

function clearDisplay(){
  display.value = ""
  num1 = ""
  num2 = ""
  operator =""
  isSecondNum = false
}

function Backspace(){
  display.value = display.value.slice(0,-1)
  if(!isSecondNum){
    num1 = num1.slice(0,-1)
  }else if(num2 !== ""){
    num2 = num2.slice(0,-1)
  }else if(operator!==""){
    operator=""
    isSecondNum=false
  }
}
