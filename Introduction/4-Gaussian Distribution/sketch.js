var backgroundColor = "#cefd86";
var dataColor = "#626599";

function setup() {
  createCanvas(300, 300);
  background(backgroundColor);
}

function draw() {
  var cc = color(dataColor);
  cc.setAlpha(5);
  stroke(cc);
  strokeWeight(25);
  point(randomGaussian(width / 2, 50), height / 2);
}
