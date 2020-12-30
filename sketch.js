var man, manImg, lion, lionImg, bgImg,bg;
var canvas;

function preload(){
  bgImg = loadImage("jungle.jpg");
  lionImg = loadAnimation("lion.png","lion1.png","lion2.png","lion3.png");
  manImg = loadAnimation("man.png","man1.png","man2.png","man3.png");
}

function setup() {
  bg = createSprite(550,350,500,500);
  bg.addImage(bgImg);
  bg.scale = 1.5;
  bg.velocityX = -2;
  bg.x = bg.width/2;

  man = createSprite(300,520,5,5);
  man.addAnimation("running",manImg);

  canvas = createCanvas(displayWidth - 500, displayHeight - 150);

  lion = createSprite(100,580,100,100);
  lion.addAnimation("lionrunning",lionImg);
}

function draw() {
  background("white");
  
  if (bg.x < 350) {
    bg.x = bg.width/2;
  }
  
  camera.position.x = man.x;

  drawSprites();
}