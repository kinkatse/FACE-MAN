function Thunder() {
    this.pos = createVector(random(width), 260);
}

Thunder.prototype.show = function() {
    push();
    imageMode(CENTER);
    image(thunderImg, this.pos.x, this.pos.y, 522, 522)
    pop();
}