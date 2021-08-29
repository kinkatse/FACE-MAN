let angle2 = 0;
let forward = true;
let backward = false;

function Ketchup(x,y) {
    this.pos = createVector(x,y);
}

Ketchup.prototype.show = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(PI / 180 * angle2);
    imageMode(CENTER);
    image(ketchup, 0, 0, 150, 250);
    pop();

    // debugger
    if (angle2 > 45) {
        backward = true;
        forward = false;
    } else if (angle2 < -60) {
        forward = true;
        backward = false;
    }
    if (forward) {
        angle2 += 5
    }
    if (backward) {
        angle2 -= 5
    }
}