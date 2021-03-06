function Zzz(x,y) {
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.width = 30;
  this.height = 53;
  this.opacity = 255;
  this.maxSpeed = 5;
  this.maxForce = 0.2;
}

Zzz.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Zzz.prototype.show = function() {
  push();
  translate(this.pos.x, this.pos.y);
  translate(0, 0);
  stroke("black");
  strokeWeight(15);
  line(0, 5, 100, 5);
  line(0, 5, 100, -110);
  line(0, -110, 100, -110);
  translate(120, -15);
  stroke("black");
  strokeWeight(12.5);
  line(0, 5, 60, 5);
  line(0, 5, 60, -80);
  line(0, -80, 60, -80);
  translate(80, -15);
  stroke("black");
  strokeWeight(10);
  line(0, 5, 30, 5);
  line(0, 5, 30, -50);
  line(0, -50, 30, -50);
  pop();
}

Zzz.prototype.behaviors = function() {
  let arrive = this.arrive(this.target);
  this.applyForce(arrive);
}

Zzz.prototype.applyForce = function(f) {
  this.acc.add(f);
}

Zzz.prototype.arrive = function(target) {
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