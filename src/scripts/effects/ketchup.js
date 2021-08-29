// let angle2 = 0;
// let forward = true;
// let backward = false;

function Ketchup(x,y) {
    this.pos = createVector(x,y);
}

Ketchup.prototype.show = function() {
    push();
    translate(this.pos.x, this.pos.y);
    // Using the changing x position as a way to update the rotate
    // so it can rotate while moving
    rotate(PI / 180 * this.pos.x/2.5 + 90);
    imageMode(CENTER);
    image(ketchup, 0, 0, 150, 250);
    pop();

    // Making ketchup rotate back and forth
    // if (angle2 > 45) {
    //     backward = true;
    //     forward = false;
    // } else if (angle2 < -60) {
    //     forward = true;
    //     backward = false;
    // }
    // if (forward) {
    //     angle2 += 5
    // }
    // if (backward) {
    //     angle2 -= 5
    // }
}