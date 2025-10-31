var postInput = document.getElementById("postBox")
var form = document.getElementById("form")
var postCard = document.getElementById("postCard")
var insertname = document.getElementById("insertname")
// var name = document.getElementById("names")
// var title = document.getElementById("title")
function hideForm() {
    form.style.display = "none"
    postInput.classList.remove("d-none")
    postInput.classList.add("postBox")
    
}
function post() {
    postCard.classList.remove("d-none")
var name = document.getElementById("userName").value;
var title = document.getElementById("title");

console.log("Name:", userName);
console.log("Title:", title);
    // title.innerHTML = title
    // insertname.innerHTML = name
}
