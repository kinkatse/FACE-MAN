function Pikachu(rightEyeU, leftEyeU, rightEyeL, leftEyeL, lipsLower, lipsUpper, nose, dia, facedia, face) {
    push();
    imageMode(CENTER);
    image(pikarightear, rightEyeU.x - 60, rightEyeU.y - 125, facedia/2.5 + 15, facedia/2.5 + 50);
    pop();

    push();
    imageMode(CENTER);
    image(pikaleftear, leftEyeU.x + 60, leftEyeU.y - 125, facedia/2.5 + 15, facedia/2.5 + 50);
    pop();

    push();
    fill(253, 220, 0);
    noStroke();
    ellipse(nose.x, nose.y - 30, facedia + 15, facedia);
    pop();

    push();
    fill(236, 28, 36);
    noStroke();
    ellipse(rightEyeU.x - 50, rightEyeU.y + 20, dia*1.8 - 10, dia*1.8 - 10);
    ellipse(leftEyeU.x + 50, leftEyeU.y + 20, dia*1.8 - 10, dia*1.8 - 10);
    pop();

    push();
    imageMode(CENTER);
    image(pikanose, nose.x, nose.y - 20, facedia/8, facedia/8);
    pop();

    // Pikachu Eye Blinking
    if (rightEyeL.y - rightEyeU.y > 5 && leftEyeL.y - leftEyeU.y > 5) {
        fill(0);
        noStroke();
        ellipse(rightEyeU.x - 15, rightEyeU.y - 30, dia*1.7 - 10, dia*2 - 10);
        ellipse(leftEyeU.x + 15, leftEyeU.y - 30, dia*1.7 - 10, dia*2 - 10);
        fill(255);
        noStroke();
        ellipse(rightEyeU.x - 12, rightEyeU.y - 44, dia - 10, dia - 10);
        ellipse(leftEyeU.x + 18, leftEyeU.y - 44, dia - 10, dia - 10);
        // circle(rightEyeU.x, rightEyeU.y, dia);
        // circle(leftEyeU.x, leftEyeU.y, dia);
        stroke("black");
        // curve(rightEyeU.x, rightEyeU.y, rightEyeU.x - 10, rightEyeU.y - 10, rightEyeU.x - 30, rightEyeU.y - 30, rightEyeU.x - 40, rightEyeU.y + 50);
        fill(252, 197, 219);
        noStroke();
        } else if (rightEyeL.y - rightEyeU.y <= 5 && leftEyeL.y - leftEyeU.y <= 5) {
        noFill();
        strokeWeight(5);
        stroke("black");
        curve(
            rightEyeU.x + 15, rightEyeU.y + 80,
            rightEyeU.x + 15, rightEyeU.y - 15,
            rightEyeU.x - 35, rightEyeU.y - 25,
            rightEyeU.x - 45, rightEyeU.y + 65
        );
        curve(
            leftEyeU.x + 40, leftEyeU.y + 65,
            leftEyeU.x + 40, leftEyeU.y - 25,
            leftEyeU.x - 10, leftEyeU.y - 15,
            leftEyeU.x - 20, leftEyeU.y + 80
        );
        // line(rightEyeU.x, rightEyeU.y - 35, rightEyeU.x + 5, rightEyeU.y - 65);
        // curve(5, 26, 5, 50, 73, 24, 73, 61);
        // curve(x1, y1, x2, y2, x3, y3, x4, y4);

        let mouth = [];
        for (let pt of face.annotations.lipsUpperInner) {
            pt = scaleCoord(pt);
            pt.y -= 35;
            mouth.push(pt);
        }
        for (let pt of face.annotations.lipsLowerInner) {
            pt = scaleCoord(pt);
            pt.y -= 35;
            mouth.push(pt);
        }

        fill(247,99,96);
        beginShape();
        for (let pt of mouth) {
            // stroke("black");
            // strokeWeight(2);
            noStroke();
            smooth();
            vertex(pt.x, pt.y);
        }
        endShape(CLOSE);
        
        // Pikachu Sleep

        x = 500;
        y = 175;

        noStroke();
        zzzpts = [{x, y}];

        for (let i = 0; i < zzzpts.length; i++) {
            let pts = zzzpts[i];
            let zzz = new Zzz(pts.x, pts.y);
            zzzs.push(zzz);
            // if (zzzs[0].opacity < 1) {
            //     zzzs.shift(zzz);
            // }
            if (zzzs.length > 50) {
                zzzs.pop(zzz);
            }
        }

        for (let i = 0; i < zzzs.length; i++) {
            let z = zzzs[i];
            z.update();
            z.show();
            z.behaviors();
            // if (zzzs.length > 15) {
            //   zzzs.shift();
            // }
        }

        } else if (leftEyeL.y - leftEyeU.y <= 5) {
        fill(0);
        noStroke();
        ellipse(rightEyeU.x - 15, rightEyeU.y - 30, dia*1.7 - 10, dia*2 - 10);
        fill(255);
        noStroke();
        ellipse(rightEyeU.x - 12, rightEyeU.y - 44, dia - 10, dia - 10);

        noFill();
        strokeWeight(5);
        stroke("black");
        curve(
            leftEyeU.x + 40, leftEyeU.y + 65,
            leftEyeU.x + 40, leftEyeU.y - 25,
            leftEyeU.x - 10, leftEyeU.y - 15,
            leftEyeU.x - 20, leftEyeU.y + 80
        );

        let mouth = [];
        for (let pt of face.annotations.lipsUpperInner) {
            pt = scaleCoord(pt);
            pt.y -= 35;
            mouth.push(pt);
        }
        for (let pt of face.annotations.lipsLowerInner) {
            pt = scaleCoord(pt);
            pt.y -= 35;
            mouth.push(pt);
        }

        fill(247,99,96);
        beginShape();
        for (let pt of mouth) {
            // stroke("black");
            // strokeWeight(2);
            noStroke();
            smooth();
            vertex(pt.x, pt.y);
        }
        endShape(CLOSE);
        
        // Pikachu Wink

        x = leftEyeU.x + 108;
        y = leftEyeU.y - 45;

        noStroke();
        heartpts = [{x, y}];

        for (let i = 0; i < heartpts.length; i++) {
            let pts = heartpts[i];
            let heart = new Heart(pts.x, pts.y);
            hearts.push(heart);
            // if (hearts[0].opacity < 1) {
            //     hearts.shift(heart);
            // }
            if (hearts.length > 15) {
                hearts.pop(heart);
            }
        }

        for (let i = 0; i < hearts.length; i++) {
            let h = hearts[i];
            h.update();
            h.show();
            h.behaviors();
            // if (hearts.length > 15) {
            //   hearts.shift();
            // }
        }

        } else if (rightEyeL.y - rightEyeU.y <= 5) {
        fill(0);
        noStroke();
        ellipse(leftEyeU.x + 15, leftEyeU.y - 30, dia*1.7 - 10, dia*2 - 10);
        fill(255);
        noStroke();
        ellipse(leftEyeU.x + 18, leftEyeU.y - 44, dia - 10, dia - 10);

        noFill();
        strokeWeight(5);
        stroke("black");
        curve(
            rightEyeU.x + 15, rightEyeU.y + 80,
            rightEyeU.x + 15, rightEyeU.y - 15,
            rightEyeU.x - 35, rightEyeU.y - 25,
            rightEyeU.x - 45, rightEyeU.y + 65
        );

        let mouth = [];
        for (let pt of face.annotations.lipsUpperInner) {
            pt = scaleCoord(pt);
            pt.y -= 35;
            mouth.push(pt);
        }
        for (let pt of face.annotations.lipsLowerInner) {
            pt = scaleCoord(pt);
            pt.y -= 35;
            mouth.push(pt);
        }

        fill(247,99,96);
        beginShape();
        for (let pt of mouth) {
            // stroke("black");
            // strokeWeight(2);
            noStroke();
            smooth();
            vertex(pt.x, pt.y);
        }
        endShape(CLOSE);
        
        // Pikachu Wink

        x = leftEyeU.x + 108;
        y = leftEyeU.y - 45;

        noStroke();
        heartpts = [{x, y}];

        for (let i = 0; i < heartpts.length; i++) {
            let pts = heartpts[i];
            let heart = new Heart(pts.x, pts.y);
            hearts.push(heart);
            // if (hearts[0].opacity < 1) {
            //     hearts.shift(heart);
            // }
            if (hearts.length > 15) {
                hearts.pop(heart);
            }
        }

        for (let i = 0; i < hearts.length; i++) {
            let h = hearts[i];
            h.update();
            h.show();
            h.behaviors();
            // if (hearts.length > 15) {
            //   hearts.shift();
            // }
        }

        }
    

    let mouth = [];
    for (let pt of face.annotations.lipsUpperInner) {
        pt = scaleCoord(pt);
        pt.y -= 35;
        mouth.push(pt);
    }
    for (let pt of face.annotations.lipsLowerInner) {
        pt = scaleCoord(pt);
        pt.y -= 35;
        mouth.push(pt);
    }

    fill(247,99,96);
    beginShape();
    for (let pt of mouth) {
        // stroke("black");
        // strokeWeight(2);
        noStroke();
        smooth();
        vertex(pt.x, pt.y);
    }
    endShape(CLOSE);

    if (lipsLower.y - lipsUpper.y > 30 ) {
        fill("white");
        noStroke();
        // ellipse(x, y, 10, 10);

        x = lipsLower.x;
        y = lipsLower.y - 50;

        noStroke();
        points = [{x, y}, {x, y}];

        for (let i = 0; i < points.length; i++) {
        let pt = points[i];
        let dust = new Dust(pt.x, pt.y);
        dusts.push(dust);
        if (dusts[0].size < 1) {
            dusts.shift(dust);
        }
        }

        for (let i = 0; i < dusts.length; i++) {
        let v = dusts[i];
        v.update();
        v.show();
        v.behaviors();
        }
    }
}