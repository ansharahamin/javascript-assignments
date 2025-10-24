// Qno1

function submitt(){
    
var FName = document.getElementById("fname").value
var LName = document.getElementById("lname").value
var email = document.getElementById("email").value
var password = document.getElementById("password").value
    console.log(FName,LName,email,password);
    var para = document.getElementById("para").innerHTML = "First Name = " + FName + "</br>" + "Last Name = " + LName + "</br>"+"email = " + email + "</br>"+"password = " + password + "</br>"
    
}

function deleteRow(btn){
var row = btn.parentNode.parentNode
function SweetAlert(confirmation) {
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
    row.remove()
    swalWithBootstrapButtons.fire({
      title: "Deleted!",
      text: "This Student Record has been deleted.",
      icon: "success"
    });
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "his Student Record is Safe :)",
      icon: "error"
    });
  }
});
}
SweetAlert()
}

function edit(e) {
    var edit = e.parentNode.parentNode
    
}

// var shortText =" Lorem ipsum dolor sit, amet consectetur adipisicing elit."
// var para = document.getElementById("para");

// function readMore() {
//     if () {
    
// } else {
    
// }
// }


