var char1 = document.getElementById ="char1"
var char2 = document.getElementById ="char2"
var left = 0
function charactarAnimation() {
console.log(event.keyCode);
if (event.keyCode===65) {
    left=left+10
    char1.style.left = 10 +"px"
}
}
window.onkeydown = charactarAnimation