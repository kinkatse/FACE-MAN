function FilterPos(fvY, fvColor1, fvColor2, fvDist, fvWord) {
    
    push();
    translate(57, fvY);
    fill(fvColor1);
    stroke(fvColor2);
    strokeWeight(2);
    rectMode(CENTER);
    rect(1, 1, fvDist, 30, 5, 5, 5, 5);
    fill(255);
    textAlign(CENTER);
    stroke('rgba(0, 0, 0, 0.5)');
    strokeWeight(2);
    textSize(18);
    textFont('Helvetica');
    text(fvWord, 0, 7);
    pop();

}