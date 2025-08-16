// -------------------chp#6---------------------
// ---Qno1---
// var a = 10
// document.write("<h1> Result : </h1>" + "<br>" + "the value of num is : " + a + "<br>" + "---------------------------- <br>")

// document.write("the value of ++a is : " + ++a + "<br>")
// document.write(" now the value of a is : " + a + "<br><br>")

// document.write("the value of a++ is : " + a++ + "<br>")
// document.write("now, the value of a is : " + a + "<br> <br>")
// document.write("the value of --a is : " + --a + "<br>")
// document.write(" now the value of a is : " + a + "<br><br>")
// document.write("the value of a-- is : " + a-- + "<br>")
// document.write(" now the value of a is : " + a + "<br><br>")

// ----Qno2----

var a= 2
var b=1
var result = --a - --b + ++b + b--;
// document.write("a="+ a +"<br>"+ "b="+ b +"<br>"+ "result ="+ result);
--a; // pre decrement so a becomes 1
--b; // pre decrement so b becomes 0

--a - --b;//1-0 is 1
++b; //pre increment so bbecomes 1
b--; //post decrement so b will become 0 in next step but here the value remains 1 as it is post decrement 
++b + b--; // 1+1 is 2
--a - --b + ++b + b--; //1+2 =>3
// so the answer is 3


// Qno3
// var userName= prompt("Enter a user name","Student")
// document.write("<h1>" + "Welcome!!! "  + userName+ "</h1>")

// ---Qno4--
// not given 


// Qno5
// var num= +prompt("Enter a number: ","5")
// ans=num*1
// document.write("<h1> Table of "+ num+ "</h1>")

// document.write(num + "x" + 1 + "=" + ans + "<br />")
// ans=num*2
// document.write(num + "x" + 2 + "=" + ans + "<br />")
// ans=num*3
// document.write(num + "x" + 3 + "=" + ans + "<br />")
// ans=num*4
// document.write(num + "x" + 4 + "=" + ans + "<br />")
// ans=num*5
// document.write(num + "x" + 5 + "=" + ans + "<br />")
// ans=num*6
// document.write(num + "x" + 6 + "=" + ans + "<br />")
// ans=num*7
// document.write(num + "x" + 7 + "=" + ans + "<br />")
// ans=num*8
// document.write(num + "x" + 8 + "=" + ans + "<br />")
// ans=num*9
// document.write(num + "x" + 9 + "=" + ans + "<br />")
// ans=num*10
// document.write(num + "x" + 10 + "=" + ans + "<br />")

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

// user table

// document.write("<table border = '1' cellpadding= '10'>")
// document.write("<tr><th>Subjects</th>,<th>Total marks</th>,<th>obtained marks</th>,<th>Percentage</th>, ")
// document.write("<tr><td>" + subject1+ "</td>"+"<td>"+ totalMarksPerSubject +"</td>"+"<td>"+ obtained_marks1 + "</td>"+ "<td>"+firstSubPercent.toFixed(2)+"%</td></tr>")
// document.write("<tr><td>" + subject2+ "</td>"+"<td>"+ totalMarksPerSubject +"</td>"+"<td>"+ obtained_marks2 + "</td>"+ "<td>"+secondSubPercent.toFixed(2)+"%</td></tr>")
// document.write("<tr><td>" + subject3+ "</td>"+"<td>"+ totalMarksPerSubject +"</td>"+"<td>"+ obtained_marks3 + "</td>"+ "<td>"+thirdSubPercent.toFixed(2)+"%</td></tr>")
// document.write("<tr><th colspan='1'>GrandTotal</th><th>" + total_marks + "</th><th colspan='1'>Total Obtained</th><th colspan='1'>" + total_obtained + "</th></tr>");
// document.write("<tr><th colspan='2'>Percentage</th><th colspan='3'>" + percentage.toFixed(2) + "%</th></tr>");
// document.write("</table>");