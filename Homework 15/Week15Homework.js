// player variables
var x = 50;
var y = 50;
var diameter = 25;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var mousex;
var mousey;

var rectangleObject;

function setup() {
  createCanvas(400, 400);

  //orange
  rectangleObject = new Rectangle(75,100,20,30,226,135,67);
  //dark blue
  rectangleObject2 = new Rectangle(150,125,50,80,6,57,112);
  //light blue
  rectangleObject3 = new Rectangle(250,175,100,25,118,181,197);

  
  for (var i = 0; i < 20; i++) {
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(500);
        diameters[i] = getRandomNumber(20);
}
}

function draw() {
  background(220);
  

    //display rectangles
    rectangleObject.display();
    rectangleObject2.display();
    rectangleObject3.display();
    //borders
    makeBorders()
  
    // starting text
    winText()
  
    // player
    createPlayer()
  
    //obstacles
  
  
fill(170,0,250)
  for (var i = 0; i < shapeXs.length; i++) {
    circle(shapeXs[i], shapeYs[i], diameters[i]);
    
    
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   
     // move the shape
        shapeXs[i] += 2;
        shapeYs[i] += 3;
      
              // check bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }
  

  
  
    // exit
    drawExit()
  
    // player movement
    movePlayer()
  
  
    // click for obstacle
    clickObstacle()
  
}
  function mouseClicked(){
    
      mousex = mouseX;
      mousey = mouseY;
  }
  
  // player function
  function createPlayer(){
      fill(255,255,255)
      circle(x,y,diameter);
  }

  // player movement
  function movePlayer(){
        if (keyIsDown(68)) {
    x += 5;
  } else if (keyIsDown(65)) 
    x -= 5;
  
  if (keyIsDown(83)) {
    y += 5;
  } else if (keyIsDown(87)) {
    y -= 5;
  }
  if(x >= 300 && y >=320)
    {
      fill(0,0,0)
      text('YOU WIN! :)',100,100)
    }
  }

// clicked obstacle
function clickObstacle(){
  circle(mousex,mousey,60);
}

function drawExit(){
    rect(300,325,75,50)
  fill(0,0,0)
  text('EXIT :)',320,355)
}


function winText(){
    fill(0,0,0);
  text('Click anywhere to start, then use WASD to move to get to the exit!',25,30)
}

function makeBorders(){
    // top border
    rect(0,0,400,10);
    // left border
    rect(0,0,10,400);
    // right border
    rect(390,10,10,400);
    // bottom border
    rect(0,390,400,10);
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}