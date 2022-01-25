function setup() {
    createCanvas(150, 80);
    background('black');
}

function draw() {
    angleMode(DEGREES); // Easier to draw pacman with degrees than radians
    noStroke();

    // Pacman
    fill("yellow");
    arc(40, 40, 50, 50, 225, 135);

    // Red ghost
    fill("red");
    rect(80, 40, 50, 25); //bottom half of ghost
    ellipse(105, 36, 50, 50); //top half of ghost

    // White eyes
    fill("white");
    ellipse(94, 35, 18, 18);
    ellipse(116, 35, 18, 18);

    // Blue eyes
    fill("blue");
    ellipse(94, 35, 12, 12);
    ellipse(116, 35, 12, 12);
}