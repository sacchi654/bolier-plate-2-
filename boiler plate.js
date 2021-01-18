function setup() {
  createCanvas(800,400);
  mrect=createSprite(400, 200, 50, 50);
  mrect.shapeColor=("black");

  srect = createSprite(700,50,40,30);
  srect.shapeColor=("black ");

  crect=createSprite(600,50,40,30);
  creact.shapeColor=("black");

  wrect=createSprite(500,50,40,30);
  wrect.shapeColor=("black");

  drect=createSprite(400,50,40,30);
  drect.shapeColor=("black");

}

function draw() {
  background(255,255,255); 
  
  mrect.x=mouseX;
  mrect.y=mouseY;

  istouching();
  
  drawSprites();
}

function istouching(){
    if (mrect.x-srect.x<mrect.width/2+srect.width/2 &&
        srect.x-mrect.x<mrect.width/2+srect.width/2 &&
        mrect.y-srect.y<mrect.height/2+srect.height/2 &&
        srect.y-mrect.y<mrect.height/2+srect.height/2 
              ) {
                mrect.shapeColor=("blue");
                srect.shapeColor=("blue")
      
    } else {
      mrect.shapeColor=("black");
      srect.shapeColor=("black");
    
    }
}