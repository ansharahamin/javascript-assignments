// Qno1

// var userCity = prompt("Enter your city");
// if(userCity.toLowerCase() === "karachi") {
//     console.log("Welcome to the city of lights!!");

// }
// Qno2

// var gender = prompt("Enter your Gender");
// if (gender.toLowerCase() === "male"){
//     console.log("Good Morning Sir!!");
// }else if (gender.toLowerCase() === "female"){
//     console.log("Good Morning Ma'am!!");
// }else{
// console.log("Invalid input");}

// Qno3

// var color = prompt("Enter traffic light color")
// if(color.toLowerCase() === "red"){
//     console.log("must Stop!!");
// }else if (color.toLowerCase() === "yellow"){
//     console.log("Ready to  move!!");
// }else if (color.toLowerCase() === "green"){
//     console.log(("Move Now!!"));

// }else{
//     console.log("enter a valid color");

// }

// Qno4

// var  fuel = +prompt("Enter remaining fuel in litres");
// if (fuel < 0.25){

//     console.log("Please refill the fuel in your car");
// }

// Qno5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }



// if("car" < "cat"){
// alert("car is smaller than cat");
// }


// output

//  given condition for variable a is true

//  condition 2 is true

//  condition 4 is true

//  The cost equals

//  True

//  car is smaller than cat

// Qno6

// Qno6
// a) Take three subjects from user
// var subject1=prompt("Enter 1st subject:")
// var subject2=prompt("Enter 2nd subject:")
// var subject3=prompt("Enter 3rd subject:")

// b) Total marks per subject
// var totalMarksPerSubject = 100;

// c & d) Take obtained marks for each subject
// var obtained_marks1=+prompt("Enter Your Obtained marks of " + subject1 + ":")
// var obtained_marks2=+prompt("Enter Your Obtained marks of " + subject2 + ":" )
// var obtained_marks3=+prompt("Enter Your Obtained marks of " + subject3 + ":" )

// var firstSubPercent=(obtained_marks1/totalMarksPerSubject)*100
// var secondSubPercent=(obtained_marks2/totalMarksPerSubject)*100
// var thirdSubPercent=(obtained_marks3/totalMarksPerSubject)*100


// e) Calculate total and percentage
// var total_obtained=obtained_marks1+obtained_marks2+obtained_marks3
// var total_marks= totalMarksPerSubject *3
// var percentage= (total_obtained/total_marks)*100

// var grade=""
// var remarks=""
// if(percentage>=80&&percentage<=100){
//     grade="A-One"
//     remarks="Excellent"
// }else if(percentage>=70 &&percentage<=79){
//     grade="A"
//     remarks="Good"
// }else if(percentage>=60&&percentage<=69){
//     grade="B"
//     remarks="You Need to Improve"
// }else if(percentage>=0&&percentage<=59){
//     grade="Fail"
//     remarks="Sorry"
// }else {
//     grade = "Invalid marks";
//     alert("Percentage entered is invalid. Please check the input.");
// }
// user table

// document.write("<table border = '1' cellpadding= '10'>")
// document.write("<tr><th>Subjects</th>,<th>Total marks</th>,<th>obtained marks</th>,<th>Percentage</th>, ")
// document.write("<tr><td>" + subject1+ "</td>"+"<td>"+ totalMarksPerSubject +"</td>"+"<td>"+ obtained_marks1 + "</td>"+ "<td>"+firstSubPercent.toFixed(2)+"%</td></tr>")
// document.write("<tr><td>" + subject2+ "</td>"+"<td>"+ totalMarksPerSubject +"</td>"+"<td>"+ obtained_marks2 + "</td>"+ "<td>"+secondSubPercent.toFixed(2)+"%</td></tr>")
// document.write("<tr><td>" + subject3+ "</td>"+"<td>"+ totalMarksPerSubject +"</td>"+"<td>"+ obtained_marks3 + "</td>"+ "<td>"+thirdSubPercent.toFixed(2)+"%</td></tr>")
// document.write("<tr><th colspan='1'>GrandTotal</th><th>" + total_marks + "</th><th colspan='1'>Total Obtained</th><th colspan='1'>" + total_obtained + "</th></tr>");
// document.write("<tr><th colspan='2'>Percentage</th><th colspan='3'>" + percentage.toFixed(2) + "%</th></tr>");
// document.write("<tr><th colspan='2'>grade</th><th colspan='3'>" +grade + "</th></tr>");
// document.write("<tr><th colspan='2'>remarks</th><th colspan='3'>" +remarks + "</th></tr>");
// document.write("</table>");

// document.write("<h1>Marks Sheet</h1>" + "<br>");
// document.write("Marks Obtained :" +total_obtained + "<br>");
// document.write("percentage :" +percentage.toFixed(2) + "%<br>");
// document.write("grade :" +grade + "<br>");
// document.write("Remarks :" +remarks + "<br>");

// Qno7

// secretNumber = 7;
// userGuess = +prompt("Guess the secret number (between 1 and 10):");
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct Answer");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     alert("Close enough to the correct answer, Better Luck Next Time!")
// } else {
//     alert("Wrong guess. Try again!")
// }

// Qno8

// var num=+prompt("Enter a number to check if it is divisible by 3:");
//     if(num%3===0){
//         alert(num + " is divisible by 3");
//     }else{
// alert(num + " is not divisible by 3");
//     }
   
// Qno9
// var num =+prompt("Enter a Number to Check if it is even or odd:");
// if (num%2===0){
//     alert(num + " is even")
// }else if (num%2!==0){
//     alert(num + " is odd")
// }else{
//     alert("Enter a valid number")
// }

// Qno10
temp=+prompt("Enter temperature of your area")
if(temp>40){
    alert("It is too hot outside")
}else if(temp>=30 && temp<=40){
    alert("The Weather today is Normal")
}else if(temp>=20 && temp<=30){
    alert("Today's Weather is Cool")
}else if(temp>=10 && temp<=20){
    alert("It's too cold outside")
}else{
    alert("Invalid temperature")
}