var QuizQuestions = [
  {
    question:
      "Which of the following is used to declare a variable in JavaScript?",
    A: "var",
    B: "let",
    C: "const",
    D: "All of the above",
    ans: "D",
  },

  {
    question: "What is the output of: console.log(typeof NaN);",
    A: "undefined",
    B: "number",
    C: "NaN",
    D: "object",
    ans: "B",
  },

  {
    question:
      "Which method is used to convert JSON data into a JavaScript object?",
    A: "JSON.stringify()",
    B: "JSON.parse()",
    C: "JSON.toObject()",
    D: "JSON.convert()",
    ans: "B",
  },

  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    A: "<!-- comment -->",
    B: "/* comment */",
    C: "// comment",
    D: "** comment",
    ans: "C",
  },

  {
    question: "What will this return? Boolean(' ')",
    A: "false",
    B: "true",
    C: "undefined",
    D: "null",
    ans: "C",
  },

  {
    question: "Which of the following is NOT a JavaScript data type?",
    A: "Number",
    B: "String",
    C: "Character",
    D: "Boolean",
    ans: "C",
  },

  {
    question: "What is the correct syntax for an arrow function?",
    A: "function => () {}",
    B: "() => {}",
    C: "() -> {}",
    D: "=> () {}",
    ans: "B",
  },

  {
    question: "What does the push() method do in JavaScript arrays?",
    A: "Removes the last element",
    B: "Adds an element to the end",
    C: "Adds an element to the beginning",
    D: "Removes the first element",
    ans: "B",
  },

  {
    question: "What is the result of: console.log(2 + '2');",
    A: "4",
    B: "22",
    C: "NaN",
    D: "2 + 2",
    ans: "B",
  },

  {
    question: "Which keyword stops a loop in JavaScript?",
    A: "break",
    B: "stop",
    C: "exit",
    D: "halt",
    ans: "A",
  },
];

//===========vars===========
var index = 0;
var result = 0;

console.log(QuizQuestions[index]);

function renderQuestions() {
  var container = document.getElementById("card");

  container.innerHTML = `  <div class="card-header">
${QuizQuestions[index].question}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><input onclick = "enableNext()" name="options" type="radio" id="opt1" value="A"><span> ${QuizQuestions[index].A}</span><label for="opt1"></label></li>
    <li class="list-group-item"><label for="opt2"><input onclick = "enableNext()" name="options" type="radio" id="opt2" value="B"><span> ${QuizQuestions[index].B}</span></label></li>
    <li class="list-group-item"><label for="opt3"><input onclick = "enableNext()" name="options" type="radio" id="opt3" value="C"><span> ${QuizQuestions[index].C}</span></label></li>
    <li class="list-group-item"><label for="opt4"><input onclick = "enableNext()" name="options" type="radio" id="opt4" value="D"><span> ${QuizQuestions[index].D}</span></label></li>
    <li class="list-group-item d-flex  justify-content-between">
  <button class="btn btn-danger" disabled  onclick = "prev()" type="button">previous</button>
  <button id="next" disabled class="btn btn-success" onclick = "next()" type="button">next</button>
</li>

  </ul>
</div>`;
  nextbtn = document.getElementById("next");
  console.log(nextbtn);


}

function enableNext(){
  nextbtn = document.getElementById("next");  
  nextbtn.disabled = false;
}


function next() {
  var opt = document.getElementsByName("options");
  nextbtn = document.getElementById("next");
  console.log(nextbtn);
nextbtn.disabled = true;
  // Check if selected answer is correct
  for (let i = 0; i < opt.length; i++) {
    if (opt[i].checked) {
      if (opt[i].value === QuizQuestions[index].ans) {
        result++;
      }
    }
  }

  if (index < QuizQuestions.length - 1) {
    index++;
    renderQuestions();
  } else {
var resultDiv = document.getElementById("resultDiv");
var card = document.getElementById("card"); 
  }
}



function prev() {
  if (index > 0) {
    index--;
    renderQuestions();
  }
}

function Displayquiz() {
  if (
    document.getElementById("userName").value.trim() === "" ||
    document.getElementById("floatingInput").value.trim() === "" ||
    document.getElementById("floatingPassword").value.trim() === ""
  ) {
    Swal.fire({
      icon: "error",
      title: " fill the required field",
      text: "Please fill complete form to proceed",
    });
    return;
  } else {
    var form = document.getElementById("form");
    var card = document.getElementById("card");
    renderQuestions();
    form.classList.add("d-none");
    card.classList.remove("d-none");

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Account Created SuccessFully!!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
