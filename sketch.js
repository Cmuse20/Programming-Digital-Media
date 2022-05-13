// https://www.youtube.com/watch?v=f5BGDKJOtHw

var screen = 0;
var y = -20;
var x = 200;
var speed = 2;
var score = 0;
let gameOnImage;
let endImage;
let startScreenImage;
var key;
let serial;
let birds;
let waves;

function preload() {
    birds = loadSound('birds.mp3');
    waves = loadSound('ocean-waves.mp3');
}

function setup() {
    createCanvas(600, 400);
    gameOnImage = loadImage('beach.jpg');
    endImage = loadImage('dirtyBeach.jpg');
    startScreenImage = loadImage('GeauxClean.png');

    // serial = new p5.SerialPort();
    // serial.open('COM4');

    birds.loop();
    waves.loop();

    waves.stop();
}

function draw() {
    if (screen == 0) {
        startScreen();
    } else if (screen == 1) {
        gameOn();
    } else if (screen == 2) {
        endScreen();
    }
}

function startScreen() {
    background(startScreenImage);
    fill('black');
    textAlign(CENTER);
    text('WELCOME TO MY CATCHING GAME', width / 2, height / 2);
    text('click to start', width / 2, height / 2 + 20);
    reset();
}

function gameOn() {
    background(gameOnImage);
    fill('black');
    text("score = " + score, 30, 20);
    fill('white');
    ellipse(x, y, 20, 20);
    rectMode(CENTER);
    rect(mouseX, height - 10, 50, 30);
    y += speed;
    if (y > height) {
        screen = 2;
    }
    if (y > height - 10 && x > mouseX - 20 && x < mouseX + 20) {
        y = -20;
        speed += 0.5;
        score += 1;
    }
    if (y == -20) {
        pickRandom();
    }
}

function pickRandom() {
    x = random(20, width - 20);
}

function endScreen() {
    background(endImage);
    textAlign(CENTER);
    textSize(18);
    fill('black');
    text('GAME OVER', width / 2, (height / 2) - 30);
    text("SCORE = " + score, width / 2, (height / 2) - 10);
    text('click to play again', width / 2, (height / 2) + 10);
}

function mousePressed() {
    if (screen == 0) {
        screen = 1;
        waves.play();
        birds.stop();
    } else if (screen == 2) {
        screen = 0;
        birds.play();
        waves.stop();
    }
}

function reset() {
    score = 0;
    speed = 2;
    y = -20;
}