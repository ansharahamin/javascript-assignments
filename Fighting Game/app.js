var char1 = document.getElementById("char1")
var char2 = document.getElementById("char2");
var left = 0;

function charactarAnimation(event) {
    console.log(event.keyCode);
    if (event.keyCode === 39) {
        left = left + 10
        char1.style.left = left + "px"
        char1.src = 'images/hol-walkf.gif'
        char1.style.transform = "scaleX(1)"
        char1.style.height = "350px"
    
    }if (event.keyCode===37) {
        left=left-10
        char1.style.left = left+"px"
        char1.style.transform = "scaleX(-1)"
char1.style.height = "350px"
    }
    if (event.keyCode===13) {
               char1.src = "images/holhorse1.gif"
    
        setTimeout(()=>{
               char1.src = "images/holhorse-standfull.gif"


          
        })
        char1.style.transform = "scaleX(1)"
char1.style.height = "500px"
        char1.style.transform = "scaleX(-1)"

    }
}



window.onkeydown = charactarAnimation;


