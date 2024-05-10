var walkie;
var backgroundColor = "#294475";
var walkerColor = "#48fd7c";

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
    var horizontalChoices = [-1, 0, 1, 1];
    var verticalChoices = [-1, 0, 1];
    var xStep = random(horizontalChoices);
    var yStep = random(verticalChoices);
    this.x += xStep;
    this.y += yStep;
  }
}
