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
            count: 24
        }
        brickObs.color = "#800000";

        draw.push(brickObs)
    } 

    for (let k = 0; k < brickNumb; k++) {
        let brickObs = {
            x: 100 +31 * k,
            y: 180,
            w: 25,
            h: 30, 
            count: 24
        }
        
        brickObs.color = "#ff0000";
        draw.push(brickObs)
    } 

    for (let k = 0; k < brickNumb; k++) {
        let brickObs = {
            x: 100 +31 * k,
            y: 240,
            w: 25,
            h: 30,
            count: 24
        }
        brickObs.color = "#ff4d4d"
        draw.push(brickObs)
    } 

     return draw;
}