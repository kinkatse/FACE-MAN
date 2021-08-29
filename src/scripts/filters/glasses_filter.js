function Glasses(betweenEyes) {
    if (pikachuFilter) {
        push();
        imageMode(CENTER);
        image(glassesImg, betweenEyes.x, betweenEyes.y - 30, 250, 250);
        pop();
    } else if (kirbyFilter) {
        push();
        imageMode(CENTER);
        image(glassesImg, betweenEyes.x, betweenEyes.y - 20, 250, 250);
        pop();
    } else if (pacmanFilter) {
        push();
        imageMode(CENTER);
        image(glassesImg, betweenEyes.x, betweenEyes.y - 25, 250, 250);
        pop();
    } else {
        push();
        imageMode(CENTER);
        image(glassesImg, betweenEyes.x, betweenEyes.y - 5, 250, 250);
        pop();
    }
}