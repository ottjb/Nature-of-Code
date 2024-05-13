var time = 0;

function setup() {
  createCanvas(300, 300);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  var xoff = 0;
  for (var x = 0; x < width; x++) {
    var yoff = 0;
    for (var y = 0; y < height; y++) {
      var pix = (x + y * width) * 4;
      var bright = map(noise(xoff, yoff, time), 0, 1, 0, 255);
      pixels[pix + 0] = 17;
      pixels[pix + 1] = 53;
      pixels[pix + 2] = 104;
      pixels[pix + 3] = bright;
      yoff += 0.01;
    }
    xoff += 0.01;
  }
  updatePixels();
  time += 0.01;
}
