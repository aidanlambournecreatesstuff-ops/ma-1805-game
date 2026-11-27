let ghostSpawn = [];
let score = 0;
let ghostColour = 0;
let outerSize = 400;
let x;
let y;
let redGhost = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x=width/2;
  y=height/2;
}

function draw() {
  background(0);
  //drawing flashlight
  fill (50);
  ellipse (mouseX, mouseY, outerSize);  
  fill (200); 
  ellipse (mouseX, mouseY, 100);

  //spawning ghosts

for (let y1=0; y1<windowHeight; y1=y1+1){
    x=400;
    fill (redGhost, 0, 0, ghostColour);
    ellipse (x, y1, 20, 20);
}

  //detecting ghosts
  let flashDistance = dist(x, y, mouseX, mouseY); 
  if(flashDistance <= outerSize/2){
    ghostColour = 150;
  }else{
    ghostColour = 0;
  }

  //catching ghosts
  let catchDistance = dist(x, y, mouseX, mouseY);
  if(catchDistance <= outerSize/7){
    ghostColour = 255;
  }
}