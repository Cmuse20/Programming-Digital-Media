let spider = [];
let count = 10;
let squish = 0;
let timer = 10;
let deadBug = [];

function preload() {
    for (let i = 0; i < count; i++) {
        spider[i] = new BugGame("spiderSprite.png", random(30, 640), random(30, 480), random(3, 9), random([-1, 1]));
        deadBug = loadImage("squished.png");
    }
}

function setup() {
    createCanvas(640, 480);
    imageMode(CENTER);
}

function mousePressed() {
    for (let i = 0; i < count; i++) {
        spider[i].squish(mouseX, mouseY);
    }
}

function mouseReleased() {
    for (let i = 0; i < count; i++) {
        spider[i].drop();
    }
}

function draw() {
    background('black');

    for (let i = 0; i < count; i++) {
        spider[i].draw();
        if (squish === 10) {
            spider[i].draw;
        }
    }

    textSize(25);
    fill('orange');
    text("Squished: " + squish, 20, 30);
    text("Time left: " + timer, 250, 30);
    if ((frameCount % 60 == 0) && (timer > 0)) {
        timer--;
    }
    if (timer === 0) {
        fill('white');
        rect(230, 220, 160, 90);
        fill('black');
        text("Game Over!", 250, 250);
        text("Score:" + squish, 250, 300);
        spider[i].moving = 0;
    }
}

function BugGame(imageName, x, y, speed, moving) {
    this.spriteSheet = loadImage(imageName);
    this.frame = 0;
    this.x = x;
    this.y = y;
    this.moving = moving;
    this.facing = moving;
    this.speed = speed;

    this.draw = function() {

        push();
        translate(this.x, this.y);
        if (this.facing < 0) {
            scale(-1.0, 1.0);
        }

        if (this.moving == 0) {
            image(this.spriteSheet, 0, 0, 80, 80, 0, 0, 80, 80);
        } else {
            if (this.frame == 0) {
                image(this.spriteSheet, 0, 0, 80, 80, 80, 0, 80, 80);
            }
            if (this.frame == 1) {
                image(this.spriteSheet, 0, 0, 80, 80, 160, 0, 80, 80);
            }
            if (this.frame == 2) {
                image(this.spriteSheet, 0, 0, 80, 80, 240, 0, 80, 80);
            }
            if (this.frame == 3) {
                image(this.spriteSheet, 0, 0, 80, 80, 320, 0, 80, 80);
            }
            if (this.frame == 4) {
                image(this.spriteSheet, 0, 0, 80, 80, 400, 0, 80, 80);
            }
            if (this.frame == 5) {
                image(this.spriteSheet, 0, 0, 80, 80, 480, 0, 80, 80);
            }
            if (this.frame == 6) {
                image(this.spriteSheet, 0, 0, 80, 80, 560, 0, 80, 80);
            }
            if (this.frame == 7) {
                image(this.spriteSheet, 0, 0, 80, 80, 640, 0, 80, 80);
            }

            if (frameCount % 6 == 0) {
                this.frame = (this.frame + 1) % 8;
                this.x = this.x + this.moving * this.speed;

                if (this.x < 30) {
                    this.moving = 1;
                    this.facing = 1;
                }
                if (this.x > width - 30) {
                    this.moving = -1;
                    this.facing = -1;
                }

                if (squish > 3) {
                    this.x = this.x + this.moving * (this.speed + 3);
                }
            }


        }

        pop();

        this.go = function(direction) {
            this.moving = direction;
            this.facing = direction;
        }

        this.stop = function() {
            this.moving = 0;
            this.frame = 3;
        }

        this.grab = function(x, y) {
            if (this.x - 40 < x && x < this.x + 40 && this.y - 40 < y && y < this.y + 40) {
                this.stop();
                this.mouseX = x;
                this.mouseY = y;
                this.initialX = this.x;
                this.initialY = this.y;
            }
        }

        this.drag = function(x, y) {
            if (this.moving == 0) {
                this.x = (x - this.mouseX) + this.initialX;
                this.y = (y - this.mouseY) + this.initialY;
            }
        }

        this.drop = function() {
            this.go(this.facing);
        }

        this.squish = function(x, y) {
            if ((this.x - 40 < x && x < this.x + 40 && this.y - 40 < y && y < this.y + 40) && (this.spriteSheet !== deadBug)) {
                this.moving = 0;
                this.spriteSheet = deadBug;
                squish = squish + 1;
                this.update = function() {}
            }
        }
    }
}