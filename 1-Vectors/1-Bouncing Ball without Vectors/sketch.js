backgroundColor = "#9c080b";
ballColor = "#e2f67d";
radius = 16;

var ballX;
var ballY;

var speedX;
var speedY;

function setup() {
  createCanvas(300, 300);

  ballX = width / 2;
  ballY = height / 2;

  speedX = 1.5;
  speedY = 1;
}

function draw() {
  var bg = color(backgroundColor);
  bg.setAlpha(255 / 2);
  background(bg);

  ballX += speedX;
  ballY += speedY;

  if (ballX - radius < 0 || ballX + radius > width) {
    speedX *= -1;
  }
  if (ballY - radius < 0 || ballY + radius > height) {
    speedY *= -1;
  }

  fill(ballColor);
  strokeWeight(0);
  noStroke();
  ellipse(ballX, ballY, radius * 2);
}
