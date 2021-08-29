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
}