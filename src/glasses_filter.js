function Glasses(betweenEyes) {
    push();
    imageMode(CENTER);
    image(glassesImg, betweenEyes.x, betweenEyes.y - 5, 250, 250);
    pop();
}