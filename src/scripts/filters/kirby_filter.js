function Kirby(rightEyeU, leftEyeU, rightEyeL, leftEyeL, lipsLower, lipsUpper, nose, dia, faceDia, face, filterCount) {
    fill(252, 197, 219);
    noStroke();
    ellipse(nose.x, nose.y - 20, faceDia + 20, faceDia + 30);

    fill(249, 136, 189);
    noStroke();
    ellipse(rightEyeU.x - 40, rightEyeU.y + 35, dia*1.7, (dia/2));
    ellipse(leftEyeU.x + 40, leftEyeU.y + 35, dia*1.7, (dia/2));

    let mouth = [];
    for (let pt of face.annotations.lipsUpperInner) {
        pt = scaleCoord(pt);
        pt.y -= 20;
        mouth.push(pt);
    }
    for (let pt of face.annotations.lipsLowerInner) {
        pt = scaleCoord(pt);
        pt.y -= 20;
        mouth.push(pt);
    }

    fill(247,99,96);
    beginShape();
    for (let pt of mouth) {
        noStroke();
        smooth();
        vertex(pt.x, pt.y);
    }
    endShape(CLOSE);

    // Kirby Eye Blinking
    if (rightEyeL.y - rightEyeU.y > 5 && leftEyeL.y - leftEyeU.y > 5) {
        fill(0);
        noStroke();
        ellipse(rightEyeU.x, rightEyeU.y - 25, dia, (dia*2.5));
        ellipse(leftEyeU.x, leftEyeU.y - 25, dia, (dia*2.5));
        fill(255);
        noStroke();
        ellipse(rightEyeU.x, rightEyeU.y - 45, dia/1.75, (dia));
        ellipse(leftEyeU.x, leftEyeU.y - 45, dia/1.75, (dia));
        stroke("black");
        fill(252, 197, 219);
        noStroke();
    } else if (rightEyeL.y - rightEyeU.y <= 5 && leftEyeL.y - leftEyeU.y <= 5) {
        noFill();
        strokeWeight(5);
        stroke("black");
        curve(
            rightEyeU.x + 15, rightEyeU.y + 85,
            rightEyeU.x + 15, rightEyeU.y - 10,
            rightEyeU.x - 35, rightEyeU.y - 20,
            rightEyeU.x - 45, rightEyeU.y + 70
        );
        curve(
            leftEyeU.x + 40, leftEyeU.y + 70,
            leftEyeU.x + 40, leftEyeU.y - 20,
            leftEyeU.x - 10, leftEyeU.y - 10,
            leftEyeU.x - 20, leftEyeU.y + 85
        );
        
        // Kirby Sleep

        x = rightEyeU.x + 150;
        y = rightEyeU.y - 150;
        if (zzzs.length === 0) {
            zzzs.push(new Zzz(x,y));
        }
        zzzs[0].show();
        zzzs[0].update();
        zzzs[0].behaviors();

    } else if (leftEyeL.y - leftEyeU.y <= 5) {

        fill(0);
        noStroke();
        ellipse(rightEyeU.x, rightEyeU.y - 25, dia, (dia*2.5));
        fill(255);
        noStroke();
        ellipse(rightEyeU.x, rightEyeU.y - 45, dia/1.75, (dia));

        new Wink(leftEyeU, rightEyeU, false);

    } else if (rightEyeL.y - rightEyeU.y <= 5) {

        fill(0);
        noStroke();
        ellipse(leftEyeU.x, leftEyeU.y - 25, dia, (dia*2.5));
        fill(255);
        noStroke();
        ellipse(leftEyeU.x, leftEyeU.y - 45, dia/1.75, (dia));

        new Wink(leftEyeU, rightEyeU, true);

    }

    if (lipsLower.y - lipsUpper.y > 30 ) {
        fill("white");
        noStroke();

        x = lipsLower.x;
        y = lipsLower.y - 50;

        noStroke();
        dustPts = [{x, y}, {x, y}];

        for (let i = 0; i < dustPts.length; i++) {
        let pt = dustPts[i];
        let dust = new Dust(pt.x, pt.y);
        dusts.push(dust);
            if (dusts[0].size < 1) {
                dusts.shift(dust);
            }
        }

        for (let i = 0; i < dusts.length; i++) {
        let d = dusts[i];
        d.update();
        d.show();
        d.behaviors();
        }
    }

    new FilterVis(filterCount);

}