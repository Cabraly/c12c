var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){

  pathImg=loadImage("path.png");
  boyImg=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png") ;

 
}

function setup(){
  
  createCanvas(400,400);
path=createprite(200,200);
path.addImage(pathImg);
path.velocityY=-3;
path.scale=1.2;

boy= createprite(200,200);
boy.addImage(boyImg);
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x=World.mouseX
  
 createEdgeSprites();
  boy.collide(edges);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}