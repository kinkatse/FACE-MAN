function Blank(x,y) {
    this.pos = createVector(x + 800,y);
    this.target = createVector(x,y);
    this.vel = createVector(-15,0);
}
  
Blank.prototype.update = function() {
    this.pos.add(this.vel);
}
  
Blank.prototype.show = function() {
    push();
    translate(this.pos.x, this.pos.y);
    fill('yellow');
    strokeWeight(5);
    stroke('rgba(0, 0, 0, 0)');
    ellipseMode(CENTER);
    ellipse(0, 0, 50, 15);
    pop();
}