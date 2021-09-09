// let button;

function FilterPos(fvY, fvColor1, fvColor2, fvDist, fvImg, toggle) {
    
    push();
    translate(23, fvY);
    fill(fvColor1);
    stroke(fvColor2);
    strokeWeight(2);
    rectMode(CENTER);
    rect(1, 1, fvDist, 30, 5, 5, 5, 5);
    // button = createButton('hi');
    // button.position(300, 300);
    // button.mousePressed(toggle);
    fill(255);
    imageMode(CENTER);
    image(fvImg, 0, 0, 30, 30);
    pop();

}