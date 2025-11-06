var cardImg;

function post() {
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var posts = document.getElementById("posts");
  console.log(title, description);

  if (title.trim() && description.trim()) {
    posts.innerHTML += `   <div   class="col-8">
        <div style="background: url('${cardImg}');" class="card text-bg-light postCard">
        
          <div class="card-img-overlay">
            <h5 class="card-title text-white">${title}</h5>
            <p class="card-text text-white">${description}</p>
            <p class="card-text text-white"><small>Last updated 3 mins ago</small></p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-success me-md-2" type="button">Edit</button>
              <button class="btn btn-danger" type="button">Delete</button>
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
