var bullet,wall;
var speed, weight,thickness;



function setup() {
  createCanvas(1600,400);
speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)

 bullet =  createSprite(50, 200, 30, 70);
 bullet.velocityX = speed;


 wall = createSprite(1200,200,thickness,height/2);

}

  

function draw() {
  background(0); 
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX = 0;

    var deformation = 0.5* weight * speed * speed/(thickness* thickness* thickness);
    
    if(deformation > 10)
    {
      wall.shapeColor = color(255,0,0);
    }

     if(deformation < 10)
     {
       wall.shapeColor = color(0,255,0);
     }

     console.log(deformation);


  }
  










  drawSprites();
}