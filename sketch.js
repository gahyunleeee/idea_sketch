
let bugs = []; // Jitter 객체들의 배열

function setup() {
  createCanvas(710, 710);
  for (let i = 0; i < 100; i++) {
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
