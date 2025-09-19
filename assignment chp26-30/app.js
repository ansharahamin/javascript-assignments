// ================  Replace task==========
// var str = "Kashmir (/ˈkæʃmɪər/ KASH-meer or /kæʃˈmɪər/ kash-MEER) is the northernmost geographical region of the Indian subcontinent. Until the mid-19th century, the term Kashmir denoted only the Kashmir Valley between the Great Himalayas and the Pir Panjal Range. The term has since also come to encompass a larger area that formerly comprised the princely state of Jammu and Kashmir, and includes the Indian-administered territories of Jammu and Kashmir and Ladakh, the Pakistani-administered territories of Azad Kashmir and Gilgit-Baltistan, and the Chinese-administered territories of Aksai Chin and the Trans-Karakoram Tract.[1][2][3]"
// var update = str.replace(/Kashmir/g,"pakistan")
// console.log(update);

var str = "Kashmir (/ˈkæʃmɪər/ KASH-meer or /kæʃˈmɪər/ kash-MEER) is the northernmost geographical region of the Indian subcontinent. Until the mid-19th century, the term Kashmir denoted only the Kashmir Valley between the Great Himalayas and the Pir Panjal Range. The term has since also come to encompass a larger area that formerly comprised the princely state of Jammu and Kashmir, and includes the Indian-administered territories of Jammu and Kashmir and Ladakh, the Pakistani-administered territories of Azad Kashmir and Gilgit-Baltistan, and the Chinese-administered territories of Aksai Chin and the Trans-Karakoram Tract.[1][2][3]"

// for (var i = 0; i < str.length; i++) {//1
//    if(str.slice(i,i+7)==="Kashmir"){
//     str =str.slice(0,i)+ "pakistan " + str .slice(i+7)
//    }
    
// }
// console.log(str);
// var fchr =str.indexOf("Kashmir")
// var result = str.slice(0,fchr)+"pakistan " + str.slice(fchr+7)

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

// ===========Qno5============\\
 

//     var toss = Math.ceil(Math.random()*2)
//     if(toss===1){
         
//     }
//    document.write(toss);

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
