function Pretty(leftCheek, rightCheek, face) {

    if (pikachuFilter) {
        // left cheek
        for (let d = w/6; d >= 2; d -= 1) {
            fill(4, 211, 255, map(d, w/6, 2, 0, 25));
            noStroke();
            circle(leftCheek.x + 35, leftCheek.y - 35, d);
        }
        // right cheek
        for (let d = w/6; d >= 2; d -= 1) {
            fill(4, 211, 255, map(d, w/6, 2, 0, 25));
            noStroke();
            circle(rightCheek.x - 35, rightCheek.y - 35, d);
        }
    } else if (kirbyFilter) {
        // left cheek
        for (let d = w/3; d >= 2; d -= 1) {
            fill(255, 99, 107, map(d, w/3, 2, 0, 25));
            noStroke();
            circle(leftCheek.x + 25, leftCheek.y - 25, d);
        }
        // right cheek
        for (let d = w/3; d >= 2; d -= 1) {
            fill(255, 99, 107, map(d, w/3, 2, 0, 25));
            noStroke();
            circle(rightCheek.x - 25, rightCheek.y - 25, d);
        }
    } else if (pacmanFilter) {
        // left cheek
        for (let d = w/4; d >= 2; d -= 1) {
            fill(255, 99, 107, map(d, w/4, 2, 0, 25));
            noStroke();
            circle(leftCheek.x + 30, leftCheek.y - 30, d);
        }
        // right cheek
        for (let d = w/4; d >= 2; d -= 1) {
            fill(255, 99, 107, map(d, w/4, 2, 0, 25));
            noStroke();
            circle(rightCheek.x - 30, rightCheek.y - 30, d);
        }
    } else {
        // left cheek
        for (let d = w/6; d >= 2; d -= 1) {
            fill(255, 99, 107, map(d, w/6, 2, 0, 25));
            noStroke();
            circle(leftCheek.x + 15, leftCheek.y - 15, d);
        }
        // right cheek
        for (let d = w/6; d >= 2; d -= 1) {
            fill(255, 99, 107, map(d, w/6, 2, 0, 25));
            noStroke();
            circle(rightCheek.x - 15, rightCheek.y - 15, d);
        }
    }
}