function Ghosts(leftCheek, rightCheek, face) {
    // // left cheek
    // for (let d=w/6; d>=2; d-=1) {
    //     fill(255,99,107, map(d, w/6,2, 0,25));
    //     noStroke();
    //     circle(leftCheek.x + 15, leftCheek.y, d);
    // }
    
    // // right cheek
    // for (let d=w/6; d>=2; d-=1) {
    //     fill(255,99,107, map(d, w/6,2, 0,25));
    //     noStroke();
    //     circle(rightCheek.x - 15, rightCheek.y, d);
    // }

    push();
    // imageMode(CENTER)
    image(shadow, 300, 400, 106, 152);
    pop();

    push();
    // imageMode(CENTER)
    image(bashful, 400, 300, 106, 152)
    pop();

    push();
    // imageMode(CENTER)
    image(speedy, 300, 300, 106, 152)
    pop();

    push();
    // imageMode(CENTER)
    image(pokey, 400, 400, 106, 152)
    pop();

}