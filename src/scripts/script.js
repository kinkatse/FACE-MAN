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

let shadow;
let bashful;
let speedy;
let pokey;
let mustacheImg;
let glassesImg;
let pikaleftear;
let pikarightear;
let pikanose;
let thunder;
let ketchup;

let topLeft;
let bottomRight;
let w;
let facedia;
let topfacedia;
let dia;
let anyFilter = false;
let filtercount = 0;
let x = 0;
let y = 650;
// let speedx = 3;
// let speedy = 3;

let winks = [];

let dustpts = [];
let dusts = [];

let heartpts = [];
let hearts = [];

let zzzpts = [];
let zzzs = [];

let pellet_dist = 0;
let pelletpts = [];
let pellets = [];

let thunders = [];

let ketchuppts = [];
let ketchups = [];

let bashfulpts = [];
let bashfuls = [];

let pokeypts = [];
let pokeys = [];

let shadowpts = [];
let shadows = [];

let speedypts = [];
let speedys = [];

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
  filtercount = 0;
}

function faceMaskDotsButton() {
  if (!faceMaskDots && !anyFilter) {
    faceMaskDots = true;
    anyFilter = true;
    filtercount++;
  } else if (faceMaskDots && anyFilter) {
    faceMaskDots = false;
    anyFilter = false;
    filtercount--;
  } else {
    anyFilter = true;
  }
}

function pacmanButton() {
  if (!pacmanFilter && !anyFilter) {
    pacmanFilter = true;
    anyFilter = true;
    filtercount++;
  } else if (pacmanFilter && anyFilter) {
    pacmanFilter = false;
    anyFilter = false;
    filtercount--;
  } else {
    anyFilter = true;
  }
}

function kirbyButton() {
  if (!kirbyFilter && !anyFilter) {
    kirbyFilter = true;
    anyFilter = true;
    filtercount++;
  } else if (kirbyFilter && anyFilter) {
    kirbyFilter = false;
    anyFilter = false;
    filtercount--;
  } else {
    anyFilter = true;
  }
}

function pikachuButton() {
  if (!pikachuFilter && !anyFilter) {
    pikachuFilter = true;
    anyFilter = true;
    filtercount++;
  } else if (pikachuFilter && anyFilter) {
    pikachuFilter = false;
    anyFilter = false;
    filtercount--;
  } else {
    anyFilter = true;
  }
}

function hitboxButton() {
  if (!hitbox) {
    hitbox = true;
    filtercount++;
  } else {
    hitbox = false;
    filtercount--;
  }
}

function prettyButton() {
  if (!prettyFilter) {
    prettyFilter = true;
    filtercount++;
  } else {
    prettyFilter = false;
    filtercount--;
  }
}

function mustacheButton() {
  if (!mustacheFilter) {
    mustacheFilter = true;
    filtercount++;
  } else {
    mustacheFilter = false;
    filtercount--;
  }
}

function glassesButton() {
  if (!glassesFilter) {
    glassesFilter = true;
    filtercount++;
  } else {
    glassesFilter = false;
    filtercount--;
  }
}

