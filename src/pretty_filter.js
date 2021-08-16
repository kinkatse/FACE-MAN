function Pretty(center, face) {
    // left cheek
    for (let d=w/6; d>=2; d-=1) {
        fill(255,99,107, map(d, w/6,2, 0,50));
        noStroke();
        circle(center.x + 60, center.y + 15, d);
    }
    
    // right cheek
    for (let d=w/6; d>=2; d-=1) {
        fill(255,99,107, map(d, w/6,2, 0,50));
        noStroke();
        circle(center.x - 60, center.y + 15, d);
    }
}