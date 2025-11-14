var StudentData = [
  (student1 = {
    name: "Sana",
    age: 21,
    city: "Ahmedabad",
    enrolled: true,
  }),
  (student2 = {
    name: "Arvah",
    age: 22,
    city: "Multan",
    enrolled: false,
  }),
  (student3 = {
    name: "taniah",
    age: 32,
    city: "karachi",
    enrolled: false,
  }),
];
for (let i = 0; i < StudentData.length; i++) {
    console.log(StudentData[0].name); 
  
}
    var cardContainer = document.getElementById('card');
var cardHtml = `<div class = ""> <img src="https://toppng.com/uploads/preview/icon-student-icon-for-new-student-11553429035frago151ec.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${StudentData[0].name}</h5>
    <p class="card-text">${StudentData[0].age}</p>
    <p class="card-text">${StudentData[0].city}</p>
    <p class="card-text">${StudentData[0].enrolled}</p>
    <a href="#" class="btn btn-primary">more Info</a>
  </div> 
  <div class = ""> <img src="https://toppng.com/uploads/preview/icon-student-icon-for-new-student-11553429035frago151ec.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${StudentData[1].name}</h5>
    <p class="card-text">${StudentData[1].age}</p>
    <p class="card-text">${StudentData[1].city}</p>
    <p class="card-text">${StudentData[1].enrolled}</p>
    <a href="#" class="btn btn-primary">more Info</a>
  </div>
  <div class = ""> <img src="https://toppng.com/uploads/preview/icon-student-icon-for-new-student-11553429035frago151ec.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${StudentData[2].name}</h5>
    <p class="card-text">${StudentData[2].age}</p>
    <p class="card-text">${StudentData[2].city}</p>
    <p class="card-text">${StudentData[2].enrolled}</p>
    <a href="#" class="btn btn-primary">more Info</a>
  </div>` 
  cardContainer.innerHTML = cardHtml