// particles.js
function Particle() {
    this.pos = createVector(random(width), random(height)); 
    this.vel = p5.Vector.random2D(); 
    this.acc = createVector(0, 0); 
 
    this.update = function() {
         this.vel.add(this.acc);
         this.pos.add(this.vel);
         this.acc.mult(0);
    }
 
    this.applyForce = function(force) {
     this.acc.add(force);
    }
 
    this.show = function() {
     stroke(0);
     point(this.pos.x, this.pos.y);
    }
 
    this.edges = function() {
     if (this.pos.x > width) this.pos.x = 0;
     if (this.pos.x < 0) this.pos.x = width;
     if (this.pos.y > height) this.pos.y = 0;
     if (this.pos.y < 0) this.pos.y = height;
    }
 }

// sketch.js
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