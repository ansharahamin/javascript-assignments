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

    form.classList.add("d-none");
    card.classList.remove("d-none");
    renderQuestions()
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Account Created SuccessFully!!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

var QuizQuestions = [
  {
    question1:
      "Which of the following is used to declare a variable in JavaScript?",
    A: "var",
    B: "let",
    C: "const",
    D: "All of the above",
  },

  {
    question2: "What is the output of: console.log(typeof NaN);",
    A: "undefined",
    B: "number",
    C: "NaN",
    D: "object",
  },

  {
    question3:
      "Which method is used to convert JSON data into a JavaScript object?",
    A: "JSON.stringify()",
    B: "JSON.parse()",
    C: "JSON.toObject()",
    D: "JSON.convert()",
  },

  {
    question4: "Which symbol is used for single-line comments in JavaScript?",
    A: "<!-- comment -->",
    B: "/* comment */",
    C: "// comment",
    D: "** comment",
  },

  {
    question5: "What will this return? Boolean(' ')",
    A: "false",
    B: "true",
    C: "undefined",
    D: "null",
  },

  {
    question6: "Which of the following is NOT a JavaScript data type?",
    A: "Number",
    B: "String",
    C: "Character",
    D: "Boolean",
  },

  {
    question7: "What is the correct syntax for an arrow function?",
    A: "function => () {}",
    B: "() => {}",
    C: "() -> {}",
    D: "=> () {}",
  },

  {
    question8: "What does the push() method do in JavaScript arrays?",
    A: "Removes the last element",
    B: "Adds an element to the end",
    C: "Adds an element to the beginning",
    D: "Removes the first element",
  },

  {
    question9: "What is the result of: console.log(2 + '2');",
    A: "4",
    B: "22",
    C: "NaN",
    D: "2 + 2",
  },

  {
    question10: "Which keyword stops a loop in JavaScript?",
    A: "break",
    B: "stop",
    C: "exit",
    D: "halt",
  },
];

var index = 0;
var result = 0;
console.log(QuizQuestions[index]);
function renderQuestions() {
  var container = document.getElementById("card");
  var opt = document.getElementsByName("options");
  for (let i = 0; i < opt.length; i++) {
    if (opt[i].checked) {
      if (QuizQuestions[index - 1].ans === opt[i].value) {
        result++;
      }
    }
      container.innerhtml = `  <div class="card-header">
  Questions
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><label for="opt1"><input name="options" type="radio" id="opt1" value="">hello</label></li>
    <li class="list-group-item"><label for="opt2"><input name="options" type="radio" id="opt2" value=""></label></li>
    <li class="list-group-item"><label for="opt3"><input name="options" type="radio" id="opt3" value=""></label></li>
    <li class="list-group-item"><label for="opt4"><input name="options" type="radio" id="opt4" value="">hello</label></li>
    <li class="list-group-item d-flex  justify-content-between">
  <button class="btn btn-danger" type="button">previous</button>
  <button class="btn btn-success" type="button">next</button>
</li>

  </ul>
</div>`;
  }

}
