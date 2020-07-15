class Blackhole {
    constructor(x, y, m) {
      this.pos = createVector(x, y);
      this.mass = m;
      this.rs = (2 * G * this.mass) / (c * c);
    }
  
    pull(photon) {
      const force = p5.Vector.sub(this.pos, photon.pos);
      const r = force.mag();
      const fg = (G * this.mass) / (r * r);
      force.setMag(fg);
      photon.vel.add(force);
      photon.vel.setMag(c);
  
      if (r < this.rs) {
        photon.stop();
        noFill();
        ellipse(this.pos.x, this.pos.y, this.rs * random(1,1.5));
      }
    }
  
    show() {
      ellipseMode(RADIUS);
      fill(0);
      noStroke();
      ellipse(this.pos.x, this.pos.y, this.rs);
    }
  }