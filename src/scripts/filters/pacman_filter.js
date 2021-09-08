function Pacman(rightEyeU, leftEyeU, rightEyeL, leftEyeL, lipsLower, lipsUpper, nose, dia, faceDia, face, filterCount) {

    fill("yellow");
    stroke("black");
    strokeWeight(3);
    triangle(
        rightEyeU.x + 60,
        rightEyeU.y - 80,
        rightEyeU.x,
        rightEyeU.y - 140,
        rightEyeU.x - 45,
        rightEyeU.y - 80
    );
    triangle(
        leftEyeU.x + 45,
        leftEyeU.y - 80,
        leftEyeU.x,
        leftEyeU.y - 140,
        leftEyeU.x - 60,
        leftEyeU.y - 80
    );

    fill("yellow");
    noStroke();
    ellipse(nose.x, nose.y - 20, faceDia + 20, faceDia + 30);

    fill("yellow")
    stroke("black");
    strokeWeight(2);
    ellipse(nose.x, nose.y - 15, dia, (dia + 5));

    let mouth = [];
    for (let pt of face.annotations.lipsUpperInner) {
        pt = scaleCoord(pt);
        pt.y -= 15;
        mouth.push(pt);
    }
    for (let pt of face.annotations.lipsLowerInner) {
        pt = scaleCoord(pt);
        pt.y -= 15;
        mouth.push(pt);
    }

    fill(80,0,0);
    beginShape();
    for (let pt of mouth) {
        noStroke();
        smooth();
        vertex(pt.x, pt.y);
    }
    endShape(CLOSE);

    // Pacman Eye Blinking
    if (rightEyeL.y - rightEyeU.y > 5 && leftEyeL.y - leftEyeU.y > 5) {
        fill(0);
        noStroke();
        ellipse(rightEyeU.x, rightEyeU.y - 40, dia, (dia*3));
        ellipse(leftEyeU.x, leftEyeU.y - 40, dia, (dia*3));

        fill("yellow");
        noStroke();
        triangle(
            rightEyeU.x - 40,
            rightEyeU.y - 20,
            rightEyeU.x,
            rightEyeU.y - 35,
            rightEyeU.x - 45,
            rightEyeU.y - 60
        );
        triangle(
            leftEyeU.x + 40,
            leftEyeU.y - 20,
            leftEyeU.x,
            leftEyeU.y - 35,
            leftEyeU.x + 45,
            leftEyeU.y - 60
        );
    } else if (rightEyeL.y - rightEyeU.y <= 5 && leftEyeL.y - leftEyeU.y <= 5) {
        fill(0);
        strokeWeight(5);
        stroke("black");
        line(rightEyeU.x + 5, rightEyeU.y - 65, rightEyeU.x + 15, rightEyeU.y - 10);
        line(rightEyeU.x - 15, rightEyeU.y - 20, rightEyeU.x + 15, rightEyeU.y - 10);
        line(leftEyeU.x + 5, leftEyeU.y - 65, leftEyeU.x - 15, leftEyeU.y - 10);
        line(leftEyeU.x + 15, leftEyeU.y - 20, leftEyeU.x - 15, leftEyeU.y - 10);

        x = 120;
        y = 100;
        
        noStroke();
        bashfulPts = [{x, y}];

        for (let i = 0; i < bashfulPts.length; i++) {
            let pts = bashfulPts[i];
            let bashful = new Bashful(pts.x, pts.y);
            bashfuls.push(bashful);
            if (bashfuls.length > 1) {
                bashfuls.pop(bashful);
            }
        }

        for (let i = 0; i < bashfuls.length; i++) {
            let h = bashfuls[i];
            h.update();
            h.show();
            h.behaviors();
        }

        x = 650;
        y = 100;
        
        noStroke();
        pokeyPts = [{x, y}];

        for (let i = 0; i < pokeyPts.length; i++) {
            let pts = pokeyPts[i];
            let pokey = new Pokey(pts.x, pts.y);
            pokeys.push(pokey);
            if (pokeys.length > 1) {
                pokeys.pop(pokey);
            }
        }

        for (let i = 0; i < pokeys.length; i++) {
            let h = pokeys[i];
            h.update();
            h.show();
            h.behaviors();
        }

        x = 100;
        y = 400;
        
        noStroke();
        shadowPts = [{x, y}];

        for (let i = 0; i < shadowPts.length; i++) {
            let pts = shadowPts[i];
            let shadow = new Shadow(pts.x, pts.y);
            shadows.push(shadow);
            if (shadows.length > 1) {
                shadows.pop(shadow);
            }
        }

        for (let i = 0; i < shadows.length; i++) {
            let h = shadows[i];
            h.update();
            h.show();
            h.behaviors();
        }

        x = 650;
        y = 400;
        
        noStroke();
        speedyPts = [{x, y}];

        for (let i = 0; i < speedyPts.length; i++) {
            let pts = speedyPts[i];
            let speedy = new Speedy(pts.x, pts.y);
            speedys.push(speedy);
            if (speedys.length > 1) {
                speedys.pop(speedy);
            }
        }

        for (let i = 0; i < speedys.length; i++) {
            let h = speedys[i];
            h.update();
            h.show();
            h.behaviors();
        }
        
    } else if (leftEyeL.y - leftEyeU.y <= 5) {

        fill(0);
        noStroke();
        ellipse(rightEyeU.x, rightEyeU.y - 40, dia, (dia*3));
        fill("yellow");
        noStroke();
        triangle(
            rightEyeU.x - 40,
            rightEyeU.y - 20,
            rightEyeU.x,
            rightEyeU.y - 35,
            rightEyeU.x - 45,
            rightEyeU.y - 60
        );

        new Wink(leftEyeU, rightEyeU, false);

    } else if (rightEyeL.y - rightEyeU.y <= 5) {

        fill(0);
        noStroke();
        ellipse(leftEyeU.x, leftEyeU.y - 40, dia, (dia*3));
        fill("yellow");
        noStroke();
        triangle(
            leftEyeU.x + 40,
            leftEyeU.y - 20,
            leftEyeU.x,
            leftEyeU.y - 35,
            leftEyeU.x + 45,
            leftEyeU.y - 60
        );

        new Wink(leftEyeU, rightEyeU, true);
    }

    if (lipsLower.y - lipsUpper.y > 30 ) {
        fill("white");
        noStroke();

        x = lipsLower.x;
        y = lipsLower.y - 50;
        pelletPts = [{x, y}];
        
        for (let i = 0; i < pelletPts.length; i++) {
            let pt = pelletPts[i];
            let pellet = new Pellet(pt.x, pt.y);
            pellets.push(pellet);
            // pelletDist adds distance between each pellet
            pelletDist += 25;
            for (let j = 0; j < pellets.length; j++) {
                // Needs to remove all pellets past the new target point,
                // new being the latest added in the array
                if (pellets[j].pos.x < pellets[pellets.length-1].target.x + 50) {
                    pellets.shift();
                }
            }
        }

        for (let i = 0; i < pellets.length; i++) {
            let v = pellets[i];
            v.update();
            v.show();
        }
    } else {
        // When program loops code again because of draw(), we need pelletDist to keep
        // track of the distance in between pellets but also reset so that the
        // pellets don't disappear so we reset when mouth is closed
        for (let i = 0; i < pellets.length; i++) {
            if (pellets.length !== 0) {
                pellets.shift();
            }
        }
        pelletDist = 0;
    }

    new FilterVis(filterCount);

}