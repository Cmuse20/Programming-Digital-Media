// https://youtu.be/9ZJbYUV9ez8

let slider;
let buttonNames = ['q', 'f', 'b', 'g', 'l', 'm', 'c', 'j'];
let buttons = [];

const synth = new Tone.PolySynth();
const drum = new Tone.PluckSynth({
    "attackNoise": 1,
    "dampening": 4000,
    "resonance": 0.7,
    "release": 1,
});
const metal = new Tone.MetalSynth({
    "frequency": 65,
    "envelope": {
        "attack": 0.001,
        "decay": 1.4,
        "release": 0.15
    },
    "harmonicity": 5.5,
    "modulationIndex": 33,
    "resonance": 700,
    "octaves": 1.5
});

const reverb = new Tone.Reverb(0.5).toDestination();

const pulsOsc = new Tone.PulseOscillator(20, 0.3).start();
const freqEnv = new Tone.FrequencyEnvelope({
    attack: 0.3,
    baseFrequency: "C4",
    octaves: 3
})

pulsOsc.connect(freqEnv);
freqEnv.connect(reverb);

synth.connect(reverb);
drum.connect(reverb);
metal.connect(reverb);

let notes = {
    'q': 'C4',
    'f': 'D4',
    'b': 'E4',
    'g': 'F4',
    'l': 'G4',
    'm': 'A5',
    'c': 'B4',
    'j': 'C5'
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    Tone.start();
    synth.release = 2;
    synth.resonance = 0.98;
    synth.triggerAttackRelease("C4", "8n");

    slider = new Nexus.Slider('#slider');
    slider.on('change', (v) => {
        reverb.decay.value = v;
    })

    buttonNames.forEach((word, index) => {
        buttons[index] = createButton(word);
        buttons[index].style('background-color', '#ADD8E6');
        buttons[index].style("border-radius", "12px");
        buttons[index].style("display", "inline-block");
        buttons[index].style("text-align", "center");
        buttons[index].style('color', '#00008b');
        buttons[index].size(110, 50);
        buttons[index].style("font-size", "20px");
        buttons[index].position((index * 150) + 10, 200);
    })
}
let word = "These are the letters for the octave";

function draw() {
    background('#FFC0CB');
    let font;
    fill(0);
    textSize(20);
    text(word, 500, 100);
}


function keyPressed() {
    let toPlay = notes[key];
    console.log(toPlay);

    Tone.start();

    pulsOsc.frequency.value = toPlay;
    freqEnv.triggerAttackRelease('8n');
}