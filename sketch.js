var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

function preload(){
  
  shooterImg = loadImage("shooter.png")
 

  zombieImg = loadImage("zombie.png")

}

function setup() {
  
  createCanvas(windowWidth,windowHeight);

player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   
}

function draw() {
  background("yellow"); 

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
drawSprites();

enemy();
}





