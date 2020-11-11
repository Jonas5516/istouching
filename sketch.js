var mr,fr;
var gameo1, gameo2, gameo3, gameo4
function setup() {
  createCanvas(1200,800);
  fr = createSprite(200, 200, 50, 80);
  mr = createSprite(400,200,80,30)
  fr.shapeColor = "green"
  mr.shapeColor = "green"
  gameo1 = createSprite(100,100,50,50)
  gameo2 = createSprite(200,100,50,50)
  gameo3 = createSprite(300,100,50,50)
  gameo4 = createSprite(400,100,50,50)
  gameo1.shapeColor = "green"
  gameo2.shapeColor = "green"
  gameo3.shapeColor = "green"
  gameo4.shapeColor = "green"
}

function draw() {
  background(0);  
  mr.x = World.mouseX
  mr.y = World.mouseY
  //console.log("fr"+o2.width/2)
  //console.log("mr"+o1.width/2)
  //console.log("fr.x"+o2.x)
  //console.log("mr.x"+o1.x)
  

  if(isTouching(mr,gameo1)){
    mr.shapeColor = "red"
    gameo1.shapeColor = "red"
  }
  else{
  mr.shapeColor = "green"
  gameo1.shapeColor = "green"
  }
  drawSprites();
}