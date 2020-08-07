var log1,log2,log3,ground;
var c;

function setup(){
  createCanvas(1300,300);
  log1 = createSprite(1000,200,10,150);
  log2 = createSprite(850,200,10,150);
  log3 = createSprite(925,280,150,10);
  ground = createSprite(1000,300,2000,10);

  ball = createSprite(100,100,50,50);
  var ballImg = loadImage("ball.png")
  ball.addImage(ballImg);

  
  
}

function draw() {
   background(180);

  
  if(keyCode === 32){
    if(ball.x === 100){
      ball.velocityY =-1;
    }

    if(ball.y === 80){
      ball.velocityY =0;
      ball.velocityX =10;
    }
    
    if(ball.x >= log3.x){
      ball.velocityY = 1;
      ball.velocityX = 0;
    }

  }

  if(ball.y===250){
    ball.velocityX =0;
    ball.velocityY =0;
  }
 
 
   
  
  drawSprites();
}

