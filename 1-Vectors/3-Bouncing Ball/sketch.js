backgroundColor = "#276f86";
ballColor = "#7efefb";
radius = 16;

var ballPos;
var ballVel;

function setup() {
  createCanvas(300, 300);

  ballPos = createVector(width / 2, height / 2);
  ballVel = createVector(1, 2);
}

function draw() {
  var bg = color(backgroundColor);
  bg.setAlpha(255 / 2);
  background(bg);

  ballPos.add(ballVel);

  if (ballPos.x - radius < 0 || ballPos.x + radius > width) {
    ballVel.x *= -1;
  }
  if (ballPos.y - radius < 0 || ballPos.y + radius > height) {
    ballVel.y *= -1;
  }

  fill(ballColor);
  strokeWeight(0);
  noStroke();
  ellipse(ballPos.x, ballPos.y, radius * 2);
}
