// chp17-20

// ---Qno 1---//

// var arrofarrays = [
//     []
// ]
// ---Qno 2---//

// var arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// for(var i=0;i<arr.length;i++){
//     document.write(arr[i].join(" ") + "<br>");
// }

 // ---Qno 3---//

// for(var i=1; i<=10;i++){
//     document.write(i + "<br>");
// }

// ----Qno 4--- //

// Multiplication table of any number
// var table = +prompt("Enter a number to show its multiplication table")||5;
// var length = +prompt("Enter length of multiplication table")||10
// document.write("<h1>Table of " + table + "</h1>");

// for(var i=0; i<= length; i++){
//     document.write(table + "x" + i + "=" + (table*i) + "<br>" );
// }

// // ----Qno 5--- //

// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// for (var i = 0; i<fruits.length; i++){
//     document.write(fruits[i] + "<br>");
// }
// for (var i = 0; i<fruits.length; i++){
//         document.write("Element at index " + i + " is " + fruits[i] + "<br>");

// }

// =====Qno 6=== //

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write( "<h1> Counting :</h1>")

// for (i = 1; i<=15; i++){
//     document.write(i+",")
// }

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write( "<h1> Reverse Counting :</h1>")

// for (i = 10; i>=1; i--){
//     document.write(i+",")
// }

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write( "<h1> Even :</h1>")
// for (i = 0; i<=20; i+=2){
//     document.write(i+",")
// }

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write( "<h1> Odd :</h1>")
// for (i = 1; i<=19; i+=2){
//     document.write(i+",")
// }

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write( "<h1> Series :</h1>")
// for (i = 2; i<=20; i+=2){
//     document.write(i+"k,")
// }

// ===Qno 7====

// 7. You have an array A = ["cake", "apple pie", "cookie", "chips", "patties"]Write a program to enable "search by user input" in an array.After searching, prompt the user whether the given item is found in the list or not. Example:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// userinput=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

// found = false;
// for (i=0;i<A.length;i++){
//     if(userinput===A[i]){
//         console.log( userinput + " is available in our bakery at index " + i);
//         found=true;
//         break;
//     }
    
// }
// if(!found){
//     console.log( userinput + " is not available in our bakery");
// }



// ====Qno 8====

// 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
// var A = [24, 53, 78, 91, 12];
// largest=A[0]
// for (i=0;i<A.length;i++){
//     if(A[i]>=largest){
//         largest=A[i];
//     }

// }
// document.write("Array items: " + A + "<br>");
// document.write("The largest number is " + largest + "<br>");

// ===Qno 9===

// 9. Write a program to identify the smallest number in the given array.A = [24, 53, 78, 91, 12]
// var A = [24, 53, 78, 91, 12];
// smallest=A[0]
// for (i=0;i<A.length;i++){
//     if(A[i] <= smallest){
//         smallest=A[i];
//     }
// }
// document.write("Array items: " + A + "<br>");
// document.write("The smallest number is " + smallest + "<br>");


// // ====Qno10====
// 10. Write a program to print multiples of 5 ranging 1 to 100

// for (i = 5; i<=100; i+=5){
//     document.write(i+",")
// }

// ====The End====