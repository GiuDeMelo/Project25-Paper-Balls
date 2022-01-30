
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var paperObj;
var dustbinObj,groundObject;
var slingshot;

var world;

///////////////////////////////////////////
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObj = new Paper(300,633,50);
	dustbinObj = new Dustbin(1200,650);
	groundObject = new Ground(width/2,670,width,20);
	slingshot = new Slingshot(paperObj.body,{x:300, y:633});

	Engine.run(engine);
  
}

///////////////////////////////////////////
function draw() {
  rectMode(CENTER);
  background(230);
 
  paperObj.display();
  dustbinObj.display();
  groundObject.display();

  paperObj.debug=true;
  paperObj.setCollider("circle",0,0,40);

}

function keyPressed(){
	if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:45, y:-50});
	 slingshot.fly();
	}

}


