// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine ;

// create two boxes and a ground
var boxA=[] ;
//var boxB = Bodies.rectangle(10, 50, 80, 80);
var ground,groundB;

// add all of the bodies to the world

// run the engine
//Engine.run(engine);
//console.log(boxA);
// run the renderer



function setup(){
    //noLoop();
   clear();
   createCanvas(screen.width,screen.height);
   engine = Engine.create();
   ground = Bodies.rectangle(0,screen.height,width*2,100, { isStatic: true });
 //  groundB = Bodies.rectangle(0,200,360,20,{isStatic : true, angle : 0.4})
   //boxA = new Box(200, 0, 20, 20);
   World.add(engine.world,ground);
   //Engine.run(engine);
   
}
function mousePressed(){
    boxA.push(new Box(mouseX,mouseY,random(10),random(10)));
}
function draw(){
    rectMode(CORNER);
    Engine.update(engine);
    stroke(255);
    strokeWeight(1);
    background(122,127,547);
    fill(100,40,50);
    rect(0,screen.height-45,360,20);
   for (var i = 0; i < boxA.length; i++) {
       boxA[i].show();
   }
}
