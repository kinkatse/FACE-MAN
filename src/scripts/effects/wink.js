let open_eye;
let closed_eye;
// let open_eye_dist1;
// let open_eye_dist2;
let closed_eye_dist1;
let closed_eye_dist2;
let closed_eye_dist3;
let closed_eye_dist4;
let closed_eye_dist5;
let closed_eye_dist6;
let closed_eye_dist7;
let closed_eye_dist8;

function Wink(leftEyeU, rightEyeU, left) {

    if (pikachuFilter) {
        if (left) {
            open_eye = leftEyeU;
            closed_eye = rightEyeU;
            // open_eye_dist1 = 15;
            // open_eye_dist2 = 18;
            closed_eye_dist1 = 15;
            closed_eye_dist2 = 80;
            closed_eye_dist3 = 15;
            closed_eye_dist4 = -15;
            closed_eye_dist5 = -35;
            closed_eye_dist6 = -25;
            closed_eye_dist7 = -45;
            closed_eye_dist8 = 65;
        } else if (!left) {
            open_eye = rightEyeU;
            closed_eye = leftEyeU;
            // open_eye_dist1 = -15;
            // open_eye_dist2 = -12;
            closed_eye_dist1 = 40;
            closed_eye_dist2 = 65;
            closed_eye_dist3 = 40;
            closed_eye_dist4 = -25;
            closed_eye_dist5 = -10;
            closed_eye_dist6 = -15;
            closed_eye_dist7 = -20;
            closed_eye_dist8 = 80;
        }
    } else if (kirbyFilter) {
        if (left) {
            open_eye = leftEyeU;
            closed_eye = rightEyeU;
            // open_eye_dist1 = -25;
            // open_eye_dist2 = 18;
            closed_eye_dist1 = 15;
            closed_eye_dist2 = 85;
            closed_eye_dist3 = 15;
            closed_eye_dist4 = -10;
            closed_eye_dist5 = -35;
            closed_eye_dist6 = -20;
            closed_eye_dist7 = -45;
            closed_eye_dist8 = 70;
        } else if (!left) {
            open_eye = rightEyeU;
            closed_eye = leftEyeU;
            // open_eye_dist1 = -15;
            // open_eye_dist2 = -12;
            closed_eye_dist1 = 40;
            closed_eye_dist2 = 70;
            closed_eye_dist3 = 40;
            closed_eye_dist4 = -20;
            closed_eye_dist5 = -10;
            closed_eye_dist6 = -10;
            closed_eye_dist7 = -20;
            closed_eye_dist8 = 85;
        }
    }

    push();
    noFill();
    strokeWeight(5);
    stroke("black");
    curve(
        closed_eye.x + closed_eye_dist1, closed_eye.y + closed_eye_dist2,
        closed_eye.x + closed_eye_dist3, closed_eye.y + closed_eye_dist4,
        closed_eye.x + closed_eye_dist5, closed_eye.y + closed_eye_dist6,
        closed_eye.x + closed_eye_dist7, closed_eye.y + closed_eye_dist8
    );
    
    // Hearts
    x = open_eye.x + 108;
    y = open_eye.y - 45;

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