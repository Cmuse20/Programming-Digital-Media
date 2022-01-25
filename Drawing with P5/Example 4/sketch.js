function setup() {
    createCanvas(140, 140);
    background(26, 0, 153);
}

function draw() {
    stroke('white'); //white outlines
    strokeWeight(2);
    fill('green'); //green circle
    ellipse(70, 70, 85, 85);

    fill('red');
    beginShape();

    // Numbered in order of clockwise
    vertex(70, 30); // 1
    vertex(85, 55); // 2
    vertex(110, 55); // 3
    vertex(95, 75); // 4
    vertex(100, 100); // 5
    vertex(70, 85); // 6
    vertex(40, 100); // 7
    vertex(45, 75); // 8
    vertex(30, 55); // 9
    vertex(55, 55); // 10

    endShape(CLOSE);
}