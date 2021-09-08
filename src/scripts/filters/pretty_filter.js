let prettyWidth;
let prettyColor;
let prettyDist;

function Pretty(leftCheek, rightCheek, face, filterCount) {

    if (pikachuFilter) {
        prettyWidth = 6;
        prettyColor = [4, 211, 255];
        prettyDist = 35;
    } else if (kirbyFilter) {
        prettyWidth = 3;
        prettyColor = [255, 99, 107];
        prettyDist = 25;
    } else if (pacmanFilter) {
        prettyWidth = 4;
        prettyColor = [255, 99, 107];
        prettyDist = 30;
    } else {
        prettyWidth = 6;
        prettyColor = [255, 99, 107];
        prettyDist = 15;
    }

    // left cheek
    for (let d = w/prettyWidth; d >= 2; d -= 1) {
        fill(prettyColor[0], prettyColor[1], prettyColor[2], map(d, w/prettyWidth, 2, 0, 25));
        noStroke();
        circle(leftCheek.x + prettyDist, leftCheek.y - prettyDist, d);
    }
    // right cheek
    for (let d = w/prettyWidth; d >= 2; d -= 1) {
        fill(prettyColor[0], prettyColor[1], prettyColor[2], map(d, w/prettyWidth, 2, 0, 25));
        noStroke();
        circle(rightCheek.x - prettyDist, rightCheek.y - prettyDist, d);
    }

    new FilterVis(filterCount);

}