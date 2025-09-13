// Qno 1


// string concatenation method

// var fName = prompt("Enter your first name")
// var LName = prompt("Enter your last name")
// var fullName = fName+" " +LName
// alert("Welcome " + fullName)

// join method and titlecase name

// var fName = prompt("Enter your first name")//ali
// var LName = prompt("Enter your last name")//khan
// var titlecase = fName.slice(0,1).toUpperCase()//A
// var titlecase2 = fName.slice(1).toLowerCase()//li
// var titlecase3 = LName.slice(0,1).toUpperCase()//K
// var titlecase4 = LName.slice(1).toLowerCase()//han
// result1=titlecase+titlecase2
// result2=titlecase3+titlecase4
// var fullName = [result1,result2].join(" ")
// alert("Hello " + fullName)

// another method shorter version

// var fName = prompt("Enter your first name")//ali
// var LName = prompt("Enter your last name")//khan
// var fullName;
// fullName = fName.charAt(0).toUpperCase()+fName.slice(1).toLowerCase()+" "+ 
// LName.charAt(0).toUpperCase()+LName.slice(1).toLowerCase()
// alert("Hii!! " + fullName)

// Qno2

// var fvtMob = prompt("What is your favourite mobile phone model?",)
// var length = fvtMob.length
// document.write("My favourite mobile phone is " + fvtMob+"</br>" + "  length of string is: " + length )
    // ---------QNo3========
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// var nationality = "Pakistani"
// index= nationality.indexOf("n")
// document.write("string: " + nationality+ "<br>" + "indexOf 'n' : " + index)

// Qno4
// var words = "Hello World"
// index= words.lastIndexOf("l")
// document.write("string: " + words+ "<br>" + "indexOf 'n' : " + index)

// Qno 5
// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var nationality = "Pakistani"
// chr= nationality.charAt(3)
// document.write("string: " + nationality+ "<br>" + "charactar at 3rd index is: " + chr)

    // ---------QNo6========

// string concatenation method using concat()

// var fName = prompt("Enter your first name")
// var LName = prompt("Enter your last name")
// var fullName = fName.concat(" "+ LName)
// alert("Welcome " + fullName)



// concat method and titlecase name

// var fName = prompt("Enter your first name")//ali
// var LName = prompt("Enter your last name")//khan
// var titlecase = fName.slice(0,1).toUpperCase()//A
// var titlecase2 = fName.slice(1).toLowerCase()//li
// var titlecase3 = LName.slice(0,1).toUpperCase()//K
// var titlecase4 = LName.slice(1).toLowerCase()//han
// fullName = fName.concat(" "+LName)
// alert("Hello " + fullName)

// =========QNo7========//

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var word = "Hyderabad"
//  result = word.replace("Hyder","Islam")
// console.log(word);
// console.log(result);

// Qno8

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var change = message.replaceAll("and","&")
// console.log(change);

// Qno09
// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// var str = "472"
// var num = Number(str)
// document.write("value: " + str +"<br>" + "Type :" + typeof num +"<br>" )
// console.log(typeof num);

// var str2 = 472
// var num2 = String(str2)
// document.write("value: " + str2 +"<br>" + "Type :" + typeof num2 )
// console.log(typeof num2);


// QNo10

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
var fruit = prompt("ENter your favourite fruit")
var upper = fruit.upper()
console.log(upper);
