// Functions 

//Draw Start Screen
function drawStart() {
    drawMainComponents();
  
    // Start Text
    ctx.font = "20px Consolas";
    ctx.fillStyle = "white";
    ctx.fillText("PRESS KEYS to Start", 100, 50)
  }

  function drawGame() {
    drawMainComponents();
    moveBall();

  }
  
  //Move Paddles
  function move() {
    if (aIsPressed === true) {
      paddle.x -= 10;
    }
    if (dIsPressed === true) {
      paddle.x += 10;
    }
    if (leftIsPressed === true) {
      paddle.x -= 10;
    }
    if (rightIsPressed === true) {
      paddle.x += 10;
    }
    checkCollisions();
  }
  
  // Check collisions of Paddles for up and down movement
  function checkCollisions() {
    //Check Collisions
    if (paddle.x < grid) {
      paddle.x = grid;
    }
    if (paddle.x > max) {
      paddle.x = max;
    }
  }
  
  //Move Ball
  
  function moveBall() {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
    ballCollisions();
  }
  
  //Ball Collisions with the walls
  
  function ballCollisions() {
    if (ball.y < 40) {
      ball.velocityY = 8;
    //   bounce.play();
    
    }
    if (ball.y > 910) {
        state = "gameover";
    }

    if (ball.x < 10) {
      ball.velocityX = 2;
    //   bounce.play();
    }

    if (ball.x > 770) {
        ball.velocityX = -2;
    }


  }
  
    // Ball Collsion with Paddles

    if (ball.x <= paddle.x + 10 && ball.y >= paddle.y && ball.y <= paddle.y + 90) {
      ball.velocityX = ax;
      ax = ax -= 1;
      // paddlebounce.play();
      // bounce.pause();
    }

    //Helper Functions 

function drawMainComponents() {
    //Draw Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    //Draw Paddles
    ctx.fillStyle = "white";
    ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);

  
    //Draw Ball
    ctx.lineWidth = 2;
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  function drawGameOver(){
    drawMainComponents();
  //Draw Game Over Text
  if (ball.y >910) {
    ctx.font = "100px Consolas";
    ctx.fillStyle = "lightblue";
    ctx.fillText("GAME OVER!",300, 500 )
    //gameOver.play();
    setTimeout(tabReset, 3000);

  }
  // if (leftPlayerScore === 7) {
  //   ctx.font = "23px Consolas";
  //   ctx.fillStyle = "lightblue";
  //   ctx.fillText("GAME OVER! Player 2 Wins!!", 65, 100);
  //   gameOver.play();
  //   setTimeout(tabReset, 2000);
  // }
}

//Tab reload
function reset() {
  ball.x = 400;
  ball.y = 300;
  paddle.x = 250;


}

function tabReset() {
  state = "start";
  document.location.reload();
}

  
  