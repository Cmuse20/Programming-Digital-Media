function setup() {
    createCanvas(400, 400);
    background(255);

}
let brushColor;

function draw() {
    strokeWeight(4);

    // Fills and draws the squares
    noStroke();
    fill('red');
    square(4, 2, 30);
    fill('orange');
    square(4, 34, 30);
    fill('yellow');
    square(4, 66, 30);
    fill('#66ff00');
    square(4, 98, 30);
    fill('cyan');
    square(4, 130, 30);
    fill('blue');
    square(4, 162, 30);
    fill('magenta');
    square(4, 194, 30);
    fill('brown');
    square(4, 226, 30);
    fill('white');
    square(4, 258, 30);
    fill('black');
    square(4, 290, 30);

    // Able to draw using the brushColor which is based on the coordinate
    if (mouseIsPressed) {
        if (mouseX <= 34) {
            if (mouseY <= 34) {
                brushColor = color('red');
            } else if (mouseY <= 66) {
                brushColor = color('orange');
            } else if (mouseY <= 98) {
                brushColor = color('yellow');
            } else if (mouseY <= 130) {
                brushColor = color('#66ff00');
            } else if (mouseY <= 162) {
                brushColor = color('cyan');
            } else if (mouseY <= 194) {
                brushColor = color('blue');
            } else if (mouseY <= 226) {
                brushColor = color('magenta');
            } else if (mouseY <= 258) {
                brushColor = color('brown');
            } else if (mouseY <= 290) {
                brushColor = color('white');
            } else if (mouseY <= 322) {
                brushColor = color('black');
            }
        }
        stroke(brushColor);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }

    // Shows the drawing color
    print(brushColor);

}