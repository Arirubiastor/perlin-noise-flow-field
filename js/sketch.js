var inc = 0.1;
var scl = 10;
var cols, rows;
var fr;
var zoff = 0;

var particles = [];

function setup() {
  createCanvas(400, 400);
  //pixelDensity(1);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  for (var i = 0; i < 100; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
    background(255);
    // randomSeed(10);
  var yoff = 0;
  for (y= 0; y < rows; y++) {
    var xoff = 0;
    for (x = 0; x < cols; x++) {
      var index = (x + y * width) * 4;
      var angle = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      xoff += inc;
      stroke(0, 50);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      line(0, 0, scl, 0);
      pop();

    //   fill(angle);
    //   rect(x * scl, y * scl, scl, scl);
      
    //   noiseDetail(4);
    }
    
    yoff += inc;
    zoff += 0.002;
  }
for (var i = 0; i < particles.length; i++) {
  particles[i].update();
  particles[i].show();
  particles[i].edges();
}
  
//   start += inc;
fr.html(floor(frameRate()));
}