let video;
let model;
let face;

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
let pikaLeftEar;
let pikaRightEar;
let pikaNose;
let thunder;
let ketchup;

let topLeft;
let bottomRight;
let w;
let faceDia;
let topFaceDia;
let dia;
let anyFilter = false;
let filterCount = [];
let x = 0;
let y = 650;

// Variables for filters

let winks = [];

let dustPts = [];
let dusts = [];

let heartPts = [];
let hearts = [];

let zzzPts = [];
let zzzs = [];

let pelletDist = 0;
let pelletPts = [];
let pellets = [];

let thunders = [];

let ketchupPts = [];
let ketchups = [];

let bashfulPts = [];
let bashfuls = [];

let pokeyPts = [];
let pokeys = [];

let shadowPts = [];
let shadows = [];

let speedyPts = [];
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
  for (let i = 0; i < filterCount.length; i++) {
    filterCountRemove(filterCount[i]);
  }
}

// Keeping track of what order the filters were clicked in
// using filterCount
function filterCountAdd(filter) {
  filterCount.push(filter);
}

function filterCountRemove(filter) {
  for (let i = 0; i < filterCount.length; i++) {
    if (filterCount[i] === filter) {
      filterCount.splice(i, 1);
    }
  }
}

// These are the buttons to toggle a filter on or off
function faceMaskDotsButton() {
  if (!faceMaskDots && !anyFilter) {
    faceMaskDots = true;
    anyFilter = true;
    filterCountAdd("scanmask");
  } else if (faceMaskDots && anyFilter) {
    faceMaskDots = false;
    anyFilter = false;
    filterCountRemove("scanmask");
  } else {
    anyFilter = true;
  }
}

function pacmanButton() {
  if (!pacmanFilter && !anyFilter) {
    pacmanFilter = true;
    anyFilter = true;
    filterCountAdd("pacman");
  } else if (pacmanFilter && anyFilter) {
    pacmanFilter = false;
    anyFilter = false;
    filterCountRemove("pacman");
  } else {
    anyFilter = true;
  }
}

function kirbyButton() {
  if (!kirbyFilter && !anyFilter) {
    kirbyFilter = true;
    anyFilter = true;
    filterCountAdd("kirby");
  } else if (kirbyFilter && anyFilter) {
    kirbyFilter = false;
    anyFilter = false;
    filterCountRemove("kirby");
  } else {
    anyFilter = true;
  }
}

function pikachuButton() {
  if (!pikachuFilter && !anyFilter) {
    pikachuFilter = true;
    anyFilter = true;
    filterCountAdd("pikachu");
  } else if (pikachuFilter && anyFilter) {
    pikachuFilter = false;
    anyFilter = false;
    filterCountRemove("pikachu");
  } else {
    anyFilter = true;
  }
}

function hitboxButton() {
  if (!hitbox) {
    hitbox = true;
    filterCountAdd("hitbox");
  } else {
    hitbox = false;
    filterCountRemove("hitbox");
  }
}

function prettyButton() {
  if (!prettyFilter) {
    prettyFilter = true;
    filterCountAdd("pretty");
  } else {
    prettyFilter = false;
    filterCountRemove("pretty");
  }
}

function mustacheButton() {
  if (!mustacheFilter) {
    mustacheFilter = true;
    filterCountAdd("mustache");
  } else {
    mustacheFilter = false;
    filterCountRemove("mustache");
  }
}

function glassesButton() {
  if (!glassesFilter) {
    glassesFilter = true;
    filterCountAdd("glasses");
  } else {
    glassesFilter = false;
    filterCountRemove("glasses");
  }
}

// This loads all the images used for filters
function preload() {
  shadow = loadImage('https://media.discordapp.net/attachments/597985513701376013/880534561879105546/Ghost_Shadow.png');
  bashful = loadImage('https://media.discordapp.net/attachments/597985513701376013/880534557860966450/Ghost_Bashful.png');
  speedy = loadImage('https://media.discordapp.net/attachments/597985513701376013/880534565360402462/Ghost_Speedy.png');
  pokey = loadImage('https://media.discordapp.net/attachments/597985513701376013/880534561015095396/Ghost_Pokey.png');
  mustacheImg = loadImage('https://media.discordapp.net/attachments/597985513701376013/879841681552318524/Mustache_3.png?width=670&height=670');
  glassesImg = loadImage('https://media.discordapp.net/attachments/597985513701376013/879848065735999488/Glasses_4.png?width=670&height=670');
  pikaLeftEar = loadImage('https://media.discordapp.net/attachments/597985513701376013/879896831193149491/Pikachu_Right_Ear.png');
  pikaRightEar = loadImage('https://media.discordapp.net/attachments/597985513701376013/879896827556683826/Pikachu_Left_Ear.png');
  pikaNose = loadImage('https://media.discordapp.net/attachments/597985513701376013/879917035738529832/Pika_nose.png');
  thunder = loadImage('https://media.discordapp.net/attachments/597985513701376013/881556169913663488/Thunder_Test_2.gif');
  ketchup = loadImage('https://media.discordapp.net/attachments/597985513701376013/881575642716590161/Ketchup.png');
}

