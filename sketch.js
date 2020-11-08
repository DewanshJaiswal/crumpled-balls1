
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball,dustbin1,dustbin2,dustbin3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(200,670,4000,20);
	
	dustbin1 = new Bucket(400,650,200,20);
	dustbin2 = new Bucket(300,600,20,100);
	dustbin3 = new Bucket(500,600,20,100);
	paperball=new Paper(1200,650,20)
	
    
	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(0);
  paperball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:-100,y:120})
	}
}

