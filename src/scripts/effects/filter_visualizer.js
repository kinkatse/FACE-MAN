let fv_x;
let fv_dist;
let fv_word;
let fv_color = 'rgba(132, 255, 181, 0.3)';

function filter_vis(filter) {

    if (filter === "scanmask") {
        fv_x = 50;
        fv_dist = 100;
        fv_word = "Scanmask";
        fv_color = 'rgba(191, 225, 255, 0.3)';
    }

    if (filter === "pacman") {
        fv_x = 50;
        fv_dist = 100;
        fv_word = "Pacman";
        fv_color = 'rgba(255, 245, 140, 0.3)';
    }

    if (filter === "kirby") {
        fv_x = 50;
        fv_dist = 100;
        fv_word = "Kirby";
        fv_color = 'rgba(255, 186, 212, 0.3)';
    }

    if (filter === "pikachu") {
        fv_x = 50;
        fv_dist = 100;
        fv_word = "Pikachu";
        fv_color = 'rgba(255, 228, 165, 0.3)';
    }

    if (filter === "hitbox") {
        fv_x = 50;
        fv_dist = 70;
        fv_word = "Hitbox";
    }

    if (filter === "pretty") {
        fv_x = 126;
        fv_dist = 100;
        fv_word = "Pretty";
    }

    if (filter === "mustache") {
        fv_x = 126;
        fv_dist = 100;
        fv_word = "Mustache";
    }

    if (filter === "glasses") {
        fv_x = 126;
        fv_dist = 100;
        fv_word = "Glasses";
    }

    // Filter is on visualizer
    push();
    translate(fv_x, 15);
    fill(fv_color);
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