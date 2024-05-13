var backgroundColor = "#0b0111";
var moverColor = "#d12ab0";

var mover;
const topSpeed = 10;

function setup() {
  createCanvas(300, 300);

  mover = new Mover();
}

function draw() {
  background(backgroundColor);

  mover.checkEdges();
  mover.update();
  mover.draw();
}

class Mover {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(-0.001, 0.01);
  }

  checkEdges() {
    if (this.pos.x < 0) {
      this.pos.x = width;
    } else if (this.pos.x > width) {
      this.pos.x = 0;
    }

    if (this.pos.y < 0) {
      this.pos.y = height;
    } else if (this.pos.y > height) {
      this.pos.y = 0;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(topSpeed);
    this.pos.add(this.vel);
  }

  draw() {
    fill(moverColor);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 32);
  }
}
