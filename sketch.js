
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paperObject, ground, dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperObject = new Paper(100, 400, 10);
	ground = new Ground(400, 670, 800);
	dustbin = new Dustbin(500, 630);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  ground.display();
  dustbin.display();

  if(keyWentDown("up")){
	  Matter.Body.applyForce(paperObject.paper, paperObject.paper.position, {x: 13, y: -13});
  }
  
  drawSprites();
 
}



