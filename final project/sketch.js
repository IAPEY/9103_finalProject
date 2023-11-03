
function draw() {
  
  translate(width / 2, height / 2);
  background(100, 0, 100);
  outpuApple(5, 6, 300, -600);
  outpuApple(4, 3, 100, -500);
  outpuApple(4, 5, 0, -400);
  
  push();
  fill(40,80,90);
  beginShape();
  vertex(-200,400);
  vertex(200,400);
  vertex(200,300);
  vertex(-200,300);
  vertex(-200,400);
  endShape();//yellow rect
  pop();

}
