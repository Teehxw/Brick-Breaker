// Functions 


//DRAW START SCREEN
function drawStart() {
  drawMainComponents();

  // Start Text
  ctx.font = "35px Consolas";
  ctx.fillStyle = "white";
  ctx.fillText("PRESS ENTER to Start", 235, 70)
}

function drawGame() {
  drawMainComponents();

  //Draw the Score
  ctx.font = "30px Consolas";
  ctx.fillStyle = "white";
  ctx.fillText(playerScore, 750, 50)


}

//MOVE PADDLES

function addPaddleSpeed() {
  let paddleSpeedE1 = document.getElementById("PaddleSpeed");
  move(paddleSpeedE1.value);
  checkCollisions();
}

function move(speedInput) {
  if (aIsPressed === true) {
    paddle.x -= speedInput;
  }
  if (dIsPressed === true) {
    paddle.x -= -speedInput;
  }
  if (leftIsPressed === true) {
    paddle.x -= speedInput;
  }
  if (rightIsPressed === true) {
    paddle.x -= -speedInput;
  }

}

//CHECK PADDLES FOR LEFT AND RIGHT MOVEMENT
function checkCollisions() {
  //Check Collisions
  if (paddle.x < grid) {
    paddle.x = grid;
  }
  if (paddle.x > max) {
    paddle.x = max;
  }
}

//MOVE BALL

function moveBall() {
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;
  ballCollisions();

}

//BALL COLLISIONS WITH WALLS

function ballCollisions() {
  if (ball.y < 11) {
    ball.velocityY = 7;
    //   bounce.play();

  }
  if (ball.y > 610) {
    state = "gameover";
  }

  if (ball.x < 10) {
    ball.velocityX = 7;
    //   bounce.play();
  }


  if (ball.x > 800) {
    ball.velocityX = -7
  }
  // Ball Collsion with Paddles

  if (ball.x > paddle.x && ball.x < paddle.x + paddle.w &&
    ball.y > paddle.y && ball.y < paddle.y + paddle.h) {
    ball.velocityY = -7;
  }

  collisionsBricks();

}




// BALL COLLSION WITH BRICKS
function collisionsBricks() {
  //Ball Collisions with Bricks
  for (let i = 0; i < bricks.length; i++) {
    if (ball.x - 10 < bricks[i].x + 25 && ball.x + 10 > bricks[i].x && ball.y + 10 > bricks[i].y && ball.y - 10 < bricks[i].y + 25) {
      if (bricks[i].count > 1) {
        bricks.splice(i, 1);
      }

      // Velocity
      if (ball.velocityY === 7) {
        ball.velocityY = -7;
      } else if (ball.velocityY === -7) {
        ball.velocityY = 7;
      } else if (ball.velocityX === -3) {
        ball.velocityX = 2;
      } else if (ball.velocityX === 3) {
        ball.velocityX = -2;
      }
      playerScore++;
      score();
      return 1
    }
  }
}

//HELPER FUNCTIONS

function drawMainComponents() {
  //Draw Background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  //Draw Paddles
  ctx.fillStyle = "white";
  ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);


  //Draw Ball
  ctx.lineWidth = 2;
  ctx.drawImage = "white";
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  ctx.fill();

  //Draw Bricks
  for (let i = 0; i < bricks.length; i++) {
    ctx.fillStyle = bricks[i].color;
    ctx.fillRect(bricks[i].x, bricks[i].y, bricks[i].w, bricks[i].h);
  }

}




function drawGameOver() {
  drawMainComponents();
  //Draw Game Over Text
  if (ball.y > 610) {
    ctx.font = "50px Consolas";
    ctx.fillStyle = "lightblue";
    ctx.fillText("GAME OVER!", 275, 400)

  }
  if (playerScore === 60) {
    ctx.font = "50px Consolas";
    ctx.fillStyle = "lightblue";
    ctx.fillText("YOU WIN!", 275, 400)

  }

  setTimeout(tabReset, 3000);
}

function score() {
  if (playerScore === 60) {
    state = "gameover"
    winner.play();
  }
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



