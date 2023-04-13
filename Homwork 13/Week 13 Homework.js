// player variables
var x = 50;
var y = 50;
var diameter = 25;

// maroon obstacle variables
var maroonX = 50;
var maroonY = 50;
var maroonDirection = 1;

// orange obstacle variables
var orangeX = 50;
var orangeY = 50
var orangeDirection = 3;

var mousex;
var mousey;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
    //borders
    makeBorders()
  
    // starting text
    winText()
  
    // player
    createPlayer()
  
    // exit
    drawExit()
  
    // player movement
    movePlayer()
  
    // maroon obstacle
    drawMaroon()
    // maroon movement
    maroonMovement()
  
    // orange obstacle
    drawOrange()
    //orange movement
    moveOrange()
  
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

  // maroon obstacle
function drawMaroon(){
    fill (125,1,50)
  circle(200,maroonY,90);
}

  //maroon movement
function maroonMovement(){
        maroonY+=maroonDirection;
      if(maroonY >= 400 || maroonY <= -25)
    
        maroonDirection *= 1;
      
            if(maroonY >= 450)
      { maroonY = 0
      }
      else if(maroonY <= 100 || maroonY >=300)
        {
          maroonY+=10
        }
}

  //draw orange
function drawOrange(){
  fill(255,165,0);
  circle(orangeX,250,75);
}
  //orange movement
function moveOrange(){
        orangeX+=orangeDirection;
      if(orangeX >= 200 || orangeX <= 10)
    {
        orangeDirection *= 1;
      
      if(orangeX >= 450)
      { orangeX = 0
      }
      else
        {
          orangeX+=0.01
        }
  

    }
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