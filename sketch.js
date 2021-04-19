var car,wall;


var speed,weight;
function setup() {
  createCanvas(1600,400);

  speed = random(55,90);

  weight = random(400,1500)

car = createSprite(50,200,50,50);

car.velocityX = speed;

car.shapeColor = color(150)

wall = createSprite(800,300,50,150);

wall.shapeColor = color(100);

}

function draw() {
  background(255,255,255);  
if(wall.x-car.x < (car.width+wall.width)/2){

car.velocity = 0;
var deformation = 0.5 * weight * speed * speed/22500;

if(deformation>180){

car.shapeColor = color("yellow");
wall.shapeColor = color("white");

}

if(deformation<180 && deformation>100){

car.shapeColor = color("green");
wall.shapeColor = color("white");

}

if(deformation<100){

car.shapeColor = color("red");
wall.shapeColor = color("white");

}
}

 drawSprites();
}