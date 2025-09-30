function avr() {
  var subject1 =  parseInt(document.getElementById("subject1").value)
  var subject2 =  parseInt(document.getElementById("subject2").value)
  var subject3 =  parseInt(document.getElementById("subject3").value)
  var subject4 =  parseInt(document.getElementById("subject4").value)
  var total= subject1+subject2+subject3+subject4
  var average = total/4
  console.log(total,average);
  var result = ""
  if(average>=50){
    result+= "congratulations you passed with average of grade "+average+"."
  }else{
    result+= "unfortunately you failed  with average of grade "+average+"."
  }
  document.getElementById("result").innerHTML = result
    document.getElementById("subject1").value = "";
  document.getElementById("subject2").value = "";
  document.getElementById("subject3").value = "";
  document.getElementById("subject4").value = "";
}

function palindrome() {
    var word = document.getElementById("word").value
    result=""
    check = ""
    for (let i = word.length-1; i >= 0; i--) {
        result+=word[i]
    }
if (word===result) {
check+="It is a palindrome"
    
} else {
    console.log("it is not a palindromde");
    check+="it is not a palindrome"
}
document.getElementById("check").innerHTML = check

document.getElementById("word").value=""

}

function titlecase() {
    var sentence = document.getElementById("sentence").value
    var result=""
    var MakeUpper=true;
    for (let i = 0; i < sentence.length; i++) {
        if (MakeUpper) {
            result+=sentence[i].toUpperCase()
            
        } else {
            MakeUpper=false;
            result+=sentence[i].toLowerCase()
        }
    }if(sentence[i]===" "){
        MakeUpper=true
    }

}