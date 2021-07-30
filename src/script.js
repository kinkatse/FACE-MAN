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
    console.log("Error: no face detected");
  } else if (facePredictions.length > 1) {
    face = undefined;
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
          return console.log("Error: Bring your face closer and keep it straight");
          // return (<span class="Error">Error: Bring your face closer and keep it straight</span>);
      }
      if (face.boundingBox.bottomRight[0] - face.boundingBox.topLeft[0] - 40 > 300 || face.boundingBox.bottomRight[1] - face.boundingBox.topLeft[1] + 110 > 375) {
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

    // console.log(lipsUpper.x);
    // console.log(lipsLower.y);

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
        if (rightEyeL.y - rightEyeU.y > 5 && leftEyeL.y - leftEyeU.y > 55) {
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
          } else if (rightEyeL.y - rightEyeU.y <= 5) {
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
            noStroke();
            smooth();
            vertex(pt.x, pt.y);
        }
        endShape(CLOSE);
    }

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
        if (rightEyeL.y - rightEyeU.y > 5 && leftEyeL.y - leftEyeU.y > 5) {
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
            
            // Kirby Sleep

            x = 500;
            y = 175;

            noStroke();
            zzzpts = [{x, y}];

            for (let i = 0; i < zzzpts.length; i++) {
              let pts = zzzpts[i];
              let zzz = new Zzz(pts.x, pts.y);
              zzzs.push(zzz);
              // if (zzzs.length > 15) {
              //   zzzs.shift(zzz);
              // }
              if (zzzs[0].opacity < 1) {
                zzzs.shift(zzz);
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
            
            // Kirby Wink

            x = leftEyeU.x + 108;
            y = leftEyeU.y - 45;

            noStroke();
            heartpts = [{x, y}];

            for (let i = 0; i < heartpts.length; i++) {
              let pts = heartpts[i];
              let heart = new Heart(pts.x, pts.y);
              hearts.push(heart);
              // if (hearts.length > 15) {
              //   hearts.shift(heart);
              // }
              if (hearts[0].opacity < 1) {
                hearts.shift(heart);
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
            
            // Kirby Wink

            x = leftEyeU.x + 108;
            y = leftEyeU.y - 45;

            noStroke();
            heartpts = [{x, y}];

            for (let i = 0; i < heartpts.length; i++) {
              let pts = heartpts[i];
              let heart = new Heart(pts.x, pts.y);
              hearts.push(heart);
              // if (hearts.length > 15) {
              //   hearts.shift(heart);
              // }
              if (hearts[0].opacity < 1) {
                hearts.shift(heart);
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
            let vehicle = new Vehicle(pt.x, pt.y);
            vehicles.push(vehicle);
            if (vehicles[0].size < 1) {
              vehicles.shift(vehicle);
            }
          }

          for (let i = 0; i < vehicles.length; i++) {
            let v = vehicles[i];
            v.update();
            v.show();
            v.behaviors();
          }

          // x = 340;
          // y = 325;

          // fill(255);
          // noStroke();
          // rectMode(CENTER);
          // square(x, y, 100);
          // x += speedx;
          // y += speedy;

          // if (x < lipsLower.x || x > 340) {
          //   speedx *= -1;
          // }

          // if (y < lipsLower.y - 50 || y > 325) {
          //   speedy *= -1;
          // }

          // push();
          // translate(lipsLower.x, lipsLower.y - 50);
          // rotate(angle);
          // // fill(255);
          // noFill();
          // stroke("white");
          // strokeWeight(2);
          // rectMode(CENTER);
          // square(0, 0, 70);
          // pop();

          // for (let a=0; a<radians(360); a+=radians(60)) {
          //   push();
          //   translate(lipsLower.x, lipsLower.y - 50);
          //   rotate(a);
          //   translate(0, 150);
          //   rotate(angle);
          //   noFill();
          //   stroke("white");
          //   strokeWeight(2);
          //   rectMode(CENTER);
          //   square(0, 0, 150);
          //   pop();
          // }

          // angle += radians(20)

          // if (x !== lipsLower.x) {
          //   x = random(x, lipsLower.x);
          // }
          // if (y !== lipsLower.y - 20) {
          //   y = random(y, lipsLower.y - 20);
          // }
          // x = x + 15;
          // y = y - 15;
          // if (x < 0) {
          //   y = height;
          // }
          // if (y === lipsLower.y - 20) {
          //   y = lipsLower.y - 20;
          // } else if (y > 860 || y < 0) {
          //   y = lipsLower.y - 20;
          // }
        }
        

    }

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



// function Vehicle(x,y) {
//   this.pos = createVector(x,y);
//   this.target = createVector(x,y);
//   this.vel = createVector();
//   this.acc = createVector();
// }

// Vehicle.prototype.update = function() {
//   this.pos.add(this.vel);
//   this.vel.add(this.acc);
// }

// Vehicle.prototype.show = function() {
//   stroke(255);
//   strokeWeight(5);
//   point(this.pos.x, this.pos.y);
// }