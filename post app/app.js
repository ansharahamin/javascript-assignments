var postInput = document.getElementById("postBox")
var form = document.getElementById("form")
var postCard = document.getElementById("postCard")
var insertname = document.getElementById("insertname")
var insertTitle = document.getElementById("insertTitle");
var insertDescription = document.getElementById("insertDescription")

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
    var title = document.getElementById("title").value;
    var description = document.getElementById("Description").value;

    console.log("Name:", name);
    console.log("Title:", title);
    insertname.innerHTML = name;
    insertTitle.innerHTML = title;
    insertDescription.innerHTML = description;
    // title.innerHTML = title
    // insertname.innerHTML = name
}
