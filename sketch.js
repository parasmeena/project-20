var car,wall;
var speed,weight

function setup() {
  createCanvas(1600,400);
 car =  createSprite(50, 200, 50, 50);
 wall = createSprite(1200,200,60,100);
 speed = random(50,90);
 weight = random(1200,200,60,100);
 car.velocityX = speed

}

function draw() {
  background("green");

  if(wall.X- car.X <(car.width+wall.width)/2){
    car.velocityX= 0;
    var deformation=  0.5 * weight * speed * speed/22509;
    if (deformation>180){
      car.shapeColour = "red";
    }
    if (deformation<180 && deformation>100){
      car.shapeColour = "black"
    }
    if (deformation<100){
      car.shapeColour = "green"
    }
  }

  drawSprites();
}
