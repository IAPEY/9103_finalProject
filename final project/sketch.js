
function draw() {
  
  translate(width / 2, height / 2);
  background(207, 40, 50);
  outpuApple(5, 6, 300, -200);
  outpuApple(4, 3, 100, -500);
  outpuApple(4, 5, 0, -400);
  
  push();
  //noStroke();
  push();
  stroke(40,80,90)
  //竖
  line(0,300,0,-100);//2
  line(0,-100,0,-200);//4
  line(180,-100,180,-360);//6
  line(-180,-100,-180,-300);//8
  line(-250,-300,-270,-450);//10
  line(250,-350,250,-400);//12
  line(-40,-200,-40,-235);//14
  line(40,-200,40,-235);//16

  //横
  line(-180,-100,180,-100);//1
  line(-40,-200,40,-200);//3
  line(-40,-200,-60,-200);//5
  line(-250,-300,-180,-300);//7
  line(250,-350,180,-360);//9
  pop();


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

