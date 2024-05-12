var walkie;
var backgroundColor = "#c34623";
var walkerColor = "#f6fcec";

xoff = 0;
yoff = 1000;

function setup() {
  createCanvas(300, 300);
  walkie = new Walker();
}

function draw() {
  var bg = color(backgroundColor);
  bg.setAlpha(255 / 6);
  background(bg);
  walkie.step();
  walkie.draw();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  draw() {
    fill(walkerColor);
    noStroke();
    ellipse(this.x, this.y, 32);
  }

  step() {
    this.x = map(noise(xoff), 0, 1, 0, width);
    this.y = map(noise(yoff), 0, 1, 0, height);

    xoff += 0.01
    yoff += 0.01;
  }
}
