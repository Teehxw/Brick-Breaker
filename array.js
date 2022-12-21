//Array to draw Bricks
let bricks = drawBricks();

function drawBricks() {
let brickNumb = 25;
    let draw = [];
    for (let k = 0; k < brickNumb; k++) {
        let brickObs = {
            x: 130 +30 * k,
            y: 150,
            w: 25,
            h: 30,
            color: "", 
            count: 24
        }
        if (brickObs.count > 5){
            brickObs.color = "blue";
        } else {
            brickObs.color ="red"
        }
        draw.push(brickObs)
    } 

    for (let k = 0; k < brickNumb; k++) {
        let brickObs = {
            x: 130 +30 * k,
            y: 210,
            w: 25,
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
            x: 130 +30 * k,
            y: 270,
            w: 25,
            h: 30,
            color: "", 
            count: 24
        }
        if (brickObs.count > 5){
            brickObs.color = "green";
        } else {
            brickObs.color ="red"
        }
        draw.push(brickObs)
    } 

     return draw;
}