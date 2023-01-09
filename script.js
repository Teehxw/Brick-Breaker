// Brick Breaker

//Set Up Canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;




//Global variables for keys 
let leftIsPressed = false;
let rightIsPressed = false;
let aIsPressed = false;
let dIsPressed = false;

//Global Variables
let state = "start";
let max = 680;
let grid = 5;

let addbtn = document.getElementById("addSpeed");

let playerScore = 0;
let ball = {
  x: 400,
  y: 400,
  radius: 12,
  velocityX: 3,
  velocityY: 8,
  color: "white"
}
let paddle = {
  x: 345,
  y: 550,
  w: 120,
  h: 15
}
// Global variables for sound effects
let winner = document.createElement("audio");
winner.src = "winner.mp3";







//Draw Function
window.addEventListener("load", draw)
function draw() {
  if (state === "start") {
    drawStart();
    addPaddleSpeed()
  }
  if (state === "gameon") {
    drawGame();
    moveBall();
    addPaddleSpeed();
    score()



  }
  if (state === "gameover") {
    drawGameOver();
  }
  requestAnimationFrame(draw);
}



//Event Listeners
document.addEventListener("keyup", keyupHandler);
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keypress", startGame)
addbtn.addEventListener("click", addPaddleSpeed)

function keydownHandler(e) {
  if (e.code === "ArrowLeft") {
    leftIsPressed = true;
  } else if (e.code === "ArrowRight") {
    rightIsPressed = true;
  } else if (e.code === "KeyA") {
    aIsPressed = true;
  } else if (e.code === "KeyD") {
    dIsPressed = true;
  }
}


function keyupHandler(e) {
  if (e.code === "ArrowLeft") {
    leftIsPressed = false;
  } else if (e.code === "ArrowRight") {
    rightIsPressed = false;
  } else if (e.code === "KeyA") {
    aIsPressed = false;
  } else if (e.code === "KeyD") {
    dIsPressed = false;
  }
}

function startGame(e) {
  if (e.code === "Enter") {
    state = "gameon"
  }
}



