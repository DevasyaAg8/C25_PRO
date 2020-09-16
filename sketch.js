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
var BALL_options={
  
  "restitution":0.3,
  "friction":0.5,
  "density":1.2

}
ground = Bodies.rectangle(width/2,380 , width, 10 , {isStatic:true} );
ball=Bodies.circle(200,200,20,BALL_options);
this.image=loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/paper.png");
World.add(world,ground);
World.add(world,ball);

	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  rect(ground.position.x,ground.position.y,1200,10);
ball.display(){
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  imageMode(CENTER);
  image(this.image, 0, 0, this.width, this.height);
};
  
  
  leftbox1.display();
  midbox.display();
  rightbox.display();
  
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  }
}


