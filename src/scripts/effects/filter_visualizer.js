let fv_x;
let fv_dist;
let fv_word;
let fv_color1;
let fv_color2;
let filter_pos = [0, 52, 157, 262, 367, 472]
// let count = 0;

function filter_loop(filterpos) {
    // debugger
    for (let i = 0; i < filterpos; i++) {
        fv_x = filter_pos[i];
        translate(fv_x, 17);
    }
}

function filter_count(position) {
    filter_loop(position);
    // if (position === 0) {
    //     filter_loop(position);
    // } else if (position === 1) {
    //     filter_loop(position);
    // } else if (position === 2) {
    //     filter_loop(position);
    // } else if (position === 3) {
    //     filter_loop(position);
    // } else if (position === 4) {
    //     filter_loop(position);
    // } else if (position === 5) {
    //     filter_loop(position);
    // }
}

function filter_vis(filter, position) {
    
    // Looping through filters, 9 in total
    // for (let i = 0; i < 9, i++) {
    // }

    if (filter === "scanmask") {
        // filter_count(position);
        // fv_x = 52;
        fv_dist = 110;
        fv_word = "Scanmask";
        fv_color1 = 'rgba(191, 225, 255, 0.3)';
        fv_color2 = 'rgb(153, 207, 255)';
    }

    if (filter === "pacman") {
        // filter_count(position);
        // fv_x = 52;
        fv_dist = 110;
        fv_word = "Pacman";
        fv_color1 = 'rgba(255, 245, 140, 0.3)';
        fv_color2 = 'rgb(229, 214, 75)';
    }

    if (filter === "kirby") {
        // filter_count(position);
        // fv_x = 52;
        fv_dist = 110;
        fv_word = "Kirby";
        fv_color1 = 'rgba(255, 186, 212, 0.3)';
        fv_color2 = 'rgb(234, 140, 176)';
    }

    if (filter === "pikachu") {
        // filter_count(position);
        // fv_x = 52;
        fv_dist = 110;
        fv_word = "Pikachu";
        fv_color1 = 'rgba(255, 228, 165, 0.3)';
        fv_color2 = 'rgb(219, 179, 87)';
    }

    if (filter === "hitbox") {
        // filter_count(position);
        // fv_x = 145;
        fv_dist = 110;
        fv_word = "Hitbox";
        fv_color1 = 'rgba(132, 255, 181, 0.3)';
        fv_color2 = 'rgb(74, 206, 125)';
    }

    if (filter === "pretty") {
        // filter_count(position);
        // fv_x = 222;
        fv_dist = 110;
        fv_word = "Pretty";
        fv_color1 = 'rgba(132, 255, 181, 0.3)';
        fv_color2 = 'rgb(74, 206, 125)';
    }

    if (filter === "mustache") {
        // filter_count(position);
        // fv_x = 314;
        fv_dist = 110;
        fv_word = "Mustache";
        fv_color1 = 'rgba(132, 255, 181, 0.3)';
        fv_color2 = 'rgb(74, 206, 125)';
    }

    if (filter === "glasses") {
        // filter_count(position);
        // fv_x = 416;
        fv_dist = 110;
        fv_word = "Glasses";
        fv_color1 = 'rgba(132, 255, 181, 0.3)';
        fv_color2 = 'rgb(74, 206, 125)';
    }

    // Filter is on visualizer
    push();
    filter_count(position);
    // translate(fv_x, 17);
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