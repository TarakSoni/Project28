const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1300, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(150,390)
	boy.addImage(boyImage)
	boy.scale = 0.15

	mango1 = new mango(990,200,35)
	mango2 = new mango(990,80,30)
	mango3 = new mango(885,160,30)
	mango4 = new mango(1100,50,30)
	mango5 = new mango(1130,190,35)

	stone = new Stone(200,200,40)

	ground = new Ground(650,480,1300,20)

	tree = new Tree(1500,200,500,500)

	slingshot = new SlingShot(stone.body,{x:80,y:300});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
	

  drawSprites();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display(); 
  ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

	function mouseReleased(){
    stone.fly();
}

