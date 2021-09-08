let p_w;
let p_color;
let p_dist;

function Pretty(leftCheek, rightCheek, face, filtercount) {

    if (pikachuFilter) {
        p_w = 6;
        p_color = [4, 211, 255];
        p_dist = 35;
    } else if (kirbyFilter) {
        p_w = 3;
        p_color = [255, 99, 107];
        p_dist = 25;
    } else if (pacmanFilter) {
        p_w = 4;
        p_color = [255, 99, 107];
        p_dist = 30;
    } else {
        p_w = 6;
        p_color = [255, 99, 107];
        p_dist = 15;
    }

    // left cheek
    for (let d = w/p_w; d >= 2; d -= 1) {
        fill(p_color[0], p_color[1], p_color[2], map(d, w/p_w, 2, 0, 25));
        noStroke();
        circle(leftCheek.x + p_dist, leftCheek.y - p_dist, d);
    }
    // right cheek
    for (let d = w/p_w; d >= 2; d -= 1) {
        fill(p_color[0], p_color[1], p_color[2], map(d, w/p_w, 2, 0, 25));
        noStroke();
        circle(rightCheek.x - p_dist, rightCheek.y - p_dist, d);
    }

    new filter_vis("pretty", filtercount);

}