
function draw() {

  image(bg, 0, 0);
  translate((width - scl * 457) / 2, (height - scl * 650) / 2);
  scale(scl);

  // black stroke
  noFill();
  stroke(0);
  for (let i = 0; i < circles.length; i++) {
    circle(circles[i].x, circles[i].y, circles[i].diam + 2);
  }
  // bottom
  fill("#d7b764");
  rect(104, 482, 333, 539);
  stroke("#d7b764");
  fill(col1);
  rect(148, 482, 186, 539);
  fill(col2);
  rect(186, 482, 230, 539);
  rect(266, 482, 308, 539);
  noStroke();
  fill(col2);
  arc(128, 539, 40, 40, PI, 2 * PI);
  fill("#d7b764");
  arc(168, 539, 40, 30, PI, 2 * PI);
  fill(col1);
  stroke("#d7b764");
  arc(208, 539, 40, 50, PI, 2 * PI);
  noStroke();
  arc(248, 539, 38, 40, PI, 2 * PI);
  fill("#d7b764");
  arc(286, 539, 38, 20, PI, 2 * PI);
  fill(col2);
  arc(320, 539, 25, 25, PI, 2 * PI);

  stroke(0);
  noFill();
  rect(104, 482, 333, 539);
  noStroke();
  for (let i = 0; i < circles.length; i++) {
    circles[i].show();
  }

  // line
  stroke("#d7b764");
  line(145, 482, 306, 482);
  line(230, 480, 238, 198);
  line(136, 268, 323, 268);
  line(143, 142, 136, 268);
  line(143, 142, 100, 144);
  line(96, 26, 100, 144);
  line(330, 120, 323, 268);
  line(330, 120, 406, 148);
  line(410, 120, 406, 148);
  line(183, 198, 277, 198);
  line(274, 173, 277, 198);
  line(204, 173, 203, 198);


}