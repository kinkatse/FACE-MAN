function Heart(x,y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.width = 30;
    this.height = 53;
    this.opacity = 255;
    this.maxSpeed = 30;
    this.maxForce = 0.5;
    // debugger
  }
  
  Heart.prototype.update = function() {
    // debugger
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
    // this.width /= 1.2;
    // this.height /= 1.2;
    // this.opacity -= 10;
    // debugger
  }
  
  Heart.prototype.show = function() {
    // debugger
    translate(this.pos.x, this.pos.y);
    fill(255, 7, 69, this.opacity);
    noStroke();
    rotate(9.7);
    for (let i = 0; i < 2; i ++) {
        ellipse(0, 20, this.width, this.height);
        rotate(PI/4.2);
    }
  }

  Heart.prototype.behaviors = function() {
    let arrive = this.arrive(this.target);
    this.applyForce(arrive);
  }

  Heart.prototype.applyForce = function(f) {
    this.acc.add(f);
  }

  Heart.prototype.arrive = function(target) {
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