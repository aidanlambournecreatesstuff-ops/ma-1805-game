let faces = []
let alive = true;
let score = 0;
let x;
let y;
let size = 250;


function preload(){
  redFace = loadImage("images/redface.png");
  whiteFace = loadImage("images/whiteface.png");
  orangeFace = loadImage("images/orangeface.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  faces[0] = redFace;
  faces[1] = whiteFace;
  faces[2] = orangeFace;

}

function draw() {


  textSize(50);
  fill (255,0,0);
  textAlign (CENTER, CENTER);
  text(score, windowWidth/2, 100);
  let t1 = 255;
  for (let f=0; f<4; f=f+1){
    x = random(0, windowWidth-250);
    y = random(0, windowHeight-250);
    tint(t1);
    image(faces[f], x, y, size, size);
    t1 = t1-100;
  }



}

function mousePressed(){
  let distance = dist(x, y, mouseX, mouseY); 
  if(distance <= size/2){
    score;
  }
}
