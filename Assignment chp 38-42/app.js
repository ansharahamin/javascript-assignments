// Qno1
// function Square(a,b) {
// return a**b
// }

// console.log(Square(2,3));
// Qno2

// function LeapYear(year) {

     
//     if (year % 400 == 0 )   {
//         console.log("it,s a leap year");
//     }else if(year % 100 == 0){
//         console.log("it,s not a leap year");
//     }else if(year % 4 == 0){
//         console.log("it,s a leap year");
//     }else{
//         console.log("it is not a leap year");
//     }
    
// }
// var year = +prompt("Enter year")
// LeapYear(year);

//  Qno 3 
// function calcArea(a,b,c) {
//     function calcSemiParams() {
//     return (a+b +c )/2
//  }
// let S = calcSemiParams()
// var Area =Math.sqrt((S*(S-a)*(S-b)*(S-c))) 
// return Area
// }
// userSideA = +prompt("Enter first side")
// userSideB = +prompt("Enter Second side")
// userSideC = +prompt("Enter third side")
// console.log(calcArea(userSideA,userSideB,userSideC));


// =========Qno 04===========\\

// function main(total,x,y,z) {
//     function Avg() {

//          var avg =(x+y+z)/3
//          return avg
//      }
//      function percentage() {
    
//        var obt =  x+y+z
//        var percent = (obt/total)*100
//        return percent
//     }

//   console.log("your percentage is " + percentage() + "%");
//   console.log("your Average is " + Avg());
// }
// var sub1 = +prompt("Enter first subject marks out of 100")
// var sub2 = +prompt("Enter Second subject marks out of 100")
// var sub3 = +prompt("Enter third subject marks out of 100")
// main(300,sub1,sub2,sub3)


// =========Qno 05===========\\

// function customIndex_of(a,b) {

//   result = a.split("")
//   for (let i = 0; i < result.length; i++) {
// if (b===result[i]) {
// return i
  
// } 
//   }
// return -1
// }

// var userInput = prompt("Enter a word")
// var userInput2 = prompt("Enter a letter")
// console.log(customIndex_of(userInput,userInput2));


// =========Qno 06===========\\

function deleteVowels(sentence) {
  var result = ""
  for (let i = 0; i < sentence.length; i++) {
  var  check = sentence[i].toLowerCase()

    if (check!=='a'&&check!=='e'&&check!=='i'&&check!=='o'&&check!=='u') {
      result+= sentence[i]
    }
  }
  return result
}
var userInput = prompt("Enter a sentence max 25 words") 
console.log( deleteVowels(userInput));

// =========Qno 04===========\\
// =========Qno 04===========\\
// =========Qno 04===========\\
// =========Qno 04===========\\
// =========Qno 04===========\\
// =========Qno 04===========\\
