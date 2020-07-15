const c = 30;
const G = 2;
const dt = 0.1;

let m87;

const particles = [];
const particles2 = [];

let start, end;

function setup() {
  createCanvas(windowWidth, windowHeight);
  m87 = new Blackhole(width/2.1, height/2, 10000);

  start = height / 2;
  start1 = height/1;
  end = height / 2 - m87.rs * 2.6;

  for (let y = 0; y < start; y += 10) {
    particles.push(new Photon(width - 20, y));
}
for (let y = 340; y < start1; y += 10) {
  particles2.push(new Photon2(0, y));
}
}

function draw() {
  background(0);

  stroke(0);
  strokeWeight(1);
 // line(0, start, width, start);
  //line(0, end, width, end);

  for (let p of particles) {
    m87.pull(p);
    p.update();
    p.show();
  }
  for (let j of particles2) {
    m87.pull(j);
    j.update();
    j.show();
  }
  m87.show();
}