// Qno1

// function submitt(){
    
// var FName = document.getElementById("fname").value
// var LName = document.getElementById("lname").value
// var email = document.getElementById("email").value
// var password = document.getElementById("password").value
//     console.log(FName,LName,email,password);
//     var para = document.getElementById("para").innerHTML = "First Name = " + FName + "</br>" + "Last Name = " + LName + "</br>"+"email = " + email + "</br>"+"password = " + password + "</br>"
    
// }
// Qno2
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
    var currentRow = e.parentNode.parentNode//tr
    var cells = currentRow.getElementsByTagName("td")//tds

    var form = document.getElementById("form")
    form.style.display = "block"

    document.getElementById("fname").value = cells[0].innerText //neha = ali
    document.getElementById("lname").value = cells[1].innerText //asif = amin
    document.getElementById("class").value =  cells[2].innerText//9 = 10
    

   
    
}

function save() {

// save  new values in variables
if (currentRow) {
    var FName = document.getElementById("fname").value
  var LName = document.getElementById("lname").value
  var Class = document.getElementById("class").value
       cells[0].innerText = name;
    cells[1].innerText = email;
    cells[2].innerText = city;
    document.getElementById("form").style.display="none"  
}


// Update the row

var cells = document.getElementsByTagName("td")

cell

}

// var shortText =" Lorem ipsum dolor sit, amet consectetur adipisicing elit."
// var para = document.getElementById("para");

// function readMore() {
//     if () {
    
// } else {
    
// }
// }


