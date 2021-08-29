function Mustache(nose) {
    if (pikachuFilter) {
        push();
        imageMode(CENTER);
        image(mustacheImg, nose.x, nose.y + 5, 150, 150);
        pop();
    } else if (kirbyFilter) {
        push();
        imageMode(CENTER);
        image(mustacheImg, nose.x, nose.y + 15, 150, 150);
        pop();
    } else if (pacmanFilter) {
        push();
        imageMode(CENTER);
        image(mustacheImg, nose.x, nose.y + 15, 150, 150);
        pop();
    } else {
        push();
        imageMode(CENTER);
        image(mustacheImg, nose.x, nose.y + 35, 150, 150);
        pop();
    }
}