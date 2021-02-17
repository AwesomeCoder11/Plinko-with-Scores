const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var patrticles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var particle;
var turn = 0;
var gameState = "start";
var count = 0;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
    world = engine.world;

    ground = new Ground (width/2, height, 480, 20)
   
    for (var k = 0; k <=width; k = k + 80){

      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      
      }
      for (var j = 40; j <=width; j=j+50){

        plinkos.push(new Plinkos(j,75));
        
        }
        
        for (var j = 15; j <=width-10; j=j+50)
        {
        
          plinkos.push(new Plinkos(j,175));
        
        } 
        for (var j = 40; j <=width; j=j+50){

        plinkos.push(new Plinkos(j,275));
        
        }
        
        for (var j = 15; j <=width-10; j=j+50)
        {
        
          plinkos.push(new Plinkos(j,375));
        
        } 

 
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();

textSize(20);

  text("500", 25, 500);

text("100", 100, 500);

text("100", 175, 500);

text("100", 250, 500);

text("200", 350, 500);

text("200", 425, 500);

text("score =" + score,100,100);

if(particle!=null)
{

particle.display();

    if (particle.body.position.y > 760)
{
  if(particle.body.position.x < 300)
{
    
score=score+500;
particle=null;
if(count>=5) gameState = "end";


}
}
}


if (count>=5){
textSize(70);
text("Game Over", 100,300)


}

  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
    
    }
    for (var j = 0; j < plinkos.length; j++) {

      plinkos[j].display();
      
      } 
}

function mousePressed()
{

if (gameState!=="end")
{

count++;
particle=new Particle(mouseX, 10, 10, 10);

}

}