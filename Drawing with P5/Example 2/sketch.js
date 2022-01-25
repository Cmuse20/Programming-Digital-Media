function setup() {
    createCanvas(140, 140);
}

function draw() {
    noStroke();
    blendMode(LIGHTEST);
    colorMode(RGB, 100);
    fill(100, 0, 0, 50);
    circle(70, 60, 60);
    fill(0, 0, 100, 50);
    circle(50, 90, 60);
    fill(0, 100, 0, 50);
    circle(90, 90, 60);
}