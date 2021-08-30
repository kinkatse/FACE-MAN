let eye;
let eye_dist1;
let eye_dist2;
let eye_dist3;
let eye_dist4;
let eye_dist5;
let eye_dist6;
let eye_dist7;
let eye_dist8;

// The eye is the closed eye by setting left to true or not
// when calling this to indicate which eye is closed
function Wink(leftEyeU, rightEyeU, left) {

    if (pikachuFilter) {
        if (left) {
            eye = rightEyeU;
            eye_dist1 = 15;
            eye_dist2 = 80;
            eye_dist3 = 15;
            eye_dist4 = -15;
            eye_dist5 = -35;
            eye_dist6 = -25;
            eye_dist7 = -45;
            eye_dist8 = 65;
        } else if (!left) {
            eye = leftEyeU;
            eye_dist1 = 40;
            eye_dist2 = 65;
            eye_dist3 = 40;
            eye_dist4 = -25;
            eye_dist5 = -10;
            eye_dist6 = -15;
            eye_dist7 = -20;
            eye_dist8 = 80;
        }
    } else if (kirbyFilter) {
        if (left) {
            eye = rightEyeU;
            eye_dist1 = 15;
            eye_dist2 = 85;
            eye_dist3 = 15;
            eye_dist4 = -10;
            eye_dist5 = -35;
            eye_dist6 = -20;
            eye_dist7 = -45;
            eye_dist8 = 70;
        } else if (!left) {
            eye = leftEyeU;
            eye_dist1 = 40;
            eye_dist2 = 70;
            eye_dist3 = 40;
            eye_dist4 = -20;
            eye_dist5 = -10;
            eye_dist6 = -10;
            eye_dist7 = -20;
            eye_dist8 = 85;
        }
    } else if (pacmanFilter) {
        if (left) {
            eye = rightEyeU;
            eye_dist1 = 5;
            eye_dist2 = -65;
            eye_dist3 = 15;
            eye_dist4 = -10;
            eye_dist5 = -15;
            eye_dist6 = -20;
            eye_dist7 = 15;
            eye_dist8 = -10;
        } else if (!left) {
            eye = leftEyeU;
            eye_dist1 = 5;
            eye_dist2 = -65;
            eye_dist3 = -15;
            eye_dist4 = -10;
            eye_dist5 = 15;
            eye_dist6 = -20;
            eye_dist7 = -15;
            eye_dist8 = -10;
        }
    }

    // Pacman hsa different winking eyes than others
    push();
    if (pacmanFilter) {
        push();
        fill(0);
        strokeWeight(5);
        stroke("black");
        line(eye.x + eye_dist1,
            eye.y + eye_dist2,
            eye.x + eye_dist3,
            eye.y + eye_dist4);
        line(eye.x + eye_dist5,
             eye.y + eye_dist6,
             eye.x + eye_dist7,
             eye.y + eye_dist8);
        pop();
    } else {
        push();
        noFill();
        strokeWeight(5);
        stroke("black");
        curve(
            eye.x + eye_dist1,
            eye.y + eye_dist2,
            eye.x + eye_dist3,
            eye.y + eye_dist4,
            eye.x + eye_dist5,
            eye.y + eye_dist6,
            eye.x + eye_dist7,
            eye.y + eye_dist8
        );
        pop();
    }

    // Target location of hearts
    x = eye.x + 100;
    y = eye.y - 50;

    // Hearts
    noStroke();
    heartpts = [{x, y}];

    for (let i = 0; i < heartpts.length; i++) {
        let pts = heartpts[i];
        let heart = new Heart(pts.x, pts.y);
        hearts.push(heart);
        if (hearts[0].opacity < 1) {
            hearts.shift(heart);
        }
        // if (hearts.length > 15) {
        //     hearts.pop(heart);
        // }
    }

    for (let i = 0; i < hearts.length; i++) {
        let h = hearts[i];
        h.update();
        h.show();
        h.behaviors();
    }
    pop();
}