var car, wall, speed, weight, deformation=0;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500, 200, 60,height/2);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  car.velocityX=speed;
  wall.collide(car);
}

function draw() {
  background(255,255,255);  
  deformationFunc();
  drawSprites();
}

function deformationFunc()
{
  if(car.x-wall.x<car.width/2+wall.width/2)
  {
     deformation=((weight*speed*speed)/45000);
  }
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
  if(deformation>100 && deformation<180)
  {
    car.shapeColor=color(230,230,0);
  }
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }
}