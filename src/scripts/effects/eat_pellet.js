// let angle = 0;

function Pellet(x,y) {
    this.pos = createVector(x + 600,y);
    this.target = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.maxSpeed = 150;
    this.maxForce = 1.8;
    this.history = [this.pos];
  }
  
  Pellet.prototype.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
    this.history.push(this.pos);
  }
  
  Pellet.prototype.show = function() {
    push();
    translate(this.pos.x, this.pos.y);
    // stroke(255);
    // strokeWeight(4);
    // line(this.pos.x, this.pos.y, this.pos.x + 5, this.pos.y + 5);
    // rotate(angle);
    // fill(255, 255, 255, 100);
    fill(251, 254, 171);
    strokeWeight(2);
    stroke('rgba(0, 0, 0, 0.5)');
    ellipseMode(CENTER);
    ellipse(0, 0, 15, 15);
    pop();

    // angle += radians(80)

    // Air Pellet Trail
    // if (this.history.length > 1) {
    //     for (let i = 0; i < this.history.length; i++) {
    //         let position = this.history[i];
    //         push();
    //         translate(position.x, position.y);
    //         rotate(angle);
    //         fill(255);
    //         noStroke();
    //         strokeWeight(2);
    //         rectMode(CENTER);
    //         square(0, 0, this.size);
    //         pop();

    //         angle += radians(10)
    //     }
    // }
  }

  Pellet.prototype.behaviors = function() {
    let arrive = this.arrive(this.target);
    this.applyForce(arrive);
  }

  Pellet.prototype.applyForce = function(f) {
    this.acc.add(f);
  }

  Pellet.prototype.arrive = function(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let dist = desired.mag();
    let speed = this.maxSpeed;
    if (dist < 100) {
      speed = map(dist, 0, 100, this.maxSpeed, 0);
    }
    desired.setMag(speed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  };

//   Pellet.prototype.seek = function(target) {
//     let desired = p5.Vector.sub(target, this.pos);
//     desired.setMag(this.maxSpeed);
//     let steer = p5.Vector.sub(desired, this.vel);
//     steer.limit(this.maxForce);
//     return steer;
//   }