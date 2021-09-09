function Pikachu(rightEyeU, leftEyeU, rightEyeL, leftEyeL, lipsLower, lipsUpper, nose, dia, faceDia, face, filterCount) {
    push();
    imageMode(CENTER);
    image(pikaRightEarImg, rightEyeU.x - 60, rightEyeU.y - 125, faceDia/2.5 + 15, faceDia/2.5 + 50);
    pop();

    push();
    imageMode(CENTER);
    image(pikaLeftEarImg, leftEyeU.x + 60, leftEyeU.y - 125, faceDia/2.5 + 15, faceDia/2.5 + 50);
    pop();

    push();
    fill(253, 220, 0);
    noStroke();
    ellipse(nose.x, nose.y - 30, faceDia + 15, faceDia);
    pop();

    push();
    fill(236, 28, 36);
    noStroke();
    ellipse(rightEyeU.x - 50, rightEyeU.y + 20, dia*1.8 - 10, dia*1.8 - 10);
    ellipse(leftEyeU.x + 50, leftEyeU.y + 20, dia*1.8 - 10, dia*1.8 - 10);
    pop();

    push();
    imageMode(CENTER);
    image(pikaNoseImg, nose.x, nose.y - 20, faceDia/8, faceDia/8);
    pop();

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
        noStroke();
        smooth();
        vertex(pt.x, pt.y);
    }
    endShape(CLOSE);

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
        stroke("black");
        fill(252, 197, 219);
        noStroke();

        // Removes old thunder if open eyes
        thunders.shift();
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
        
        // Pikachu Thunder

        let thunder = new Thunder();
        if (thunders.length === 0) {
            thunders.push(thunder);
        }
        thunders[0].show();


    } else if (leftEyeL.y - leftEyeU.y <= 5) {

        fill(0);
        noStroke();
        ellipse(rightEyeU.x - 15, rightEyeU.y - 30, dia*1.7 - 10, dia*2 - 10);
        fill(255);
        noStroke();
        ellipse(rightEyeU.x - 12, rightEyeU.y - 44, dia - 10, dia - 10);

        new Wink(leftEyeU, rightEyeU, false);

        // Removes old thunder if open eyes
        thunders.shift();

    } else if (rightEyeL.y - rightEyeU.y <= 5) {
        
        fill(0);
        noStroke();
        ellipse(leftEyeU.x + 15, leftEyeU.y - 30, dia*1.7 - 10, dia*2 - 10);
        fill(255);
        noStroke();
        ellipse(leftEyeU.x + 18, leftEyeU.y - 44, dia - 10, dia - 10);

        new Wink(leftEyeU, rightEyeU, true);

        // Removes old thunder if open eyes
        thunders.shift();
    }

    if (lipsLower.y - lipsUpper.y > 30 ) {
        fill("white");
        noStroke();

        x = lipsLower.x + 250;
        y = lipsLower.y - 150;

        noStroke();
        ketchupPts = [{x, y}];

        for (let i = 0; i < ketchupPts.length; i++) {
            let pt = ketchupPts[i];
            let ketchup = new Ketchup(pt.x, pt.y);
            ketchups.push(ketchup);
            if (ketchups.length > 1) {
                ketchups.shift(ketchup);
            }
        }

        for (let i = 0; i < ketchups.length; i++) {
            let k = ketchups[i];
            k.show();
        }
    }

    new FilterVis(filterCount);

}