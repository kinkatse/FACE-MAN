let angle = 0;

function Vehicle(x,y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.size = 15;
    this.maxSpeed = 150;
    this.maxForce = 1.8;
    this.history = [this.pos];
  }
  
  Vehicle.prototype.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
    this.size -= 1;
    this.history.push(this.pos);
  }
  
  Vehicle.prototype.show = function() {
    push();
    translate(this.pos.x, this.pos.y);
    // stroke(255);
    // strokeWeight(4);
    // line(this.pos.x, this.pos.y, this.pos.x + 5, this.pos.y + 5);
    rotate(angle);
    fill(255);
    noStroke();
    strokeWeight(2);
    rectMode(CENTER);
    square(0, 0, this.size);
    pop();

    angle += radians(80)

    // Air Dust Trail
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

  Vehicle.prototype.behaviors = function() {
    let arrive = this.arrive(this.target);
    this.applyForce(arrive);
  }

  Vehicle.prototype.applyForce = function(f) {
    this.acc.add(f);
  }

  Vehicle.prototype.arrive = function(target) {
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

//   Vehicle.prototype.seek = function(target) {
//     let desired = p5.Vector.sub(target, this.pos);
//     desired.setMag(this.maxSpeed);
//     let steer = p5.Vector.sub(desired, this.vel);
//     steer.limit(this.maxForce);
//     return steer;
//   }