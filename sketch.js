var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 600);

	// fairyVoice.play();

	fairy = createSprite(130,425);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
	ellipseMode(CENTER)
  background(bgImg);
 star.x=starBody.position.x
 star.y=starBody.position.y



  left();
  right();
keyPressed(); 


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		star.x=fairy.x
		Matter.Body.setStatic(starBody,false);
		//star.visible=false;
	  }

	  if(starBody.position.y>330){
		Matter.Body.setStatic(starBody,true);
	}

}
function left() {
	if (keyDown("left")) {
		star.x=fairy.x; 
		 fairy.x=fairy.x-5;
   }
 }

 function right() {
	  if (keyDown("right")) {
		star.x=fairy.x;
		fairy.x=fairy.x+5;
   }
 }
