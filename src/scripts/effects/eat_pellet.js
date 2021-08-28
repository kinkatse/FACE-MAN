function Pellet(x,y) {
    this.pos = createVector(x + count + 800,y);
    this.target = createVector(x,y);
    this.vel = createVector(-15,0);
}
  
Pellet.prototype.update = function() {
    this.pos.add(this.vel);
}
  
Pellet.prototype.show = function() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(251, 254, 171);
    strokeWeight(2);
    stroke('rgba(0, 0, 0, 0.5)');
    ellipseMode(CENTER);
    ellipse(0, 0, 15, 15);
    pop();
}