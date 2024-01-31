var box ;
function setup() 
{
  createCanvas(400, 400);
  box=new Box (25,50,80,80,4,-1);
}

function draw() 
{
  background(220);
box.show();
box.move_y();
}

