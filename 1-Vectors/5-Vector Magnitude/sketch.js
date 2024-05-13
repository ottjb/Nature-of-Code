backgroundColor = "#3a2217";
lineColor = "#9293a1";

var center;
var mouse;

function setup() {
  createCanvas(300, 300);

  center = createVector(width / 2, height / 2);
}

function draw() {
  background(backgroundColor);

  mouse = createVector(mouseX, mouseY);
  mouse.sub(center);

  fill(lineColor);
  noStroke();
  rect(0, 0, mouse.mag(), 10);

  stroke(lineColor);
  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
}
