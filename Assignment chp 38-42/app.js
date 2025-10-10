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
function calcArea(a,b,c) {
    function calcSemiParams() {
    return (a+b +c )/2
 }
let S = calcSemiParams()
var Area =Math.sqrt((S*(S-a)*(S-b)*(S-c))) 
return Area
}
userSideA = +prompt("Enter first side")
userSideB = +prompt("Enter Second side")
userSideC = +prompt("Enter third side")
console.log(calcArea(userSideA,userSideB,userSideC));