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



var table = document.getElementById("table")
var form = document.getElementById("form")
currentRow = null
function edit(btn) {
currentRow = btn.parentNode.parentNode
  form.style.display ="block"

  document.getElementById("fname").value = currentRow.cells[1].innerHTML
  document.getElementById("lname").value = currentRow.cells[2].innerHTML
  document.getElementById("class").value = currentRow.cells[3].innerHTML

}

function save() {
  if (currentRow) {
      currentRow.cells[1].innerHTML = document.getElementById("fname").value
  currentRow.cells[2].innerHTML = document.getElementById("lname").value
  currentRow.cells[3].innerHTML = document.getElementById("class").value
  form.style.display="none"
  currentRow= null
  }else{
    alert("No Row is Selected")
  }

}
  function cancelEdit() {
    form.style.display = "none";
    currentRow = null;
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

// //variables
// var table = document.getElementById("table")
// var rindex;
//     var form = document.getElementById("form")
// function edit(btn) {
// var row = btn.parentNode.parentNode  //btn => td => tr
// console.log(row);

// // form display

// form.style.display="block"

// // insert Data in form from selected row

// rindex = row.rowIndex //selected row ko get kia ha //4
// console.log(rindex);
  
// // selected tr ki inner html ko input fields main addd kia
// document.getElementById("fname").value = row.cells[0].innerHTML
// document.getElementById("lname").value = row.cells[1].innerHTML
// document.getElementById("class").value = row.cells[2].innerHTML
  
    
// }
// // updated data ko table cell main enter karo
// function save() {

  
// table.rows[rindex].cells[1].innerHTML = document.getElementById("fname").value
// table.rows[rindex].cells[2].innerHTML = document.getElementById("lname").value
// table.rows[rindex].cells[3].innerHTML = document.getElementById("class").value
// console.log(table.rows[rindex].cells[0].innerHTML);


// }

// var shortText =" Lorem ipsum dolor sit, amet consectetur adipisicing elit."
// var para = document.getElementById("para");

// function readMore() {
//     if () {
    
// } else {
    
// }
// }


