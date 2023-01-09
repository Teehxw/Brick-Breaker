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
let grid= 5;

let playerScore = 0
let ball = {
  x:400,
  y:400, 
  radius : 12,
  velocityX: 3, 
  velocityY: 8,
  color: "white"
}
let paddle = {
  x:345,
  y:550,
  w:120,
  h:15
}
// Global variables for sound effects
// let bounce = document.createElement("audio");
// bounce.src = "sounds/ballbounce.mp3";
// let gameOver = document.createElement ("audio");
// gameOver.src = "sounds/gameOver.mp3";
// let paddlebounce = document.createElement("audio");
// paddlebounce.src = "sounds/paddlebounce.mp3";

//Global Variable for Ball Img
let ballImg = document.createElement("img");
ballImg.src = "football.png"






//Draw Function
window.addEventListener("load", draw)
function draw (){
  if (state ==="start") {
    drawStart();
  }
  if(state==="gameon"){
   drawGame();
   moveBall();
   move();
   score()
  
   
  
  }
  if (state === "gameover"){
   drawGameOver();
  }
   requestAnimationFrame(draw);
}



//Event Stuff
document.addEventListener("keyup", keyupHandler);
document.addEventListener("keydown", keydownHandler);


function keydownHandler(e) {
  if (e.code === "ArrowLeft" ) {
    leftIsPressed = true;
  } else if (e.code === "ArrowRight"){
    rightIsPressed = true;
  } else if (e.code === "KeyA"){
    aIsPressed = true;
  } else if (e.code === "KeyD"){
    dIsPressed = true;
  }
  if (state==="start") {
   state = "gameon"
  }
}

function keyupHandler(e) {
  if (e.code === "ArrowLeft"){
    leftIsPressed = false;
  } else if (e.code === "ArrowRight"){
    rightIsPressed = false;
  } else if (e.code === "KeyA"){
    aIsPressed = false;
  } else if (e.code === "KeyD"){
    dIsPressed = false;
  }
}