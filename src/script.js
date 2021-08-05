// document.addEventListener("DOMContentLoaded", () => {

let video;
let model;
let face;
let firstFace = true;
let pacmanFilter = false;
let kirbyFilter = false;
let pikachuFilter = false;
let prettyFilter = false;
let mustacheFilter = false;
let glassesFilter = false;
let hitbox = false;
let faceMaskDots = false;
let topLeft;
let bottomRight;
let w;
let facedia;
let topfacedia;
let dia;
let anyFilter = false;
let x = 0;
let y = 650;
let speedx = 3;
let speedy = 3;

let points = [];
let vehicles = [];

let heartpts = [];
let hearts = [];

let zzzpts = [];
let zzzs = [];

function clearButton() {
  pacmanFilter = false;
  kirbyFilter = false;
  pikachuFilter = false;
  prettyFilter = false;
  mustacheFilter = false;
  glassesFilter = false;
  hitbox = false;
  faceMaskDots = false;
  anyFilter = false;
}

function faceMaskDotsButton() {
  if (!faceMaskDots && !anyFilter) {
    faceMaskDots = true;
    anyFilter = true;
  } else if (faceMaskDots && anyFilter) {
    faceMaskDots = false;
    anyFilter = false;
  } else {
    anyFilter = true;
  }
}

function hitboxButton() {
  if (!hitbox) {
    hitbox = true;
  } else {
    hitbox = false;
  }
}

function pacmanButton() {
  if (!pacmanFilter && !anyFilter) {
    pacmanFilter = true;
    anyFilter = true;
  } else if (pacmanFilter && anyFilter) {
    pacmanFilter = false;
    anyFilter = false;
  } else {
    anyFilter = true;
  }
}

function kirbyButton() {
  if (!kirbyFilter && !anyFilter) {
    kirbyFilter = true;
    anyFilter = true;
  } else if (kirbyFilter && anyFilter) {
      kirbyFilter = false;
      anyFilter = false;
  } else {
    anyFilter = true;
  }
}

function pikachuButton() {
  if (!kirbyFilter && !anyFilter) {
    kirbyFilter = true;
    anyFilter = true;
  } else if (kirbyFilter && anyFilter) {
      kirbyFilter = false;
      anyFilter = false;
  } else {
    anyFilter = true;
  }
}

function prettyButton() {
  if (!prettyFilter && !anyFilter) {
    prettyFilter = true;
    anyFilter = true;
  } else if (prettyFilter && anyFilter) {
      prettyFilter = false;
      anyFilter = false;
  } else {
    anyFilter = true;
  }
}

function mustacheButton() {
  if (!mustacheFilter && !anyFilter) {
    mustacheFilter = true;
    anyFilter = true;
  } else if (mustacheFilter && anyFilter) {
      mustacheFilter = false;
      anyFilter = false;
  } else {
    anyFilter = true;
  }
}

function glassesButton() {
  if (!glassesFilter && !anyFilter) {
    kirbyFilter = true;
    anyFilter = true;
  } else if (kirbyFilter && anyFilter) {
      kirbyFilter = false;
      anyFilter = false;
  } else {
    anyFilter = true;
  }
}

function setup() {
  createCanvas(860, 650);
  // drawingContext.shadowBlur = 3;
  // drawingContext.shadowColor = "black";
  background(245);
  video = createCapture(VIDEO);
  video.hide();
  loadFaceModel();

  // noStroke();
  // points = [{x, y}, {x, y}];

  // for (let i = 0; i < points.length; i++) {
  //   let pt = points[i];
  //   let vehicle = new Vehicle(pt.x, pt.y);
  //   vehicles.push(vehicle);
  // }

//   frameRate(2);
}

