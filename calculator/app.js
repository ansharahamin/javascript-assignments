let num1 = "";
let num2 = "";
let operator = "";
const display = document.getElementById("display")

function appendToDisplay(input){
display.value+=input
if(['+','-','*','/'].includes(input)){
    operator=input
    num1=display.value.slice(0,-1)
     
}
}
// function clearDisplay() {
//     // display.value=""
    
function clearDisplay() {
    display.value = "";
    num1 = "";
    num2 = "";
    operator = "";
}

function calculate() {

num2 = display.value
const n1 = Number(num1);
    const n2 = Number(num2);
let result=""
if (operator === '+') {
    result+= num1+num2
}else if(operator==='-'){
    result+= num1-num2
}else if(operator==='*'){
    result+= num1*num2
}else if(operator==='/'){
    result+= num1/num2
}


    // try {
    //      display.value=eval(display.value)
    // } catch (error) {
    //      display.value="Error"
    // }
}