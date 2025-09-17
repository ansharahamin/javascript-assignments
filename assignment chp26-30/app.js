
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

// var num = prompt("  Enter a positive integer")||3.45214
// if(num>=0){
//     var round =Math.round(num)
//     var floor =Math.floor(num)
//     var ceil =Math.ceil(num)
// document.write("number: " + num + "<br>" + "round off value:" +round + "<br>"+ "floor value: "+ floor + "<br>"+ "ceil value :" + ceil)
// }else{
//     alert("Enter a positive number")
// }

// var num = prompt("  Enter a negative floating number")||-2.6738 
// if(num<=0 && num.includes(".")){
//     var round =Math.round(num)
//     var floor =Math.floor(num)
//     var ceil =Math.ceil(num)
// document.write("number: " + num + "<br>" + "round off value:" +round + "<br>"+ "floor value: "+ floor + "<br>"+ "ceil value :" + ceil)
// }else{
//     alert("Enter a  negative floating number")
// }

// var num = prompt("Enter a number to find its absolute value")||-4
// if(num<0){
//     // var abs = num * -1
//     // var abs = Math.abs(num)


//     document.write("The absolute value of " + num + " is " + abs)
// }
 
for (let i = 0; i < 6; i++) {
    var dice = Math.ceil(Math.random()*6)
  document.write("random dice value:  "+ dice +"<br>") ;
//  var diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

//   document.write("You rolled: " + diceFaces[dice - 1] + "<br>");

}


