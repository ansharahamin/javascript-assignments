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
    var name = document.getElementById("userName");
    var title = document.getElementById("title");
    var description = document.getElementById("Description");
    var username = name.value
    var usertitle = title.value
  var timeAgo = moment()
 var posttime = timeAgo.fromNow()
    var userdescription = description.value
    
    console.log("Name:", name);
    console.log("Title:", title);
    insertname.innerHTML = username;
    insertTitle.innerHTML = usertitle;
    insertDescription.innerHTML = userdescription;
    name.value = ""
    title.value = ""
    description.value = ""
    // title.innerHTML = title
    // insertname.innerHTML = name
    postCard.innerHTML+=`
           <div class="card-header d-flex">
        <!-- <img class="profile-photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"> -->
        <div id="insertname" class="name-time d-flex flex-column">
         
         <div id="localtime" class="time">${posttime}</div>
       </div>
     </div>
       <div style="background-image: url()" class="card-body">
         <blockquote class="blockquote mb-0">
            <p id="insertTitle"></p>
            <footer id="insertDescription" class="blockquote-footer"></footer>
          </blockquote>
       </div>
        <div class="card-footer d-flex justify-content-end">
          <button type="button" onclick="editpost(this)" class="ms-2 btn  editBtn">Edit</button>
          <button type="button" onclick="deletePost(this)" class="ms-2 btn btn-danger deleteBtn">Delete</button>
        </div>
    `
    
}

function deletePost(e) {
    postCard.remove()
}
function editpost(e) {
    var title = document.getElementById("title");
    var description = document.getElementById("Description");
    // insertTitle.innerHTML =''
    // insertDescription.innerHTML=''
    // postCard.remove()
    postCard.classList.add("d-none")
    title.value = insertTitle.innerHTML
    description.value = insertDescription.innerHTML



}

