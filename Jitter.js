class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(3, 10);
    this.speed = 0.5;
    //this.r = random(178,250);
    //this.g = random(216,248);
    //this.b = random(94,250);
    this.colors = [color('#5F89FA'),color('#C2DFFA'),color('#FA5E51'),color('#FFFFFF'),color('#FAB387'),color('#FAEBB2')];
    this.mycolor = random(this.colors);
    this.a = random(10,255);
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    noStroke();
    fill(this.mycolor);
    //fill(this.r, this.g, this.b,this.a);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
