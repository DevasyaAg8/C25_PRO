var world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var leftbox1,midbox,rightbox,ground,ball;
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;
	leftbox1=new Box(900,375,200,20);
midbox=new Box(1000,335,20,100);
rightbox=new Box(800,335,20,100);
ball=new Paper(200,200,70);
ground = Bodies.rectangle(width/2,380 , width, 10 , {isStatic:true} );


World.add(world,ground);


	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.run(engine);
  rect(ground.position.x,ground.position.y,1200,10);

  
  
  leftbox1.display();
  midbox.display();
  rightbox.display();
  ball.display();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{y:85,y:-85});
  }
}


