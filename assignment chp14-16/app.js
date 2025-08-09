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
var stdName=["Michael","John","Tony"]
var stdScore=[320,230,480];
var total=500
var percentage1=(stdScore[0]/total)*100;
var percentage2=(stdScore[1]/total)*100;        
var percentage3=(stdScore[2]/total)*100;
document.write("<h3>Score of " + stdName[0] + " is " + stdScore[0] + " and percentage: " + percentage1 + "%</h3>");
document.write("<h3>Score of " + stdName[1] + " is " + stdScore[1] + " and percentage: " + percentage2 + "%</h3>");
document.write("<h3>Score of " + stdName[2] + " is " + stdScore[2] + " and percentage: " + percentage3 + "%</h3>");