function setup() {
  createCanvas(400,400);
  background("black")
  var box = createSprite(100,100,20,20)

}

function draw() 
{
  if(keyIsDown(DOWN_ARROW)){
    background("red")
  }
  if(keyIsDown(UP_ARROW)){
    background("yellow")
  }
    if(keyIsDown(RIGHT_ARROW)){
      background("blue")
    }
    if(keyIsDown(LEFT_ARROW)){
      background("green")
    }
drawSprites()
}
