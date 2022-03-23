let sounds = new Tone.Players({
        shot: 'media/02-shot.mp3',
        through: 'media/03-through.mp3',
        theHeart: 'media/04-theHeart.mp3',
        FamilyFeud: 'media/FamilyFeud-Buzzer3.mp3',
        andYoure: 'media/05-andYoure.mp3',
        to: 'media/06-to.mp3',
        blame: 'media/07-blame.mp3',
        darlin: 'media/08-darlin.mp3',
        you: 'media/09-you.mp3',
        love: 'media/11-love.mp3'
    })
    // var buff = Players.get();

let soundNames = ['shot', 'through', 'theHeart', 'FamilyFeud', 'andYoure', 'to', 'blame', 'darlin', 'you', 'love'];
let buttons = [];
let slider;
let feedbackDelay = new Tone.FeedbackDelay("8n", 0.5).toDestination();
let colors = ['red', 'orange', 'yellow', '#66ff00', 'cyan', 'blue', 'magenta', 'brown', 'white', 'black'];
let brushColor;
let word = "You can also press the number correlating to the button in order from 1 to 10";
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '$'];

function drawWords() {

}

function setup() {
    createCanvas(displayWidth, displayHeight);
    sounds.connect(feedbackDelay);
    feedbackDelay.toDestination();
        
    var newBut = createButton("reset");
    newBut.mousePressed(resetSketch);

    soundNames.forEach((word, index) => {
        buttons[index] = createButton(word);
        buttons[index].style('outline', 'none');
        buttons[index].style('background-color', colors[index]);
        buttons[index].size(30, 30);
        buttons[index].style("font-size", "0px");
        buttons[index].position(4, (index * 30));
        buttons[index].mousePressed(() => playSound(word));
    })

    numbers.forEach((word, index) => {
        buttons[index] = createButton(word);
        buttons[index].style('outline', 'none');
        buttons[index].style('background-color', 'white');
        buttons[index].size(30, 30);
        buttons[index].style("font-size", "20px");
        buttons[index].position(30, (index * 30));
        buttons[index].mousePressed(() => playSound(word));

    })


    slider = createSlider(0., 1., 0.5, 0.25);
    slider.mouseReleased(() => {
        feedbackDelay.delayTime.value = slider.value();
    })
    slider.position(200, 300);
    slider.style('width', '80px');
}

function draw() {

    text("You can also press the number/symbol associated with each color", 50, 400);

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
}

print(brushColor);

function keyPressed() {
    if (key == "1") {
        sounds.player('shot').start();
        brushColor = color('red');
    }
    if (key == "2") {
        sounds.player('through').start();
        brushColor = color('orange');
    }
    if (key == "3") {
        sounds.player('theHeart').start();
        brushColor = color('yellow');
    }
    if (key == "4") {
        sounds.player('FamilyFeud').start();
        brushColor = color('#66ff00');
    }
    if (key == "5") {
        sounds.player('andYoure').start();
        brushColor = color('cyan');
    }
    if (key == "6") {
        sounds.player('to').start();
        brushColor = color('blue');
    }
    if (key == "7") {
        sounds.player('blame').start();
        brushColor = color('magenta');
    }
    if (key == "8") {
        sounds.player('darlin').start();
        brushColor = color('brown');
    }
    if (key == "9") {
        sounds.player('you').start();
        brushColor = color('white');
    }
    if (key == "$") {
        sounds.player('love').start();
        brushColor = color('black');
    }
}

function mousePressed() {
    playSound();
}

function playSound(whichSound) {
    if (whichSound === 'through') {
        sounds.player('through').start();
    } else if (whichSound === 'theHeart') {
        sounds.player('theHeart').start();
    } else if (whichSound === 'shot') {
        sounds.player('shot').start();
    } else if (whichSound === 'FamilyFeud') {
        sounds.player('FamilyFeud').start();
    } else if (whichSound === 'andYoure') {
        sounds.player('andYoure').start();
    } else if (whichSound === 'to') {
        sounds.player('to').start();
    } else if (whichSound === 'blame') {
        sounds.player('blame').start();
    } else if (whichSound === 'darlin') {
        sounds.player('darlin').start();
    } else if (whichSound === 'you') {
        sounds.player('you').start();
    } else if (whichSound === 'love') {
        sounds.player('love').start();
    }
}
