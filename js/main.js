// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
// create an engine
var engine ;
var boxA =[];
var ground,groundB, groundC;

function setup(){
  // clear();
   createCanvas(screen.width,screen.height);
   engine = Engine.create();
   ground = Bodies.rectangle(0,height,width*2,100, { isStatic: true, restitution : 1 });
   groundB = new wall(0,0,10,screen.height*2);
   groundC = new wall(width,0,10,height*2);
   //boxA = new Box(random(100),0,10);
   // add things to the world
   World.add(engine.world,ground);
}

//this is test 
function mousePressed(){
   boxA.push(new Box(mouseX,mouseY,10));
}


function draw(){
    rectMode(CENTER);
    Engine.update(engine);
    stroke(255);
    strokeWeight(1);
    background(122,127,547);
    fill(100,40,50);
    rect(ground.position.x,ground.position.y,width*2,100);
    groundB.display();
    groundC.display();
    //boxA.show();
  for (var i = 0; i < boxA.length; i++) {
       boxA[i].show();
  }
}
