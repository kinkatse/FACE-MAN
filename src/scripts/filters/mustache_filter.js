let m_dist;

function Mustache(nose, filtercount) {
    if (pikachuFilter) {
        m_dist = 5;
    } else if (kirbyFilter) {
        m_dist = 15;
    } else if (pacmanFilter) {
        m_dist = 15;
    } else {
        m_dist = 35;
    }

    push();
    imageMode(CENTER);
    image(mustacheImg, nose.x, nose.y + m_dist, 150, 150);
    pop();

    new filter_vis(filtercount);

}