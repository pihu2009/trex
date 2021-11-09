var trexis,trex,mov,clo
var ig
var play=1
var end=0
var cactus1
var cactus2
var cactus3
var cactus4
var cactus5
var cactus6
var gamestate=play
var collided

function preload()
{
  trexis=loadAnimation("trex1.png","trex3.png","trex4.png")
  mov=loadImage("ground2.png")
  clo=loadImage("cloud.png")
  cactus1=loadImage("obstacle1.png")
  cactus2=loadImage("obstacle2.png")
  cactus3=loadImage("obstacle3.png")
  cactus4=loadImage("obstacle4.png")
  cactus5=loadImage("obstacle5.png")
  cactus6=loadImage("obstacle6.png")
  collided=loadAnimation("trex_collided.png")
}


function setup()
{
  createCanvas(600,400)
  trex = createSprite(80,350,30,30)
  trex.addAnimation("moving",trexis)
  trex.addAnimation("stop",collided)
  trex.scale=0.5
  
  ground = createSprite(300,350,600,30)
  ground.addImage(mov)
 
 
  //CREATING INVISIBLE GROUND
  ig=createSprite(300,375,600,15)
  ig.visible=false


  //SETTING TREX COLLIDER
  trex.setCollider("rectangle",0,18,50,trex.height)
}
 

function draw()
{
  background("skyblue")
  drawSprites()
  

  
  if(gamestate===play)
  {  
    //GROUND
    ground.velocityX=-5
    if(ground.x<=0)
    {
      ground.x=ground.width/2
    }
      
   
    
    
    
    
    
  
    

    //trex.collide(ground)
    if(keyDown("space"))
    {
      trex.velocityY=-13
    }
      trex.velocityY=trex.velocityY+1


      //FUNCTIONS
      spawncactus()
      spawncloud()
  
  }
  
  else if(gamestate===end)
  
  {
    //STOPING GROUND 
    ground.velocityX=0
    trex.changeAnimation("stop") 
  }
  trex.collide(ig)  
}


function spawncloud()
{
 if(frameCount%100==0)
  {
  cloud=createSprite(560,100,30,30)
  cloud.velocityX=-4
  cloud.addImage(clo)
  cloud.y=Math.round(random(30,130))
  }

}


function spawncactus()
{
  if(frameCount%200===0) 
  {
    cactus=createSprite(600,350,30,30)
    cactus.velocityX=-3
    cactus.scale=0.7
    cactus.collide(ground)
    var ran = Math.round(random(1,6))
    switch(ran)
    {
      case 1: cactus.addImage(cactus1) 
              break;
      case 2: cactus.addImage(cactus2)
              break;
      case 3: cactus.addImage(cactus3)
              break;
      case 4: cactus.addImage(cactus4) 
              break;
      case 5: cactus.addImage(cactus5) 
              break;
      case 6: cactus.addImage(cactus6) 
              break;
      
      default:break;  
    }
  }
}


























