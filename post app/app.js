var postInput = document.getElementById("postBox")
var form = document.getElementById("form")
var postCard = document.getElementById("postCard")
var insertname = document.getElementById("insertname")
var name = document.getElementById("name").value
function hideForm() {
    form.style.display = "none"
    postInput.classList.remove("d-none")
    postInput.classList.add("postBox")
    
}
function post() {
    postCard.classList.remove("d-none")

    insertname.innerHTML = name
}
