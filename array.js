//Draw Bricks
let bricks= drawBricks();
//Draw Bricks
for(let i = 0; i< bricks.length; i++){
    ctx.fillStyle = bricks[i].color;
    ctx.fillRect(bricks[i].x, bricks[i].y, bricks[i].w, bricks[i].h );
  }

//Array to draw Bricks
let brickNumb = 15;
function drawBricks() {
    let brickNumb = 15;
    let draw = [];
    for (let k = 0; k < brickNumb; k++) {
        let brickObs = {
            x: 63 + 28 * k,
            y: 50,
            w: 30,
            h: 30,
            color: "", 
            count: 24
        }
        if (brickObs.count < 5){
            brickObs.color = "blue";
        } else {
            brickObs.color ="red"
        }
        draw.push(brickObs)
    } 

    for (let k = 0; k < brickNumb; k++) {
        let brickObs = {
            x: 63 + 28 * k,
            y: 70,
            w: 30,
            h: 30,
            color: "", 
            count: 24
        }
        if (brickObs.count < 5){
            brickObs.color = "blue";
        } else {
            brickObs.color ="red"
        }
        draw.push(brickObs)
    } 

    for (let k = 0; k < brickNumb; k++) {
        let brickObs = {
            x: 63 + 28 * k,
            y: 90,
            w: 30,
            h: 30,
            color: "", 
            count: 24
        }
        if (brickObs.count < 5){
            brickObs.color = "blue";
        } else {
            brickObs.color ="red"
        }
        draw.push(brickObs)
    } 

     return draw;
}