class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(3, 10);
    this.speed = 0.5;
    //컬러도랜덤으루
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
