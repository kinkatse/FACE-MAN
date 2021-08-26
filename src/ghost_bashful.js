function Bashful(x,y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.maxSpeed = 10;
    this.maxForce = 0.5;
  }
  
  Bashful.prototype.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }
  
  Bashful.prototype.show = function() {
    push();
    image(bashful, this.pos.x, this.pos.y, 140, 140)
    pop();
  }

  Bashful.prototype.behaviors = function() {
    let arrive = this.arrive(this.target);
    this.applyForce(arrive);
  }

  Bashful.prototype.applyForce = function(f) {
    this.acc.add(f);
  }

  Bashful.prototype.arrive = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var dist = desired.mag();
    var speed = this.maxSpeed;
    if (dist < 100) {
      speed = map(dist, 0, 100, this.maxSpeed, 0);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  };