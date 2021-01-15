const Bodies=Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var engine,world;
var ThunderBolt;
var Walking_Man,Man;
var drops =[]
var maxdrops=200;
function preload(){

ThunderBolt=loadAnimation("thunderbolt/1.png","2.png","3.png","4.png")   
Walking_Man=loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png")

}

function setup(){
   createCanvas(400,800) 
   engine = Engine.create();
   world = engine.world
   Man = createSprite(200,570,50,50)
   Man.addAnimation("walking", Walking_Man)
   Man.scale = 0.5

   Thunder = createSprite(200,40,50,50)
   Thunder.addAnimation("thunder", ThunderBolt)
   Thunder.scale = 0.5
   
   if(frameCount%150===0){
   for(var i=0;i<maxdrops;i++){
       drops.push(new Drop(random(0,600),random(0,600)))
       
   }
   }

}

function draw(){
    background("black")

    Engine.update(engine)

    for(i=0;i<maxdrops;i++){
     drops[i].display();
     drops[i].updateY(); 
    }
    drawSprites();
}   

