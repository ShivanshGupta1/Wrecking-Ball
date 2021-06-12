var ball, world, rope, roof, engine, block1, block2, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	



	engine = Engine.create();
	world = engine.world;
	ball = new Ball(50,150,20)
 	roof = new Block(300,100,300,25);
	Body.setStatic(roof.body,true)
	rope = new Rope(ball.body,{x:300,y:100})
	ground = new Block(300,400,1000,25);
	Body.setStatic(ground.body,true);
	block1 = new Block(400,350,50,50);
	block2 = new Block(450,350,50,50);
	block3 = new Block(400,300,50,50);
	block4 = new Block(450,300,50,50);
	block5 = new Block(400,250,50,50);
	block6 = new Block(450,250,50,50);
	block7 = new Block(400,200,50,50);
	block8 = new Block(450,200,50,50);
	


	Engine.run(engine);
  
}


function draw() {
 Engine.update(engine);	
  rectMode(CENTER);
  background(0);
  ball.display();
  roof.display();
  rope.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
 


 
}
function mouseDragged(){
   
        Matter.Body.setPosition(ball.body,{x:mouseX,y:150})
   
    
}

