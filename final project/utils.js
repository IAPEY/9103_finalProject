let apple = [];
let scale = [];
let arc1 = [];
let arc2 = [];
let color1 = [];
let color2 = [];
let branches;//设置全局变量和数组

function setup() {
  colorMode(HSL);
  createCanvas(windowWidth, windowHeight);
  for (branches = 0; branches < 17; branches++) {
    apple[branches] = [];
    scale[branches] = [];
    arc1[branches] = [];
    arc2[branches] = [];
    color1[branches] = [];
    color2[branches] = [];//设置存放颜色，苹果序号，枝干序号，苹果分割线角度，苹果大小的数组
    let i = 0;
    for (i = 0; i < 17; i++) {
      scale[branches][i] = random(30, 70);
      arc1[branches][i] = random(-1 / 4 * PI, 1 / 4 * PI);
      arc2[branches][i] = random(3 / 4 * PI, 5 / 4 * PI);
      let hg = random(45, 90);
      let hr = random(0, 20);
      let s = random(80, 100);
      let l = random(60, 80);
      color1[branches][i] = color(hg, s, l);
      color2[branches][i] = color(hr, s, l);//在数组中填入颜色，苹果分割线角度，苹果大小的随机值
    }

  }

  
}

function outpuApple(branch, AppleNum, x, y) {
  apple[branch][AppleNum] = new Apple(x, y, scale[branch][AppleNum], arc1[branch][AppleNum], arc2[branch][AppleNum], branch, color1[branch][AppleNum], color2[branch][AppleNum], AppleNum);
  return apple[branch][AppleNum].draw();//把类中生成苹果的方法封装进函数内，方便使用。
}

class Apple {//定义苹果类
  constructor(xPosIn, yPosIn, scaleIn, arc1In, arc2In, branchNum, color1In, color2In, numIn) {
    this.color_1 = color1In;
    this.color_2 = color2In;//从数组中获取随机生成的颜色
    this.xPos = xPosIn;
    this.yPos = yPosIn;//从传入值中获取圆心坐标
    this.scalePrm = scaleIn;//从数组中获取苹果大小
    this.arc_1 = arc1In;
    this.arc_2 = arc2In;//从数组中获取分割线位置
    this.branch = branchNum;//从传入值中获取枝干序号
    this.num = numIn;//从传入值中获取苹果序号

  }
  calculateDrawPos() {
    if (this.branch % 2 == 0) {

      this.arc_1 -= 1 / 2 * PI;
      this.arc_2 -= 1 / 2 * PI;
      this.branch += 1;//如果枝干序号为偶数，苹果分割线是竖着的，如果为奇数，苹果分割线是横着的
    }

  }
  getColor() {

    if (Math.round(this.scalePrm) % 2 == 1) {
      let swap = this.color_1;
      this.color_1 = this.color_2;
      this.color_2 = swap;//苹果两半的红绿颜色由苹果大小决定
      this.scalePrm += 1;//避免苹果大小为奇数时苹果两边颜色一直替换，在进行着色之后将苹果的大小锁定为偶数
    }

  }


  draw() {
    this.getColor();
    this.calculateDrawPos();//从上面几个类方法中获取参数
    fill(this.color_1);
    //arc(200,200,50,50,1/3*PI,3/4*PI,OPEN);
    arc(this.xPos, this.yPos, this.scalePrm, this.scalePrm, this.arc_1, this.arc_2, OPEN);
    fill(this.color_2);
    arc(this.xPos, this.yPos, this.scalePrm, this.scalePrm, this.arc_2, this.arc_1, OPEN);//绘制苹果以及填入颜色
    //arc(200,200,50,50,3/4*PI,1/3*PI,OPEN);

  }
}