async function loadFaceModel() {
    model = await faceLandmarksDetection.load(
        faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
    );
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

    fill(255, 7, 69, 120);
    noStroke();
    rectMode(CENTER);
    square(340, 325, 1500);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    let s = "Error: No face detected";
    translate(340, 325);
    textSize(32);
    fill(245);
    text(s, 100, 160, 500, 630);
    textSize(400);
    fill("yellow");
    text("!", 100, -50);
    console.log("Error: No face detected");
  } else if (facePredictions.length > 1) {
    face = undefined;
    // while (facePredictions.length !== 1) {
    //   facePredictions.pop();
    // }

    // Weird double error going on??
    // debugger
    fill(255, 7, 69);
    noStroke();
    rectMode(CENTER);
    square(340, 325, 1500);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    // debugger
    let s = "Error: This app will only handle 1 person at a time";
    translate(340, 340);
    textSize(32);
    fill(245);
    text(s, 100, 160, 1000, 1030);
    textSize(400);
    fill("yellow");
    text("!", 100, -50);
    console.log("Error: This app will only handle 1 person at a time");
  } else {
    face = facePredictions[0];
  }
}

function draw() {
  if (video.loadedmetadata && model !== undefined) {
    getFace();
  }

  if (face !== undefined) {
    image(video, 0, 0, width, height);

    // function error() {
      if (face.boundingBox.bottomRight[0] - face.boundingBox.topLeft[0] - 40 < 125 || face.boundingBox.bottomRight[1] - face.boundingBox.topLeft[1] + 110 < 200) {
          fill(255, 7, 69, 80);
          noStroke();
          rectMode(CENTER);
          square(340, 325, 1500);
          textStyle(BOLD);
          textAlign(CENTER, CENTER);
          let s = "Error: Bring your face closer and keep it straight";
          translate(340, 325);
          textSize(32);
          fill(245);
          text(s, 100, 160, 500, 630);
          textSize(400);
          fill("yellow");
          text("!", 100, -50);
          return console.log("Error: Bring your face closer and keep it straight");
          // return (<span class="Error">Error: Bring your face closer and keep it straight</span>);
      }
      if (face.boundingBox.bottomRight[0] - face.boundingBox.topLeft[0] - 40 > 300 || face.boundingBox.bottomRight[1] - face.boundingBox.topLeft[1] + 110 > 375) {
          fill(255, 7, 69, 80);
          noStroke();
          rectMode(CENTER);
          square(340, 325, 1500);
          textStyle(BOLD);
          textAlign(CENTER, CENTER);
          let s = "Error: Back up a bit and keep your head straight";
          translate(340, 325);
          textSize(32);
          fill(245);
          text(s, 100, 160, 500, 630);
          textSize(400);
          fill("yellow");
          text("!", 100, -50);
          return console.log("Error: Back up a bit and keep your head straight");
          // return (<span class="Error">Error: Back up a bit and keep your head straight</span>);
      }
    // }

    if (firstFace) {
      console.log(face);
      firstFace = false;
    }

    if (faceMaskDots) {
        fill("black");
        noStroke();
        for (let pt of face.scaledMesh) {
        pt = scaleCoord(pt);
        circle(pt.x, pt.y, 3);
        }
    }
    if (faceMaskDots) {
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

    topLeft = scaleCoord(face.boundingBox.topLeft);
    bottomRight = scaleCoord(face.boundingBox.bottomRight);
    w = bottomRight.x - topLeft.x;
    facedia = w;
    topfacedia = w / 2;
    dia = w / 8;
    let nose = scaleCoord(face.scaledMesh[5]);

    if (pacmanFilter) {
      new Pacman(rightEyeU, leftEyeU, rightEyeL, leftEyeL, nose, dia, facedia, face)
    }

    if (kirbyFilter) {
      new Kirby(rightEyeU, leftEyeU, rightEyeL, leftEyeL, lipsLower, lipsUpper, nose, dia, facedia, face)
    }

    // Hitbox gets moved when error pops up for some reason
    if (hitbox) {
        fill(255, 255, 255, 0);
        strokeWeight(3);
        stroke("red");
        rect(
            face.boundingBox.topLeft[0] + 20,
            face.boundingBox.topLeft[1],
            face.boundingBox.bottomRight[0] - face.boundingBox.topLeft[0] + 100,
            face.boundingBox.bottomRight[1] - face.boundingBox.topLeft[1] + 100
        );
    }
  }
}