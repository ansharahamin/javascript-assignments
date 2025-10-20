// Game constants and variable
let inputDir = { x: 0, y: 0 }
const foodSound = new Audio('Audios/eat.wav')
const gameOver = new Audio('Audios/gameover.wav')
const music = new Audio('Audios/music.mp3')
const startGame = new Audio('Audios/startGame.wav')

let scoreBox = document.getElementById("score");  // <div id="score"> element
const move = new Audio('Audios/jump.wav')
let lastPaintTime = 0
let speed = 5
let SnakeArray = [{
    x: 3, y: 15
}]
let score = 0
food = { x: 6, y: 7 }
let highScoreBox = document.getElementById("highScore");
// Game Functions

function main(ctime) {
    window.requestAnimationFrame(main);

    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime
    gameEngine()

}




function gameEngine() {
    // part 1 updating the Snake Array

    function isCollide(snake) {

        //if you bump into yourself

        for (let i = 1; i < SnakeArray.length; i++) {
            if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
                return true
            }
        }
        // if you bump into the wall
        if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
            return true
        }


    }

    if (isCollide(SnakeArray)) {
        gameOver.play()
        music.pause()
        inputDir = { x: 0, y: 0 }
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "You Lose!",
  footer: '<a href="#">Instructions</a>'
});
        SnakeArray = [{
            x: 13, y: 15
        }]
        // music.play()
        score = 0
        scoreBox.innerHTML = "Score: " + score;

    }

    // if you have eaten the food , increment and regenerate the food

    if (SnakeArray[0].y === food.y && SnakeArray[0].x === food.x) {
        foodSound.play()
        score += 1
        scoreBox.innerHTML = "Score: " + score

      if (score > highScoreEval) {
    highScoreEval = score;
    localStorage.setItem("highScore", JSON.stringify(highScoreEval));
    highScoreBox.innerHTML = "High Score: " + highScoreEval;
}

        SnakeArray.unshift({ x: SnakeArray[0].x + inputDir.x, y: SnakeArray[0].y + inputDir.y })
        let a = 2
        let b = 16
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    // Moving the Snake

    for (let i = SnakeArray.length - 2; i >= 0; i--) {
        SnakeArray[i + 1] = { ...SnakeArray[i] }
    }
    SnakeArray[0].x += inputDir.x
    SnakeArray[0].y += inputDir.y

    // part 2 Display the Snake and food
    // document.getElementById = ("board").innerHTML = ""

    // Display the Snake

    board.innerHTML = ""
    SnakeArray.forEach((e, index) => {

        SnakeElement = document.createElement('div')
        SnakeElement.style.gridRowStart = e.y
        SnakeElement.style.gridColumnStart = e.x


        if (index === 0) {
            SnakeElement.classList.add('head')
        } else {
            SnakeElement.classList.add('Snake')
        }
        board.appendChild(SnakeElement)
    });

    // Display the food

    FoodElement = document.createElement('div')
    FoodElement.style.gridRowStart = food.y
    FoodElement.style.gridColumnStart = food.x

    FoodElement.classList.add('food')

    board.appendChild(FoodElement)
}



// Main Logic Starts here

let highScore = localStorage.getItem('highScore');
if (highScore===null) {
    highScoreEval=0
    localStorage.setItem('highScore',JSON.stringify(highScoreEval));
}else{
    highScoreEval = JSON.parse(localStorage.getItem("highScore"))
    highScoreBox.innerHTML = "highScore: " +highScoreEval
}
function setLevel(level) {
  if (level === 'easy') {
    speed = 4;
  } else if (level === 'medium') {
    speed = 7;
  } else if (level === 'hard') {
    speed = 12;
  }

  // Optional sound or message
  startGame.play()
  Swal.fire("Level set to: " + level.toUpperCase())

}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 } //start the game
   music.play()
  
    move.play()
    switch (e.key) {
        case "ArrowUp":

            console.log("ArrowUp");
            inputDir.x = 0
            inputDir.y = -1
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0
            inputDir.y = 1
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1
            inputDir.y = 0
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1
            inputDir.y = 0
            break;

        default:
            break;
    }

})
function UpArrow() {
     inputDir.x = 0
            inputDir.y = -1
}
function DownArrow() {
  inputDir.x = 0
            inputDir.y = 1
}
function LeftArrow() {
   inputDir.x = -1
            inputDir.y = 0
}
function RightArrow() {
   inputDir.x = 1
            inputDir.y = 0
}
