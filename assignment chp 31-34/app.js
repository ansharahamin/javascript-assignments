// ---------Qno01----------------\\
// var currentDate = new Date()
// console.log(currentDate);


// ---------Qno02----------------\\
//  var currentMonth = new Date()
//  months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];
// console.log(months[currentMonth.getMonth()]);


// ---------Qno03----------------\\

// var week = new Date()
// var weekDays = [
//     "Sun",
//     "Mon",
//     "Tue",
//     "Wed",
//     "Thu",
//     "Fri",
//     "Sat"
//   ];

// document.write(  "Today is "+weekDays[week.getDay()]);

// ---------Qno04----------------\\

// var week = new Date().getDay()

// if(week==0&&week==6){
//     document.write(  "It,s a fun Day");

// }else{
//     document.write("it's a working day")
// }

// ---------Qno05----------------\\

//  var currentMonth = new Date()

// console.log(currentMonth.getDate());

// if(currentMonth<=15){
//     document.write("First fifteen days of month")
// }else{
//     document.write("Last fifteen days of month")

// }

// ---------Qno06----------------\\

// var currentDate = new Date()
// var timeinMilisec = currentDate.getTime()
// console.log(timeinMilisec);

// var timeinMin = timeinMilisec/(1000*60)
// console.log(timeinMin);

// document.write("current Date = " + currentDate +"<br>" + "Elapsed Miliseconds since January 1 , 1970: " + timeinMilisec + "<br> "+" Elapsed Minutes since January 1 , 1970:"+ timeinMin )

// ---------Qno07----------------\\
// var currentDate = new Date()
//  var Hours = currentDate.getHours()
//  console.log(Hours);
//  if(Hours>=12){
//     document.write("It's PM")
//  }else{
//     document.write("It's AM")
//  }
 

// ---------Qno08----------------\\

// var date = new Date(2020,11,31)
// document.write("Later Date: "+date);

// ---------Qno09----------------\\
// var currentDate = new Date()
// var firstRamzandate = new Date(2015,5,18)
// var diff =  currentDate.getTime()-firstRamzandate.getTime() 
// var daysPast = Math.round( diff/(1000*60*60*24))
// alert(daysPast + " days have been past since first Ramzan 2015 ");
 
// ---------Qno10----------------\\
// var refdate = new Date(2015,11,5,22,50)
// var year2015 = new Date(2015,0,1)
// var dif = refdate.getTime() - year2015.getTime()
// var sec = Math.round(dif/1000)

// document.write("On reference date: " + refdate + "<br>");
// document.write(sec + " seconds had passed since beginning of 2015")


// ---------Qno11----------------\\

// var currentDate = new Date()
// hour = currentDate.getHours()
// document.write("Current Date & Time: " + currentDate + "<br>");
// currentDate.setHours(hour-1)
// document.write("it was : " + currentDate + "one hour ago");

// ---------Qno12----------------\\

// var currentDate = new Date()
// var year =  currentDate.getFullYear()
// var update = currentDate.setFullYear(year-100)
// console.log(currentDate);



// ---------Qno13----------------\\

//======= Age Calculator ========\\

// let userdob = new Date(prompt("Enter your DOB: "))
// let current = new Date()
// diff =current.getFullYear()- userdob.getFullYear()
// dob=userdob.getFullYear()
// document.write("Your Age is: "+diff+"<br>"+"Your Birth Year is: "+dob);

// ---------Qno14----------------\\

// var customerName = prompt("Enter Your Name: ")
// var month = new Date().getMonth()
// var  monthArray = [  "January", 
//   "February", 
//   "March", 
//   "April", 
//   "May", 
//   "June", 
//   "July", 
//   "August", 
//   "September", 
//   "October", 
//   "November", 
//   "December"]
// console.log(monthArray[month])
// var NoOfUnits = 410
// var chargesPerUnit = 16
// var netAmount = NoOfUnits*chargesPerUnit
// var lateCharges = 350
// var AfterDueDate = netAmount+lateCharges

// document.write("<h1>K-Electric Bill</h1>" + "<br>" + "Customer's Name:"  + customerName + "<br>" + "Month: "+ monthArray[month]+"<br>"+"No of Units: " + NoOfUnits+"<br>"+"Charges Per Unit: " + chargesPerUnit+"<br>"+"Net Amount Payable within Due Date: " + netAmount+"<br>"+"Late Payment Surcharge: " +lateCharges +"<br>"+"Gross Amount Payable (after Due Date): " +AfterDueDate )

