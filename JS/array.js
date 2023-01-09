//Draw Bricks
let bricks= drawBricks();


function drawBricks() {
    let brickNumb = 20;
    let draw = [];
    for (let k = 0; k < brickNumb; k++) {
        let brickObs = {
            x: 100 +31* k,
            y: 120,
            w: 25,
            h: 30,
            color: "", 
            count: 24
        }
        if (brickObs.count > 5){
            brickObs.color = "#800000";
        } else {
            brickObs.color = "#003300"
        }
        draw.push(brickObs)
    } 

    for (let k = 0; k < brickNumb; k++) {
        let brickObs = {
            x: 100 +31 * k,
            y: 180,
            w: 25,
            h: 30,
            color: "", 
            count: 24
        }
        if (brickObs.count < 5){
            brickObs.color = "#ff0000";
        } else {
            brickObs.color ="#ff0000"
        }
        draw.push(brickObs)
    } 

    for (let k = 0; k < brickNumb; k++) {
        let brickObs = {
            x: 100 +31 * k,
            y: 240,
            w: 25,
            h: 30,
            color: "", 
            count: 24
        }
        if (brickObs.count > 5){
            brickObs.color = "#ff4d4d";
        } else {
            brickObs.color ="red"
        }
        draw.push(brickObs)
    } 

     return draw;
}