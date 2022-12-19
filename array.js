//Array to draw Bricks
let brickNumb = 15;
function drawBricks() {
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
    } draw.push(brickObs)

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
    } draw.push(brickObs)

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
    } draw.push(brickObs)

     return draw;
}