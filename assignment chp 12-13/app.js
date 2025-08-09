// ----------chp12-----------//
// Qno1

// Character Type Checker

// var ascii = prompt("Enter a character:");
// var code = ascii.charCodeAt(0);
// if (code >= 65 && code <= 90) {
//     console.log("UpperCase Letter");
    
// }else if (code >=97 && code <= 122){
//     console.log("LowerCase Letter");
// }else if(code >=48 && code <= 57){
//     console.log("Number");
// }else{
// console.log("Enter a valid character");
// }

// Qno2
// program to check the greater number
// var num1 =+prompt("Enter first number:");
// var num2 =+prompt("Enter second number:");
// if(num1 > num2){
//     console.log(num1 + " is greater than " + num2);
// }else if(num1<num2){
//     console.log(num2 + " is greater than " + num1); 
// }else if(num1 == num2){
//     console.log("Both numbers are equal");
// }else{
//     console.log("Enter valid numbers");
// }


// ------------Qno3------------
// Number Checker

// var num = +prompt("Enter a number:");
// if (num ==0){
//     console.log("Zero");
// }else if (num>0){
//     console.log("positive number");
    
// }else if(num<0){
//     console.log("negative number");

// }else{
//     console.log("Enter a valid number");
    
// }

// -------Qno4-------

// vowel or consonant

// var character=prompt("Enter a character (i.e. string of length 1 ) ").toLowerCase();

// if(character.length !== 1){
//     console.log("Please enter a valid character.");
// }else if(character === 'a' || character === 'e'|| character === "i" || character === "o" || character === "u"){
//     console.log( character + " is a vowel");
// }else{
//     console.log(character + " is a consonant");
// }

//---------- Qno5----------
// var password="pakistan"
// userinput=prompt("Enter password:");
//  if(!userinput){
//     console.log("please enter a password");
//  }
// else if (password===userinput){
// console.log("Correct! The password you entered matches the original password.");
// }
    
// else {
//     console.log("incorrect password");
// }

//------ Qno6--------
// code correction

// var greeting;
// var hour = +prompt("Enter the hour (0-23):");
// if(!hour){
//     console.log("please enter a valid hour");
// }
// else if(hour < 18 && hour >= 0 ) {

// greeting = "Good day";
// console.log(greeting);

// }else if(hour>=18 && hour<=23){
//      greeting = "Good evening";
//      console.log(greeting);
// }else{
//     console.log("invalid hour");
    
//}

//---------- Qno7--------
// time checker

// var userTime=+prompt("enter the time in 24 hours clock format like: 1900 = 7pm.")
// var hour = Math.floor(userTime / 100);
// var minute = userTime % 100;
// var period = "AM"
// if(hour>=12){
//     period="PM"
// }
// if(hour>12){
//     hour-=12
// }
// if(hour===0){
//     hour=12
// }
// // Formatted Minutes

// var FormattedMinutes;
// if(minute<10){
// FormattedMinutes="0"+minute
// }else{
// FormattedMinutes=minute
// }

// greetings according to time

// if(userTime >=0 && userTime < 1200){
//     console.log("good morning");
    
// }else if(userTime >=1200 && userTime < 1700){
//     console.log("good afternoon");

// }else if(userTime >=1700 && userTime < 2100){
//     console.log("good evening");
// }else if(userTime >=2100 && userTime <= 2350){
//     console.log("good night");

// }else{
//     console.log("invalid time");
    
// }

// // converted time
// console.log("the time is " + hour + ":" + FormittedMinutes + " " + period);

