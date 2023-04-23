var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;

var score = 0;
var life = 3;
var bullets = 70;

var heart1, heart2, heart3

var gameState = "fight"

var lose, winning, explosionSound;

var ghostImg

function preload() {

  ghostImg = loadImage("knightthoing.png")
  bgImg = loadImage("bg.jpeg")
  zombieImg = loadImage("zombie.png")
  heart1Img = loadImage("heart_1.png")
  heart2Img = loadImage("heart_2.png")
  heart3Img = loadImage("heart_3.png")


}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  ghost = createSprite(800, 200, 50, 50);
  ghost.addImage(ghostImg);
  ghost.scale = 0.1

  heart1 = createSprite(60, 50, 50, 50);
  heart1.addImage(heart1Img);
  heart1.scale = 0.5
  heart2 = createSprite(112, 50, 50, 50);
  heart2.addImage(heart2Img);
  heart2.scale = 0.5
  heart3 = createSprite(164, 50, 50, 50);
  heart3.addImage(heart3Img);
  heart3.scale = 0.5

  heart1.visible = false;
  heart2.visible = false;

  zombieGroup = new Group()

}

function draw() {
  
  background(bgImg); 
  
  if (keyDown(UP_ARROW)) {
    ghost.y = ghost.y - 10
  }

  if (keyDown(DOWN_ARROW)) {
    ghost.y = ghost.y + 10
  }

  spawnEnemy();
  drawSprites();

}

function spawnEnemy() {

  if (frameCount%80===0) {
    zombie = createSprite(1500, random(100, 700), 20, 20)
    zombie.scale = 0.17
    zombie.addImage(zombieImg);
    zombie.velocityX = -7
    zombie.lifetime = 220
    zombieGroup.add(zombie);
  }

}

