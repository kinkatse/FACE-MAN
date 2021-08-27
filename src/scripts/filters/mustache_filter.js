function Mustache(nose) {
    push();
    imageMode(CENTER);
    image(mustacheImg, nose.x, nose.y + 30, 150, 150);
    pop();
}