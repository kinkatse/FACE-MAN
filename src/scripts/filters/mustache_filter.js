let mustacheDist;

function Mustache(nose, filterCount) {
    if (pikachuFilter) {
        mustacheDist = 5;
    } else if (kirbyFilter) {
        mustacheDist = 15;
    } else if (pacmanFilter) {
        mustacheDist = 15;
    } else {
        mustacheDist = 35;
    }

    push();
    imageMode(CENTER);
    image(mustacheImg, nose.x, nose.y + mustacheDist, 150, 150);
    pop();

    new FilterVis(filterCount);

}