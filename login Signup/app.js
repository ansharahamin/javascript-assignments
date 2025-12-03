function register(event) {
    event.preventDefault()
    var userName = document.getElementById("userName").value
    var userEmail = document.getElementById("userEmail").value
    var userNum = document.getElementById("userNum").value
    var userpassword = document.getElementById("userpassword").value
    var passwordConfirmation = document.getElementById("passwordConfirmation").value

    var data ={
       userName,
       userEmail,
       userNum,
       userpassword,
       passwordConfirmation

    }
if (!userName) {
    alert("please enter your name")
} else if(userpassword !== passwordConfirmation){
    alert("Invalid password")
}else{
localStorage.setItem("data", JSON.stringify(data));

alert("registered Succesfully")
window.location.href="/dashboard.html"
}


}
function renderData(){
    
    var getData = JSON.parse(localStorage.getItem("data"))
    // console.log(getData);
   var displayData = document.getElementById("displayData")
   displayData.innerHTML=`
      <li> Name: ${getData.userName}</li>
      <li> Email: ${getData.userEmail}</li>
      <li> Phone: ${getData.userNum}</li>
   `
}
renderData()

function login(event) {
    event.preventDefault()
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    console.log(email,password);
    var getData =  JSON.parse(localStorage.getItem("data"))
    console.log(getData.userEmail);
    if(getData.userEmail!==email){
        alert("enter a valid email")
    }else if(getData.userpassword!==password){
        alert("invalid password")
    }else{
        alert("login Successfully")
        window.location.href="/dashboard.html"
    }
}
function logout() {
    window.location.href = "/"
}