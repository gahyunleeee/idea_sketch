class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(3, 10);
    this.speed = 0.5;
    this.c1 = random(0,255);
    this.c2 = random(0,255);
    this.c3 = random(0,255);
    this.a = random(0,255);
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    noStroke();
    fill(this.c1, this.c2, this.c3,this.a); 
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
