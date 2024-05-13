backgroundColor = "#3b0a12";
lineColor = "#de51de";

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

  translate(width / 2, height / 2);
  stroke(lineColor);
  line(0, 0, mouse.x, mouse.y);
}
