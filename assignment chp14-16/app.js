// ------Qno1--------literal notation--------

var studentNamesLiteral = []

// ------Qno2--------object notation---------

var studentNamesObject = new Array()

// ------Qno3-------string array---------

var studentNamesString = ['Amna' ,'ali','Sara']

// ------Qno4-------number array---------

var studentNamesNumber = [1, 2, 3]

// ------Qno5-------boolean array---------

var studentNamesBoolean = [true,false,true]

// ------Qno6-------mixed array---------

var studentNamesMixed = [true,2,"Dua"]

// ------Qno7------
// Qualification
// var Qualification =['SSC','HSC','BSC','BS','BCOM','MSC','M-phil','Phd']
// document.write("<h3>Qualifications:</h3>" + "<br>");
// for(var i = 0; i < Qualification.length; i++){
//     document.write((i+1)+ ") " + Qualification[i] + "<br>");
// }

// ------Qno8------
// var stdName=["Michael","John","Tony"]
// var stdScore=[320,230,480];
// var total=500
// var percentage1=(stdScore[0]/total)*100;
// var percentage2=(stdScore[1]/total)*100;        
// var percentage3=(stdScore[2]/total)*100;
// document.write("<h3>Score of " + stdName[0] + " is " + stdScore[0] + " and percentage: " + percentage1 + "%</h3>");
// document.write("<h3>Score of " + stdName[1] + " is " + stdScore[1] + " and percentage: " + percentage2 + "%</h3>");
// document.write("<h3>Score of " + stdName[2] + " is " + stdScore[2] + " and percentage: " + percentage3 + "%</h3>");

// ======Qno9=======
// a

// var color = ["Red", "Green", "Blue", "Yellow"];
// document.write(color + "<br>");

// var userColor = prompt("Enter a color to add at the beginning of the array:");
// color.unshift(userColor);
// document.write(color + "<br>");
// // b
// userColor = prompt("Enter a color to add at the end of the array:");
// color.push(userColor);
// document.write(color + "<br>");
// // c
// color.unshift("purple", "brown");
// document.write(color + "<br>");
// // d
// color.shift();
// document.write(color + "<br>");
// // e
// color.pop();
// document.write(color + "<br>");

// // f
// var index = prompt("Enter an index to add a color:");
// color.splice(index,0,"golden");
// document.write(color + "<br>");

// // g
// var index = prompt("Enter an index to delete a color:");
// var deletedColor = prompt("how many colors you want to delete from index" + index + "?" );
// color.splice(index, deletedColor);
// document.write(color+"<br>")

// =====Qno10=====

// var score = [320, 230, 480, 120]

// document.write("<h3>Scores of Students: " + score + "<br>" + "<h3>");

// score.sort(function(a,b){
//     return a-b;
// });

// document.write("<h3>Ordered Scores of Students: " + score + "<br>" + "</h3>");

// ----Qno11------

// var cities = ["Karachi","Lahore","Islamabad" ,"Quetta" , "Peshawar"]
// document.write( "<h1>cities list</h1>"+cities + "<br>")


// document.write("<h1>Selected cities</h1>" + cities.slice(2,4) + "<br>")

// -----Qno12-------
// var arr = ["This ", " is ", " my ", " cat"];
// var string = arr.join("");
// document.write("<h1>Array: </h1>" + arr + "<br>");
// document.write("<h1>String: </h1>" + string + "<br>");

// =====Qno13=======
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<h1>Devices: </h1>" + devices + "<br>");
// document.write("<h1>Out:</h1>" + devices[0]);
// document.write("<h1>Out:</h1>" + devices[1]);
// document.write("<h1>Out:</h1>" + devices[2]);
// document.write("<h1>Out:</h1>" + devices[3]);

// =====Qno14=======

// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<h1>Devices: </h1>" + devices + "<br>");
// document.write("<h1>Out:</h1>" + devices[3]);
// document.write("<h1>Out:</h1>" + devices[2]);
// document.write("<h1>Out:</h1>" + devices[1]);
// document.write("<h1>Out:</h1>" + devices[0]);

// =====Qno15=======

// var mobileManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<h1>Mobile Manufacturers:</h1>"+"<br>");
// document.write("<select>" + "<option>" + mobileManufacturers[0] + "</option>" + "<option>" + mobileManufacturers[1] + "</option>" + "<option>" + mobileManufacturers[2] + "</option>" + "<option>" + mobileManufacturers[3] + "</option>" + "<option>" + mobileManufacturers[4] + "</option>" + "<option>" + mobileManufacturers[5] + "</option>" + "</select>");