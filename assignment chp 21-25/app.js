// Qno 1 
// string concatenation method

// var fName = prompt("Enter your first name")
// var LName = prompt("Enter your last name")
// var fullName = fName+" " +LName
// alert("Welcome " + fullName)

// join method and titlecase name

var fName = prompt("Enter your first name")//ali
var LName = prompt("Enter your last name")//khan
var titlecase = fName.slice(0,1).toUpperCase()//A
var titlecase2 = fName.slice(1).toLowerCase()//li
var titlecase3 = LName.slice(0,1).toUpperCase()//K
var titlecase4 = LName.slice(1).toLowerCase()//han
result1=titlecase+titlecase2
result2=titlecase3+titlecase4
var fullName = [result1,result2].join(" ")
alert("Hello " + fullName)