function Speedy(x,y) {
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.maxSpeed = 10;
  this.maxForce = 0.5;
}

Speedy.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Speedy.prototype.show = function() {
  if (this.vel.x >= 0) {
    push();
    imageMode(CENTER);
    image(speedyImg, this.pos.x, this.pos.y, 140, 140)
    pop();
  } else if (this.vel.x < 0) {
      push();
      imageMode(CENTER);
      scale(-1, 1)
      image(speedyImg, -this.pos.x, this.pos.y, 140, 140)
      pop();
  }
}

Speedy.prototype.behaviors = function() {
  let arrive = this.arrive(this.target);
  this.applyForce(arrive);
}

Speedy.prototype.applyForce = function(f) {
  this.acc.add(f);
}

Speedy.prototype.arrive = function(target) {
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