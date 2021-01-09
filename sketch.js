
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	dustbinleft= new dustbin(300, 610, 20, 100);
	dustbinright= new dustbin(500, 610, 20, 100);
	dustbinbottom= new dustbin(width/2, 650, 200, 20);
	ball1 = new ball(100,650,20);
	ground1 = new ground(400,680,800,20);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinleft.display();
  dustbinright.display();
  dustbinbottom.display();
  ball1.display();
  ground1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_Arrow){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}