function preload() {
  shadow = loadImage('https://media.discordapp.net/attachments/597985513701376013/880534561879105546/Ghost_Shadow.png');
  bashful = loadImage('https://media.discordapp.net/attachments/597985513701376013/880534557860966450/Ghost_Bashful.png');
  speedy = loadImage('https://media.discordapp.net/attachments/597985513701376013/880534565360402462/Ghost_Speedy.png');
  pokey = loadImage('https://media.discordapp.net/attachments/597985513701376013/880534561015095396/Ghost_Pokey.png');
  mustacheImg = loadImage('https://media.discordapp.net/attachments/597985513701376013/879841681552318524/Mustache_3.png?width=670&height=670');
  glassesImg = loadImage('https://media.discordapp.net/attachments/597985513701376013/879848065735999488/Glasses_4.png?width=670&height=670');
  pikaleftear = loadImage('https://media.discordapp.net/attachments/597985513701376013/879896831193149491/Pikachu_Right_Ear.png');
  pikarightear = loadImage('https://media.discordapp.net/attachments/597985513701376013/879896827556683826/Pikachu_Left_Ear.png');
  pikanose = loadImage('https://media.discordapp.net/attachments/597985513701376013/879917035738529832/Pika_nose.png');
  thunder = loadImage('https://media.discordapp.net/attachments/597985513701376013/881556169913663488/Thunder_Test_2.gif');
  ketchup = loadImage('https://media.discordapp.net/attachments/597985513701376013/881575642716590161/Ketchup.png');
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
  // dustpts = [{x, y}, {x, y}];

  // for (let i = 0; i < dustpts.length; i++) {
  //   let pt = dustpts[i];
  //   let dust = new Dust(pt.x, pt.y);
  //   dusts.push(dust);
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
  // console.log(facePredictions);
  if (facePredictions.length === 0) {
    face = undefined;

    push();
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
    pop();
    // console.log("Error: No face detected");
  } else if (facePredictions.length > 1) {
    face = undefined;
    push();
    fill(255, 7, 69);
    noStroke();
    rectMode(CENTER);
    square(340, 325, 1500);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    let s = "Error: This app will only handle 1 person at a time";
    translate(340, 340);
    textSize(32);
    fill(245);
    text(s, 100, 160, 1000, 1030);
    textSize(400);
    fill("yellow");
    text("!", 100, -50);
    pop();
    // console.log("Error: This app will only handle 1 person at a time");
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

      if (face.boundingBox.bottomRight[0] - face.boundingBox.topLeft[0] - 40 < 100 || face.boundingBox.bottomRight[1] - face.boundingBox.topLeft[1] + 110 < 175) {
          push();
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
          pop();
          return;
          // return console.log("Error: Bring your face closer and keep it straight");
      }
      if (face.boundingBox.bottomRight[0] - face.boundingBox.topLeft[0] - 40 > 300 || face.boundingBox.bottomRight[1] - face.boundingBox.topLeft[1] + 110 > 375) {
          push();  
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
          pop();
          return;
          // return console.log("Error: Back up a bit and keep your head straight");
      }

    if (firstFace) {
      // debugger
      // console.log(face);
      firstFace = false;
    }

    let lipsUpper =  scaleCoord(face.annotations.lipsUpperOuter[5]);
    let lipsLower = scaleCoord(face.annotations.lipsLowerOuter[4]);
    
    let rightEyeU = scaleCoord(face.annotations.rightEyeUpper0[3]);
    let rightEyeL = scaleCoord(face.annotations.rightEyeLower0[4]);

    let leftEyeU = scaleCoord(face.annotations.leftEyeUpper0[3]);
    let leftEyeL = scaleCoord(face.annotations.leftEyeLower0[4]);

    let betweenEyes = scaleCoord(face.annotations.midwayBetweenEyes[0]);

    let leftCheek = scaleCoord(face.annotations.leftCheek[0]);
    let rightCheek = scaleCoord(face.annotations.rightCheek[0]);

    topLeft = scaleCoord(face.boundingBox.topLeft);
    bottomRight = scaleCoord(face.boundingBox.bottomRight);
    w = bottomRight.x - topLeft.x;
    facedia = w;
    topfacedia = w / 2;
    dia = w / 8;
    let nose = scaleCoord(face.scaledMesh[5]);

    if (faceMaskDots) {
      fill("black");
      noStroke();
      for (let pt of face.scaledMesh) {
      pt = scaleCoord(pt);
      circle(pt.x, pt.y, 3);
      }
      
      fill(0, 150, 255, 100);
      noStroke();
      beginShape();
      for (pt of face.annotations.silhouette) {
      pt = scaleCoord(pt);
      vertex(pt.x, pt.y);
      }
      endShape(CLOSE);

      new filter_vis("scanmask", filtercount);
  }

    if (pacmanFilter) {
      new Pacman(rightEyeU, leftEyeU, rightEyeL, leftEyeL, lipsLower, lipsUpper, nose, dia, facedia, face, filtercount)
    }

    if (kirbyFilter) {
      new Kirby(rightEyeU, leftEyeU, rightEyeL, leftEyeL, lipsLower, lipsUpper, nose, dia, facedia, face, filtercount)
    }

    if (pikachuFilter) {
      new Pikachu(rightEyeU, leftEyeU, rightEyeL, leftEyeL, lipsLower, lipsUpper, nose, dia, facedia, face, filtercount)
    }

    if (prettyFilter) {
      new Pretty(leftCheek, rightCheek, face, filtercount)
    }

    if (mustacheFilter) {
      new Mustache(nose, filtercount)
    }

    if (glassesFilter) {
      new Glasses(betweenEyes, filtercount)
    }

    if (hitbox) {
        fill(255, 255, 255, 0);
        strokeWeight(3);
        stroke("red");
        rect(
            face.boundingBox.topLeft[0] + 50,
            face.boundingBox.topLeft[1] + 20,
            face.boundingBox.bottomRight[0] - face.boundingBox.topLeft[0] + 100,
            face.boundingBox.bottomRight[1] - face.boundingBox.topLeft[1] + 100
        );
        new filter_vis("hitbox", filtercount);
    }

  }
}