function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245, 245, 240);
  noStroke();
  //blue
  fill(0, 0, 255);
  rect(0, 0, 270, 270);
  
  //red
  fill(255, 0, 0);
  rect(270, 270, 150, 150);
  
  //yellow
  fill(240, 240, 0);
  //top right
  rect(270, 0, 150, 180);
  //bottom left
  rect(0, 330, 80, 80);

  //stroke
  stroke(0);
  strokeCap(SQUARE);
   strokeWeight(12);
  line(270,0,270,400);
  line(0,270,400,270);
  
  strokeWeight(20);
  line(80,270,80,400);
  
  strokeWeight(25);
  line(270,180,400,180);
  
  strokeWeight(17);
  line(0,330,80,330);
  
}
