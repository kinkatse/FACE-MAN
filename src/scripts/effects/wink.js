let eye;
let eyeDist1;
let eyeDist2;
let eyeDist3;
let eyeDist4;
let eyeDist5;
let eyeDist6;
let eyeDist7;
let eyeDist8;

// The eye is the closed eye by setting left to true or not
// when calling this to indicate which eye is closed
function Wink(leftEyeU, rightEyeU, left) {

    if (pikachuFilter) {
        if (left) {
            eye = rightEyeU;
            eyeDist1 = 15;
            eyeDist2 = 80;
            eyeDist3 = 15;
            eyeDist4 = -15;
            eyeDist5 = -35;
            eyeDist6 = -25;
            eyeDist7 = -45;
            eyeDist8 = 65;
        } else if (!left) {
            eye = leftEyeU;
            eyeDist1 = 40;
            eyeDist2 = 65;
            eyeDist3 = 40;
            eyeDist4 = -25;
            eyeDist5 = -10;
            eyeDist6 = -15;
            eyeDist7 = -20;
            eyeDist8 = 80;
        }
    } else if (kirbyFilter) {
        if (left) {
            eye = rightEyeU;
            eyeDist1 = 15;
            eyeDist2 = 85;
            eyeDist3 = 15;
            eyeDist4 = -10;
            eyeDist5 = -35;
            eyeDist6 = -20;
            eyeDist7 = -45;
            eyeDist8 = 70;
        } else if (!left) {
            eye = leftEyeU;
            eyeDist1 = 40;
            eyeDist2 = 70;
            eyeDist3 = 40;
            eyeDist4 = -20;
            eyeDist5 = -10;
            eyeDist6 = -10;
            eyeDist7 = -20;
            eyeDist8 = 85;
        }
    } else if (pacmanFilter) {
        if (left) {
            eye = rightEyeU;
            eyeDist1 = 5;
            eyeDist2 = -65;
            eyeDist3 = 15;
            eyeDist4 = -10;
            eyeDist5 = -15;
            eyeDist6 = -20;
            eyeDist7 = 15;
            eyeDist8 = -10;
        } else if (!left) {
            eye = leftEyeU;
            eyeDist1 = 5;
            eyeDist2 = -65;
            eyeDist3 = -15;
            eyeDist4 = -10;
            eyeDist5 = 15;
            eyeDist6 = -20;
            eyeDist7 = -15;
            eyeDist8 = -10;
        }
    }

    // Pacman has different winking eyes than others
    push();
    if (pacmanFilter) {
        push();
        fill(0);
        strokeWeight(5);
        stroke("black");
        line(eye.x + eyeDist1,
            eye.y + eyeDist2,
            eye.x + eyeDist3,
            eye.y + eyeDist4);
        line(eye.x + eyeDist5,
             eye.y + eyeDist6,
             eye.x + eyeDist7,
             eye.y + eyeDist8);
        pop();
    } else {
        push();
        noFill();
        strokeWeight(5);
        stroke("black");
        curve(
            eye.x + eyeDist1,
            eye.y + eyeDist2,
            eye.x + eyeDist3,
            eye.y + eyeDist4,
            eye.x + eyeDist5,
            eye.y + eyeDist6,
            eye.x + eyeDist7,
            eye.y + eyeDist8
        );
        pop();
    }

    // Target location of hearts
    x = eye.x + 100;
    y = eye.y - 50;

    // Hearts
    noStroke();
    heartPts = [{x, y}];

    for (let i = 0; i < heartPts.length; i++) {
        let pts = heartPts[i];
        let heart = new Heart(pts.x, pts.y);
        hearts.push(heart);
        if (hearts[0].opacity < 1) {
            hearts.shift(heart);
        }
    }

    for (let i = 0; i < hearts.length; i++) {
        let h = hearts[i];
        h.update();
        h.show();
        h.behaviors();
    }
    pop();
}