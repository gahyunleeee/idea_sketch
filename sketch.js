
let bugs = []; // Jitter 객체들의 배열

function setup() {
  createCanvas(710, 710);
  for (let i = 0; i < 100; i++) {
    bugs.push(new Jitter());
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

// Jitter 클래스
// class Jitter {
//   constructor() {
//     this.x = random(width);
//     this.y = random(height);
//     this.diameter = random(10, 30);
//     this.speed = 1;
//   }

//   move() {
//     this.x += random(-this.speed, this.speed);
//     this.y += random(-this.speed, this.speed);
//   }

//   display() {
//     ellipse(this.x, this.y, this.diameter, this.diameter);
//   }
// }
