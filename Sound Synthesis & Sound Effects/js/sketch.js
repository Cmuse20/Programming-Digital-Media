let sunset, memSynth, fatOsc, ampEnv, fil, lfo, noise, gainNode;
let words = "ALOHA!!";
let angle = 0;

function preload() {
    sunset = loadImage('sunset.jpg');
    sunrise = loadImage('sunrise.jpg');
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    angleMode(DEGREES);

    memSynth = new Tone.MembraneSynth().toMaster();

    fatOsc = new Tone.FatOscillator({
        frequency: 220,
        detune: 0,
        phase: 0,
        modulationIndex: 2,
        modulationType: square,
        harmonicity: 2
    }).start();

    ampEnv = new Tone.Envelope({
        "attack": 0.1,
        "decay": 0.4,
        "sustain": 1.0,
        "release": 0.7
    });

    fil = new Tone.Filter(0.6, "notch");

    lfo = new Tone.LFO({
        min: 100,
        max: 170,
        frequency: '2n'
    }).start();

    lfo.connect(fil.frequency);

    noise = new Tone.Noise("white").connect(fil).start();

    gainNode = new Tone.Gain();
    ampEnv.connect(gainNode.gain);
    fil.connect(gainNode);
    fatOsc.connect(gainNode);
    gainNode.toMaster();
}

function draw() {
    background("#F5F5DC");
    textSize(24);
    fill("blue");
    textAlign(CENTER, TOP);
    text(words, 0, 12, width);

    sunset.resize(300, 300);

    if (mouseIsPressed == true) {
        translate(width / 2, height / 2);
        rotate(angle);
        image(sunset, 30, 30);
        angle = angle + 0.4;
    }

    sunrise.resize(300, 300);

    translate(width / 2, height / 2);
    rotate(angle);
    image(sunrise, 30, 30);
    angle = angle + 0.4;
}

function mousePressed() {
    playSound();
}

function mouseReleased() {
    background('white');
}

function playSound() {
    ampEnv.triggerAttackRelease(4);
    memSynth.triggerAttack("C2", "8n");
}