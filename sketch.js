var spaceImg,space;
var commetImg, commet, commetsGroup;
var rocketImg, rocket;
var goldcoin, goldcoinImg, goldcoinGroup;
var gameState = "play"

function preload(){
  spaceImg = loadImage("background.png");
  commetImg = loadImage("Commet.png");
  rocketImg = loadImage("Rocket.png");
  goldcoinImg = loadImage("Gold Coin.png");
}

function setup() {
  createCanvas(400,400);
  space=createSprite(200,200,20,200);
  space.addImage("space",spaceImg);
  space.velocityY=4;
  
  commetsGroup = new Group();
  goldcoinGroup = new Group();

  rocket=createSprite(200,300,50,50);
  rocket.addImage("rocket",rocketImg);
  rocket.scale=0.4;
}

function draw() {
  background(255);

  if (gameState === "play"){
    
    if(keyDown("left")){
      rocket.x=rocket.x-10
      }
    
    if(keyDown("right")){
      rocket.x=rocket.x+10
      }
    
    if(space.y>300){
      space.y=height/2;
    }
    spawnCommet();

    if (commetsGroup.isTouching(rocket)){
      rocket.destroy()
      gameState="end"
    }

  drawSprites(); 
}
    if (gameState === "end"){
      stroke("yellow");
      textsize(30);
      text("Game Over...Please refrest the page to start the game again",230.250)
    }
}

function spawnCommet(){
  if (frameCount % 240 === 0){
    var commet = createSprite(200, -50);
    commet.scale=0.3
    var goldcoin = createSprite(200,10);
    goldcoin.scale=0.2
    commet.x=Math.round(random(300,300));
    goldcoin.x=Math.round(random(200,200));
    commet.addImage(commetImg);
    goldcoin.addImage(goldcoinImg);
    commet.velocityY=4;
    goldcoin.velocityY=4;
    commet.lifetime=600;
    goldcoin.lifetime=600;
    commetsGroup.add(commet);
    goldcoinGroup.add(goldcoin);
  }
}