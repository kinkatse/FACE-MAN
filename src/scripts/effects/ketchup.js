function Ketchup(x,y) {
    this.pos = createVector(x,y);
}

Ketchup.prototype.show = function() {
    push();
    rotate(angle);
    imageMode(CENTER);
    image(ketchup, this.pos.x, this.pos.y, 150, 250)
    pop();
    if (angle > radians(80)) {
        angle -= radians(40)
    } else if (angle < -radians(80)) {
        angle += radians(40)
    }
}

// Ketchup.prototype.update = function() {
//     this.pos;
// }