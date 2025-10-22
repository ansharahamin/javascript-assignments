
// function charactarAnimation() {
//     console.log(event.keyCode);
//     if (event.keyCode === 65) {
//         left = left + 10
//         char1.style.left = left + "px"
//         char1.src = 'images/hol-walkf.gif'
//     }
// }
var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");
var left = 0;

function charactarAnimation(event) {
    console.log(event.keyCode);
    
    if (event.keyCode === 65) { // A key
        left = left + 10;
        char1.style.position = "relative"; // یہ ضروری ہے
        char1.style.left = left + "px";
        char1.src = "images/hol-walkf.gif";
    }
}

window.onkeydown = charactarAnimation;


// function animateCharacter() {
//   console.log(event.keyCode);
//   if (event.keyCode === 68) {
//     left = left + 10;
//     char1.style.left = left + "px";
//     // char1.style.left= (char1.offsetLeft+10)+"px"
//     char1.style.transform = "scaleX(1)";
//     //  char1.style.height = "200px"
//   }
// }
window.onkeydown = charactarAnimation