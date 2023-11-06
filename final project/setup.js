let circles = [];
let scl = 1;
let col1 = "#ea3e3e";
let col2 = "#519365";

function setup() {
  createCanvas(windowWidth, windowHeight);
  let scl1 = width / 457;
  let scl2 = height / 650;
  scl = min(scl1, scl2);
  background(57, 64, 68);

  rectMode(CORNERS);
  strokeWeight(3);
  circles.push(new HalfCircle(166, 482, 40, 0, PI, false));
  circles.push(new HalfCircle(200, 482, 24, 0, PI, true));
  circles.push(new HalfCircle(222, 468, 40, 1.1, PI + 2.1, true));
  circles.push(new HalfCircle(252, 482, 30, 0, PI, false));
  circles.push(new HalfCircle(288, 482, 40, 0, PI, true));
  circles.push(new HalfCircle(237, 442, 23, 2.0, PI + 1.2, false));
  circles.push(new HalfCircle(228, 415, 35, 1.3, 5, false));
  circles.push(new HalfCircle(228, 370, 65, 1.4, 4.9, true));
  circles.push(new HalfCircle(240, 316, 46, 1.8, 4.5, false));
  circles.push(new HalfCircle(172, 267, 28, 0, PI, true));
  circles.push(new HalfCircle(198, 270, 28, -0.2, PI + 0.2, false));
  circles.push(new HalfCircle(225, 266, 28, 0.2, PI - 0.1, true));
  circles.push(new HalfCircle(253, 275, 32, -0.3, PI + 0.4, false));
  circles.push(new HalfCircle(280, 270, 25, 0, PI, false));
  circles.push(new HalfCircle(307, 268, 34, 0.1, PI - 0.1, true));
  circles.push(new HalfCircle(102, 48, 46, 1.7, PI + 1.3, false));
  circles.push(new HalfCircle(94, 91, 46, 1.3, PI + 1.7, true));
  circles.push(new HalfCircle(102, 128, 32, 1.7, PI + 1.4, false));
  circles.push(new HalfCircle(128, 140, 30, 0.1, PI - 0.1, true));
  circles.push(new HalfCircle(138, 164, 25, 1.5, PI + 1.8, false));
  circles.push(new HalfCircle(132, 194, 40, 1.2, PI + 1.9, true));
  circles.push(new HalfCircle(142, 240, 58, 1.7, PI + 1.5, false));
  circles.push(new HalfCircle(207, 182, 18, 1.8, PI + 1.3, false));
  circles.push(new HalfCircle(194, 200, 20, 0, PI, false));
  circles.push(new HalfCircle(216, 200, 28, 0, PI, true));
  circles.push(new HalfCircle(275, 183, 20, 1.5, PI + 1.6, false));
  circles.push(new HalfCircle(265, 200, 25, 0, PI, false));
  circles.push(new HalfCircle(240, 220, 40, 1.7, PI + 1.5, false));
  circles.push(new HalfCircle(238, 245, 25, 1.7, PI + 1.5, true));
  circles.push(new HalfCircle(410, 128, 20, 1.7, PI + 1.7, false));
  circles.push(new HalfCircle(394, 144, 25, 0.5, PI + 0.3, false));
  circles.push(new HalfCircle(370, 132, 36, 0.6, PI + 0.1, true));
  circles.push(new HalfCircle(345, 128, 20, 0.3, PI + 0.1, false));
  circles.push(new HalfCircle(326, 135, 25, 1.3, PI + 1.9, false));
  circles.push(new HalfCircle(329, 170, 50, 1.6, PI + 1.6, true));
  circles.push(new HalfCircle(322, 206, 35, 1.3, PI + 1.9, false));
  circles.push(new HalfCircle(317, 236, 36, 1.1, PI + 2.1, false));

  // Create background 
  bg = createGraphics(windowWidth, windowHeight);
  bg.noStroke();

  // Drawing a dark blue textured background on a graphical object
  for (let i = 0; i < 15000; i++) {
    let x = random(bg.width);
    let y = random(bg.height);
    bg.stroke(182, 172, 104);
    bg.point(x, y);
  }

}
