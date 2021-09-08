let fv_x;
let fv_y;
let fv_dist;
let fv_word;

function filter_vis(filter) {

    if (filter === "hitbox") {
        fv_x = 35;
        fv_dist = 70;
        fv_word = "Hitbox";
    }

    if (filter === "scanmask") {
        fv_x = 126;
        fv_dist = 100;
        fv_word = "Scanmask";
    }

    if (filter === "pacmanFilter") {
        fv_x = 126;
        fv_dist = 100;
        fv_word = "Scanmask";
    }

    if (filter === "kirbyFilter") {
        fv_x = 126;
        fv_dist = 100;
        fv_word = "Scanmask";
    }

    if (filter === "pikachuFilter") {
        fv_x = 126;
        fv_dist = 100;
        fv_word = "Scanmask";
    }

    if (filter === "prettyFilter") {
        fv_x = 126;
        fv_dist = 100;
        fv_word = "Scanmask";
    }

    if (filter === "mustacheFilter") {
        fv_x = 126;
        fv_dist = 100;
        fv_word = "Scanmask";
    }

    if (filter === "glassesFilter") {
        fv_x = 126;
        fv_dist = 100;
        fv_word = "Scanmask";
    }

    // Filter is on visualizer
    push();
    translate(fv_x, 15);
    fill('rgba(191, 225, 255, 0.3)');
    stroke(153, 207, 255);
    strokeWeight(2);
    rectMode(CENTER);
    rect(1, 1, fv_dist, 30, 5, 5, 5, 5);
    fill(255);
    textAlign(CENTER);
    stroke('rgba(0, 0, 0, 0.4)');
    strokeWeight(1.5);
    textSize(18);
    textFont('Helvetica');
    text(fv_word, 0, 5);
    pop();

}