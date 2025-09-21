

// ============Qno1======================

// var num = prompt("  Enter a positive integer")||3.45214
// if(num>=0){
//     var round =Math.round(num)
//     var floor =Math.floor(num)
//     var ceil =Math.ceil(num)
// document.write("number: " + num + "<br>" + "round off value:" +round + "<br>"+ "floor value: "+ floor + "<br>"+ "ceil value :" + ceil)
// }else{
//     alert("Enter a positive number")
// }
// ===================Qno2===================
// var num = prompt("  Enter a negative floating number")||-2.6738 
// if(num<=0 && num.includes(".")){
//     var round =Math.round(num)
//     var floor =Math.floor(num)
//     var ceil =Math.ceil(num)
// document.write("number: " + num + "<br>" + "round off value:" +round + "<br>"+ "floor value: "+ floor + "<br>"+ "ceil value :" + ceil)
// }else{
//     alert("Enter a  negative floating number")
// }
 
// ============Qno3==================

// var num = prompt("Enter a number to find its absolute value")||-4
// if(num<0){
//     // var abs = num * -1
//     // var abs = Math.abs(num)


//     document.write("The absolute value of " + num + " is " + abs)
// }
   
// =================Qno4=================

// for (let i = 0; i < 6; i++) {
//     var dice = Math.ceil(Math.random()*6)
//   document.write("random dice value:  "+ dice +"<br>") ;
//  var diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

//   document.write("You rolled: " + diceFaces[dice - 1] + "<br>");

// }

// ===========Qno5============\\
 

    // var toss = Math.ceil(Math.random()*2)
    // var result;
    // if(toss===1){
    //     result = "Heads"
    //      document.write(toss+"<br>"+"Random coin value: "+ result  )
    // }else{
    //     result="Tails"
    //              document.write(toss+"<br>"+"Random coin value: "+ result  )

    // }

// ===========Qno6============\\

// var num = Math.ceil(Math.random()*100)
// document.write("The Random number Between 1 and 100 is: "+num);


// ===========Qno7============\\

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = prompt("Enter Your Weight in kilograms")
// result = parseFloat(weight)
// document.write("The Weight of user is: " + result + " kilograms")


// // ===========Qno8============\\

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var secretNum = Math.ceil(Math.random()*10)
// console.log(secretNum);

// userInput = +prompt("Enter a number between 1 and 10 ")
// if(userInput>=1&&userInput<=10){
// if(userInput===secretNum){
//     Swal.fire({
//   title: "Good job!",
//   text: "You guessed the number!",
//   icon: "success"
// });
// }else{
// Swal.fire({
//   icon: "error",
//   title: "Oops...",
//   text: "Wrong guess! The correct number was " + secretNum,
//   footer: '<a href="#">Why do I have this issue?</a>'
// });
// }
// }else{
//         Swal.fire({
//       icon: "warning",
//       title: "Invalid Input",
//       text: "Please enter a number between 1 and 10 only."
//     });
// }

// ==========password generation=============

// var keyboardChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
// var password = ""
// for (let i = 0; i < 10; i++) {
// var random = Math.floor(Math.random()*keyboardChars.length)  
// password+=keyboardChars[random]
// }
// console.log(password);
// var password = ""
// for (var i = 0; i <= 10; i++) {
//   var pass = Math.floor(Math.random()*10)
// password+=keyboardChars[pass]
// }
// console.log(password);

//========= date ==============

// var date = new Date()
// day = date.getDay()
// arr = ["sun","Mon","tue" , "wed" ,"thur" ,"fri","sat"]
// console.log(arr[day]);




//============== Age Calculator ========

// var userDob = prompt("Enter your date of birth: " ,"28-february-2007")
// var dob = new Date(userDob) 
// var now = dob.getTime();
// var today = new Date()
// var mili = today.getTime();
// var diff = mili - now 
// var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
// console.log("Your age is: " + age + " years");

// ========Ramzan Counter==========
// var ramzan = new Date("17-february-2026") 
// var now = ramzan.getMonth();
// var today = new Date();
// var mili = today.getMonth();
// var diff = mili - now 
// var month = Math.floor(diff / (1000 * 60 * 60 * 24 *30));
// console.log("Ramzan will come after : " + month + " month");




// var ramzan = new Date("17-february-2026")
// var now = new Date()
// var dif = ramzan.getTime()-now.getTime()
// var conversion = Math.round(dif/(1000*60*60*24))
// console.log(conversion);


// ================  Replace task==========
// var str = "Kashmir (/ˈkæʃmɪər/ KASH-meer or /kæʃˈmɪər/ kash-MEER) is the northernmost geographical region of the Indian subcontinent. Until the mid-19th century, the term Kashmir denoted only the Kashmir Valley between the Great Himalayas and the Pir Panjal Range. The term has since also come to encompass a larger area that formerly comprised the princely state of Jammu and Kashmir, and includes the Indian-administered territories of Jammu and Kashmir and Ladakh, the Pakistani-administered territories of Azad Kashmir and Gilgit-Baltistan, and the Chinese-administered territories of Aksai Chin and the Trans-Karakoram Tract.[1][2][3]"
// var update = str.replace(/Kashmir/g,"pakistan")
// console.log(update);

// var str = "Kashmir (/ˈkæʃmɪər/ KASH-meer or /kæʃˈmɪər/ kash-MEER) is the northernmost geographical region of the Indian subcontinent. Until the mid-19th century, the term Kashmir denoted only the Kashmir Valley between the Great Himalayas and the Pir Panjal Range. The term has since also come to encompass a larger area that formerly comprised the princely state of Jammu and Kashmir, and includes the Indian-administered territories of Jammu and Kashmir and Ladakh, the Pakistani-administered territories of Azad Kashmir and Gilgit-Baltistan, and the Chinese-administered territories of Aksai Chin and the Trans-Karakoram Tract.[1][2][3]"

// for (var i = 0; i < str.length; i++) {//1
//    if(str.slice(i,i+7)==="Kashmir"){
//     str =str.slice(0,i)+ "pakistan " + str .slice(i+7)
//    }
    
// }
// console.log(str);
// var fchr =str.indexOf("Kashmir")
// var result = str.slice(0,fchr)+"pakistan " + str.slice(fchr+7)