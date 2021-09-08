let fv_x;
let fv_dist;
let fv_word;
let fv_color1;
let fv_color2;
let filter_pos = [0, 52, 157, 262, 367, 472]
// let count = 0;

function filter_count(positions, fv_color1, fv_color2, fv_dist, fv_word) {
    // debugger
    for (let i = 0; i < positions.length; i++) {
        if (positions[i] === "scanmask") {
            fv_dist = 110;
            fv_word = "Scanmask";
            fv_color1 = 'rgba(191, 225, 255, 1)';
            fv_color2 = 'rgb(153, 207, 255)';
            fv_x = filter_pos[i];
            new Filter_pos(fv_x, fv_color1, fv_color2, fv_dist, fv_word);
        } else if (positions[i] === "pacman") {
            fv_dist = 110;
            fv_word = "Pacman";
            fv_color1 = 'rgba(255, 245, 140, 1)';
            fv_color2 = 'rgb(229, 214, 75)';
            fv_x = filter_pos[i];
            new Filter_pos(fv_x, fv_color1, fv_color2, fv_dist, fv_word);
        } else if (positions[i] === "kirby") {
            fv_dist = 110;
            fv_word = "Kirby";
            fv_color1 = 'rgba(255, 186, 212, 1)';
            fv_color2 = 'rgb(234, 140, 176)';
            fv_x = filter_pos[i];
            new Filter_pos(fv_x, fv_color1, fv_color2, fv_dist, fv_word);
        } else if (positions[i] === "pikachu") {
            fv_dist = 110;
            fv_word = "Pikachu";
            fv_color1 = 'rgba(255, 228, 165, 1)';
            fv_color2 = 'rgb(219, 179, 87)';
            fv_x = filter_pos[i];
            new Filter_pos(fv_x, fv_color1, fv_color2, fv_dist, fv_word);
        } else if (positions[i] === "hitbox") {
            fv_dist = 110;
            fv_word = "Hitbox";
            fv_color1 = 'rgba(132, 255, 181, 1)';
            fv_color2 = 'rgb(74, 206, 125)';
            fv_x = filter_pos[i];
            new Filter_pos(fv_x, fv_color1, fv_color2, fv_dist, fv_word);
        } else if (positions[i] === "pretty") {
            fv_dist = 110;
            fv_word = "Pretty";
            fv_color1 = 'rgba(132, 255, 181, 1)';
            fv_color2 = 'rgb(74, 206, 125)';
            fv_x = filter_pos[i];
            new Filter_pos(fv_x, fv_color1, fv_color2, fv_dist, fv_word);
        } else if (positions[i] === "mustache") {
            fv_dist = 110;
            fv_word = "Mustache";
            fv_color1 = 'rgba(132, 255, 181, 1)';
            fv_color2 = 'rgb(74, 206, 125)';
            fv_x = filter_pos[i];
            new Filter_pos(fv_x, fv_color1, fv_color2, fv_dist, fv_word);
        } else if (positions[i] === "glasses") {
            fv_dist = 110;
            fv_word = "Glasses";
            fv_color1 = 'rgba(132, 255, 181, 1)';
            fv_color2 = 'rgb(74, 206, 125)';
            fv_x = filter_pos[i];
            new Filter_pos(fv_x, fv_color1, fv_color2, fv_dist, fv_word);
        }
        // fv_x = filter_pos[i];
        // new Filter_pos(fv_x, fv_color1, fv_color2, fv_dist, fv_word);
    }
}

// function filter_count(positions) {
//     filter_loop(positions);
    // if (positions === 0) {
    //     filter_loop(positions);
    // } else if (positions === 1) {
    //     filter_loop(positions);
    // } else if (positions === 2) {
    //     filter_loop(positions);
    // } else if (positions === 3) {
    //     filter_loop(positions);
    // } else if (positions === 4) {
    //     filter_loop(positions);
    // } else if (positions === 5) {
    //     filter_loop(positions);
    // }
// }

function filter_vis(filter, positions) {
    
    // Looping through filters, 9 in total
    // for (let i = 0; i < 9, i++) {
    // }

    // if (filter === "scanmask") {
    //     // filter_count(positions);
    //     // fv_x = 52;
    //     fv_dist = 110;
    //     fv_word = "Scanmask";
    //     fv_color1 = 'rgba(191, 225, 255, 1)';
    //     fv_color2 = 'rgb(153, 207, 255)';
    // }

    // if (filter === "pacman") {
    //     // filter_count(positions);
    //     // fv_x = 52;
    //     fv_dist = 110;
    //     fv_word = "Pacman";
    //     fv_color1 = 'rgba(255, 245, 140, 1)';
    //     fv_color2 = 'rgb(229, 214, 75)';
    // }

    // if (filter === "kirby") {
    //     // filter_count(positions);
    //     // fv_x = 52;
    //     fv_dist = 110;
    //     fv_word = "Kirby";
    //     fv_color1 = 'rgba(255, 186, 212, 1)';
    //     fv_color2 = 'rgb(234, 140, 176)';
    // }

    // if (filter === "pikachu") {
    //     // filter_count(positions);
    //     // fv_x = 52;
    //     fv_dist = 110;
    //     fv_word = "Pikachu";
    //     fv_color1 = 'rgba(255, 228, 165, 1)';
    //     fv_color2 = 'rgb(219, 179, 87)';
    // }

    // if (filter === "hitbox") {
    //     // filter_count(positions);
    //     // fv_x = 145;
    //     fv_dist = 110;
    //     fv_word = "Hitbox";
    //     fv_color1 = 'rgba(132, 255, 181, 1)';
    //     fv_color2 = 'rgb(74, 206, 125)';
    // }

    // if (filter === "pretty") {
    //     // filter_count(positions);
    //     // fv_x = 222;
    //     fv_dist = 110;
    //     fv_word = "Pretty";
    //     fv_color1 = 'rgba(132, 255, 181, 1)';
    //     fv_color2 = 'rgb(74, 206, 125)';
    // }

    // if (filter === "mustache") {
    //     // filter_count(positions);
    //     // fv_x = 314;
    //     fv_dist = 110;
    //     fv_word = "Mustache";
    //     fv_color1 = 'rgba(132, 255, 181, 1)';
    //     fv_color2 = 'rgb(74, 206, 125)';
    // }

    // if (filter === "glasses") {
    //     // filter_count(positions);
    //     // fv_x = 416;
    //     fv_dist = 110;
    //     fv_word = "Glasses";
    //     fv_color1 = 'rgba(132, 255, 181, 1)';
    //     fv_color2 = 'rgb(74, 206, 125)';
    // }

    filter_count(positions, fv_color1, fv_color2, fv_dist, fv_word);
    // new Filter_pos(fv_x, fv_color1, fv_color2, fv_dist, fv_word);

    // Filter is on visualizer
    // push();
    // filter_count(positions);
    // translate(fv_x, 17);
    // fill(fv_color1);
    // stroke(fv_color2);
    // strokeWeight(2);
    // rectMode(CENTER);
    // rect(1, 1, fv_dist, 30, 5, 5, 5, 5);
    // fill(255);
    // textAlign(CENTER);
    // stroke('rgba(0, 0, 0, 0.4)');
    // strokeWeight(1.5);
    // textSize(18);
    // textFont('Helvetica');
    // text(fv_word, 0, 7);
    // pop();

}