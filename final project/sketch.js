let apple=[];
let branches;
function setup() {
  colorMode(HSL);
  branches=5;
  //halfCol1=(225,80,70);//颜色测试
 // halfCol2=(255,90,80);//颜色测试
  //createCanvas(windowWidth, windowHeight);
  
  for( branches=0;branches<12;branches++){
    apple[branches]=[];
  }
 // apple[0][0]= new Apple(halfCol1,halfCol2);//+xpos...
 let scale_1 = random(20,50);//让两个半圆边界线还有颜色固定的话需要在这里用三元组储存在编号和苹果数组一样的数组里面。再setup里面完成定义。
 apple[0][0]= new Apple(200,200,scale_1);//+xpos...
}

function draw() {
  createCanvas(400,400);
  background(100,0,100);
  ellipse(20,20,20,20)

  apple[0][0].draw();
}

class Apple{
  constructor(xPosIn,yPosIn,scaleIn){
    this.color_1=null;
    this.color_2=null;
    this.xPos=xPosIn;
    this.yPos=yPosIn;
    this.scalePrm=scaleIn;
    this.arc_1=null;
    this.arc_2=null;
  }
  calculateDrawPos(){
    if(branches%2==1){
      this.arc_1=random(-1/4*PI,1/4*PI);
      this.arc_2=random(3/4*PI,5/4*PI);
    }
    else{
      this.arc_1=random(-3/4*PI,-1/4*PI);
      this.arc_2=random(1/4*PI,3/4*PI);
    }
  }
  getColor(){
    let hg=random(45,90);
    let hr=random(0,20);
    let s=random(80,100);
    let l= random(60,80);
    if(Math.round(Math.random())==1){
      this.color_1=color(hg,s,l);
      this.color_2=color(hr,s,l);
    }
    else{
      this.color_2=color(hg,s,l);
      this.color_1=color(hr,s,l);
    }
  }
  draw(){
    this.getColor();
    this.calculateDrawPos();//易漏
    fill(this.color_1);
    //arc(200,200,50,50,1/3*PI,3/4*PI,OPEN);
    arc(this.xPos, this.yPos, this.scalePrm, this.scalePrm, this.arc_1, this.arc_2, OPEN);
    fill(this.color_2);
    arc(this.xPos, this.yPos, this.scalePrm, this.scalePrm, this.arc_2, this.arc_1, OPEN);
    //arc(200,200,50,50,3/4*PI,1/3*PI,OPEN);
   
  }
}
