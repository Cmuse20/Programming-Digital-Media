let sounds = new Tone.Players({
    shot: 'media/02-shot.mp3',
    through: 'media/03-through.mp3',
    theHeart: 'media/04-theHeart.mp3',
    FamilyFeud: 'media/FamilyFeud-Buzzer3.mp3'
})

let soundNames = ['shot', 'through', 'theHeart', 'FamilyFeud'];
let buttons = [];
let slider;
let feedbackDelay = new Tone.FeedbackDelay("8n", 0.5).toDestination();
let word = "You can also press the number correlating to the button in order from 1 to 4";

function drawWords() {

}

function setup() {
    createCanvas(displayWidth, displayHeight);
    sounds.connect(feedbackDelay);
    feedbackDelay.toDestination();

    soundNames.forEach((word, index) => {
        buttons[index] = createButton(word);
        buttons[index].style('background-color', '#ADD8E6');
        buttons[index].style("border-radius", "12px");
        buttons[index].style("display", "inline-block");
        buttons[index].style("text-align", "center");
        buttons[index].style('color', '#00008b');
        buttons[index].size(120, 50);
        buttons[index].style("font-size", "20px");
        buttons[index].position((index * 200) + 60, 200);
        buttons[index].mousePressed(() => playSound(word));
    })

    slider = createSlider(0., 1., 0.5, 0.25);
    slider.mouseReleased(() => {
        feedbackDelay.delayTime.value = slider.value();
    })
    slider.position(350, 300);
    slider.style('width', '80px');
}

function draw() {
    background('#FFC0CB');

    let font;
    fill(0);
    textSize(20);
    text(word, 100, 100);
}

function keyPressed() {
    if (key == "1") {
        sounds.player('shot').start();
    }
    if (key == "2") {
        sounds.player('through').start();
    }
    if (key == "3") {
        sounds.player('theHeart').start();
    }
    if (key == "4") {
        sounds.player('FamilyFeud').start();
    }
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
    }
}