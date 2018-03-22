var x, y;

function setup() {
  createCanvas(500, 500);
	img = loadImage("superMarioClouds_0.png");
  x = width;
  y = height / 4;
}

function draw() {
	background(240,248,255)

	image(img, x, y);

  x = x - 1;
  y = y;

  if (x < 0) {
    x = width;
  }
}
