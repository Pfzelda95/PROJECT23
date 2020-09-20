var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxsideleft,boxsideright,boxbase;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
    world = engine.world;
	




	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.8;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxsideleft = createSprite(450,620,10,100);
	boxsideleft.shapeColor = color("red");

	boxsideright = createSprite(350,620,10,100);
	boxsideright.shapeColor = color("red");

	boxbase = createSprite(400,665,100,10);
	boxbase.shapeColor = color("red");

	

	
	
	engine = Engine.create();
	world = engine.world;


	boxsideleft = Bodies.rectangle(450,620, 10, 100, {isStatic:true} );
	World.add(world, boxsideleft);


	boxsideright = Bodies.rectangle(350,620, 10, 100, {isStatic:true} );
	World.add(world, boxsideright);



	boxbase = Bodies.rectangle(400,675, 100, 10, {isStatic:true} );
 	World.add(world, boxbase);
	 





	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  console.log(packageBody);
 
  keyPressed();
  drawSprites();
	
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic( packageBody ,false);
  }
}



