let apple = [];
let scale = [];
let arc1 = [];
let arc2 = [];
let color1 = [];
let color2 = [];

let branches;
function setup() {
    colorMode(HSL);
    branches = 5;
    //halfCol1=(225,80,70);//颜色测试
    // halfCol2=(255,90,80);//颜色测试
    //createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth,windowHeight);
    for (branches = 0; branches < 12; branches++) {
      apple[branches] = [];
      scale[branches] = [];
      arc1[branches] = [];
      arc2[branches] = [];
      color1[branches] = [];
      color2[branches] = [];
      let i = 0;
      for (i = 0; i < 12; i++) {
        scale[branches][i] = random(20, 50);
        arc1[branches][i] = random(-1 / 4 * PI, 1 / 4 * PI);
        arc2[branches][i] = random(3 / 4 * PI, 5 / 4 * PI);
        let hg = random(45, 90);
        let hr = random(0, 20);
        let s = random(80, 100);
        let l = random(60, 80);
        color1[branches][i] = color(hg, s, l);
        color2[branches][i] = color(hr, s, l);
      }
  
    }
  
  }

function outpuApple(branch, AppleNum, x, y) {
    apple[branch][AppleNum] = new Apple(x, y, scale[branch][AppleNum], arc1[branch][AppleNum], arc2[branch][AppleNum], branch, color1[branch][AppleNum], color2[branch][AppleNum]);
    return apple[branch][AppleNum].draw();
  }
  class Apple {
    constructor(xPosIn, yPosIn, scaleIn, arc1In, arc2In, branchNum, color1In, color2In) {
      this.color_1 = color1In;
      this.color_2 = color2In;
      this.xPos = xPosIn;
      this.yPos = yPosIn;
      this.scalePrm = scaleIn;
      this.arc_1 = arc1In;
      this.arc_2 = arc2In;
      this.branch = branchNum;
  
    }
    calculateDrawPos() {
      if (this.branch % 2 == 0) {
  
        this.arc_1 -= 1 / 2 * PI;
        this.arc_2 -= 1 / 2 * PI;
        this.branch += 1;
      }
  
    }
    getColor() {
  
      if (Math.round(this.scalePrm) % 2 == 1) {
        let swap = this.color_1;
        this.color_1 = this.color_2;
        this.color_2 = swap;
        this.scalePrm += 1;
      }
  
    }
    draw() {
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
  