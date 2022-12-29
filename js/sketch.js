var inc = 0.1;
var scl = 10;
var cols, rows;
var fr;
var zoff = 0;

var particles = [];

var flowfield;

function setup() {
  createCanvas(800, 600);
  //pixelDensity(1);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 1000; i++) {
    particles[i] = new Particle();
  }

  background(255);
}

function draw() {
    // randomSeed(10);
  var yoff = 0;
  for (y= 0; y < rows; y++) {
    var xoff = 0;
    for (x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v; // create vectors
      xoff += inc;
      stroke(0, 50);
    //   push();
    //   translate(x * scl, y * scl);
    //   strokeWeight(1);
    //   rotate(v.heading());
    //   line(0, 0, scl, 0);
    //   pop();

    //   fill(angle);
    //   rect(x * scl, y * scl, scl, scl);
      
    //   noiseDetail(4);
    }
    
    yoff += inc;
    zoff += 0.0003;
  }
for (var i = 0; i < particles.length; i++) {
  particles[i].follow(flowfield);
  particles[i].update();
  particles[i].edges();
  particles[i].show();
}
  
//   start += inc;
fr.html(floor(frameRate()));
}