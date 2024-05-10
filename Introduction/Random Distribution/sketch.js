const sampleSize = 10;
const incrementValue = 0.5;
const backgroundColor = "#ae6039";
const dataColor = "#f8ffe6";

var samples = new Array(sampleSize).fill(0);

function setup() {
    createCanvas(300, 300);
}

function draw() {
    background(backgroundColor);

    index = floor(random(sampleSize));
    samples[index] += incrementValue;

    var dataWidth = width / sampleSize;
    for(var i = 0; i < sampleSize; i++) {
        noStroke();
        fill(dataColor);
        rect(dataWidth * i, height - samples[i], dataWidth, height);
    }
}