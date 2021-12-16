class gravity {
  constructor () {
    this.ww = random(width);
    this.hh = random(height);
    this.pos = createVector(this.ww, this.hh);
    this.vel = createVector();

  	this.w = 3;
    this.acc = createVector(0.5,0.1);
  }
  update() {
    this.pos.add(this.vel);
    this.vel = createVector(random(-5,-3),random(1,3));
    this.vel.add(this.acc);
    this.w = this.w + 0.1 ;
  }

  display() {
	ellipse(this.pos.x, this.pos.y, this.w);
  }
}
