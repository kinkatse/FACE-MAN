    
function Filter_pos(fv_y, fv_color1, fv_color2, fv_dist, fv_word) {
    
    push();
    translate(57, fv_y);
    fill(fv_color1);
    stroke(fv_color2);
    strokeWeight(2);
    rectMode(CENTER);
    rect(1, 1, fv_dist, 30, 5, 5, 5, 5);
    fill(255);
    textAlign(CENTER);
    stroke('rgba(0, 0, 0, 0.5)');
    strokeWeight(2);
    textSize(18);
    textFont('Helvetica');
    text(fv_word, 0, 7);
    pop();

}