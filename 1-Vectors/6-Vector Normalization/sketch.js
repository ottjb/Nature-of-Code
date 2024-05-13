backgroundColor = "#9101a3";
lineColor = "#15e2fb";

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

  mouse.normalize();
  mouse.mult(50);

  stroke(lineColor);
  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
}
