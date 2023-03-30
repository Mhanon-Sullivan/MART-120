function setup() {
  createCanvas(400, 400);
}

var shirtX = 250;
var shirtY = 300;
var shirtDirection = 0.5;

var hairX = 200;
var hairY = 185;
var hairDirection = 5;

var neckX = 250;
var neckY = 300;
var neckDirection = 2;

var headX = 250;
var headY = 290;
var headDirection = 6;

var mouthX = 250;
var mouthY = 290;
var mouthDirection = 1;

var size = 10;
var count = 0;
var sizeDirection = 3;


function draw() {
  background(220);
 
  // hair
  fill(65,37,30);
  rect(70,hairY,260,350);
  hairY+=hairDirection;
      if(hairY >= 200 || hairY <= 10)
    {
        hairDirection *= -1;
    }
      
  // head
  fill(249,231,205);
  rect(headX,50,200,275);
      headX+=headDirection;
      if(headX >= 300 || headX <= 0)
    {
        headDirection *= -1;
    }
  
  // bangs
  fill(65,37,30);
  triangle(50, 120, 128, 10, 300, 50);
  
  // face dot
  point(260, 170);
  
  // eye whites
  fill(255, 255, 255);
  circle(155,125,50);
  circle(240,125,50);
  
  // nose
  fill(236,145,124);
  triangle(170, 225, 225, 225, 200, 120);
  
  // eyelashes
  line(135,139,120,150);
  line(260,140,279,150);
  
  // mouth
  fill(213,65,65);
  ellipse(mouthX,mouthY,70,30);
      mouthY+=mouthDirection;
      if(mouthY >= 350 || mouthY <= 100)
    {
        mouthDirection *= -1;
    }
      mouthX+=mouthDirection;
      if(mouthX >= 350 || mouthX <= 100)
    {
        mouthDirection *= -1;
    }
  
  // irises
  fill(0,0,0);
  circle(155,125,30);
  circle(240,125,30);
  
  // neck
  fill(249,231,205);
  rect(neckX,325,110,40);
      neckX+=neckDirection;
      if(neckX >= 350 || neckX <= 100)
    {
        neckDirection *= -1;
    }
  
  // shirt
  fill(238,70,31);
  rect(30,shirtY,335,50);
    shirtY+=shirtDirection;
      if(shirtY >= 350 || shirtY <= 100)
    {
        shirtDirection *= -1;
    }
  
    // name
  textSize(20)
  text('Mhanon Sullivan :)', 10, 20);
  
  // title
      textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
  text('Self Portrait', 245, 25);

}