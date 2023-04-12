var box;
function setup() {
  createCanvas(800, 800);
  box = createSprite(400, 400, 100, 100)
}

function draw() {
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 5;
  }







  drawSprites();
}




