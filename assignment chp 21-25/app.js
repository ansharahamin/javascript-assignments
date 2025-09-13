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