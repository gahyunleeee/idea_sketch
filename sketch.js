
let bugs = []; // Jitter 객체들의 배열

function setup() {
  createCanvas(1200, 600);
  for (let i = 0; i < 200; i++) {
    bugs.push(new Jitter());
  }
  stars = new gravity();
}

function draw() {
  background(0,10);
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }

  if (mouseIsPressed) {
 stars.display();
 stars.update();
 }

}
