

var cardImg;
var postTime = new Date()
var timeOnly = postTime.toLocaleTimeString()
function DisplayPost() {
  if (document.getElementById("userName").value.trim() === "" && document.getElementById("floatingInput").value.trim() === "" && document.getElementById("floatingPassword").value.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "User Name is required",
      text: "Please enter your user name to proceed",
    });
    return

  } else {
    var form = document.getElementById("form")
    var userName = document.getElementById("userName").value
    var email = document.getElementById("floatingInput").value
    var password = document.getElementById("floatingPassword").value
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;

    var data = {
      userName,
      email,
      password,
      title,
      description
    }
    var jsonData = JSON.stringify(data);
    console.log(jsonData);
    localStorage.setItem("data", jsonData);

    jsonData = localStorage.getItem("data");
    var parsedData = JSON.parse(jsonData);
    console.log(parsedData);
    if (parsedData.userName !== userName && parsedData.email !== email && parsedData.password !== password) {
      Swal.fire({
        icon: "error",
        title: "invalid Credentials",
        text: "Please enter valid credentials to proceed",
      });
    } else {
      window.location.href = "/dashboard.html"
    }
    var postBox = document.getElementById("postBox")
    form.classList.add("d-none")
    postBox.classList.remove("d-none")
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Account Created SuccessFully!!",
      showConfirmButton: false,
      timer: 1500
    });
  }

}

function deletePost() {
  console.log(event.target.parentNode.parentNode.parentNode);
  var deletePost = event.target.parentNode.parentNode.parentNode.parentNode
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      deletePost.remove()

      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your post has been deleted.",
        icon: "success"

      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your post is safe :)",
        icon: "error"
      });
    }
  });
}

function editPost() {
  var deletePost = event.target.parentNode.parentNode.parentNode.parentNode

  var editPost = event.target.parentNode.parentNode.childNodes[3].innerHTML
  var description = event.target.parentNode.parentNode.childNodes[5].innerHTML
  console.log(event.target.parentNode.parentNode.childNodes[1].childNodes[0]);
  document.getElementById("title").value = editPost
  document.getElementById("description").value = description

  deletePost.remove()
}

function post() {
  var userName = document.getElementById("userName").value
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var posts = document.getElementById("posts");
  console.log(title, description);
  postobj = {
    userName,
    title,
    description
  }
  var postjson = JSON.stringify(postobj);
  console.log(postjson);
  localStorage.setItem("postobj", postjson);
  postget = localStorage.getItem("postobj");

  if (title.trim() && description.trim()) {
    posts.innerHTML += `   <div   class="col-lg-8 col-md-12 col-sm-12">
        <div style="background: url('${cardImg}');" class="card text-bg-light postCard">
        
          <div class="card-img-overlay">
                      <h3 class="card-title text-white my-4">${userName}</h5>
            <h5 class="card-title text-white">${title}</h5>
            <p class="card-text text-white">${description}</p>
            <p class="card-text text-white"><small>${timeOnly}</small></p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button onclick = " editPost()" class="btn btn-success me-md-2" type="button">Edit</button>
              <button  onclick = "deletePost()" class="btn btn-danger" type="button">Delete</button>
            </div>
          </div>
        </div>
      </div>`;
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  } else {
    Swal.fire({
      icon: "error",
      title: "Empty Post is not Allowed",
      text: "Enter the title and description",
    });
  }
}
function clickAbleImg(src) {
  var bgImg = document.getElementsByClassName("bgImg");
  console.log(bgImg);

  for (let i = 0; i < bgImg.length; i++) {
    bgImg[i].classList.remove("selectedImg");
  }
  console.log(event.target);
  event.target.classList.add("selectedImg");
  cardImg = event.target.src
}
