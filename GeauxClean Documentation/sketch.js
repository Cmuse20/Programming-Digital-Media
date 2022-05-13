let screen = 0;
let backImage;
let topImage;
let vid;
let toneEffects = 'Like most others in the course, tone is very unpredictable which is the reason for the \nsubstitution of looping the audio track of 3 seconds for the duration of a particular \nscreen. There are birds chirping if you are on the startscreen and the sound of waves \nfor the duration of the game and ending screen totalling your score. Turning on the \nvolume you will hear the 2 different sounds playing throughout the rest of the \ndocumentation.'
let p5Code = 'There are 3 functions created.\n    The first is the start screen which includes the text declaring the screen to be clicked \nto start the game. Also within the start screen function there is an embedded function \nreset which resets the score and speed. \n    The second during the game calculates the speed and randomly assigns the elipse to \nfall. \n    Last of which shows the score and prompts the user to play again.';
let arduino1;
let arduino2;
let p5Github;
let video;
let arduinoLink;
let birds;
let waves;
let olefont;
let futureText = 'In the future I would definitely love for these to communicate without error. Often, I would \nhave to find substitutions for when Tone and the serial control would not communicate. \nEventually, I would implement this to include 2-players that would battle it out using 2 \njoystick (hopefully I get it to function correctly), but this has been very fun this semester. \nI would also like to thank my professor and teachers assistant for making this course very \ninteresting. Thank you!';

function preload() {
    birds = loadSound('birds.mp3');
    waves = loadSound('ocean-waves.mp3');
    olefont = loadFont('OleoScriptSwashCaps-Regular.ttf');
}

function setup() {
    createCanvas(800, 500);
    backImage = loadImage('GeauxClean.png');
    topImage = loadImage('GeauxCleanTop.png');
    arduino1 = loadImage('arduino1.jpg');
    arduino2 = loadImage('arduino2.jpg');

    birds.loop();
    waves.loop();

    waves.stop();
}

function draw() {
    if (screen == 0) {
        gameVideo();
    } else if (screen == 1) {
        p5jsCode();
    } else if (screen == 2) {
        toneCode();
    } else if (screen == 3) {
        arduino();
    } else if (screen == 4) {
        future();
    }
}


function mousePressed() {
    if (screen == 0) {
        screen = 1;
    } else if (screen == 1) {
        screen = 2;
        waves.play();
        birds.stop();
    } else if (screen == 2) {
        screen = 3;
        birds.play();
        waves.stop();
    } else if (screen == 3) {
        screen = 4;
        waves.play();
        birds.stop();
    } else if (screen == 4) {
        screen = 5;
        birds.play();
        waves.stop();
    } else if (screen == 5) {
        screen = 0;
        waves.play();
        birds.stop();
    }
}

function gameVideo() {
    background(backImage);
    fill('black');
    textFont(olefont);
    textSize(24);
    text('GeauxClean Demo', 300, 250);
    text('Check out the GeauxClean demo with the link below!', 150, 350);
    video = createA('https://youtu.be/f5BGDKJOtHw', 'GeauxClean demo', '_blank');
    video.position(12, 450);
}

function p5jsCode() {
    background(topImage);
    fill('black');
    textFont(olefont);
  textSize(20);
    text(p5Code, 100, 200);
    text('p5 Code', 350, 120);

    p5Github = createA('https://github.com/Cmuse20/Programming-Digital-Media-2022/blob/main/sketch.js#:~:text=watch%3Fv%3Df5BGDKJOtHw-,var%20screen%20%3D%200%3B,%7D,-%C2%A9%202022%20GitHub%2C%20Inc', 'GeauxClean p5js code', '_blank');
    p5Github.position(620, 450);
}

function toneCode() {
    background(topImage);
    fill('black');
    textFont(olefont);
    text(toneEffects, 100, 200);
    text('Tone Substitution', 300, 120);
}

function arduino() {
    background(topImage);
    fill('black');
    textFont(olefont);
    text('Arduino', 350, 120);
    image(arduino1, 20, 150, 250, 250);
    image(arduino2, 500, 150, 250, 250);
    arduinoLink = createA('https://github.com/Cmuse20/Programming-Digital-Media-2022/blob/main/iterating%20LED.ino#:~:text=/-,*%20A%20simple%20program%20to%20sequentially%20turn%20on%20and%20turn%20off,%7D,-%C2%A9%202022%20GitHub%2C%20Inc', 'Arduino Code', '_blank');
    arduinoLink.position(350, 450);
}

function future() {
    background(topImage);
    fill('black');
    textFont(olefont);
  text(futureText, 80, 200);
    text('Future', 350, 120);
}