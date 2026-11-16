let ghostSpawning = [];
let score = 0;
let ghostColour = 0;
let outerSize = 400
let x;
let y;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x=width/2;
  y=height/2;
}

function draw() {
  background(0);
  fill (50);
  ellipse (mouseX, mouseY, outerSize);  
  fill (200); 
  ellipse (mouseX, mouseY, 100);

  fill (ghostColour);
  ellipse (x, y, 20, 20);


  let flashDistance = dist(x, y, mouseX, mouseY); 
  if(flashDistance <= outerSize/2){
    ghostColour = 150;
  }else{
    ghostColour = 0;
  }

  let catchDistance = dist(x, y, mouseX, mouseY);
  if(catchDistance <= outerSize/7){
    ghostColour = 255;
  }
}