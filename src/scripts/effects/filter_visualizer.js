let fv_x;
let fv_y;
let fv_dist;
let fv_word;

function filter_vis() {

    if (pikachuFilter) {
    } else if (kirbyFilter) {
    } else if (pacmanFilter) {
    } else {
    }

    // Filter is on visualizer
    push();
    translate(fv_x, 15);
    fill('rgba(191, 225, 255, 0.3)');
    stroke(153, 207, 255);
    strokeWeight(2);
    rectMode(CENTER);
    rect(1, 1, 70, 30, 5, 5, 5, 5);
    fill(255);
    textAlign(CENTER);
    stroke('rgba(0, 0, 0, 0.4)');
    strokeWeight(1.5);
    textSize(18);
    textFont('Helvetica');
    text(fv_word, 0, 5);
    pop();

}