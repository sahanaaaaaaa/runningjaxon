var path, pathImg;
var jaxon, jaxon_running;
var invisibleboundary1;
var invisibleboundary2;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
 jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  jaxon = createSprite(90,350,20,50);
  jaxon.scale = 0.07;

  jaxon.addAnimation("running", jaxon_running);
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;

  }
  
  jaxon.velocityX = 0;
  jaxon.x = mouseX

  invisibleboundary1 = createSprite(30,250,30,800);
  invisibleboundary2 = createSprite(370,250,30,800);

  jaxon.collide(invisibleboundary1);
  jaxon.collide(invisibleboundary2);

  invisibleboundary1.visible = false;
  invisibleboundary2.visible = false;
 

  drawSprites();
}