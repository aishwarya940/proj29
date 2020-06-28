const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, ground, box1, polygon, slingshot;




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(600,200,30,30)
  
  box2 = new Box(620,200,30,30)
box3 = new Box(640,200,30,30)
box4 = new Box(600,250,30,30)
box5 = new Box(620,250,30,30)
box6 = new Box(640,250,30,30)
box7 = new Box(600,300,30,30)
box8 =  new Box(620,300,30,30)
box9 = new Box(640,300,30,30)

//  createSprite(400, 200, 50, 50);
  ground = new Ground(600,height,1200,20)
 // ground2 = new Ground(600,300,10,100)
  
//Matter.Bodies.polygon(300, 300, 8, 7.5, [options])

polygon = Bodies.circle(100, 200, 50);
  World.add(world, polygon);

  slingshot = new Slingshot(this.polygon,{x:100, y:200});


}

function draw() {
  background(0);  
  Engine.update(engine);
ground.display();
//ground2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();

ellipse(this.polygon.position.x,this.polygon.position.y,50,50)
  slingshot.display();

 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}