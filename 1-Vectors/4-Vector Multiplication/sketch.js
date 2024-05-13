backgroundColor = "#c9070f";
lineColor = "#dbeef5";

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
  mouse.mult(0.5);

  translate(width / 2, height / 2);
  stroke(lineColor);
  line(0, 0, mouse.x, mouse.y);
}
