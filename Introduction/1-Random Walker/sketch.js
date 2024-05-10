var walkie;
var backgroundColor = "#18002a";
var walkerColor = "#5979d0";

function setup() {
  createCanvas(300, 300);
  background(backgroundColor);

  walkie = new Walker();
}

function draw() {
  walkie.step();
  walkie.draw();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  draw() {
    stroke(walkerColor);
    strokeWeight(2);
    point(this.x, this.y);
  }

  step() {
    var xStep = random(-1, 1);
    var yStep = random(-1, 1);
    this.x += xStep;
    this.y += yStep;
  }
}
