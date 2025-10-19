// =========  CW ===========//
// function run(e) {
//     e.src ='https://assets-v2.lottiefiles.com/a/49847160-3f53-11ef-8109-cbcc69139eb2/fZaPRJe15G.gif'
// }
// function change(e) {
//     e.src = 'https://assets-v2.lottiefiles.com/a/a43824be-1176-11ee-91d6-1fdbb5eed288/xvgUBESRAV.gif'
// }
// function zoom(e) {

//     e.style.transform = 'scale(1.5)'
//     e.style.transition = '1.5s'
//     e.src = ''
    
// }
// function zoomOut(e) {
//     e.style.transform = "scale(1)"
//     e.style.transition = "1.5s"

// }

// =========  Qno 01 ===========//

// function alrt(greet) {

//     var welcome = "hello "+greet
//    alert(welcome)
// }
// var user = prompt("Enter Your Name: ")

// =========  Qno 02 ===========//

// function ShowAlert() {

//     var thankyouMsg = "hello "+user+" Thank You for purchasing this!!"
//   sweetalert(thankyouMsg)
// }
// var user = prompt("Enter Your Name: ")
// function sweetalert(product) {

// Swal.fire({
//   title: "Good job!",
//   text: "You purchased it!",
//   icon: "success"
// });
// }


// =========  Qno 03 ===========//



// function deleteRow(btn){
// var row = btn.parentNode.parentNode
// function SweetAlert(confirmation) {
//     const swalWithBootstrapButtons = Swal.mixin({
//   customClass: {
//     confirmButton: "btn btn-success",
//     cancelButton: "btn btn-danger"
//   },
//   buttonsStyling: false
// });
// swalWithBootstrapButtons.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonText: "Yes, delete it!",
//   cancelButtonText: "No, cancel!",
//   reverseButtons: true
// }).then((result) => {
//   if (result.isConfirmed) {
//     row.remove()
//     swalWithBootstrapButtons.fire({
//       title: "Deleted!",
//       text: "This Student Record has been deleted.",
//       icon: "success"
//     });
//   } else if (
//     /* Read more about handling dismissals below */
//     result.dismiss === Swal.DismissReason.cancel
//   ) {
//     swalWithBootstrapButtons.fire({
//       title: "Cancelled",
//       text: "his Student Record is Safe :)",
//       icon: "error"
//     });
//   }
// });
// }
// SweetAlert()
// }


// =========  Qno 04 ===========//

// function on(e) {
//     e.src='https://www.w3schools.com/js/pic_bulbon.gif'
//     e.style.transform = "scale(1.5)"
//     e.style.transition = "1.5s"
//     e.style.padding = "5px"
// }
// function off(e) {
//    e.src = 'https://www.w3schools.com/js/pic_bulboff.gif' 
//     e.style.transition = "1.5s"
// e.style.transform = "scale(1)"
// }

// =========  Qno 05 ===========//

let count = 0
function increase() {
    count++
    document.getElementById("count").innerText = counter
}
function decrease() {
    count--
    document.getElementById("count").innerText = counter
}


// =========  Qno 01 ===========//
// =========  Qno 01 ===========//