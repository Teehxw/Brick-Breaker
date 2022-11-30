// Brick Breaker

//Set Up Canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1200;
cnv.height = 1000;


//Global variables for keys 
let leftrectY = 50;
let rightrectY = 50;
let upIsPressed = false;
let downIsPressed = false;
let wIsPressed = false;
let sIsPressed = false

//Draw Function
window.addEventListener("load", draw)
function draw (){
  if (state ==="start") {
    drawStart();
  }
  if(state==="gameon"){
   move();
   drawGame();
   gameOn();
   score();
  
  }
  if (state === "gameover"){
   drawGameOver();
  }
   requestAnimationFrame(draw);
}



//Event Stuff
document.addEventListener("keydown", arrowdownHandler);
document.addEventListener("keyup", arrowupHandler);


function arrowdownHandler(event) {
  if (event.code === "KeyW") {
    wIsPressed = true;
  } else if (event.code === "KeyS"){
    sIsPressed = true;
  } else if (event.code === "ArrowUp"){
    upIsPressed = true;
  } else if (event.code === "ArrowDown"){
    downIsPressed = true;
  }
  if (state==="start") {
   state = "gameon"
  }
}

function arrowupHandler(event) {
  if (event.code === "ArrowUp"){
    upIsPressed = false;
  } else if (event.code === "KeyS"){
    sIsPressed = false;
  } else if (event.code === "KeyW"){
    wIsPressed = false;
  } else if (event.code === "ArrowDown"){
    downIsPressed = false;
  }
}