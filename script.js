// Brick Breaker

//Set Up Canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1100;
cnv.height = 900;


//Global variables for keys 
let leftIsPressed = false;
let rightIsPressed = false;
let aIsPressed = false;
let dIsPressed = false;

//Global Variables
let state = "start";
let max = 475;
let grid= 20;
let ball = {
  x:405,
  y:315, 
  radius : 12,
  velocityX: 3, 
  velocityY: 8,
  color: "white"
}
let paddle = {
  x:350,
  y:530,
  w:110,
  h:15
}
// Global variables for sound effects
// let bounce = document.createElement("audio");
// bounce.src = "sounds/ballbounce.mp3";
// let gameOver = document.createElement ("audio");
// gameOver.src = "sounds/gameOver.mp3";
// let paddlebounce = document.createElement("audio");
// paddlebounce.src = "sounds/paddlebounce.mp3";



//Array




//Draw Function
window.addEventListener("load", draw)
function draw (){
  if (state ==="start") {
    drawStart();
  }
  if(state==="gameon"){
   move();
   drawGame();
  
  }
  if (state === "gameover"){
   drawGameOver();
  }
   requestAnimationFrame(draw);
}



//Event Stuff
document.addEventListener("keyup", arrowLeftHandler);
document.addEventListener("keydown", arrowRightHandler);


function arrowLeftHandler(e) {
  if (e.code === "ArrowLeft" ) {
    leftIsPressed = true;
  } else if (e.code === "ArrowRight"){
    rightIsPressed = true;
  } else if (e.code === "A"){
    aIsPressed = true;
  } else if (e.code === "D"){
    dIsPressed = true;
  }
  if (state==="start") {
   state = "gameon"
  }
}

function arrowRightHandler(e) {
  if (e.code === "ArrowLeft"){
    leftIsPressed = false;
  } else if (e.code === "ArrowRight"){
    rightIsPressed = false;
  } else if (e.code === "A"){
    aIsPressed = false;
  } else if (e.code === "D"){
    dIsPressed = false;
  }
}