var PLAY=1
var END=0
var gameState=PLAY
var car,car_1;
var obstacle,obstacle_11,obstacle_21,obstacle31,obstacle_41,obstacle_51,obstacle_61;


var boy,boy_run;
var ground,ground_img

var Meter;



function preload(){
car_1 = loadAnimation("VdgG-0.png","VdgG-1.png","VdgG-2.png","VdgG-3.png","VdgG-4.png",'VdgG-5.png')
boy_run = loadAnimation("boy-3.png","boy-5.png","boy-7.png",)
ground_img = loadAnimation("ground.png")
obstacle_11 = loadAnimation("stone1.png")
obstacle_21 = loadAnimation("stone2.png")
obstacle_31 = loadAnimation("stone3.png")
obstacle_41 = loadAnimation("1-0.png","1-1.png","1-2.png")
obstacle_51 = loadAnimation("2-0.png","2-1.png","2-2.png")
obstacle_61 = loadAnimation("3-0.png","3-1.png")

}


function setup() {
createCanvas(windowWidth,windowHeight)
 
//create sprites
ground = createSprite(width/2,height/2+40,20,20)
ground.addAnimation("img",ground_img)
ground.scale=4

boy = createSprite(width/2,height/2+50,20,20)
boy.addAnimation("run",boy_run)
boy.scale=0.4
boy.setCollider("rectangle",0,0,100,350)
//boy.debug=true

car = createSprite(width/2-400,height/2+70,20,20)
car.addAnimation("1",car_1)
car.scale=0.5
car.setCollider("rectangle",0,0,550,220)
//car.debug=true

Meter=0;
}

function draw() {
background(0)

textSize(20)
fill("blue")
text(Meter+"-meter",width/2+400,height/2-280)

if (gameState===PLAY){
Meter = Meter+Math.round(frameCount%4==0)

createobstacle()

 ground.velocityX=-(4+Math.round(Meter/70))

if(ground.x<=500){
    ground.x=870
  }




   
}


drawSprites()
 
}

function createobstacle(){
    if (frameCount % 100 === 0){
        var obstacle = createSprite(width/2+100,height/2+50,10,40);
        obstacle.velocityX = -(4+Math.round(Meter/70));
        
         var rand = Math.round(random(1,6));
         switch(rand) {
                case 1: obstacle.addAnimation("11",obstacle_11);
                        obstacle.scale=0.15   
                        obstacle.y=height/2+100
                        break;
                case 2: obstacle.addAnimation("21",obstacle_21);
                        obstacle.scale=0.15    
                        obstacle.y=height/2+100
                        break;
                case 3: obstacle.addAnimation("31",obstacle_31);
                        obstacle.scale=0.15
                        obstacle.y=height/2+100
                        break;
                case 4: obstacle.addAnimation("41",obstacle_41);
                        obstacle.scale=0.3
                        obstacle.y=height/2+70
                        break;
                case 5: obstacle.addAnimation("51",obstacle_51);
                        obstacle.scale=0.3
                        obstacle.y=height/2+70
                        break;
                case 6: obstacle.addAnimation("61",obstacle_61);
                        obstacle.scale=0.3
                        obstacle.y=height/2+70
                        break;
                default: break;
              }


}
}

