let character;
let character2;
let character3;
let character4;

function preload() {
    spriteSheet = loadImage("SpelunkyGuy.png");
    spriteSheet2 = loadImage("Spelunky yellow.png");
    spriteSheet3 = loadImage("Spelunky purple.png");
    spriteSheet4 = loadImage("Viking.png");
}

function setup() {
    createCanvas(800, 600);
    imageMode(CENTER);

    let horizontal = random(0, 400);
    let vertical = random(150, 250);
    let horizontal2 = random(400, 500);
    let vertical2 = random(300, 425);

    character = new Character(spriteSheet, 0, vertical);
    character2 = new Character(spriteSheet2, horizontal, 300);
    character3 = new Character(spriteSheet3, horizontal2, 150);
    character4 = new Character(spriteSheet4, 420, vertical2);;
}

function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        character.go(1);
        character2.go(1);
        character3.go(1);
        character4.go(1);

    } else if (keyCode == LEFT_ARROW) {
        character.go(-1);
        character2.go(-1);
        character3.go(-1);
        character4.go(-1);

    }
}

function keyReleased() {
    character.stop();
    character2.stop();
    character3.stop();
    character4.stop();

}

function draw() {
    background(255, 255, 255);
    character.draw();
    character2.draw();
    character3.draw();
    character4.draw();

}


class Character {
    constructor(spriteSheet, x, y) {
        this.spriteSheet = spriteSheet;
        this.spriteSheet2 = spriteSheet2;
        this.spriteSheet3 = spriteSheet3;
        this.spriteSheet4 = spriteSheet4;
        this.sx = 0;
        this.x = x, this.y = y;
        this.move = 0;
        this.facing = 1;
    }

    draw() {
        push();
        translate(this.x, this.y);
        scale(this.facing, 1);
        if (this.move == 0) {
            image(this.spriteSheet, 0, 0, 200, 200, 0, 0, 80, 80);

        } else {
            image(this.spriteSheet, 0, 0, 200, 200, 80 * (this.sx + 1), 0, 80, 80);

        }

        if (frameCount % 5 == 0) {
            this.sx = (this.sx + 1) % 8;

        }
        this.x += 2 * this.move;
        pop();
    }

    go(direction) {
        this.move = direction;
        this.facing = direction;
        this.srpiteId = 3;

    }

    stop() {
        this.move = 0;

    }
}
