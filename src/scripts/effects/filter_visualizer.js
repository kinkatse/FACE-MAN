let fv_x;
let fv_dist;
let fv_word;
let fv_color1;
let fv_color2;
// let count = 0;

function filter_vis(filter) {
    
    // Looping through filters, 9 in total
    // for (let i = 0; i < 9, i++) {

    // }
    if (filtercount === 0) {
        fv_x = 52;
    } else if (filtercount === 1) {
        fv_x = 157;
    } else if (filtercount === 2) {
        fv_x = 262;
    } else if (filtercount === 3) {
        fv_x = 367;
    } else if (filtercount === 4) {
        fv_x = 472;
    } else if (filtercount === 5) {
        fv_x = 577;
    }

    if (filter === "scanmask") {
        // fv_x = 52;
        fv_dist = 110;
        fv_word = "Scanmask";
        fv_color1 = 'rgba(191, 225, 255, 0.3)';
        fv_color2 = 'rgb(153, 207, 255)';
    }

    if (filter === "pacman") {
        // fv_x = 52;
        fv_dist = 110;
        fv_word = "Pacman";
        fv_color1 = 'rgba(255, 245, 140, 0.3)';
        fv_color2 = 'rgb(229, 214, 75)';
    }

    if (filter === "kirby") {
        // fv_x = 52;
        fv_dist = 110;
        fv_word = "Kirby";
        fv_color1 = 'rgba(255, 186, 212, 0.3)';
        fv_color2 = 'rgb(234, 140, 176)';
    }

    if (filter === "pikachu") {
        // fv_x = 52;
        fv_dist = 110;
        fv_word = "Pikachu";
        fv_color1 = 'rgba(255, 228, 165, 0.3)';
        fv_color2 = 'rgb(219, 179, 87)';
    }

    if (filter === "hitbox") {
        // fv_x = 145;
        fv_dist = 110;
        fv_word = "Hitbox";
        fv_color1 = 'rgba(132, 255, 181, 0.3)';
        fv_color2 = 'rgb(74, 206, 125)';
    }

    if (filter === "pretty") {
        // fv_x = 222;
        fv_dist = 110;
        fv_word = "Pretty";
        fv_color1 = 'rgba(132, 255, 181, 0.3)';
        fv_color2 = 'rgb(74, 206, 125)';
    }

    if (filter === "mustache") {
        // fv_x = 314;
        fv_dist = 110;
        fv_word = "Mustache";
        fv_color1 = 'rgba(132, 255, 181, 0.3)';
        fv_color2 = 'rgb(74, 206, 125)';
    }

    if (filter === "glasses") {
        // fv_x = 416;
        fv_dist = 110;
        fv_word = "Glasses";
        fv_color1 = 'rgba(132, 255, 181, 0.3)';
        fv_color2 = 'rgb(74, 206, 125)';
    }

    // Filter is on visualizer
    push();
    translate(fv_x, 17);
    fill(fv_color1);
    stroke(fv_color2);
    strokeWeight(2);
    rectMode(CENTER);
    rect(1, 1, fv_dist, 30, 5, 5, 5, 5);
    fill(255);
    textAlign(CENTER);
    stroke('rgba(0, 0, 0, 0.4)');
    strokeWeight(1.5);
    textSize(18);
    textFont('Helvetica');
    text(fv_word, 0, 7);
    pop();

}