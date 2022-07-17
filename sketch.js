
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2

}
ball=Bodies.circle(200,100,20,options)

World.add(world,ball)

ground=new Ground(width/2,470,1200,20)

left=new Ground(800,400,20,120)
right=new Ground(1100,400,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground.show()
  left.show()
  right.show()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:65,y:-65})
	}
	
}


