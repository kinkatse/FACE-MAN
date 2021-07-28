let video;
let model;
let face;
let firstFace = true;
let filter = false;
let htibox = false;
let facemask = false;
let facedots = false;

function setup() {
  createCanvas(640, 480);
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
    image(video, 0,0, width,height);

    if (firstFace) {
      console.log(face);
      firstFace = false;
    }

    // facedots = true;
    if (facedots) {
        fill("black");
        noStroke();
        for (let pt of face.scaledMesh) {
        pt = scaleCoord(pt);
        circle(pt.x, pt.y, 3);
        }
    }

    // facemask = true;
    if (facemask) {
        fill(0, 150, 255, 100);
        noStroke();
        beginShape();
        for (pt of face.annotations.silhouette) {
        pt = scaleCoord(pt);
        vertex(pt.x, pt.y);
        }
        endShape(CLOSE);
    }

    let lipsUpper =  scaleCoord(face.annotations.lipsUpperOuter[5]);
    let lipsLower = scaleCoord(face.annotations.lipsLowerOuter[4]);
    
    let rightEyeU = scaleCoord(face.annotations.rightEyeUpper0[3]);
    let rightEyeL = scaleCoord(face.annotations.rightEyeLower0[4]);

    let leftEyeU = scaleCoord(face.annotations.leftEyeUpper0[3]);
    let leftEyeL = scaleCoord(face.annotations.leftEyeLower0[4]);

    // console.log(lipsUpper.x);
    // console.log(lipsLower.y);

    filter = true;
    if (filter) {
        let topLeft = scaleCoord(face.boundingBox.topLeft);
        let bottomRight = scaleCoord(face.boundingBox.bottomRight);
        let w = bottomRight.x - topLeft.x;
        let facedia = w;
        let topfacedia = w / 2;
        let dia = w / 8;

        let nose = scaleCoord(face.scaledMesh[5]);

        fill("yellow");
        stroke("black");
        strokeWeight(3);
        triangle(
            rightEyeU.x + 30,
            rightEyeU.y - 80,
            rightEyeU.x,
            rightEyeU.y - 140,
            rightEyeU.x - 30,
            rightEyeU.y - 80
        );
        triangle(
            leftEyeU.x + 30,
            leftEyeU.y - 80,
            leftEyeU.x,
            leftEyeU.y - 140,
            leftEyeU.x - 30,
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
            stroke("black");
            strokeWeight(2);
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
            face.boundingBox.topLeft[0] - 10,
            face.boundingBox.topLeft[1] - 20,
            face.boundingBox.bottomRight[0] - face.boundingBox.topLeft[0] + 10,
            face.boundingBox.bottomRight[1] - face.boundingBox.topLeft[1] - 10
        );
    }

    if (face.boundingBox.bottomRight[0] - face.boundingBox.topLeft[0] - 40 < 125 || face.boundingBox.bottomRight[1] - face.boundingBox.topLeft[1] + 110 < 200) {
        console.log("Error: Bring your face closer and keep it straight");
    }
    if (face.boundingBox.bottomRight[0] - face.boundingBox.topLeft[0] - 40 > 300 || face.boundingBox.bottomRight[1] - face.boundingBox.topLeft[1] + 110 > 375) {
        console.log("Error: Back up a bit and keep your head straight");
    }

    // Mouth Open Close
    if (lipsLower.y - lipsUpper.y > 30 ) {
      // console.log(lipsLower.y - lipsUpper.y)
      console.log("open mouth");
    } else {
      // console.log(lipsLower.y - lipsUpper.y)
      console.log("closed mouth");
    }
    
    // Right Eye Open Close
    if (rightEyeL.y - rightEyeU.y > 4 || leftEyeL.y - leftEyeU.y > 4) {
      // console.log(rightEyeL.y - rightEyeU.y)
      console.log("open eyes");
    } else {
      // console.log(rightEyeL.y - rightEyeU.y)
      console.log("closed eyes");
    }
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
//   facePredictions.forEach((pred) => {
//     context.beginPath();
//     context.lineWidth = "4";
//     context.strokeStyle = "blue";
//     if (pred.boundingBox.bottomRight[0] - pred.boundingBox.topLeft[0] - 40 < 125 || pred.boundingBox.bottomRight[1] - pred.boundingBox.topLeft[1] + 110 < 200) {
//         return console.log("Error: Bring your face closer and keep it straight");
//     }
//     if (pred.boundingBox.bottomRight[0] - pred.boundingBox.topLeft[0] - 40 > 225 || pred.boundingBox.bottomRight[1] - pred.boundingBox.topLeft[1] + 110 > 300) {
//         return console.log("Error: Back up a bit and keep your head straight");
//     }
//     context.rect (
//         pred.boundingBox.topLeft[0] + 20,
//         pred.boundingBox.topLeft[1] - 100,
//         pred.boundingBox.bottomRight[0] - pred.boundingBox.topLeft[0] - 40,
//         pred.boundingBox.bottomRight[1] - pred.boundingBox.topLeft[1] + 110
//     );
//     context.stroke();
// });
}