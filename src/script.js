// document.addEventListener("DOMContentLoaded", () => {

let video;
let model;
let face;
let firstFace = true;
let pacmanFilter = false;
let kirbyFilter = false;
let hitbox = false;
let facemask = false;
let facedots = false;
let topLeft;
let bottomRight;
let w;
let facedia;
let topfacedia;
let dia;

function setup() {
  createCanvas(880, 660);
  // drawingContext.shadowBlur = 3;
  // drawingContext.shadowColor = "black";
  background(255);
  video = createCapture(VIDEO);
  video.hide();
  loadFaceModel();
//   frameRate(2);
}

async function loadFaceModel() {
    model = await faceLandmarksDetection.load(
        faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
    );
}

function draw() {
  if (video.loadedmetadata && model !== undefined) {
    getFace();
  }

  if (face !== undefined) {
    image(video, 0, 0, width, height);

  if (face.boundingBox.bottomRight[0] - face.boundingBox.topLeft[0] - 40 < 125 || face.boundingBox.bottomRight[1] - face.boundingBox.topLeft[1] + 110 < 200) {
      return console.log("Error: Bring your face closer and keep it straight");
  }
  if (face.boundingBox.bottomRight[0] - face.boundingBox.topLeft[0] - 40 > 300 || face.boundingBox.bottomRight[1] - face.boundingBox.topLeft[1] + 110 > 375) {
      return console.log("Error: Back up a bit and keep your head straight");
  }

    if (firstFace) {
      console.log(face);
      firstFace = false;
    }

    // facedots = true;
    // if (facedots) {
    //     fill("black");
    //     noStroke();
    //     for (let pt of face.scaledMesh) {
    //     pt = scaleCoord(pt);
    //     circle(pt.x, pt.y, 3);
    //     }
    // }

    // facemask = true;
    // if (facemask) {
    //     fill(0, 150, 255, 100);
    //     noStroke();
    //     beginShape();
    //     for (pt of face.annotations.silhouette) {
    //     pt = scaleCoord(pt);
    //     vertex(pt.x, pt.y);
    //     }
    //     endShape(CLOSE);
    // }

    let lipsUpper =  scaleCoord(face.annotations.lipsUpperOuter[5]);
    let lipsLower = scaleCoord(face.annotations.lipsLowerOuter[4]);
    
    let rightEyeU = scaleCoord(face.annotations.rightEyeUpper0[3]);
    let rightEyeL = scaleCoord(face.annotations.rightEyeLower0[4]);

    let leftEyeU = scaleCoord(face.annotations.leftEyeUpper0[3]);
    let leftEyeL = scaleCoord(face.annotations.leftEyeLower0[4]);

    // console.log(lipsUpper.x);
    // console.log(lipsLower.y);

    pacmanFilter = true;
    if (pacmanFilter) {
        topLeft = scaleCoord(face.boundingBox.topLeft);
        bottomRight = scaleCoord(face.boundingBox.bottomRight);
        w = bottomRight.x - topLeft.x;
        facedia = w;
        topfacedia = w / 2;
        dia = w / 8;

        let nose = scaleCoord(face.scaledMesh[5]);

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
        ellipse(nose.x, nose.y - 15, dia, [dia + 5]);

        // Pacman Eye Blinking
        if (rightEyeL.y - rightEyeU.y > 4 && leftEyeL.y - leftEyeU.y > 4) {
            fill(0);
            noStroke();
            ellipse(rightEyeU.x, rightEyeU.y - 40, dia, [dia*3]);
            ellipse(leftEyeU.x, leftEyeU.y - 40, dia, [dia*3]);
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
          } else if (rightEyeL.y - rightEyeU.y <= 4 && leftEyeL.y - leftEyeU.y <= 4) {
            fill(0);
            strokeWeight(5);
            stroke("black");
            line(rightEyeU.x + 5, rightEyeU.y - 65, rightEyeU.x + 15, rightEyeU.y - 10);
            line(rightEyeU.x - 15, rightEyeU.y - 20, rightEyeU.x + 15, rightEyeU.y - 10);
            line(leftEyeU.x + 5, leftEyeU.y - 65, leftEyeU.x - 15, leftEyeU.y - 10);
            line(leftEyeU.x + 15, leftEyeU.y - 20, leftEyeU.x - 15, leftEyeU.y - 10);
          } else if (leftEyeL.y - leftEyeU.y <= 4) {
            fill(0);
            noStroke();
            ellipse(rightEyeU.x, rightEyeU.y - 40, dia, [dia*3]);
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
          } else if (rightEyeL.y - rightEyeU.y <= 4) {
            fill(0);
            noStroke();
            ellipse(leftEyeU.x, leftEyeU.y - 40, dia, [dia*3]);
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
            smooth();
            vertex(pt.x, pt.y);
        }
        endShape(CLOSE);
    }

    // kirbyFilter = true;
    if (kirbyFilter) {
        topLeft = scaleCoord(face.boundingBox.topLeft);
        bottomRight = scaleCoord(face.boundingBox.bottomRight);
        w = bottomRight.x - topLeft.x;
        facedia = w;
        topfacedia = w / 2;
        dia = w / 8;

        let nose = scaleCoord(face.scaledMesh[5]);

        fill(252, 197, 219);
        noStroke();
        ellipse(nose.x, nose.y - 20, facedia + 20, facedia + 30);

        fill(249, 136, 189);
        noStroke();
        ellipse(rightEyeU.x - 40, rightEyeU.y + 30, dia*1.7, [dia/2]);
        ellipse(leftEyeU.x + 40, leftEyeU.y + 30, dia*1.7, [dia/2]);
        // Kirby Eye Blinking
        if (rightEyeL.y - rightEyeU.y > 4 && leftEyeL.y - leftEyeU.y > 4) {
            fill(0);
            noStroke();
            ellipse(rightEyeU.x, rightEyeU.y - 30, dia, [dia*2.5]);
            ellipse(leftEyeU.x, leftEyeU.y - 30, dia, [dia*2.5]);
            fill(255);
            noStroke();
            ellipse(rightEyeU.x, rightEyeU.y - 50, dia/1.75, [dia]);
            ellipse(leftEyeU.x, leftEyeU.y - 50, dia/1.75, [dia]);
            // circle(rightEyeU.x, rightEyeU.y, dia);
            // circle(leftEyeU.x, leftEyeU.y, dia);
            stroke("black");
            // curve(rightEyeU.x, rightEyeU.y, rightEyeU.x - 10, rightEyeU.y - 10, rightEyeU.x - 30, rightEyeU.y - 30, rightEyeU.x - 40, rightEyeU.y + 50);
            fill(252, 197, 219);
            noStroke();
          } else if (rightEyeL.y - rightEyeU.y <= 4 && leftEyeL.y - leftEyeU.y <= 4) {
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
          } else if (leftEyeL.y - leftEyeU.y <= 4) {
            fill(0);
            noStroke();
            ellipse(rightEyeU.x, rightEyeU.y - 30, dia, [dia*2.5]);
            fill(255);
            noStroke();
            ellipse(rightEyeU.x, rightEyeU.y - 50, dia/1.75, [dia]);
            noFill();
            strokeWeight(5);
            stroke("black");
            curve(
              leftEyeU.x + 40, leftEyeU.y + 65,
              leftEyeU.x + 40, leftEyeU.y - 25,
              leftEyeU.x - 10, leftEyeU.y - 15,
              leftEyeU.x - 20, leftEyeU.y + 80
            );
          } else if (rightEyeL.y - rightEyeU.y <= 4) {
            fill(0);
            noStroke();
            ellipse(leftEyeU.x, leftEyeU.y - 30, dia, [dia*2.5]);
            fill(255);
            noStroke();
            ellipse(leftEyeU.x, leftEyeU.y - 50, dia/1.75, [dia]);
            noFill();
            strokeWeight(5);
            stroke("black");
            curve(
              rightEyeU.x + 15, rightEyeU.y + 80,
              rightEyeU.x + 15, rightEyeU.y - 15,
              rightEyeU.x - 35, rightEyeU.y - 25,
              rightEyeU.x - 45, rightEyeU.y + 65
            );
          }
        

        let mouth = [];
        for (let pt of face.annotations.lipsUpperInner) {
            pt = scaleCoord(pt);
            pt.y -= 25;
            mouth.push(pt);
        }
        for (let pt of face.annotations.lipsLowerInner) {
            pt = scaleCoord(pt);
            pt.y -= 25;
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
    }

    hitbox = true;
    if (hitbox) {
        fill(255, 255, 255, 0);
        strokeWeight(3);
        stroke("red");
        rect(
            face.boundingBox.topLeft[0] + 60,
            face.boundingBox.topLeft[1] + 25,
            face.boundingBox.bottomRight[0] - face.boundingBox.topLeft[0] + 100,
            face.boundingBox.bottomRight[1] - face.boundingBox.topLeft[1] + 100
        );
    }

    // Mouth Open Close
    // if (lipsLower.y - lipsUpper.y > 30 ) {
    //   // console.log(lipsLower.y - lipsUpper.y)
    //   console.log("open mouth");
    // } else {
    //   // console.log(lipsLower.y - lipsUpper.y)
    //   console.log("closed mouth");
    // }
    
    // // Right Eye Open Close
    // if (rightEyeL.y - rightEyeU.y > 4 || leftEyeL.y - leftEyeU.y > 4) {
    //   // console.log(rightEyeL.y - rightEyeU.y)
    //   console.log("open eyes");
    // } else {
    //   // console.log(rightEyeL.y - rightEyeU.y)
    //   console.log("closed eyes");
    // }
  }
}

function scaleCoord(pt) {
  let x = map(pt[0], 0,video.width, 0,width);
  let y = map(pt[1], 0,video.height, 0,height);
  return createVector(x, y);
}

async function getFace() {
  const facePredictions = await model.estimateFaces({
    input: document.querySelector('video')
  }); 
  console.log(facePredictions);
  if (facePredictions.length === 0) {
    face = undefined;
    console.log("Error: no face detected");
  } else if (facePredictions.length > 1) {
    face = undefined;
    console.log("Error: This app will only handle 1 person at a time");
  } else {
    face = facePredictions[0];
  }
}