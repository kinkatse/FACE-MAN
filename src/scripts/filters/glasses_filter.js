let g_dist;

function Glasses(betweenEyes) {
    if (pikachuFilter) {
        g_dist = 30;
    } else if (kirbyFilter) {
        g_dist = 20;
    } else if (pacmanFilter) {
        g_dist = 25;
    } else {
        g_dist = 5;
    }

    push();
    imageMode(CENTER);
    image(glassesImg, betweenEyes.x, betweenEyes.y - g_dist, 250, 250);
    pop();

    // Filter is on visualizer
    push();
    fill('rgba(191, 225, 255, 0.5)');
    stroke(153, 207, 255);
    strokeWeight(2);
    rect(700, 1, 90, 30, 5, 5, 5, 5);
    fill(255);
    translate(710, -37);
    textSize(18);
    textFont('Helvetica');
    text('Glasses', 12, 60);
    pop();
}