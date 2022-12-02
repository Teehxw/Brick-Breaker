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
let dIsPressed = false

//Global Variables
let state = "start";
let max = 475;
let grid= 20;
let ball = {
  x:400,
  y:300, 
  radius : 12,
  velocityX: 3, 
  velocityY: 8,
  color: "white"
}
let paddle = {
  x:400,
  y:500,
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
  if (e.keycode === 37 ) {
    leftIsPressed = true;
  } else if (e.keycode === 39){
    rightIsPressed = true;
  } else if (e.keycode === 65){
    aIsPressed = true;
  } else if (e.keycode === 68){
    dIsPressed = true;
  }
  if (state==="start") {
   state = "gameon"
  }
}

function arrowRightHandler(e) {
  if (e.keycode === 37){
    leftIsPressed = false;
  } else if (e.keycode === 39){
    rightIsPressed = false;
  } else if (e.keycode === 65){
    aIsPressed = false;
  } else if (e.keycode ===68){
    dIsPressed = false;
  }
}