var wall,thickness;
var bullet,speed,weight;







function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
weight=random(30,52);

  bullet=createSprite(400, 200, 20, 20);
  bullet.velocityX=speed;
  bullet.shapeColor="yellow"
  wall=createSprite(1200,200,thickness,height/2);
  //wall.shapeColor="black";
}

function draw() {
  background("pink"); 
  
 if(hascollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage>10){
     wall.shapeColor=color("green");
   }
   if(damage<10){
     wall.shapeColor=color("red")
   }
 }

  drawSprites();
}
function hascollided(object1,object2){
  bulletRightEdge=object1.x+object1.width;
  wallLeftEdge=object2.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
return false;
}