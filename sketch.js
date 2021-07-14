const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,object,ball




function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create()
  world=engine.world
  var object_options ={
    isStatic:true
  }
  object = Bodies.rectangle(200,380,200,20,object_options)
  World.add(world,object)
  console.log(object)
  var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,30,ball_options)
  World.add(world,ball)
}

function draw() {
  background("black");
  Engine.update(engine)
  rectMode(CENTER ) 
  ellipseMode(CENTER) 
  rect(object.position.x,object.position.y,400,20)
  ellipse(ball.position.x,ball.position.y,30,30)
 // drawSprites();
}