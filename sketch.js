var tg1Bumper;
var analyzer;
var tg1Logo;
var bgColor;
var volume = 0;

function preload() {
  tg1Bumper = loadSound("./assets/TG1_new.mp3");
  tg1Logo = loadImage("./assets/logo.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  analyzer = new p5.Amplitude();
  analyzer.setInput(tg1Bumper);
}

function draw() {
  background("#FCF8AC"); //light yellow
  imageMode(CENTER);

  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);

  let x = volume;
  let y = volume;
  let ix = width - volume;
  let iy = height - volume;
  ellipseMode(RADIUS);
  fill("white");
  noStroke();
  ellipse(x, height / 2, y, y);
fill("#41649F"); //blue
  noStroke();
  ellipse(ix, height / 2, y, ix);
  fill("#E5E16C"); //yellow
  noStroke();
  ellipse(y, height / 2, x, iy);
  fill("#7EA2D6"); //blue
  noStroke();
  ellipse(ix, height / 2, iy, iy);

  tg1Bumper.play()
  image(tg1Logo, width / 2, height / 2, tg1Logo.width / 4, tg1Logo.height / 4);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
