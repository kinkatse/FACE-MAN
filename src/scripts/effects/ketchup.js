function Ketchup(x,y) {
    this.pos = createVector(x,y);
}

Ketchup.prototype.show = function() {
    push();
    imageMode(CENTER);
    image(ketchup, this.pos.x, this.pos.y, 300, 500)
    pop();
}