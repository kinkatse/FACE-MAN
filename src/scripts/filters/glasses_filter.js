let glassesDist;

function Glasses(betweenEyes, filterCount) {
    if (pikachuFilter) {
        glassesDist = 30;
    } else if (kirbyFilter) {
        glassesDist = 20;
    } else if (pacmanFilter) {
        glassesDist = 25;
    } else {
        glassesDist = 5;
    }

    push();
    imageMode(CENTER);
    image(glassesImg, betweenEyes.x, betweenEyes.y - glassesDist, 250, 250);
    pop();

    new FilterVis(filterCount);
}