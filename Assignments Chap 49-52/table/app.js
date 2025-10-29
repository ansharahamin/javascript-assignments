
var table = document.getElementById("table")
var form = document.getElementById("form")
currentRow = null
function edit(btn) {
    currentRow = btn.parentNode.parentNode
    form.style.display = "block"

    document.getElementById("fname").value = currentRow.cells[1].innerHTML
    document.getElementById("lname").value = currentRow.cells[2].innerHTML
    document.getElementById("class").value = currentRow.cells[3].innerHTML

}

function save() {
    if (currentRow) {
        currentRow.cells[1].innerHTML = document.getElementById("fname").value
        currentRow.cells[2].innerHTML = document.getElementById("lname").value
        currentRow.cells[3].innerHTML = document.getElementById("class").value
        form.style.display = "none"
        currentRow = null
    } else {
        alert("No Row is Selected")
    }

}
function cancelEdit() {
    form.style.display = "none";
    currentRow = null;
}

function deleteRow(btn) {
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