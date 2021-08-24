function Pretty(leftCheek, rightCheek, face) {
    // left cheek
    for (let d=w/6; d>=2; d-=1) {
        fill(255,99,107, map(d, w/6,2, 0,25));
        noStroke();
        circle(leftCheek.x + 15, leftCheek.y - 15, d);
    }
    
    // right cheek
    for (let d=w/6; d>=2; d-=1) {
        fill(255,99,107, map(d, w/6,2, 0,25));
        noStroke();
        circle(rightCheek.x - 15, rightCheek.y -15, d);
    }
}