// This is the set up which prepares the canvas and video capture
function setup() {
  createCanvas(860, 650);
  // drawingContext.shadowBlur = 3;
  // drawingContext.shadowColor = "black";
  background(245);
  video = createCapture(VIDEO);
  video.hide();
  loadFaceModel();

  frameRate(120);
}

// This allows for us to load the face landmarks from TensorFlow
async function loadFaceModel() {
  model = await faceLandmarksDetection.load(
    faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
  );
}

// This makes it more convenient for us to access the position
// of a landmark
function scaleCoord(pt) {
  let x = map(pt[0], 0,video.width, 0,width);
  let y = map(pt[1], 0,video.height, 0,height);
  return createVector(x, y);
}

// This function accesses the face data from estimating
// from the video
async function getFace() {
  const facePredictions = await model.estimateFaces({
    input: document.querySelector('video')
  }); 
  // console.log(facePredictions);

  // Below are errors to restrict user
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

// This is the draw function which p5 loops through
// and captures frames of the video and creates a new
// canvas and new image each time allowing us to
// update the code as the video capturing our face
// also updates itself
function draw() {
  if (video.loadedmetadata && model !== undefined) {
    getFace();
  }

  if (face !== undefined) {
    image(video, 0, 0, width, height);

    // This is another error to restrict the user
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
    // This is another error to restrict the user
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

    // Initialization of the important facial points variables
    // and using the scaleCoord function to allow for more
    // convenient access to positions
    
    let lipsUpper =  scaleCoord(face.annotations.lipsUpperOuter[5]);
    let lipsLower = scaleCoord(face.annotations.lipsLowerOuter[4]);
    
    let rightEyeU = scaleCoord(face.annotations.rightEyeUpper0[3]);
    let rightEyeL = scaleCoord(face.annotations.rightEyeLower0[4]);

    let leftEyeU = scaleCoord(face.annotations.leftEyeUpper0[3]);
    let leftEyeL = scaleCoord(face.annotations.leftEyeLower0[4]);

    let betweenEyes = scaleCoord(face.annotations.midwayBetweenEyes[0]);

    let leftCheek = scaleCoord(face.annotations.leftCheek[0]);
    let rightCheek = scaleCoord(face.annotations.rightCheek[0]);

    let nose = scaleCoord(face.scaledMesh[5]);

    topLeft = scaleCoord(face.boundingBox.topLeft);
    bottomRight = scaleCoord(face.boundingBox.bottomRight);
    w = bottomRight.x - topLeft.x;
    faceDia = w;
    topFaceDia = w / 2;
    dia = w / 8;

    // When filters are clicked, they are revealed here

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

      new FilterVis(filterCount);
    }

    if (pacmanFilter) {
      new Pacman(rightEyeU, leftEyeU, rightEyeL, leftEyeL, lipsLower, lipsUpper, nose, dia, faceDia, face, filterCount)
    }

    if (kirbyFilter) {
      new Kirby(rightEyeU, leftEyeU, rightEyeL, leftEyeL, lipsLower, lipsUpper, nose, dia, faceDia, face, filterCount)
    }

    if (pikachuFilter) {
      new Pikachu(rightEyeU, leftEyeU, rightEyeL, leftEyeL, lipsLower, lipsUpper, nose, dia, faceDia, face, filterCount)
    }

    if (prettyFilter) {
      new Pretty(leftCheek, rightCheek, face, filterCount)
    }

    if (mustacheFilter) {
      new Mustache(nose, filterCount)
    }

    if (glassesFilter) {
      new Glasses(betweenEyes, filterCount)
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
        new FilterVis(filterCount);
    }

  }
}