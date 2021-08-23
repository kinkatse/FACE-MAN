function Pacman(rightEyeU, leftEyeU, rightEyeL, leftEyeL, nose, dia, facedia, face) {
    img = loadImage('shadowattempt.png');
    image(img, 0, 0);

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
    ellipse(nose.x, nose.y - 20, facedia + 20, facedia + 30);

    fill("yellow")
    stroke("black");
    strokeWeight(2);
    ellipse(nose.x, nose.y - 15, dia, (dia + 5));

    // Pacman Eye Blinking
    if (rightEyeL.y - rightEyeU.y > 5 && leftEyeL.y - leftEyeU.y > 5) {
        fill(0);
        noStroke();
        ellipse(rightEyeU.x, rightEyeU.y - 40, dia, (dia*3));
        ellipse(leftEyeU.x, leftEyeU.y - 40, dia, (dia*3));
        // circle(rightEyeU.x, rightEyeU.y, dia);
        // circle(leftEyeU.x, leftEyeU.y, dia);

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
        fill(0);
        strokeWeight(5);
        stroke("black");
        line(leftEyeU.x + 5, leftEyeU.y - 65, leftEyeU.x - 15, leftEyeU.y - 10);
        line(leftEyeU.x + 15, leftEyeU.y - 20, leftEyeU.x - 15, leftEyeU.y - 10);
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
        fill(0);
        strokeWeight(5);
        stroke("black");
        line(rightEyeU.x + 5, rightEyeU.y - 65, rightEyeU.x + 15, rightEyeU.y - 10);
        line(rightEyeU.x - 15, rightEyeU.y - 20, rightEyeU.x + 15, rightEyeU.y - 10);
    }
    

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
        // stroke("black");
        // strokeWeight(2);
        noStroke();
        smooth();
        vertex(pt.x, pt.y);
    }
    endShape(CLOSE);
}