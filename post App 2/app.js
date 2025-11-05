function post() {
  var title = document.getElementById("title").value
  var description = document.getElementById("description").value
  var posts = document.getElementById("posts")
  console.log(title, description);
  var imgs = ["/images/abstract-pui50-light-background-wallpaper-colorful-gradient-blurry-soft-smooth-motion-bright-shine_792836-133030.jpg", "./images/artificial-intelligence-circuit-electric-line-600nw-2495924357.jpg", "./images/gradient-background-blue-cyan-2-vector.jpg", "/images/pexels-codioful-6985001.jpg"]
   var randomImg = imgs[Math.floor(Math.random() * imgs.length)];
  if (title.trim() && description.trim()) {
    posts.innerHTML += `   <div class="col-8">
        <div class="card text-bg-light postCard">
          <img height="200px"
            src="${randomImg}"
            class="card-img" alt="...">
          <div class="card-img-overlay">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <p class="card-text"><small>Last updated 3 mins ago</small></p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-success me-md-2" type="button">Edit</button>
              <button class="btn btn-danger" type="button">Delete</button>
            </div>
          </div>
        </div>
      </div>`
    document.getElementById("title").value = ""
    document.getElementById("description").value = ""
  } else {
    Swal.fire({
      icon: "error",
      title: "Empty Post is not Allowed",
      text: "Enter the title and description"
    });
  }

}
