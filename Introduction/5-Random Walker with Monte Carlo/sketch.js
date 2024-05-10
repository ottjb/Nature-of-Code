var walkie;
var backgroundColor = "#2c180d";
var walkerColor = "#ef4465";

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
    var xStep = this.monteCarlo(10);
    var yStep = this.monteCarlo(10);
    if (xStep) {
      this.x += xStep;
    }
    if (yStep) {
      this.y += yStep;
    }
  }

  monteCarlo(maxStep) {
    var stepLength = random(0, maxStep);
    var stepCheck = random(0, maxStep);

    var directionChoices = [-1, 1];
    var dir = random(directionChoices);

    if (stepLength > stepCheck) {
      return stepLength * dir;
    } else {
      return;
    }
  }
}
