 var fixedrect,movingrect;


function setup() {
  createCanvas(1200,800);
  var fixedrect = createSprite(600,400,100,70);
   fixedrect.shapeColor="red";
   var movingrect = createSprite(400,200,100,70);
   movingrect.shapeColor="red";
}

function draw() {
  background("black"); 
  movingrect.x = mouse.X;
  movingrect.y = mouse.Y;

if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 
  && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 
 && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2 
 && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 ){
   fixedrect.shapeColor="blue";
   movingrect.shapeColor="blue"
 }
else {
  fixedrect.shapeColor="red";    
  movingrect.shapeColor="red";

}
  drawSprites();
}











